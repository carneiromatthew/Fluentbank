// XP & leveling. A gently super-linear curve so early levels feel attainable
// and later ones meaningful. Level N requires CUMULATIVE xp of:
//   threshold(N) = 50 * N * (N - 1)    (level 1 starts at 0)
// → L2 @100, L3 @300, L4 @600, L5 @1000, L6 @1500 …

export interface LevelInfo {
  level: number;
  /** XP at the start of the current level. */
  levelFloor: number;
  /** XP needed to reach the next level. */
  nextLevelAt: number;
  /** XP accumulated within the current level. */
  intoLevel: number;
  /** XP span of the current level. */
  levelSpan: number;
  /** Progress through the current level, 0–1. */
  progress: number;
}

function thresholdForLevel(level: number): number {
  return 50 * level * (level - 1);
}

export function levelFromXp(xp: number): LevelInfo {
  const safeXp = Math.max(0, Math.floor(xp));
  let level = 1;
  while (thresholdForLevel(level + 1) <= safeXp) level++;

  const levelFloor = thresholdForLevel(level);
  const nextLevelAt = thresholdForLevel(level + 1);
  const levelSpan = nextLevelAt - levelFloor;
  const intoLevel = safeXp - levelFloor;

  return {
    level,
    levelFloor,
    nextLevelAt,
    intoLevel,
    levelSpan,
    progress: levelSpan === 0 ? 0 : intoLevel / levelSpan,
  };
}

/** Honorary "investor rank" titles tied to level bands — flavour for the UI. */
export function rankTitle(level: number): string {
  if (level >= 25) return "Lexicon Magnate";
  if (level >= 18) return "Portfolio Master";
  if (level >= 12) return "Senior Investor";
  if (level >= 8) return "Vocabulary Investor";
  if (level >= 5) return "Account Builder";
  if (level >= 3) return "Saver";
  return "New Depositor";
}
