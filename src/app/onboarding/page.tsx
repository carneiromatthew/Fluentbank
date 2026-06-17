"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/shared/logo";
import { CefrBadge } from "@/components/shared/cefr-badge";
import { CEFR_META, levelIndex } from "@/lib/cefr";
import { CEFR_LEVELS, type CefrLevel } from "@/types";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";

export default function OnboardingPage() {
  const router = useRouter();
  const initProfile = useStore((s) => s.initProfile);
  const existing = useStore((s) => s.profile);
  const hydrated = useStore((s) => s.hydrated);

  const [step, setStep] = React.useState(0);
  const [name, setName] = React.useState("");
  const [current, setCurrent] = React.useState<CefrLevel>("B1");
  const [target, setTarget] = React.useState<CefrLevel>("C1");
  const [goal, setGoal] = React.useState(7);

  // If already onboarded, skip straight to the dashboard.
  React.useEffect(() => {
    if (hydrated && existing) router.replace("/dashboard");
  }, [hydrated, existing, router]);

  function finish() {
    const safeTarget = levelIndex(target) >= levelIndex(current) ? target : current;
    initProfile({ displayName: name, currentLevel: current, targetLevel: safeTarget, dailyGoal: goal });
    router.replace("/dashboard");
  }

  const steps = ["You", "Level", "Goal"];

  return (
    <div className="ledger-surface flex min-h-dvh flex-col">
      <header className="mx-auto flex w-full max-w-xl items-center justify-between px-5 py-5">
        <Logo />
        <span className="text-sm text-muted-foreground tnum">
          Step {step + 1} of {steps.length}
        </span>
      </header>

      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col px-5 pb-10">
        {/* Progress dots */}
        <div className="mb-8 flex gap-2">
          {steps.map((s, i) => (
            <div
              key={s}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-colors",
                i <= step ? "bg-primary" : "bg-muted",
              )}
            />
          ))}
        </div>

        {step === 0 && (
          <Section
            title="Welcome to FluentBank"
            subtitle="Let's open your vocabulary account. What should we call you?"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Display name</Label>
              <Input
                id="name"
                autoFocus
                placeholder="e.g. Mateus"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && name.trim() && setStep(1)}
                maxLength={24}
              />
              <p className="text-xs text-muted-foreground">
                Stored locally on this device. No email needed to start.
              </p>
            </div>
          </Section>
        )}

        {step === 1 && (
          <Section
            title="Where are you now — and where to?"
            subtitle="We prioritise words from your target level while keeping earlier levels fresh."
          >
            <div className="space-y-5">
              <LevelPicker label="Current level" value={current} onChange={setCurrent} />
              <LevelPicker
                label="Target level"
                value={target}
                onChange={setTarget}
                minLevel={current}
              />
            </div>
          </Section>
        )}

        {step === 2 && (
          <Section
            title="Set your daily deposit"
            subtitle="How many new words would you like to discover each day?"
          >
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-end justify-between">
                <span className="text-5xl font-bold text-primary tnum">{goal}</span>
                <span className="pb-1 text-sm text-muted-foreground">new words / day</span>
              </div>
              <input
                type="range"
                min={5}
                max={10}
                step={1}
                value={goal}
                onChange={(e) => setGoal(Number(e.target.value))}
                className="mt-5 w-full accent-[hsl(var(--primary))]"
              />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>5 (steady)</span>
                <span>10 (ambitious)</span>
              </div>
            </div>
          </Section>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-8">
          {step > 0 ? (
            <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          ) : (
            <span />
          )}
          {step < 2 ? (
            <Button
              size="lg"
              variant="vault"
              disabled={step === 0 && !name.trim()}
              onClick={() => setStep((s) => s + 1)}
            >
              Continue <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button size="lg" variant="vault" onClick={finish}>
              Open my FluentBank <Check className="h-4 w-4" />
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
      <p className="mt-2 text-muted-foreground">{subtitle}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function LevelPicker({
  label,
  value,
  onChange,
  minLevel,
}: {
  label: string;
  value: CefrLevel;
  onChange: (l: CefrLevel) => void;
  minLevel?: CefrLevel;
}) {
  return (
    <div>
      <Label className="mb-2 block">{label}</Label>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {CEFR_LEVELS.map((l) => {
          const disabled = minLevel ? levelIndex(l) < levelIndex(minLevel) : false;
          const active = value === l;
          return (
            <button
              key={l}
              type="button"
              disabled={disabled}
              onClick={() => onChange(l)}
              className={cn(
                "rounded-2xl border p-3 text-left transition-all disabled:opacity-40",
                active
                  ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                  : "hover:border-foreground/20 hover:bg-muted/50",
              )}
            >
              <CefrBadge level={l} />
              <p className="mt-2 text-sm font-semibold">{CEFR_META[l].name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
