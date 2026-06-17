// Small, dependency-free date helpers. All "day keys" are local YYYY-MM-DD so a
// user's streak follows their own calendar day, not UTC.

export function todayKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function dayKeyFromIso(iso: string): string {
  return todayKey(new Date(iso));
}

/** Whole-day difference a − b (both YYYY-MM-DD), positive if a is later. */
export function dayDiff(a: string, b: string): number {
  const da = new Date(`${a}T00:00:00`).getTime();
  const db = new Date(`${b}T00:00:00`).getTime();
  return Math.round((da - db) / 86_400_000);
}

export function addDays(iso: string, days: number): string {
  const d = new Date(iso);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

export function nowIso(): string {
  return new Date().toISOString();
}

/** Returns the last `n` day-keys ending today, oldest → newest. */
export function lastNDays(n: number, from: Date = new Date()): string[] {
  const out: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(from);
    d.setDate(d.getDate() - i);
    out.push(todayKey(d));
  }
  return out;
}

/** Is `iso` due (<= now)? Null next-review dates are treated as due. */
export function isDue(iso: string | null, now: Date = new Date()): boolean {
  if (!iso) return true;
  return new Date(iso).getTime() <= now.getTime();
}
