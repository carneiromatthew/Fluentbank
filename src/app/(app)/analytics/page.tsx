"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Wallet, RotateCcw, Coins, Target, TrendingDown, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatTile } from "@/components/shared/stat-tile";
import { CategoryChip } from "@/components/shared/category-chip";
import { CefrBadge } from "@/components/shared/cefr-badge";
import { useStore } from "@/store/useStore";
import {
  getDailySeries,
  getRangeTotals,
  getHardestCategories,
  getHardestWords,
  getReviewSuccessRate,
} from "@/store/selectors";
import type { Category } from "@/types";
import { formatNumber, formatPercent } from "@/lib/utils";

const RANGES = [
  { key: "7", label: "7 days", days: 7 },
  { key: "14", label: "14 days", days: 14 },
  { key: "30", label: "30 days", days: 30 },
] as const;

export default function AnalyticsPage() {
  const userWords = useStore((s) => s.userWords);
  const dailyProgress = useStore((s) => s.dailyProgress);
  const sessions = useStore((s) => s.sessions);
  const [rangeKey, setRangeKey] = React.useState<(typeof RANGES)[number]["key"]>("14");

  const days = RANGES.find((r) => r.key === rangeKey)!.days;
  const series = React.useMemo(() => getDailySeries(dailyProgress, days), [dailyProgress, days]);
  const totals = React.useMemo(() => getRangeTotals(dailyProgress, days), [dailyProgress, days]);
  const hardestCats = React.useMemo(() => getHardestCategories(userWords).slice(0, 6), [userWords]);
  const hardestWords = React.useMemo(() => getHardestWords(userWords, 6), [userWords]);
  const reviewRate = React.useMemo(() => getReviewSuccessRate(sessions), [sessions]);

  const hasActivity = totals.reviewed > 0 || totals.learned > 0;

  return (
    <div className="mx-auto max-w-6xl space-y-5 p-4 sm:p-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Analytics</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Track the growth and health of your vocabulary portfolio.
          </p>
        </div>
        <Tabs value={rangeKey} onValueChange={(v) => setRangeKey(v as typeof rangeKey)}>
          <TabsList>
            {RANGES.map((r) => (
              <TabsTrigger key={r.key} value={r.key}>
                {r.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </header>

      {/* Range totals */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatTile label="Words learned" value={formatNumber(totals.learned)} icon={<Wallet className="h-4 w-4" />} accent="success" sublabel={`last ${days} days`} />
        <StatTile label="Reviews done" value={formatNumber(totals.reviewed)} icon={<RotateCcw className="h-4 w-4" />} sublabel={`last ${days} days`} />
        <StatTile label="XP earned" value={formatNumber(totals.xp)} icon={<Coins className="h-4 w-4" />} accent="warning" sublabel={`last ${days} days`} />
        <StatTile label="Accuracy" value={formatPercent(totals.accuracy)} icon={<Target className="h-4 w-4" />} accent="cefr-c1" sublabel={`${formatPercent(reviewRate)} on reviews`} />
      </div>

      {!hasActivity && (
        <div className="rounded-2xl border border-dashed p-8 text-center text-sm text-muted-foreground">
          No activity in this range yet. Complete a Discovery session to start charting your growth.
        </div>
      )}

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Words learned per day</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartFrame>
              <AreaChart data={series} margin={{ left: -22, right: 6, top: 6, bottom: 0 }}>
                <defs>
                  <linearGradient id="gLearned" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                <XAxis dataKey="label" tickLine={false} axisLine={false} className="text-[11px]" stroke="hsl(var(--muted-foreground))" interval="preserveStartEnd" />
                <YAxis allowDecimals={false} tickLine={false} axisLine={false} className="text-[11px]" stroke="hsl(var(--muted-foreground))" width={32} />
                <Tooltip content={<ChartTooltip unit="words" />} />
                <Area type="monotone" dataKey="learned" stroke="hsl(var(--primary))" strokeWidth={2.5} fill="url(#gLearned)" />
              </AreaChart>
            </ChartFrame>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Daily accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartFrame>
              <LineChart data={series} margin={{ left: -22, right: 6, top: 6, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                <XAxis dataKey="label" tickLine={false} axisLine={false} className="text-[11px]" stroke="hsl(var(--muted-foreground))" interval="preserveStartEnd" />
                <YAxis domain={[0, 100]} tickLine={false} axisLine={false} className="text-[11px]" stroke="hsl(var(--muted-foreground))" width={32} />
                <Tooltip content={<ChartTooltip unit="%" />} />
                <Line type="monotone" dataKey="accuracy" stroke="hsl(var(--cefr-c1))" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ChartFrame>
          </CardContent>
        </Card>
      </div>

      {/* Difficulty insights */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <TrendingDown className="h-4 w-4 text-warning" /> Hardest categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            {hardestCats.length === 0 ? (
              <EmptyHint>Answer more words to surface your toughest topics.</EmptyHint>
            ) : (
              <div className="space-y-3">
                {hardestCats.map((c) => (
                  <div key={c.category}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <CategoryChip category={c.category as Category} />
                      <span className="text-muted-foreground tnum">
                        {formatPercent(c.accuracy)} · {c.attempts}×
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-warning"
                        style={{ width: `${Math.max(4, c.accuracy)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-4 w-4 text-destructive" /> Most difficult words
            </CardTitle>
          </CardHeader>
          <CardContent>
            {hardestWords.length === 0 ? (
              <EmptyHint>No tricky words yet — keep it up!</EmptyHint>
            ) : (
              <div className="divide-y">
                {hardestWords.map((h) => (
                  <div key={h.word.id} className="flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0">
                    <div className="min-w-0">
                      <p className="flex items-center gap-2 font-medium">
                        {h.word.word}
                        <CefrBadge level={h.word.cefrLevel} />
                      </p>
                      <p className="truncate text-xs text-muted-foreground">{h.word.definition}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-semibold text-destructive tnum">{h.misses}×</p>
                      <p className="text-[11px] text-muted-foreground">missed</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ChartFrame({ children }: { children: React.ReactElement }) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}

function ChartTooltip({ active, payload, label, unit }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="font-medium">{label}</p>
      <p className="text-muted-foreground tnum">
        {payload[0].value} {unit}
      </p>
    </div>
  );
}

function EmptyHint({ children }: { children: React.ReactNode }) {
  return <p className="py-6 text-center text-sm text-muted-foreground">{children}</p>;
}
