"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { X, Trophy, Coins, Target, PiggyBank, ArrowRight, RotateCcw } from "lucide-react";
import type { SessionType, VocabularyWord } from "@/types";
import { QuestionCard } from "@/components/discover/question-card";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { useToast } from "@/components/ui/toast";
import { buildDefinitionQuestion } from "@/lib/questions";
import { VOCABULARY } from "@/data";
import { ACHIEVEMENTS } from "@/lib/achievements";
import { levelFromXp } from "@/lib/xp";
import { formatPercent } from "@/lib/utils";

const MAX_RETRIES = 2;

interface Tally {
  correct: number;
  incorrect: number;
  xp: number;
  deposited: number;
}

export function SessionRunner({
  mode,
  initialWords,
  onExit,
}: {
  mode: SessionType;
  initialWords: VocabularyWord[];
  onExit: () => void;
}) {
  const router = useRouter();
  const recordAnswer = useStore((s) => s.recordAnswer);
  const finalizeSession = useStore((s) => s.finalizeSession);
  const pushToast = useToast((s) => s.push);

  const total = initialWords.length;
  const startLevel = React.useRef(levelFromXp(useStore.getState().xp).level);
  const finalizedRef = React.useRef(false);

  const [queue, setQueue] = React.useState<VocabularyWord[]>(initialWords);
  const [retries, setRetries] = React.useState<Record<string, number>>({});
  const [answered, setAnswered] = React.useState(false);
  const [selected, setSelected] = React.useState<number | null>(null);
  const [wasNew, setWasNew] = React.useState(false);
  const [tally, setTally] = React.useState<Tally>({ correct: 0, incorrect: 0, xp: 0, deposited: 0 });
  const [done, setDone] = React.useState(false);
  const [unlocked, setUnlocked] = React.useState<string[]>([]);

  const current = queue[0] as VocabularyWord | undefined;

  // Build a fresh question whenever the front word changes.
  const question = React.useMemo(
    () => (current ? buildDefinitionQuestion(current, VOCABULARY) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [current?.id, queue.length, done],
  );

  function handleSelect(i: number) {
    if (answered || !current || !question) return;
    const correct = i === question.correctIndex;
    const priorBanked = Boolean(useStore.getState().userWords[current.id]?.banked);
    const result = recordAnswer(current, correct);
    setSelected(i);
    setWasNew(!priorBanked);
    setAnswered(true);
    setTally((t) => ({
      correct: t.correct + (correct ? 1 : 0),
      incorrect: t.incorrect + (correct ? 0 : 1),
      xp: t.xp + result.xpAwarded,
      deposited: t.deposited + (result.newlyBanked ? 1 : 0),
    }));
  }

  function handleContinue() {
    if (!question) return;
    const wasCorrect = selected === question.correctIndex;
    const head = queue[0];
    setAnswered(false);
    setSelected(null);

    // Keep each state setter pure (no nesting) so StrictMode's double-invoke of
    // updaters can't double-count retries.
    if (wasCorrect) {
      setQueue((prev) => prev.slice(1));
      return;
    }
    const retried = retries[head.id] ?? 0;
    if (retried >= MAX_RETRIES) {
      setQueue((prev) => prev.slice(1)); // give up on this word for now
    } else {
      setRetries((x) => ({ ...x, [head.id]: retried + 1 }));
      setQueue((prev) => [...prev.slice(1), prev[0]]); // re-queue to the back
    }
  }

  // Finalise once the queue empties. The ref guard makes this idempotent even
  // if the effect were ever invoked twice for the same transition.
  React.useEffect(() => {
    if (queue.length > 0 || finalizedRef.current) return;
    finalizedRef.current = true;
    const res = finalizeSession({
      type: mode,
      correct: tally.correct,
      incorrect: tally.incorrect,
      xpEarned: tally.xp,
      wordsReviewed: tally.correct + tally.incorrect,
    });
    setUnlocked(res.newlyUnlocked);
    setDone(true);

    const endLevel = levelFromXp(useStore.getState().xp).level;
    if (endLevel > startLevel.current) {
      pushToast({
        kind: "levelup",
        title: `Level ${endLevel} reached!`,
        description: "Your vocabulary portfolio is compounding.",
      });
    }
    for (const id of res.newlyUnlocked) {
      const a = ACHIEVEMENTS.find((x) => x.id === id);
      if (a) pushToast({ kind: "achievement", title: `Achievement: ${a.title}`, description: a.description });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue.length]);

  if (done) {
    return (
      <SessionSummary
        mode={mode}
        tally={tally}
        total={total}
        unlocked={unlocked}
        onHome={() => router.push("/dashboard")}
        onAgain={onExit}
      />
    );
  }

  if (!current || !question) return null;

  const distinctRemaining = new Set(queue.map((w) => w.id)).size;
  const cleared = Math.max(0, total - distinctRemaining);
  const progress = total ? (cleared / total) * 100 : 0;

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-2xl flex-col p-4 sm:p-6">
      {/* Top bar: progress + close */}
      <div className="flex items-center gap-3">
        <button
          onClick={onExit}
          className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Exit session"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-medium text-muted-foreground tnum">
          {cleared}/{total}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center py-8">
        <QuestionCard
          question={question}
          answered={answered}
          selectedIndex={selected}
          wasNew={wasNew}
          onSelect={handleSelect}
          onContinue={handleContinue}
          isLast={distinctRemaining <= 1 && (selected === question.correctIndex || (retries[current.id] ?? 0) >= MAX_RETRIES)}
        />
      </div>
    </div>
  );
}

function SessionSummary({
  mode,
  tally,
  total,
  unlocked,
  onHome,
  onAgain,
}: {
  mode: SessionType;
  tally: Tally;
  total: number;
  unlocked: string[];
  onHome: () => void;
  onAgain: () => void;
}) {
  const answered = tally.correct + tally.incorrect;
  const accuracy = answered ? (tally.correct / answered) * 100 : 0;
  return (
    <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-md flex-col items-center justify-center p-6 text-center">
      <div className="animate-deposit-pop grid h-20 w-20 place-items-center rounded-3xl gradient-vault text-white shadow-lg">
        <PiggyBank className="h-10 w-10" />
      </div>
      <h1 className="mt-5 text-2xl font-bold">
        {mode === "review" ? "Review complete!" : "Session banked!"}
      </h1>
      <p className="mt-1 text-muted-foreground">
        {tally.deposited > 0
          ? `You deposited ${tally.deposited} new ${tally.deposited === 1 ? "word" : "words"} into your FluentBank.`
          : "Nice work strengthening your holdings."}
      </p>

      <div className="mt-6 grid w-full grid-cols-3 gap-3">
        <SummaryStat icon={<Coins className="h-4 w-4" />} value={`+${tally.xp}`} label="XP earned" />
        <SummaryStat icon={<Target className="h-4 w-4" />} value={formatPercent(accuracy)} label="Accuracy" />
        <SummaryStat icon={<PiggyBank className="h-4 w-4" />} value={`${tally.deposited}`} label="Deposited" />
      </div>

      {unlocked.length > 0 && (
        <div className="mt-5 w-full rounded-2xl border border-warning/30 bg-warning/5 p-4">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold text-warning-foreground">
            <Trophy className="h-4 w-4 text-warning" />
            {unlocked.length} achievement{unlocked.length > 1 ? "s" : ""} unlocked!
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-1.5">
            {unlocked.map((id) => {
              const a = ACHIEVEMENTS.find((x) => x.id === id);
              return a ? (
                <span key={id} className="rounded-full bg-card px-2.5 py-1 text-xs font-medium shadow-sm">
                  {a.title}
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}

      <div className="mt-7 grid w-full gap-2.5">
        <Button onClick={onAgain} size="lg" variant="vault">
          {mode === "review" ? "Review more" : "Discover more"} <ArrowRight className="h-4 w-4" />
        </Button>
        <Button onClick={onHome} size="lg" variant="outline">
          Back to dashboard
        </Button>
      </div>
    </div>
  );
}

function SummaryStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-2xl border bg-card p-3">
      <div className="mx-auto mb-1 grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <p className="text-lg font-bold tnum">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}
