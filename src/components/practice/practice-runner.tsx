"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { X, Check, Coins, Target, ArrowRight, Dumbbell, Trophy } from "lucide-react";
import type { PracticeExerciseType } from "@/types";
import type { PracticeQuestion } from "@/lib/practice";
import { Button } from "@/components/ui/button";
import { CefrBadge } from "@/components/shared/cefr-badge";
import { useStore } from "@/store/useStore";
import { useToast } from "@/components/ui/toast";
import { ACHIEVEMENTS } from "@/lib/achievements";
import { formatPercent, cn } from "@/lib/utils";

const OPTION_LABELS = ["A", "B", "C", "D", "E"];

export function PracticeRunner({
  questions,
  exerciseType,
  onExit,
}: {
  questions: PracticeQuestion[];
  /** Undefined for a mixed session. */
  exerciseType?: PracticeExerciseType;
  onExit: () => void;
}) {
  const router = useRouter();
  const recordAnswer = useStore((s) => s.recordAnswer);
  const finalizeSession = useStore((s) => s.finalizeSession);
  const pushToast = useToast((s) => s.push);

  const [index, setIndex] = React.useState(0);
  const [answered, setAnswered] = React.useState(false);
  const [selected, setSelected] = React.useState<number | null>(null);
  const [tally, setTally] = React.useState({ correct: 0, incorrect: 0, xp: 0 });
  const [done, setDone] = React.useState(false);
  const [unlocked, setUnlocked] = React.useState<string[]>([]);
  const finalizedRef = React.useRef(false);

  const q = questions[index];
  const total = questions.length;

  function handleSelect(i: number) {
    if (answered) return;
    const correct = i === q.correctIndex;
    const result = recordAnswer(q.word, correct);
    setSelected(i);
    setAnswered(true);
    setTally((t) => ({
      correct: t.correct + (correct ? 1 : 0),
      incorrect: t.incorrect + (correct ? 0 : 1),
      xp: t.xp + result.xpAwarded,
    }));
  }

  function handleContinue() {
    if (index + 1 >= total) {
      if (finalizedRef.current) return; // guard against a fast double-click
      finalizedRef.current = true;
      const res = finalizeSession({
        type: "practice",
        exerciseType,
        correct: tally.correct,
        incorrect: tally.incorrect,
        xpEarned: tally.xp,
        wordsReviewed: total,
      });
      setUnlocked(res.newlyUnlocked);
      setDone(true);
      for (const id of res.newlyUnlocked) {
        const a = ACHIEVEMENTS.find((x) => x.id === id);
        if (a) pushToast({ kind: "achievement", title: `Achievement: ${a.title}`, description: a.description });
      }
      return;
    }
    setIndex((i) => i + 1);
    setAnswered(false);
    setSelected(null);
  }

  if (done) {
    const accuracy = total ? (tally.correct / total) * 100 : 0;
    return (
      <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-md flex-col items-center justify-center p-6 text-center">
        <div className="animate-deposit-pop grid h-20 w-20 place-items-center rounded-3xl bg-primary text-primary-foreground shadow-lg">
          <Dumbbell className="h-10 w-10" />
        </div>
        <h1 className="mt-5 text-2xl font-bold">Practice complete!</h1>
        <p className="mt-1 text-muted-foreground">You reinforced {total} words from your portfolio.</p>
        <div className="mt-6 grid w-full grid-cols-2 gap-3">
          <div className="rounded-2xl border bg-card p-3">
            <Coins className="mx-auto mb-1 h-5 w-5 text-primary" />
            <p className="text-lg font-bold tnum">+{tally.xp}</p>
            <p className="text-[11px] text-muted-foreground">XP earned</p>
          </div>
          <div className="rounded-2xl border bg-card p-3">
            <Target className="mx-auto mb-1 h-5 w-5 text-primary" />
            <p className="text-lg font-bold tnum">{formatPercent(accuracy)}</p>
            <p className="text-[11px] text-muted-foreground">Accuracy</p>
          </div>
        </div>
        {unlocked.length > 0 && (
          <p className="mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-warning-foreground">
            <Trophy className="h-4 w-4 text-warning" /> {unlocked.length} achievement
            {unlocked.length > 1 ? "s" : ""} unlocked!
          </p>
        )}
        <div className="mt-7 grid w-full gap-2.5">
          <Button onClick={onExit} size="lg" variant="vault">
            Practice again <ArrowRight className="h-4 w-4" />
          </Button>
          <Button onClick={() => router.push("/dashboard")} size="lg" variant="outline">
            Back to dashboard
          </Button>
        </div>
      </div>
    );
  }

  const correct = answered && selected === q.correctIndex;

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-2xl flex-col p-4 sm:p-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onExit}
          className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Exit practice"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${((index + (answered ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
        <span className="text-sm font-medium text-muted-foreground tnum">
          {index + 1}/{total}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center py-8">
        <div className="animate-fade-in-up">
          <div className="mb-2 flex items-center justify-center gap-2">
            <CefrBadge level={q.word.cefrLevel} />
          </div>
          <p className="text-center text-sm font-medium text-muted-foreground">{q.prompt}</p>
          {q.sentence && (
            <p className="mx-auto mt-4 max-w-xl text-balance text-center text-xl font-medium leading-relaxed">
              {q.sentence}
            </p>
          )}

          <div className="mx-auto mt-6 grid max-w-xl gap-2.5">
            {q.options.map((opt, i) => {
              const isCorrect = i === q.correctIndex;
              const isSelected = i === selected;
              const state = !answered
                ? "idle"
                : isCorrect
                  ? "correct"
                  : isSelected
                    ? "wrong"
                    : "dim";
              return (
                <button
                  key={i}
                  disabled={answered}
                  onClick={() => handleSelect(i)}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left text-sm font-medium transition-all sm:text-base",
                    state === "idle" && "border-border hover:border-primary/50 hover:bg-primary/5 active:scale-[0.99]",
                    state === "correct" && "border-success bg-success/10 text-success",
                    state === "wrong" && "border-destructive bg-destructive/10 text-destructive",
                    state === "dim" && "border-border opacity-50",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs font-bold",
                      state === "correct" && "bg-success text-success-foreground",
                      state === "wrong" && "bg-destructive text-destructive-foreground",
                      (state === "idle" || state === "dim") && "bg-muted text-muted-foreground",
                    )}
                  >
                    {state === "correct" ? <Check className="h-4 w-4" /> : state === "wrong" ? <X className="h-4 w-4" /> : OPTION_LABELS[i]}
                  </span>
                  <span className="flex-1">{opt}</span>
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="mx-auto mt-5 max-w-xl animate-fade-in-up">
              <div
                className={cn(
                  "rounded-2xl border p-4 text-sm",
                  correct ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5",
                )}
              >
                <p className={cn("font-semibold", correct ? "text-success" : "text-destructive")}>
                  {correct ? "Correct!" : "Not quite."}
                </p>
                <p className="mt-1 text-foreground/90">{q.explanation}</p>
              </div>
              <Button onClick={handleContinue} size="lg" variant="vault" className="mt-4 w-full">
                {index + 1 >= total ? "Finish" : "Continue"} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
