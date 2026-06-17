import type { Achievement, AchievementState, CefrLevel } from "@/types";

/**
 * Inputs an achievement can be measured against. Computed once from store
 * state (see `store/selectors.ts`) and passed to every achievement's `measure`.
 */
export interface AchievementContext {
  totalLearned: number;
  totalMastered: number;
  learnedByLevel: Record<CefrLevel, number>;
  longestStreak: number;
  /** Lifetime accuracy 0–100. */
  accuracy: number;
  totalAnswers: number;
  practiceSessions: number;
  /** Distinct categories with at least one banked word. */
  categoriesCovered: number;
  /** Discovery/review sessions finished at 100%. */
  perfectSessions: number;
  xp: number;
}

interface AchievementDef extends Achievement {
  measure: (ctx: AchievementContext) => number;
}

// Order matters only for display; the dashboard sorts unlocked-first anyway.
const DEFS: AchievementDef[] = [
  {
    id: "first-deposit",
    title: "First Deposit",
    description: "Bank your very first word.",
    icon: "PiggyBank",
    tier: "bronze",
    target: 1,
    measure: (c) => c.totalLearned,
  },
  {
    id: "ten-words",
    title: "Opening Balance",
    description: "Bank 10 words.",
    icon: "Coins",
    tier: "bronze",
    target: 10,
    measure: (c) => c.totalLearned,
  },
  {
    id: "hundred-words",
    title: "100 Words Saved",
    description: "Grow your portfolio to 100 words.",
    icon: "Banknote",
    tier: "silver",
    target: 100,
    measure: (c) => c.totalLearned,
  },
  {
    id: "five-hundred-words",
    title: "Blue-Chip Portfolio",
    description: "Bank 500 words across all levels.",
    icon: "Landmark",
    tier: "gold",
    target: 500,
    measure: (c) => c.totalLearned,
  },
  {
    id: "first-mastered",
    title: "Fully Vested",
    description: "Master your first word.",
    icon: "BadgeCheck",
    tier: "bronze",
    target: 1,
    measure: (c) => c.totalMastered,
  },
  {
    id: "fifty-mastered",
    title: "Diversified Holdings",
    description: "Master 50 words.",
    icon: "Gem",
    tier: "gold",
    target: 50,
    measure: (c) => c.totalMastered,
  },
  {
    id: "b2-builder",
    title: "B2 Builder",
    description: "Bank 500 B2 words.",
    icon: "Building2",
    tier: "gold",
    target: 500,
    measure: (c) => c.learnedByLevel.B2,
  },
  {
    id: "c1-challenger",
    title: "C1 Challenger",
    description: "Bank 500 C1 words.",
    icon: "Mountain",
    tier: "platinum",
    target: 500,
    measure: (c) => c.learnedByLevel.C1,
  },
  {
    id: "streak-7",
    title: "Consistent Saver",
    description: "Keep a 7-day streak.",
    icon: "Flame",
    tier: "silver",
    target: 7,
    measure: (c) => c.longestStreak,
  },
  {
    id: "streak-30",
    title: "Vocabulary Investor",
    description: "Maintain a 30-day streak.",
    icon: "Trophy",
    tier: "platinum",
    target: 30,
    measure: (c) => c.longestStreak,
  },
  {
    id: "accuracy-ace",
    title: "Sharp Instincts",
    description: "Reach 90% accuracy over 50+ answers.",
    icon: "Target",
    tier: "gold",
    target: 90,
    measure: (c) => (c.totalAnswers >= 50 ? Math.floor(c.accuracy) : 0),
  },
  {
    id: "practitioner",
    title: "Active Practitioner",
    description: "Complete 10 Context Practice sessions.",
    icon: "Dumbbell",
    tier: "silver",
    target: 10,
    measure: (c) => c.practiceSessions,
  },
  {
    id: "well-rounded",
    title: "Well-Rounded",
    description: "Bank words from 8 different categories.",
    icon: "Compass",
    tier: "silver",
    target: 8,
    measure: (c) => c.categoriesCovered,
  },
  {
    id: "flawless",
    title: "Flawless Session",
    description: "Finish a session with 100% accuracy.",
    icon: "Sparkles",
    tier: "bronze",
    target: 1,
    measure: (c) => c.perfectSessions,
  },
  {
    id: "high-roller",
    title: "High Roller",
    description: "Earn 5,000 XP.",
    icon: "Crown",
    tier: "platinum",
    target: 5000,
    measure: (c) => c.xp,
  },
];

export const ACHIEVEMENTS: Achievement[] = DEFS.map(({ measure, ...rest }) => rest);

/**
 * Compute live unlock + progress state for every achievement. `unlockedIds`
 * carries the persisted unlock timestamps so a badge stays earned even if the
 * underlying number later dips (it won't here, but it future-proofs).
 */
export function computeAchievements(
  ctx: AchievementContext,
  unlockedAt: Record<string, string>,
): AchievementState[] {
  return DEFS.map((def) => {
    const raw = def.measure(ctx);
    const unlocked = raw >= def.target || Boolean(unlockedAt[def.id]);
    return {
      id: def.id,
      title: def.title,
      description: def.description,
      icon: def.icon,
      tier: def.tier,
      target: def.target,
      progress: Math.min(raw, def.target),
      unlocked,
      unlockedAt: unlockedAt[def.id] ?? null,
    };
  });
}

/** IDs newly satisfied this tick that weren't already recorded. */
export function newlyUnlocked(
  ctx: AchievementContext,
  unlockedAt: Record<string, string>,
): string[] {
  return DEFS.filter(
    (def) => !unlockedAt[def.id] && def.measure(ctx) >= def.target,
  ).map((def) => def.id);
}
