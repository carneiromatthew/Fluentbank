"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, Shuffle, ArrowRight, Lock } from "lucide-react";
import type { PracticeExerciseType, VocabularyWord } from "@/types";
import { PracticeRunner } from "@/components/practice/practice-runner";
import {
  buildSentenceCompletion,
  buildMeaningRecognition,
  buildContextSelection,
  PRACTICE_LABELS,
  type PracticeQuestion,
} from "@/lib/practice";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/shared/icon";
import { useStore } from "@/store/useStore";
import { getPracticePool } from "@/store/selectors";
import { sample } from "@/lib/utils";

const MIN_WORDS = 5;
const SESSION_SIZE = 10;
const TYPES: PracticeExerciseType[] = [
  "sentence-completion",
  "meaning-recognition",
  "context-selection",
];

export default function PracticePage() {
  const userWords = useStore((s) => s.userWords);
  const poolSize = React.useMemo(() => getPracticePool(userWords).length, [userWords]);
  const [session, setSession] = React.useState<{
    key: number;
    questions: PracticeQuestion[];
    type?: PracticeExerciseType;
  } | null>(null);

  function buildQuestions(type?: PracticeExerciseType): PracticeQuestion[] {
    const pool = getPracticePool(useStore.getState().userWords);
    const picks = sample(pool, Math.min(SESSION_SIZE, pool.length));
    return picks.map((w) => makeQuestion(type ?? randomType(), w, pool));
  }

  function start(type?: PracticeExerciseType) {
    const questions = buildQuestions(type);
    if (questions.length === 0) return;
    setSession({ key: Date.now(), questions, type });
  }

  if (session) {
    return (
      <PracticeRunner
        key={session.key}
        questions={session.questions}
        exerciseType={session.type}
        onExit={() => setSession(null)}
      />
    );
  }

  if (poolSize < MIN_WORDS) {
    return (
      <div className="mx-auto flex min-h-[60dvh] max-w-md flex-col items-center justify-center p-6 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-muted text-muted-foreground">
          <Lock className="h-8 w-8" />
        </div>
        <h1 className="mt-5 text-2xl font-bold">Bank a few more words first</h1>
        <p className="mt-2 text-muted-foreground">
          Context Practice reinforces words you've already learned. Bank at least {MIN_WORDS} words
          ({poolSize}/{MIN_WORDS} so far) to unlock it.
        </p>
        <Button asChild size="lg" variant="vault" className="mt-6">
          <Link href="/discover">
            <Sparkles className="h-4 w-4" /> Discover words
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-5 p-4 sm:p-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Context Practice</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Put your {poolSize} banked words to work. Active use is where retention happens.
        </p>
      </header>

      {/* Mixed (recommended) */}
      <button
        onClick={() => start()}
        className="group flex w-full items-center gap-4 rounded-2xl border-2 border-primary/30 bg-primary/5 p-5 text-left transition-all hover:border-primary/60 hover:shadow-md"
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-vault text-white">
          <Shuffle className="h-6 w-6" />
        </span>
        <div className="flex-1">
          <p className="font-semibold">
            Mixed session <span className="ml-1 text-xs font-medium text-primary">Recommended</span>
          </p>
          <p className="text-sm text-muted-foreground">
            A blend of all three exercise types across {Math.min(SESSION_SIZE, poolSize)} words.
          </p>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
      </button>

      <div className="grid gap-3 sm:grid-cols-3">
        {TYPES.map((t) => {
          const meta = PRACTICE_LABELS[t];
          return (
            <button
              key={t}
              onClick={() => start(t)}
              className="group flex flex-col rounded-2xl border bg-card p-5 text-left transition-all hover:border-primary/40 hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon name={meta.icon} className="h-5 w-5" />
              </span>
              <p className="mt-3 font-semibold">{meta.title}</p>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{meta.blurb}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Start <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function randomType(): PracticeExerciseType {
  return TYPES[Math.floor(Math.random() * TYPES.length)];
}

function makeQuestion(
  type: PracticeExerciseType,
  word: VocabularyWord,
  pool: VocabularyWord[],
): PracticeQuestion {
  switch (type) {
    case "sentence-completion":
      return buildSentenceCompletion(word, pool);
    case "meaning-recognition":
      return buildMeaningRecognition(word, pool);
    case "context-selection":
      return buildContextSelection(word, pool);
  }
}
