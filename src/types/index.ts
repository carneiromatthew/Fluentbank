// ----------------------------------------------------------------------------
// FluentBank — core domain types
//
// These mirror the database schema in `supabase/schema.sql`. The app is
// language-agnostic by design: a `VocabularyWord` carries a `languageCode`, so
// adding French/German later is purely a data + config concern, not a rewrite.
// ----------------------------------------------------------------------------

/** CEFR proficiency levels supported by FluentBank. */
export type CefrLevel = "B1" | "B2" | "C1" | "C2";

export const CEFR_LEVELS: readonly CefrLevel[] = ["B1", "B2", "C1", "C2"] as const;

/**
 * Canonical category set. Declared as a const tuple so vocabulary data is
 * type-checked against it, while remaining trivial to extend (add a string,
 * add metadata in `lib/categories.ts`).
 */
export const CATEGORIES = [
  "Travel",
  "Business",
  "Education",
  "Politics",
  "Culture",
  "Daily Life",
  "Technology",
  "Academic",
  "Health",
  "Finance",
  "Environment",
  "Society",
  "Emotions",
  "Law",
  "Science",
  "Arts",
] as const;

export type Category = (typeof CATEGORIES)[number];

/** ISO-639-1 style language code. Spanish ships first. */
export type LanguageCode = "es";

/** A single vocabulary entry — the immutable "security" in a user's portfolio. */
export interface VocabularyWord {
  id: string;
  languageCode: LanguageCode;
  word: string;
  /** English gloss / definition. */
  definition: string;
  exampleSentence: string;
  cefrLevel: CefrLevel;
  category: Category;
  synonyms: string[];
}

/** The four mastery boxes, in ascending order of retention strength. */
export type MasteryStatus = "new" | "learning" | "known" | "mastered";

export const MASTERY_STATUSES: readonly MasteryStatus[] = [
  "new",
  "learning",
  "known",
  "mastered",
] as const;

/**
 * A user's relationship with one word — the per-word SRS record. Combines the
 * `user_vocabulary` and `review_queue` schema tables into one client object.
 */
export interface UserWord {
  wordId: string;
  /** Current mastery box; drives review cadence. */
  status: MasteryStatus;
  /** 0–100 continuous mastery; `status` is derived from thresholds on this. */
  masteryScore: number;
  timesCorrect: number;
  timesIncorrect: number;
  /** Consecutive correct answers; resets to 0 on a miss. */
  streak: number;
  /** ISO timestamp the word was first encountered. */
  addedAt: string;
  /** ISO timestamp of the first correct answer — when it was "deposited". */
  dateLearned: string | null;
  lastReviewed: string | null;
  /** ISO date the word next becomes due for review. */
  nextReview: string | null;
  /**
   * True once answered correctly at least once → appears in the Portfolio.
   * False words are "in flight" (missed in Discovery, awaiting a correct first
   * answer) and surface only in the review/discovery flow.
   */
  banked: boolean;
}

/** Outcome of grading a single answer, returned by the SRS engine. */
export interface ReviewResult {
  userWord: UserWord;
  previousStatus: MasteryStatus;
  /** True when this answer promoted the word into a higher mastery box. */
  promoted: boolean;
  /** True when this is the first-ever correct answer (a fresh "deposit"). */
  newlyBanked: boolean;
  xpAwarded: number;
}

/** What kind of activity produced a session, for analytics. */
export type SessionType = "discovery" | "review" | "practice";

export type PracticeExerciseType =
  | "sentence-completion"
  | "meaning-recognition"
  | "context-selection";

/** A completed study session — one row in `practice_sessions`. */
export interface StudySession {
  id: string;
  type: SessionType;
  /** ISO timestamp the session finished. */
  completedAt: string;
  wordsReviewed: number;
  correct: number;
  incorrect: number;
  xpEarned: number;
  /** Present for practice sessions only. */
  exerciseType?: PracticeExerciseType;
}

/** Aggregated per-day activity — one row in `daily_progress`. */
export interface DailyProgress {
  /** YYYY-MM-DD (local). */
  date: string;
  wordsLearned: number;
  wordsReviewed: number;
  correct: number;
  incorrect: number;
  xpEarned: number;
}

/** A multiple-choice question used in the Discovery flow. */
export interface MultipleChoiceQuestion {
  word: VocabularyWord;
  /** Definition strings; exactly one is correct. */
  options: string[];
  correctIndex: number;
}

/** Achievement definition + computed unlock/progress state. */
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  tier: "bronze" | "silver" | "gold" | "platinum";
  /** Target count for the progress bar (e.g. 100 words). */
  target: number;
}

export interface AchievementState extends Achievement {
  unlocked: boolean;
  progress: number;
  unlockedAt: string | null;
}

/** Onboarding selections + identity. */
export interface UserProfile {
  id: string;
  displayName: string;
  languageCode: LanguageCode;
  currentLevel: CefrLevel;
  targetLevel: CefrLevel;
  /** New words to introduce per Discovery session (5–10). */
  dailyGoal: number;
  createdAt: string;
}

/** Roll-up stats consumed by the dashboard & analytics. */
export interface PortfolioStats {
  totalLearned: number;
  totalMastered: number;
  totalKnown: number;
  totalLearning: number;
  /** Overall lifetime accuracy 0–100. */
  accuracy: number;
  byLevel: Record<CefrLevel, { learned: number; mastered: number; total: number }>;
  byCategory: Record<string, { learned: number; mastered: number }>;
}
