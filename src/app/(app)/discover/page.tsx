"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Sparkles, RotateCcw, ArrowRight, CheckCircle2, Dumbbell } from "lucide-react";
import type { SessionType, VocabularyWord } from "@/types";
import { SessionRunner } from "@/components/discover/session-runner";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { getDiscoverySession, getReviewSession } from "@/store/selectors";
import { useTodayProgress } from "@/store/hooks";

export default function DiscoverPage() {
  return (
    <React.Suspense fallback={null}>
      <DiscoverInner />
    </React.Suspense>
  );
}

function DiscoverInner() {
  const searchParams = useSearchParams();
  const mode: SessionType = searchParams.get("mode") === "review" ? "review" : "discovery";
  const profile = useStore((s) => s.profile);
  const userWords = useStore((s) => s.userWords);
  const [session, setSession] = React.useState<{ key: number; words: VocabularyWord[] } | null>(null);

  const buildWords = React.useCallback((): VocabularyWord[] => {
    const st = useStore.getState();
    if (mode === "review") return getReviewSession(st.userWords, 20);
    return getDiscoverySession(
      {
        profile: st.profile,
        userWords: st.userWords,
        sessions: st.sessions,
        dailyProgress: st.dailyProgress,
        xp: st.xp,
        currentStreak: st.currentStreak,
        longestStreak: st.longestStreak,
        perfectSessions: st.perfectSessions,
      },
      st.profile?.dailyGoal ?? 7,
    );
  }, [mode]);

  function start() {
    const words = buildWords();
    if (words.length === 0) return;
    setSession({ key: Date.now(), words });
  }

  function handleExit() {
    const next = buildWords();
    setSession(next.length === 0 ? null : { key: Date.now(), words: next });
  }

  if (!profile) return null;

  if (session) {
    return (
      <SessionRunner
        key={session.key}
        mode={mode}
        initialWords={session.words}
        onExit={handleExit}
      />
    );
  }

  // Recompute count cheaply for the intro (length is stable across shuffles).
  const available = buildWords().length;
  return <DiscoverIntro mode={mode} available={available} onStart={start} />;
}

function DiscoverIntro({
  mode,
  available,
  onStart,
}: {
  mode: SessionType;
  available: number;
  onStart: () => void;
}) {
  const { learnedToday, goal, complete } = useTodayProgress();

  if (available === 0) {
    return (
      <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-md flex-col items-center justify-center p-6 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-success/15 text-success">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="mt-5 text-2xl font-bold">
          {mode === "review" ? "No reviews due" : "All caught up!"}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {mode === "review"
            ? "Your portfolio is well maintained — nothing needs reviewing right now."
            : "You've discovered every available word at your levels. Reinforce them with practice."}
        </p>
        <div className="mt-6 grid w-full gap-2.5">
          <Button asChild size="lg" variant="vault">
            <Link href="/practice">
              <Dumbbell className="h-4 w-4" /> Go to Context Practice
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={mode === "review" ? "/discover" : "/discover?mode=review"}>
              {mode === "review" ? "Discover new words" : "Review instead"}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const isReview = mode === "review";
  return (
    <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-md flex-col items-center justify-center p-6 text-center">
      <div
        className={`grid h-16 w-16 place-items-center rounded-2xl text-white ${isReview ? "bg-primary" : "gradient-vault"}`}
      >
        {isReview ? <RotateCcw className="h-8 w-8" /> : <Sparkles className="h-8 w-8" />}
      </div>
      <h1 className="mt-5 text-2xl font-bold">
        {isReview ? "Strengthen your holdings" : "Daily Discovery"}
      </h1>
      <p className="mt-2 text-muted-foreground">
        {isReview
          ? `${available} ${available === 1 ? "word is" : "words are"} due for review. Answer them to reinforce long-term retention.`
          : `Meet ${available} new ${available === 1 ? "word" : "words"} tuned to your level. Every correct answer is a deposit.`}
      </p>

      {!isReview && (
        <div className="mt-5 w-full rounded-2xl border bg-card p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Today's deposit goal</span>
            <span className="font-semibold tnum">
              {learnedToday}/{goal}
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${Math.min(100, (learnedToday / goal) * 100)}%` }}
            />
          </div>
          {complete && (
            <p className="mt-2 text-xs font-medium text-success">
              Goal reached today — every extra word compounds!
            </p>
          )}
        </div>
      )}

      <Button onClick={onStart} size="xl" variant="vault" className="mt-7 w-full">
        {isReview ? "Start review" : "Start session"} <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
