// Pure derivation layer over store state. Kept free of any `useStore` import so
// it can be reused by the store itself (achievement checks) and by components
// via `useMemo`, with zero circular-dependency risk.

import type {
  CefrLevel,
  DailyProgress,
  PortfolioStats,
  StudySession,
  UserProfile,
  UserWord,
  VocabularyWord,
} from "@/types";
import { CEFR_LEVELS } from "@/types";
import { VOCABULARY, VOCAB_BY_ID, LEVEL_TOTALS } from "@/data";
import { levelIndex } from "@/lib/cefr";
import { reviewPriority, wordAccuracy } from "@/lib/srs";
import { isDue, lastNDays } from "@/lib/date";
import { shuffle } from "@/lib/utils";
import type { AchievementContext } from "@/lib/achievements";

/** Minimal slice the selectors need — a structural subset of the store. */
export interface StoreSlice {
  profile: UserProfile | null;
  userWords: Record<string, UserWord>;
  sessions: StudySession[];
  dailyProgress: Record<string, DailyProgress>;
  xp: number;
  currentStreak: number;
  longestStreak: number;
  perfectSessions: number;
}

function joinWord(uw: UserWord): VocabularyWord | undefined {
  return VOCAB_BY_ID.get(uw.wordId);
}

/** All words that have entered the portfolio (answered correctly ≥ once). */
export function bankedWords(userWords: Record<string, UserWord>): UserWord[] {
  return Object.values(userWords).filter((u) => u.banked);
}

/** The inclusive band of levels the user is actively studying. */
export function activeLevels(profile: UserProfile | null): CefrLevel[] {
  if (!profile) return ["B1"];
  const lo = Math.min(levelIndex(profile.currentLevel), levelIndex(profile.targetLevel));
  const hi = Math.max(levelIndex(profile.currentLevel), levelIndex(profile.targetLevel));
  return CEFR_LEVELS.filter((l) => {
    const i = levelIndex(l);
    return i >= lo && i <= hi;
  });
}

export function getPortfolioStats(userWords: Record<string, UserWord>): PortfolioStats {
  const byLevel = Object.fromEntries(
    CEFR_LEVELS.map((l) => [l, { learned: 0, mastered: 0, total: LEVEL_TOTALS[l] }]),
  ) as PortfolioStats["byLevel"];
  const byCategory: PortfolioStats["byCategory"] = {};

  let mastered = 0;
  let known = 0;
  let learning = 0;

  for (const u of bankedWords(userWords)) {
    const w = joinWord(u);
    if (!w) continue;
    byLevel[w.cefrLevel].learned += 1;
    if (u.status === "mastered") byLevel[w.cefrLevel].mastered += 1;
    if (u.status === "mastered") mastered += 1;
    else if (u.status === "known") known += 1;
    else learning += 1;

    const cat = (byCategory[w.category] ??= { learned: 0, mastered: 0 });
    cat.learned += 1;
    if (u.status === "mastered") cat.mastered += 1;
  }

  let correct = 0;
  let answered = 0;
  for (const u of Object.values(userWords)) {
    correct += u.timesCorrect;
    answered += u.timesCorrect + u.timesIncorrect;
  }

  return {
    totalLearned: bankedWords(userWords).length,
    totalMastered: mastered,
    totalKnown: known,
    totalLearning: learning,
    accuracy: answered === 0 ? 0 : (correct / answered) * 100,
    byLevel,
    byCategory,
  };
}

/**
 * Build a Daily Discovery queue: any "in-flight" misses that are due (so wrong
 * answers keep coming back), topped up with fresh words from the active band,
 * prioritising the target level.
 */
export function getDiscoverySession(slice: StoreSlice, count: number): VocabularyWord[] {
  const { profile, userWords } = slice;
  if (!profile) return [];
  const levels = activeLevels(profile);
  const levelSet = new Set(levels);

  const inFlight = Object.values(userWords)
    .filter((u) => !u.banked && isDue(u.nextReview))
    .map(joinWord)
    .filter((w): w is VocabularyWord => Boolean(w) && levelSet.has(w!.cefrLevel))
    .slice(0, Math.ceil(count / 2));

  const seen = new Set(Object.keys(userWords));
  const fresh = shuffle(
    VOCABULARY.filter((w) => levelSet.has(w.cefrLevel) && !seen.has(w.id)),
  ).sort((a, b) => targetWeight(a, profile) - targetWeight(b, profile));

  const result: VocabularyWord[] = [...inFlight];
  const used = new Set(result.map((w) => w.id));
  for (const w of fresh) {
    if (result.length >= count) break;
    if (!used.has(w.id)) {
      result.push(w);
      used.add(w.id);
    }
  }
  return result.slice(0, count);
}

/** 0 = target level (sorted first), larger = further below target. */
function targetWeight(w: VocabularyWord, profile: UserProfile): number {
  const ti = levelIndex(profile.targetLevel);
  const wi = levelIndex(w.cefrLevel);
  return wi === ti ? 0 : Math.abs(ti - wi) + 1;
}

/** Words currently due for review, highest-priority first. */
export function getReviewSession(
  userWords: Record<string, UserWord>,
  limit = 20,
  now = new Date(),
): VocabularyWord[] {
  return Object.values(userWords)
    .filter((u) => isDue(u.nextReview, now) && (u.banked || u.timesIncorrect > 0))
    .sort((a, b) => reviewPriority(b, now) - reviewPriority(a, now))
    .map(joinWord)
    .filter((w): w is VocabularyWord => Boolean(w))
    .slice(0, limit);
}

export function dueCount(userWords: Record<string, UserWord>, now = new Date()): number {
  return Object.values(userWords).filter(
    (u) => u.banked && isDue(u.nextReview, now),
  ).length;
}

/** Banked words eligible for Context Practice. */
export function getPracticePool(userWords: Record<string, UserWord>): VocabularyWord[] {
  return bankedWords(userWords)
    .map(joinWord)
    .filter((w): w is VocabularyWord => Boolean(w));
}

export function buildAchievementContext(slice: StoreSlice): AchievementContext {
  const stats = getPortfolioStats(slice.userWords);
  let correct = 0;
  let answered = 0;
  for (const u of Object.values(slice.userWords)) {
    correct += u.timesCorrect;
    answered += u.timesCorrect + u.timesIncorrect;
  }
  return {
    totalLearned: stats.totalLearned,
    totalMastered: stats.totalMastered,
    learnedByLevel: {
      B1: stats.byLevel.B1.learned,
      B2: stats.byLevel.B2.learned,
      C1: stats.byLevel.C1.learned,
      C2: stats.byLevel.C2.learned,
    },
    longestStreak: slice.longestStreak,
    accuracy: answered === 0 ? 0 : (correct / answered) * 100,
    totalAnswers: answered,
    practiceSessions: slice.sessions.filter((s) => s.type === "practice").length,
    categoriesCovered: Object.keys(stats.byCategory).length,
    perfectSessions: slice.perfectSessions,
    xp: slice.xp,
  };
}

// --- Analytics ---------------------------------------------------------------

export interface DailyPoint {
  date: string;
  /** Short label e.g. "Mon" or "6/14". */
  label: string;
  learned: number;
  reviewed: number;
  xp: number;
  accuracy: number;
}

export function getDailySeries(
  dailyProgress: Record<string, DailyProgress>,
  days = 14,
): DailyPoint[] {
  return lastNDays(days).map((date) => {
    const d = dailyProgress[date];
    const answered = d ? d.correct + d.incorrect : 0;
    const dt = new Date(`${date}T00:00:00`);
    return {
      date,
      label: dt.toLocaleDateString("en-US", { weekday: "short" }),
      learned: d?.wordsLearned ?? 0,
      reviewed: d?.wordsReviewed ?? 0,
      xp: d?.xpEarned ?? 0,
      accuracy: answered === 0 ? 0 : Math.round(((d?.correct ?? 0) / answered) * 100),
    };
  });
}

export interface RangeTotals {
  learned: number;
  reviewed: number;
  xp: number;
  accuracy: number;
}

export function getRangeTotals(
  dailyProgress: Record<string, DailyProgress>,
  days: number,
): RangeTotals {
  const keys = new Set(lastNDays(days));
  let learned = 0;
  let reviewed = 0;
  let xp = 0;
  let correct = 0;
  let answered = 0;
  for (const d of Object.values(dailyProgress)) {
    if (!keys.has(d.date)) continue;
    learned += d.wordsLearned;
    reviewed += d.wordsReviewed;
    xp += d.xpEarned;
    correct += d.correct;
    answered += d.correct + d.incorrect;
  }
  return { learned, reviewed, xp, accuracy: answered === 0 ? 0 : (correct / answered) * 100 };
}

export interface CategoryDifficulty {
  category: string;
  attempts: number;
  accuracy: number;
}

/** Categories ranked by how hard they've been (lowest accuracy first). */
export function getHardestCategories(
  userWords: Record<string, UserWord>,
  minAttempts = 3,
): CategoryDifficulty[] {
  const agg: Record<string, { correct: number; total: number }> = {};
  for (const u of Object.values(userWords)) {
    const w = joinWord(u);
    if (!w) continue;
    const a = (agg[w.category] ??= { correct: 0, total: 0 });
    a.correct += u.timesCorrect;
    a.total += u.timesCorrect + u.timesIncorrect;
  }
  return Object.entries(agg)
    .filter(([, a]) => a.total >= minAttempts)
    .map(([category, a]) => ({
      category,
      attempts: a.total,
      accuracy: a.total === 0 ? 0 : (a.correct / a.total) * 100,
    }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

export interface HardWord {
  word: VocabularyWord;
  misses: number;
  accuracy: number;
  masteryScore: number;
}

/** Words the user trips on most (misses first, then lowest accuracy). */
export function getHardestWords(
  userWords: Record<string, UserWord>,
  limit = 6,
): HardWord[] {
  return Object.values(userWords)
    .filter((u) => u.timesIncorrect > 0)
    .map((u) => {
      const w = joinWord(u);
      return w
        ? { word: w, misses: u.timesIncorrect, accuracy: wordAccuracy(u), masteryScore: u.masteryScore }
        : null;
    })
    .filter((x): x is HardWord => x !== null)
    .sort((a, b) => b.misses - a.misses || a.accuracy - b.accuracy)
    .slice(0, limit);
}

/** Review success rate across logged review sessions, 0–100. */
export function getReviewSuccessRate(sessions: StudySession[]): number {
  let correct = 0;
  let total = 0;
  for (const s of sessions) {
    if (s.type !== "review") continue;
    correct += s.correct;
    total += s.correct + s.incorrect;
  }
  return total === 0 ? 0 : (correct / total) * 100;
}
