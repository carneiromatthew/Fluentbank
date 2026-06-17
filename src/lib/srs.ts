// ----------------------------------------------------------------------------
// Spaced Repetition System (SRS)
//
// A mastery-score driven Leitner variant. Each word carries a continuous
// 0–100 `masteryScore`; the four mastery boxes (and their review intervals)
// are *derived* from it. This keeps the model expandable — swap the curve or
// add boxes without touching call sites — while honouring the product spec:
//
//   New      → +1 day
//   Learning → +3 days
//   Known    → +7 days
//   Mastered → +21 days
//
// Lower mastery ⇒ shorter interval ⇒ surfaces more often. Higher mastery ⇒
// longer interval ⇒ surfaces rarely.
// ----------------------------------------------------------------------------

import type { MasteryStatus, ReviewResult, UserWord, VocabularyWord } from "@/types";
import { CEFR_META } from "@/lib/cefr";
import { addDays, nowIso } from "@/lib/date";
import { clamp } from "@/lib/utils";

export const REVIEW_INTERVAL_DAYS: Record<MasteryStatus, number> = {
  new: 1,
  learning: 3,
  known: 7,
  mastered: 21,
};

/** Score thresholds for each mastery box (inclusive lower bound). */
const STATUS_THRESHOLDS: { status: MasteryStatus; min: number }[] = [
  { status: "mastered", min: 85 },
  { status: "known", min: 55 },
  { status: "learning", min: 25 },
  { status: "new", min: 0 },
];

export function statusFromScore(score: number): MasteryStatus {
  return STATUS_THRESHOLDS.find((t) => score >= t.min)!.status;
}

/** Diminishing returns: easy early gains, harder to push a word to "mastered". */
function correctDelta(score: number): number {
  if (score < 25) return 30;
  if (score < 55) return 18;
  if (score < 85) return 12;
  return 7;
}

const INCORRECT_DELTA = 20;

/** XP for a single graded answer, weighted by CEFR difficulty. */
export function answerXp(
  word: VocabularyWord,
  correct: boolean,
  opts: { newlyBanked: boolean; promoted: boolean; streak: number },
): number {
  if (!correct) return 0;
  const base = 10 * CEFR_META[word.cefrLevel].xpWeight;
  const bankBonus = opts.newlyBanked ? 5 : 0;
  const promoBonus = opts.promoted ? 3 : 0;
  const streakBonus = Math.min(5, Math.max(0, opts.streak - 2));
  return Math.round(base + bankBonus + promoBonus + streakBonus);
}

/** A pristine SRS record for a word the user has never seen. */
export function freshUserWord(wordId: string, now = nowIso()): UserWord {
  return {
    wordId,
    status: "new",
    masteryScore: 0,
    timesCorrect: 0,
    timesIncorrect: 0,
    streak: 0,
    addedAt: now,
    dateLearned: null,
    lastReviewed: null,
    nextReview: now,
    banked: false,
  };
}

/**
 * Grade one answer and return the next SRS state. Pure: callers persist the
 * returned `userWord`. Pass the existing record, or omit for a first encounter.
 */
export function gradeAnswer(
  word: VocabularyWord,
  correct: boolean,
  prev?: UserWord,
  at: Date = new Date(),
): ReviewResult {
  const nowStr = at.toISOString();
  const base = prev ?? freshUserWord(word.id, nowStr);
  const previousStatus = base.status;

  const nextScore = clamp(
    correct
      ? base.masteryScore + correctDelta(base.masteryScore)
      : base.masteryScore - INCORRECT_DELTA,
    0,
    100,
  );
  const nextStatus = statusFromScore(nextScore);

  const timesCorrect = base.timesCorrect + (correct ? 1 : 0);
  const timesIncorrect = base.timesIncorrect + (correct ? 0 : 1);
  const streak = correct ? base.streak + 1 : 0;

  const newlyBanked = correct && !base.banked;
  const banked = base.banked || correct;
  const promoted = statusRank(nextStatus) > statusRank(previousStatus);

  // Correct → schedule by new box. Incorrect → resurface tomorrow (and the
  // session itself re-queues misses immediately, so they keep appearing).
  const nextReview = correct
    ? addDays(nowStr, REVIEW_INTERVAL_DAYS[nextStatus])
    : addDays(nowStr, REVIEW_INTERVAL_DAYS.new);

  const xpAwarded = answerXp(word, correct, { newlyBanked, promoted, streak });

  const userWord: UserWord = {
    ...base,
    status: nextStatus,
    masteryScore: nextScore,
    timesCorrect,
    timesIncorrect,
    streak,
    banked,
    dateLearned: base.dateLearned ?? (newlyBanked ? nowStr : null),
    lastReviewed: nowStr,
    nextReview,
  };

  return { userWord, previousStatus, promoted, newlyBanked, xpAwarded };
}

function statusRank(status: MasteryStatus): number {
  return ["new", "learning", "known", "mastered"].indexOf(status);
}

/** Per-word accuracy 0–100 (0 when never answered). */
export function wordAccuracy(uw: Pick<UserWord, "timesCorrect" | "timesIncorrect">): number {
  const total = uw.timesCorrect + uw.timesIncorrect;
  return total === 0 ? 0 : (uw.timesCorrect / total) * 100;
}

/**
 * Review-priority weight: lower mastery & more-overdue words score higher, so
 * sorting desc yields the most valuable items to review first.
 */
export function reviewPriority(uw: UserWord, now: Date = new Date()): number {
  const overdueDays = uw.nextReview
    ? Math.max(0, (now.getTime() - new Date(uw.nextReview).getTime()) / 86_400_000)
    : 1;
  return (100 - uw.masteryScore) + overdueDays * 6;
}
