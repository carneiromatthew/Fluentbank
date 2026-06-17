"use client";

import { Trophy, Flame, Sparkles, Gem } from "lucide-react";
import type { AchievementState } from "@/types";
import { Icon } from "@/components/shared/icon";
import { useAchievementStates } from "@/store/hooks";
import { useStore } from "@/store/useStore";
import { formatRelativeDate, formatNumber, cn } from "@/lib/utils";

const TIER_STYLE: Record<AchievementState["tier"], { ring: string; chip: string; label: string }> = {
  bronze: { ring: "from-amber-500/30 to-amber-700/10 text-amber-700 dark:text-amber-400", chip: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300", label: "Bronze" },
  silver: { ring: "from-slate-400/30 to-slate-500/10 text-slate-600 dark:text-slate-300", chip: "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300", label: "Silver" },
  gold: { ring: "from-yellow-400/40 to-amber-500/10 text-yellow-700 dark:text-yellow-400", chip: "bg-yellow-100 text-yellow-800 dark:bg-yellow-950/60 dark:text-yellow-300", label: "Gold" },
  platinum: { ring: "from-cefr-c1/40 to-cefr-c2/10 text-cefr-c1", chip: "bg-cefr-c1/15 text-cefr-c1", label: "Platinum" },
};

export default function AchievementsPage() {
  const achievements = useAchievementStates();
  const longestStreak = useStore((s) => s.longestStreak);
  const perfectSessions = useStore((s) => s.perfectSessions);
  const xp = useStore((s) => s.xp);

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  // Unlocked first, then by closeness to completion.
  const sorted = [...achievements].sort((a, b) => {
    if (a.unlocked !== b.unlocked) return a.unlocked ? -1 : 1;
    return b.progress / b.target - a.progress / a.target;
  });

  return (
    <div className="mx-auto max-w-5xl space-y-5 p-4 sm:p-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Achievements</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {unlockedCount} of {achievements.length} unlocked — milestones on your road to fluency.
        </p>
      </header>

      {/* Stat strip */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MiniStat icon={<Trophy className="h-4 w-4" />} value={`${unlockedCount}/${achievements.length}`} label="Unlocked" />
        <MiniStat icon={<Flame className="h-4 w-4" />} value={`${longestStreak}d`} label="Best streak" />
        <MiniStat icon={<Sparkles className="h-4 w-4" />} value={formatNumber(perfectSessions)} label="Flawless sessions" />
        <MiniStat icon={<Gem className="h-4 w-4" />} value={formatNumber(xp)} label="Total XP" />
      </div>

      {/* Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((a) => (
          <AchievementCard key={a.id} achievement={a} />
        ))}
      </div>
    </div>
  );
}

function AchievementCard({ achievement: a }: { achievement: AchievementState }) {
  const tier = TIER_STYLE[a.tier];
  const pct = Math.min(100, (a.progress / a.target) * 100);
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-card p-4 shadow-sm transition-shadow",
        a.unlocked ? "hover:shadow-md" : "opacity-90",
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br",
            tier.ring,
            !a.unlocked && "grayscale",
          )}
        >
          <Icon name={a.icon} className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold leading-tight">{a.title}</p>
            <span className={cn("shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase", tier.chip)}>
              {tier.label}
            </span>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">{a.description}</p>
        </div>
      </div>

      <div className="mt-3">
        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className={cn("h-full rounded-full transition-all", a.unlocked ? "bg-success" : "bg-primary")}
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground tnum">
          <span>
            {Math.min(a.progress, a.target)} / {a.target}
          </span>
          <span>{a.unlocked ? `Earned ${formatRelativeDate(a.unlockedAt)}` : `${Math.round(pct)}%`}</span>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-2xl border bg-card p-3.5 shadow-sm">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">{icon}</span>
      <p className="mt-2 text-xl font-bold tnum">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
