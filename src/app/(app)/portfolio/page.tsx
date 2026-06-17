"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Wallet, Sparkles, ArrowUpDown, SlidersHorizontal } from "lucide-react";
import type { CefrLevel, MasteryStatus, UserWord, VocabularyWord } from "@/types";
import { CEFR_LEVELS, CATEGORIES } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CefrBadge } from "@/components/shared/cefr-badge";
import { CategoryChip } from "@/components/shared/category-chip";
import { MasteryBadge } from "@/components/shared/mastery-badge";
import { useStore } from "@/store/useStore";
import { usePortfolioStats } from "@/store/hooks";
import { VOCAB_BY_ID } from "@/data";
import { wordAccuracy } from "@/lib/srs";
import { formatRelativeDate, formatPercent, cn } from "@/lib/utils";

interface Row {
  word: VocabularyWord;
  uw: UserWord;
  accuracy: number;
}

type SortKey = "mastery" | "recent" | "accuracy" | "alpha";

const MASTERY_ORDER: Record<MasteryStatus, number> = { mastered: 3, known: 2, learning: 1, new: 0 };

export default function PortfolioPage() {
  const userWords = useStore((s) => s.userWords);
  const stats = usePortfolioStats();

  const [query, setQuery] = React.useState("");
  const [level, setLevel] = React.useState<CefrLevel | "all">("all");
  const [category, setCategory] = React.useState<string>("all");
  const [mastery, setMastery] = React.useState<MasteryStatus | "all">("all");
  const [sort, setSort] = React.useState<SortKey>("recent");

  const rows = React.useMemo<Row[]>(() => {
    const out: Row[] = [];
    for (const uw of Object.values(userWords)) {
      if (!uw.banked) continue;
      const word = VOCAB_BY_ID.get(uw.wordId);
      if (!word) continue;
      out.push({ word, uw, accuracy: wordAccuracy(uw) });
    }
    return out;
  }, [userWords]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = rows.filter((r) => {
      if (level !== "all" && r.word.cefrLevel !== level) return false;
      if (category !== "all" && r.word.category !== category) return false;
      if (mastery !== "all" && r.uw.status !== mastery) return false;
      if (q) {
        const hay = `${r.word.word} ${r.word.definition} ${r.word.synonyms.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    result.sort((a, b) => {
      switch (sort) {
        case "mastery":
          return (
            MASTERY_ORDER[b.uw.status] - MASTERY_ORDER[a.uw.status] ||
            b.uw.masteryScore - a.uw.masteryScore
          );
        case "accuracy":
          return b.accuracy - a.accuracy;
        case "alpha":
          return a.word.word.localeCompare(b.word.word, "es");
        case "recent":
        default:
          return (
            new Date(b.uw.dateLearned ?? 0).getTime() - new Date(a.uw.dateLearned ?? 0).getTime()
          );
      }
    });
    return result;
  }, [rows, query, level, category, mastery, sort]);

  if (rows.length === 0) {
    return (
      <div className="mx-auto flex min-h-[60dvh] max-w-md flex-col items-center justify-center p-6 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Wallet className="h-8 w-8" />
        </div>
        <h1 className="mt-5 text-2xl font-bold">Your portfolio is empty</h1>
        <p className="mt-2 text-muted-foreground">
          Discover and bank your first words — they'll appear here as vocabulary assets you can
          track and grow.
        </p>
        <Button asChild size="lg" variant="vault" className="mt-6">
          <Link href="/discover">
            <Sparkles className="h-4 w-4" /> Start discovering
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-5 p-4 sm:p-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">FluentBank Portfolio</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {stats.totalLearned} words banked · {stats.totalMastered} mastered ·{" "}
          {formatPercent(stats.accuracy)} lifetime accuracy
        </p>
      </header>

      {/* Mastery distribution bar */}
      <div className="flex h-2.5 overflow-hidden rounded-full bg-muted">
        {(["mastered", "known", "learning"] as MasteryStatus[]).map((s) => {
          const count =
            s === "mastered" ? stats.totalMastered : s === "known" ? stats.totalKnown : stats.totalLearning;
          const pct = stats.totalLearned ? (count / stats.totalLearned) * 100 : 0;
          const color = s === "mastered" ? "bg-success" : s === "known" ? "bg-cefr-b2" : "bg-cefr-b1";
          return <div key={s} className={color} style={{ width: `${pct}%` }} />;
        })}
      </div>

      {/* Controls */}
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto_auto]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search words, meanings, synonyms…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <FilterSelect
          icon={<SlidersHorizontal className="h-3.5 w-3.5" />}
          value={level}
          onChange={(v) => setLevel(v as CefrLevel | "all")}
          placeholder="Level"
          options={[{ value: "all", label: "All levels" }, ...CEFR_LEVELS.map((l) => ({ value: l, label: l }))]}
        />
        <FilterSelect
          value={category}
          onChange={setCategory}
          placeholder="Category"
          options={[{ value: "all", label: "All topics" }, ...CATEGORIES.map((c) => ({ value: c, label: c }))]}
        />
        <FilterSelect
          value={mastery}
          onChange={(v) => setMastery(v as MasteryStatus | "all")}
          placeholder="Mastery"
          options={[
            { value: "all", label: "All mastery" },
            { value: "mastered", label: "Mastered" },
            { value: "known", label: "Known" },
            { value: "learning", label: "Learning" },
            { value: "new", label: "New" },
          ]}
        />
        <FilterSelect
          icon={<ArrowUpDown className="h-3.5 w-3.5" />}
          value={sort}
          onChange={(v) => setSort(v as SortKey)}
          placeholder="Sort"
          options={[
            { value: "recent", label: "Recently learned" },
            { value: "mastery", label: "Mastery (high→low)" },
            { value: "accuracy", label: "Accuracy" },
            { value: "alpha", label: "A → Z" },
          ]}
        />
      </div>

      <p className="text-xs text-muted-foreground">
        Showing {filtered.length} of {rows.length} holdings
      </p>

      {/* List */}
      <div className="grid gap-2.5">
        {filtered.map((r) => (
          <PortfolioRow key={r.word.id} row={r} />
        ))}
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed p-10 text-center text-sm text-muted-foreground">
            No holdings match your filters.
          </div>
        )}
      </div>
    </div>
  );
}

function FilterSelect({
  value,
  onChange,
  options,
  placeholder,
  icon,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  icon?: React.ReactNode;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="min-w-[8.5rem]">
        <span className="flex items-center gap-1.5 text-muted-foreground">
          {icon}
          <SelectValue placeholder={placeholder} />
        </span>
      </SelectTrigger>
      <SelectContent>
        {options.map((o) => (
          <SelectItem key={o.value} value={o.value}>
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function PortfolioRow({ row }: { row: Row }) {
  const { word, uw, accuracy } = row;
  return (
    <div className="rounded-2xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold">{word.word}</h3>
            <CefrBadge level={word.cefrLevel} />
            <CategoryChip category={word.category} />
          </div>
          <p className="mt-1 text-sm text-foreground/90">{word.definition}</p>
          <p className="mt-1 text-sm italic text-muted-foreground">“{word.exampleSentence}”</p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <MasteryBadge status={uw.status} />
          <span className="text-xs text-muted-foreground tnum">{formatRelativeDate(uw.dateLearned)}</span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className={cn(
              "h-full rounded-full",
              uw.masteryScore >= 85 ? "bg-success" : uw.masteryScore >= 55 ? "bg-cefr-b2" : "bg-cefr-b1",
            )}
            style={{ width: `${uw.masteryScore}%` }}
          />
        </div>
        <span className="w-28 text-right text-xs text-muted-foreground tnum">
          {formatPercent(accuracy)} acc · {uw.timesCorrect + uw.timesIncorrect}×
        </span>
      </div>
    </div>
  );
}
