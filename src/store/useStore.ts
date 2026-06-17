"use client";

// ----------------------------------------------------------------------------
// Central client store (Zustand + localStorage persistence).
//
// This is the single source of truth in local-first mode. The shape mirrors the
// Supabase tables so a future sync layer can map it 1:1 (see lib/supabase). All
// mutations go through actions that keep XP, streaks, daily progress and the
// SRS records consistent.
// ----------------------------------------------------------------------------

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  CefrLevel,
  DailyProgress,
  LanguageCode,
  ReviewResult,
  SessionType,
  StudySession,
  UserProfile,
  UserWord,
  VocabularyWord,
} from "@/types";
import { gradeAnswer } from "@/lib/srs";
import { nowIso, todayKey, dayDiff } from "@/lib/date";
import { levelFromXp } from "@/lib/xp";
import { buildAchievementContext } from "@/store/selectors";
import { newlyUnlocked } from "@/lib/achievements";
import { uid } from "@/lib/utils";

export interface NewProfileInput {
  displayName: string;
  languageCode?: LanguageCode;
  currentLevel: CefrLevel;
  targetLevel: CefrLevel;
  dailyGoal: number;
}

export interface SessionSummaryInput {
  type: SessionType;
  correct: number;
  incorrect: number;
  xpEarned: number;
  wordsReviewed: number;
  exerciseType?: StudySession["exerciseType"];
}

interface PersistedState {
  profile: UserProfile | null;
  userWords: Record<string, UserWord>;
  sessions: StudySession[];
  dailyProgress: Record<string, DailyProgress>;
  xp: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string | null;
  achievementsUnlocked: Record<string, string>;
  perfectSessions: number;
}

interface StoreActions {
  /** SSR-safe hydration flag, flipped once localStorage is read. */
  hydrated: boolean;
  setHydrated: (v: boolean) => void;

  initProfile: (input: NewProfileInput) => void;
  updateProfile: (patch: Partial<Omit<UserProfile, "id" | "createdAt">>) => void;
  resetProgress: () => void;
  /** Wipe everything including the profile — returns the user to onboarding. */
  deleteAccount: () => void;

  /** Grade one answer; persists SRS state, XP and today's counters. */
  recordAnswer: (word: VocabularyWord, correct: boolean) => ReviewResult;

  /** Finalise a session: log it, advance the streak, unlock achievements. */
  finalizeSession: (input: SessionSummaryInput) => { newlyUnlocked: string[] };
}

export type FluentBankStore = PersistedState & StoreActions;

const EMPTY: PersistedState = {
  profile: null,
  userWords: {},
  sessions: [],
  dailyProgress: {},
  xp: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: null,
  achievementsUnlocked: {},
  perfectSessions: 0,
};

/** Mutably bump today's DailyProgress record (returns a new map). */
function bumpDaily(
  map: Record<string, DailyProgress>,
  patch: Partial<Omit<DailyProgress, "date">>,
): Record<string, DailyProgress> {
  const key = todayKey();
  const prev: DailyProgress =
    map[key] ?? {
      date: key,
      wordsLearned: 0,
      wordsReviewed: 0,
      correct: 0,
      incorrect: 0,
      xpEarned: 0,
    };
  return {
    ...map,
    [key]: {
      ...prev,
      wordsLearned: prev.wordsLearned + (patch.wordsLearned ?? 0),
      wordsReviewed: prev.wordsReviewed + (patch.wordsReviewed ?? 0),
      correct: prev.correct + (patch.correct ?? 0),
      incorrect: prev.incorrect + (patch.incorrect ?? 0),
      xpEarned: prev.xpEarned + (patch.xpEarned ?? 0),
    },
  };
}

/** Returns the next streak values given today's first activity. */
function advanceStreak(state: PersistedState): {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
} {
  const today = todayKey();
  if (state.lastActiveDate === today) {
    return {
      currentStreak: state.currentStreak,
      longestStreak: state.longestStreak,
      lastActiveDate: today,
    };
  }
  const gap = state.lastActiveDate ? dayDiff(today, state.lastActiveDate) : Infinity;
  const currentStreak = gap === 1 ? state.currentStreak + 1 : 1;
  return {
    currentStreak,
    longestStreak: Math.max(state.longestStreak, currentStreak),
    lastActiveDate: today,
  };
}

export const useStore = create<FluentBankStore>()(
  persist(
    (set, get) => ({
      ...EMPTY,
      hydrated: false,
      setHydrated: (v) => set({ hydrated: v }),

      initProfile: (input) => {
        const profile: UserProfile = {
          id: uid("user"),
          displayName: input.displayName.trim() || "Investor",
          languageCode: input.languageCode ?? "es",
          currentLevel: input.currentLevel,
          targetLevel: input.targetLevel,
          dailyGoal: input.dailyGoal,
          createdAt: nowIso(),
        };
        // Fresh start: a new profile resets all learning progress.
        set({ ...EMPTY, profile });
      },

      updateProfile: (patch) => {
        const profile = get().profile;
        if (!profile) return;
        set({ profile: { ...profile, ...patch } });
      },

      resetProgress: () => {
        const profile = get().profile;
        set({ ...EMPTY, profile });
      },

      deleteAccount: () => set({ ...EMPTY, profile: null }),

      recordAnswer: (word, correct) => {
        const state = get();
        const prev = state.userWords[word.id];
        const result = gradeAnswer(word, correct, prev);
        const streak = advanceStreak(state);

        set({
          userWords: { ...state.userWords, [word.id]: result.userWord },
          xp: state.xp + result.xpAwarded,
          dailyProgress: bumpDaily(state.dailyProgress, {
            correct: correct ? 1 : 0,
            incorrect: correct ? 0 : 1,
            wordsLearned: result.newlyBanked ? 1 : 0,
            wordsReviewed: 1,
            xpEarned: result.xpAwarded,
          }),
          ...streak,
        });
        return result;
      },

      finalizeSession: (input) => {
        const state = get();
        const total = input.correct + input.incorrect;
        const perfect = total > 0 && input.incorrect === 0;

        const session: StudySession = {
          id: uid("sess"),
          type: input.type,
          completedAt: nowIso(),
          wordsReviewed: input.wordsReviewed,
          correct: input.correct,
          incorrect: input.incorrect,
          xpEarned: input.xpEarned,
          exerciseType: input.exerciseType,
        };

        const perfectSessions =
          perfect && (input.type === "discovery" || input.type === "review")
            ? state.perfectSessions + 1
            : state.perfectSessions;

        const nextState: PersistedState = {
          ...state,
          sessions: [session, ...state.sessions].slice(0, 200),
          perfectSessions,
        };

        // Recompute achievement unlocks against the post-session snapshot.
        const ctx = buildAchievementContext(nextState);
        const freshlyUnlocked = newlyUnlocked(ctx, state.achievementsUnlocked);
        const stamp = nowIso();
        const achievementsUnlocked = { ...state.achievementsUnlocked };
        for (const id of freshlyUnlocked) achievementsUnlocked[id] = stamp;

        set({
          sessions: nextState.sessions,
          perfectSessions,
          achievementsUnlocked,
        });

        return { newlyUnlocked: freshlyUnlocked };
      },
    }),
    {
      name: "fluentbank-store-v1",
      version: 1,
      // Manual rehydration (triggered client-side in <StoreHydrator/>) so the
      // first client render matches the server's, avoiding hydration mismatch.
      skipHydration: true,
      partialize: ({ hydrated, setHydrated, initProfile, updateProfile, resetProgress, deleteAccount, recordAnswer, finalizeSession, ...rest }) =>
        rest,
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);

/** Convenience: current level info derived from stored XP. */
export function useLevelInfo() {
  const xp = useStore((s) => s.xp);
  return levelFromXp(xp);
}
