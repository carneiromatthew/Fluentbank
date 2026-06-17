import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind-aware className combiner (shadcn convention). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Compact number formatting: 1234 → "1,234", 12500 → "12.5k". */
export function formatNumber(n: number): string {
  if (Math.abs(n) >= 10_000) {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(n);
  }
  return new Intl.NumberFormat("en-US").format(n);
}

/** Round to a whole percent and append the sign. */
export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}

/** Title-friendly relative date, e.g. "Today", "Yesterday", "Mar 4". */
export function formatRelativeDate(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  const now = new Date();
  const startOfDay = (x: Date) =>
    new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
  const diffDays = Math.round((startOfDay(now) - startOfDay(d)) / 86_400_000);
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays === -1) return "Tomorrow";
  if (diffDays > 1 && diffDays < 7) return `${diffDays}d ago`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/** Fisher–Yates shuffle returning a new array (pure). */
export function shuffle<T>(input: readonly T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Pick `count` random unique elements. */
export function sample<T>(input: readonly T[], count: number): T[] {
  return shuffle(input).slice(0, Math.max(0, count));
}

/** Clamp a number into [min, max]. */
export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

/** Lightweight stable id for client-only records. */
export function uid(prefix = "id"): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
}
