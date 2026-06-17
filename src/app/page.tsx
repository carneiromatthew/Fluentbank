"use client";

import Link from "next/link";
import {
  Sparkles,
  Wallet,
  Repeat,
  ArrowRight,
  TrendingUp,
  Target,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/app/theme-toggle";
import { CefrBadge } from "@/components/shared/cefr-badge";
import { useStore } from "@/store/useStore";
import { TOTAL_WORDS, LEVEL_TOTALS } from "@/data";
import { CEFR_LEVELS } from "@/types";

const STAGES = [
  {
    icon: Sparkles,
    title: "Discover",
    body: "Meet new words through fast, multiple-choice meaning checks tuned to your level.",
  },
  {
    icon: Wallet,
    title: "Bank",
    body: "Every word you get right is deposited into your portfolio — a growing vocabulary asset.",
  },
  {
    icon: Repeat,
    title: "Use",
    body: "Reinforce holdings with contextual practice and spaced reviews until they're mastered.",
  },
];

export default function LandingPage() {
  const profile = useStore((s) => s.profile);
  const hydrated = useStore((s) => s.hydrated);
  const ctaHref = hydrated && profile ? "/dashboard" : "/onboarding";
  const ctaLabel = hydrated && profile ? "Continue building" : "Start building free";

  return (
    <div className="ledger-surface min-h-dvh">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Logo />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href={ctaHref}>{hydrated && profile ? "Dashboard" : "Sign in"}</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* Hero */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
          <div className="animate-fade-in-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              Vocabulary learned is deposited into your FluentBank
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Build the vocabulary that makes you{" "}
              <span className="text-primary">fluent</span>.
            </h1>
            <p className="mt-5 max-w-md text-pretty text-lg text-muted-foreground">
              FluentBank turns Spanish vocabulary into a portfolio you grow every day — from B1 all
              the way to C2 — with spaced repetition that makes it stick.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="vault">
                <Link href={ctaHref}>
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <span className="text-sm text-muted-foreground">
                {TOTAL_WORDS}+ curated words · no account required
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {CEFR_LEVELS.map((l) => (
                <span key={l} className="inline-flex items-center gap-1.5">
                  <CefrBadge level={l} showName />
                </span>
              ))}
            </div>
          </div>

          <HeroCard />
        </section>

        {/* Three stages */}
        <section className="py-10">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            A three-stage system
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {STAGES.map((s, i) => {
              const IconCmp = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <IconCmp className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      Stage {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Feature strip */}
        <section className="grid gap-4 py-10 sm:grid-cols-3">
          <Feature icon={Target} title="Target a CEFR level" body="Pick where you are and where you're going. We prioritise the words that move you up." />
          <Feature icon={Repeat} title="Spaced repetition" body="Smart intervals resurface weak words more often and rest the ones you've mastered." />
          <Feature icon={ShieldCheck} title="Measurable mastery" body="Track accuracy, streaks and per-level progress like an investment dashboard." />
        </section>

        <footer className="border-t py-10 text-center text-sm text-muted-foreground">
          <Logo size={24} className="justify-center" />
          <p className="mt-3">Built for learners who want measurable vocabulary growth.</p>
        </footer>
      </main>
    </div>
  );
}

function HeroCard() {
  return (
    <div className="animate-fade-in-up rounded-3xl border bg-card p-6 shadow-lg [animation-delay:120ms]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">Vocabulary Portfolio</p>
        <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-xs font-semibold text-success">
          <TrendingUp className="h-3 w-3" /> Growing
        </span>
      </div>
      <p className="mt-2 text-4xl font-bold tnum">
        1,284 <span className="text-base font-medium text-muted-foreground">words banked</span>
      </p>
      <div className="mt-6 space-y-3">
        {CEFR_LEVELS.map((l, i) => {
          const pct = [86, 64, 38, 12][i];
          return (
            <div key={l}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <CefrBadge level={l} />
                <span className="tnum text-muted-foreground">
                  {Math.round((pct / 100) * LEVEL_TOTALS[l])}/{LEVEL_TOTALS[l]}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct}%`,
                    background: ["hsl(188 78% 41%)", "hsl(221 78% 56%)", "hsl(262 70% 60%)", "hsl(330 72% 54%)"][i],
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Target;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border bg-card/60 p-5">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
