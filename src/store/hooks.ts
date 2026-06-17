"use client";

import { useMemo } from "react";
import { useStore } from "@/store/useStore";
import { getPortfolioStats, dueCount, buildAchievementContext } from "@/store/selectors";
import { computeAchievements } from "@/lib/achievements";
import { todayKey } from "@/lib/date";

export function usePortfolioStats() {
  const userWords = useStore((s) => s.userWords);
  return useMemo(() => getPortfolioStats(userWords), [userWords]);
}

export function useDueCount() {
  const userWords = useStore((s) => s.userWords);
  // Recomputed on word changes; due-ness also shifts with wall-clock time, but
  // for an MVP a per-render snapshot at mount/update is sufficient.
  return useMemo(() => dueCount(userWords), [userWords]);
}

/** Words learned today vs the daily goal. */
export function useTodayProgress() {
  const dailyProgress = useStore((s) => s.dailyProgress);
  const goal = useStore((s) => s.profile?.dailyGoal ?? 7);
  const learnedToday = dailyProgress[todayKey()]?.wordsLearned ?? 0;
  return { learnedToday, goal, complete: learnedToday >= goal };
}

export function useAchievementStates() {
  // Select primitives individually (each Object.is-stable) and memoise the
  // derived array — avoids re-renders from returning a fresh object selector.
  const profile = useStore((s) => s.profile);
  const userWords = useStore((s) => s.userWords);
  const sessions = useStore((s) => s.sessions);
  const dailyProgress = useStore((s) => s.dailyProgress);
  const xp = useStore((s) => s.xp);
  const currentStreak = useStore((s) => s.currentStreak);
  const longestStreak = useStore((s) => s.longestStreak);
  const perfectSessions = useStore((s) => s.perfectSessions);
  const unlocked = useStore((s) => s.achievementsUnlocked);

  return useMemo(
    () =>
      computeAchievements(
        buildAchievementContext({
          profile,
          userWords,
          sessions,
          dailyProgress,
          xp,
          currentStreak,
          longestStreak,
          perfectSessions,
        }),
        unlocked,
      ),
    [profile, userWords, sessions, dailyProgress, xp, currentStreak, longestStreak, perfectSessions, unlocked],
  );
}
