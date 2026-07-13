"use client";

import { Check, X, ArrowRight, PiggyBank } from "lucide-react";
import type { MultipleChoiceQuestion } from "@/types";
import { respell } from "@/lib/pronunciation";
import { CefrBadge } from "@/components/shared/cefr-badge";
import { CategoryChip } from "@/components/shared/category-chip";
import { WordDetail } from "@/components/shared/word-detail";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const OPTION_LABELS = ["A", "B", "C", "D", "E"];

export function QuestionCard({
  question,
  answered,
  selectedIndex,
  wasNew,
  onSelect,
  onContinue,
  isLast,
}: {
  question: MultipleChoiceQuestion;
  answered: boolean;
  selectedIndex: number | null;
  /** True if this was an unseen word (for "Deposited!" framing). */
  wasNew: boolean;
  onSelect: (i: number) => void;
  onContinue: () => void;
  isLast: boolean;
}) {
  const { word, options, correctIndex } = question;
  const correct = answered && selectedIndex === correctIndex;

  return (
    <div className="animate-fade-in-up">
      {/* Prompt */}
      <div className="text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <CefrBadge level={word.cefrLevel} />
          <CategoryChip category={word.category} />
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{word.word}</h2>
        <p className="mt-1.5 font-mono text-sm tracking-tight text-muted-foreground" aria-label="Pronunciation">
          {respell(word.word)}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">What is the correct meaning?</p>
      </div>

      {/* Options */}
      <div className="mx-auto mt-6 grid max-w-xl gap-2.5">
        {options.map((opt, i) => {
          const isCorrect = i === correctIndex;
          const isSelected = i === selectedIndex;
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
              onClick={() => onSelect(i)}
              className={cn(
                "flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left text-sm font-medium transition-all sm:text-base",
                state === "idle" && "hover:border-primary/50 hover:bg-primary/5 active:scale-[0.99]",
                state === "correct" && "border-success bg-success/10 text-success",
                state === "wrong" && "border-destructive bg-destructive/10 text-destructive",
                state === "dim" && "opacity-50",
                !answered && "border-border",
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
                {state === "correct" ? (
                  <Check className="h-4 w-4" />
                ) : state === "wrong" ? (
                  <X className="h-4 w-4" />
                ) : (
                  OPTION_LABELS[i]
                )}
              </span>
              <span className="flex-1">{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {answered && (
        <div className="mx-auto mt-5 max-w-xl animate-fade-in-up">
          <div
            className={cn(
              "rounded-2xl border p-4",
              correct ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5",
            )}
          >
            {correct ? (
              <p className="flex items-center gap-2 font-semibold text-success">
                <PiggyBank className="h-5 w-5" />
                {wasNew ? "Deposited into your FluentBank!" : "Correct — holding strengthened!"}
              </p>
            ) : (
              <p className="font-semibold text-destructive">
                Not quite — added to your review queue.
              </p>
            )}
            <p className="mt-2 text-sm">
              <span className="font-semibold">{word.word}</span> — {word.definition}
            </p>
            <p className="mt-1 text-sm italic text-muted-foreground">“{word.exampleSentence}”</p>
            {word.synonyms.length > 0 && (
              <p className="mt-2 text-xs text-muted-foreground">
                Synonyms: {word.synonyms.join(", ")}
              </p>
            )}
            <div className="mt-3 border-t border-border/60 pt-3">
              <WordDetail word={word} compact />
            </div>
          </div>
          <Button onClick={onContinue} size="lg" variant="vault" className="mt-4 w-full">
            {isLast ? "Finish session" : "Continue"} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
