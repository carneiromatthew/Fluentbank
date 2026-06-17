import type { CefrLevel } from "@/types";

export interface CefrMeta {
  level: CefrLevel;
  label: string;
  /** Marketing-style descriptor shown in onboarding & dashboard. */
  name: string;
  blurb: string;
  /** Tailwind text/border/bg helpers keyed to the CSS ramp variables. */
  text: string;
  bg: string;
  ring: string;
  /** Raw HSL for charts (Recharts needs concrete colors). */
  color: string;
  /** XP multiplier — harder words are worth more. */
  xpWeight: number;
}

export const CEFR_META: Record<CefrLevel, CefrMeta> = {
  B1: {
    level: "B1",
    label: "B1",
    name: "Threshold",
    blurb: "Handle everyday situations and express opinions with confidence.",
    text: "text-cefr-b1",
    bg: "bg-cefr-b1",
    ring: "ring-cefr-b1",
    color: "hsl(188 78% 41%)",
    xpWeight: 1,
  },
  B2: {
    level: "B2",
    label: "B2",
    name: "Vantage",
    blurb: "Interact fluently on a wide range of topics, including the abstract.",
    text: "text-cefr-b2",
    bg: "bg-cefr-b2",
    ring: "ring-cefr-b2",
    color: "hsl(221 78% 56%)",
    xpWeight: 1.25,
  },
  C1: {
    level: "C1",
    label: "C1",
    name: "Advanced",
    blurb: "Use language flexibly and effectively for academic and professional ends.",
    text: "text-cefr-c1",
    bg: "bg-cefr-c1",
    ring: "ring-cefr-c1",
    color: "hsl(262 70% 60%)",
    xpWeight: 1.6,
  },
  C2: {
    level: "C2",
    label: "C2",
    name: "Mastery",
    blurb: "Command nuance, idiom and register with near-native precision.",
    text: "text-cefr-c2",
    bg: "bg-cefr-c2",
    ring: "ring-cefr-c2",
    color: "hsl(330 72% 54%)",
    xpWeight: 2,
  },
};

/** Levels at or below the target, used to build the active study pool. */
export function levelsUpTo(target: CefrLevel): CefrLevel[] {
  const order: CefrLevel[] = ["B1", "B2", "C1", "C2"];
  return order.slice(0, order.indexOf(target) + 1);
}

/** Ordinal index for comparisons (B1 = 0 … C2 = 3). */
export function levelIndex(level: CefrLevel): number {
  return ["B1", "B2", "C1", "C2"].indexOf(level);
}
