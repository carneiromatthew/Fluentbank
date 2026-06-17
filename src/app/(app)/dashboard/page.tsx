"use client";

import Link from "next/link";
import {
  Flame,
  Coins,
  Wallet,
  Gem,
  Sparkles,
  ArrowRight,
  RotateCcw,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatTile } from "@/components/shared/stat-tile";
import { ProgressRing } from "@/components/shared/progress-ring";
import { CefrBadge } from "@/components/shared/cefr-badge";
import { CategoryChip } from "@/components/shared/category-chip";
import { useStore, useLevelInfo } from "@/store/useStore";
import { usePortfolioStats, useDueCount, useTodayProgress } from "@/store/hooks";
import { getHardestWords } from "@/store/selectors";
import { CEFR_LEVELS, type CefrLevel } from "@/types";
import { CEFR_META, levelsUpTo } from "@/lib/cefr";
import { rankTitle } from "@/lib/xp";
import { formatNumber, formatPercent } from "@/lib/utils";

export default function DashboardPage() {
  const profile = useStore((s) => s.profile);
  const xp = useStore((s) => s.xp);
  const streak = useStore((s) => s.currentStreak);
  const longestStreak = useStore((s) => s.longestStreak);
  const userWords = useStore((s) => s.userWords);
  const level = useLevelInfo();
  const stats = usePortfolioStats();
  const due = useDueCount();
  const { learnedToday, goal, complete } = useTodayProgress();

  if (!profile) return null;

  const hardest = getHardestWords(userWords, 4);
  const goalPct = Math.min(100, (learnedToday / goal) * 100);
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4 sm:p-6">
      {/* Greeting */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{greeting},</p>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{profile.displayName}</h1>
          <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <CefrBadge level={profile.currentLevel} />
            <ArrowRight className="h-3.5 w-3.5" />
            <CefrBadge level={profile.targetLevel} />
            <span className="hidden sm:inline">· targeting {CEFR_META[profile.targetLevel].name}</span>
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border bg-card px-4 py-3 shadow-sm">
          <ProgressRing value={level.progress * 100} size={64} indicatorClassName="stroke-primary">
            <span className="text-base font-bold tnum">{level.level}</span>
          </ProgressRing>
          <div>
            <p className="text-sm font-semibold">{rankTitle(level.level)}</p>
            <p className="text-xs text-muted-foreground tnum">
              {level.intoLevel}/{level.levelSpan} XP · Level {level.level}
            </p>
          </div>
        </div>
      </header>

      {/* Overview stat tiles */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatTile
          label="Current streak"
          value={<span>{streak}<span className="ml-1 text-base font-medium text-muted-foreground">days</span></span>}
          sublabel={`Longest: ${longestStreak} days`}
          icon={<Flame className="h-4 w-4" />}
          accent="warning"
        />
        <StatTile
          label="Total XP"
          value={formatNumber(xp)}
          sublabel={`Level ${level.level} · ${rankTitle(level.level)}`}
          icon={<Coins className="h-4 w-4" />}
        />
        <StatTile
          label="Words banked"
          value={formatNumber(stats.totalLearned)}
          sublabel={`${formatPercent(stats.accuracy)} lifetime accuracy`}
          icon={<Wallet className="h-4 w-4" />}
          accent="success"
        />
        <StatTile
          label="Mastered"
          value={formatNumber(stats.totalMastered)}
          sublabel={`${stats.totalKnown} known · ${stats.totalLearning} learning`}
          icon={<Gem className="h-4 w-4" />}
          accent="cefr-c1"
        />
      </div>

      {/* Action cards */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Daily discovery */}
        <Card className="overflow-hidden">
          <div className="gradient-vault p-5 text-white sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                <Sparkles className="h-4 w-4" /> Daily Discovery
              </div>
              {complete && (
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold">
                  Goal complete 🎉
                </span>
              )}
            </div>
            <p className="mt-3 text-2xl font-bold tnum">
              {learnedToday} <span className="text-base font-medium opacity-80">/ {goal} today</span>
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/25">
              <div className="h-full rounded-full bg-white transition-all" style={{ width: `${goalPct}%` }} />
            </div>
          </div>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">
              {complete
                ? "You've hit today's deposit goal. Bank a few extra or come back tomorrow."
                : "Discover new words and deposit them into your FluentBank."}
            </p>
            <Button asChild variant="vault" className="mt-4 w-full" size="lg">
              <Link href="/discover">
                {complete ? "Keep going" : "Start today's session"} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Reviews due */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <RotateCcw className="h-4 w-4 text-primary" /> Reviews due
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold tnum">{due}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {due === 0
                ? "Nothing due right now. Your portfolio is well maintained."
                : `${due} ${due === 1 ? "word is" : "words are"} ready for a strengthening review.`}
            </p>
            <Button
              asChild
              variant={due === 0 ? "outline" : "default"}
              className="mt-4 w-full"
              size="lg"
            >
              <Link href="/discover?mode=review">
                Review now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {hardest.length > 0 && (
              <div className="mt-4 border-t pt-4">
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <AlertTriangle className="h-3.5 w-3.5 text-warning" /> Needs attention
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {hardest.map((h) => (
                    <span
                      key={h.word.id}
                      className="inline-flex items-center gap-1 rounded-lg border bg-muted/40 px-2 py-1 text-xs"
                    >
                      <span className="font-semibold">{h.word.word}</span>
                      <span className="text-muted-foreground">· {h.misses}×</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* CEFR progress */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">CEFR progress</h2>
          <Link href="/portfolio" className="text-sm font-medium text-primary hover:underline">
            View portfolio
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CEFR_LEVELS.map((lvl) => (
            <LevelProgressCard
              key={lvl}
              level={lvl}
              learned={stats.byLevel[lvl].learned}
              mastered={stats.byLevel[lvl].mastered}
              total={stats.byLevel[lvl].total}
              active={levelsUpTo(profile.targetLevel).includes(lvl)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function LevelProgressCard({
  level,
  learned,
  mastered,
  total,
  active,
}: {
  level: CefrLevel;
  learned: number;
  mastered: number;
  total: number;
  active: boolean;
}) {
  const learnedPct = total ? (learned / total) * 100 : 0;
  const masteredPct = total ? (mastered / total) * 100 : 0;
  return (
    <div className={`rounded-2xl border bg-card p-4 shadow-sm ${active ? "" : "opacity-70"}`}>
      <div className="flex items-center justify-between">
        <CefrBadge level={level} showName />
      </div>
      <p className="mt-3 text-2xl font-bold tnum">
        {learned}
        <span className="text-sm font-medium text-muted-foreground">/{total}</span>
      </p>
      <p className="text-xs text-muted-foreground">words banked</p>
      <div className="relative mt-3 h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ width: `${learnedPct}%`, background: CEFR_META[level].color, opacity: 0.45 }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ width: `${masteredPct}%`, background: CEFR_META[level].color }}
        />
      </div>
      <p className="mt-1.5 text-xs text-muted-foreground tnum">{mastered} mastered</p>
    </div>
  );
}
