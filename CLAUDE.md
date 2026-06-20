# CLAUDE.md — FluentBank

Guidance for Claude Code working in this repo. Keep this file current when
architecture or conventions change.

## What this is

FluentBank is a **CEFR Spanish vocabulary mastery web app** (B1→C2). Users learn
words via multiple-choice "Discovery", which deposits them into a "Portfolio";
spaced repetition resurfaces them; "Context Practice" reinforces them. The
product metaphor is a bank/investment portfolio — vocabulary is an asset.

- **Live:** https://fluentbank.vercel.app
- **Repo:** https://github.com/carneiromatthew/Fluentbank
- **Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind ·
  shadcn-style UI · Zustand (persisted) · Recharts · lucide-react · Supabase
  (optional backend).

## Commands

```bash
npm run dev          # dev server (http://localhost:3000)
npm run build        # production build — run before shipping
npm run typecheck    # tsc --noEmit — run after every change
npm run export:vocab # regenerate supabase/seed_vocabulary.sql + vocabulary.json
```

Always `cd` into the project dir first — the Bash tool's CWD sometimes resets to
the parent `claude_repo`. Use `npm run typecheck`, NOT `npx tsc` (npx installs a
bogus standalone `tsc` package).

## Architecture: local-first

The app runs **entirely client-side** with a Zustand store persisted to
localStorage. There is no required backend. Supabase is a fully-written but
**optional** seam (schema + typed client) gated by `isSupabaseEnabled()`; the
store→table sync is intentionally not wired yet.

- `src/store/useStore.ts` — the single source of truth. Actions (`recordAnswer`,
  `finalizeSession`, `initProfile`, …) keep XP, streaks, daily progress and SRS
  records consistent. **`skipHydration: true`** + `<StoreHydrator/>` (in the root
  layout) rehydrate on the client after mount — this avoids SSR hydration
  mismatch. `<HydrationGate/>` shows a skeleton until `hydrated` flips true.
- `src/store/selectors.ts` — pure derivation (portfolio stats, review/discovery
  queues, analytics, achievement context). **No `useStore` import** (the store
  imports it). Reuse via `src/store/hooks.ts` (`usePortfolioStats`, etc.).
- All domain logic is **pure and framework-free in `src/lib/`** so it's reusable
  (future RN app / sync worker) and unit-testable.

## Directory map

```
src/app/                  # routes. (app)/ group = authed shell; onboarding/ + landing at root
src/components/ui/        # shadcn-style primitives (hand-written, not CLI-generated)
src/components/shared/    # domain components (badges, logo, rings, stat tiles)
src/components/discover/  # Discovery/Review session engine (session-runner, question-card)
src/components/practice/  # Context Practice engine (practice-runner)
src/lib/                  # pure domain logic (see below)
src/data/words/{b1..c2}.ts# vocabulary seed (RawWord[]); expanded in data/index.ts
src/store/                # Zustand store, selectors, hooks
supabase/                 # schema.sql, generated seed_vocabulary.sql, vocabulary.json
scripts/export-vocab.mjs  # regenerates the SQL/JSON seed from the TS data
```

## Key domain logic (`src/lib/`)

- `srs.ts` — mastery-score (0–100) driven Leitner SRS. Status (new/learning/
  known/mastered) and review intervals (1/3/7/21 days) are **derived** from the
  score. `gradeAnswer` is pure; callers persist the result.
- `xp.ts` — super-linear levels + "investor rank" titles.
- `achievements.ts` — 15 achievements; `computeAchievements` also unlocks live
  (raw ≥ target), so a badge can show unlocked before `finalizeSession` records it.
- `pos.ts` — **Spanish part-of-speech heuristic** + adjective agreement. Verbs
  detected reliably from the English gloss ("to ..."); adjectives via Spanish
  endings + override sets. `agreeAdjective(lemma, surface)` inflects gender/number.
- `practice.ts` — the 3 exercise generators. Sentence Completion keeps options
  the same POS (adjectives agree with the sentence; verbs stay infinitives since
  conjugating distractors isn't feasible) and blanks the **inflection-tolerant**
  surface form. Context Selection is a **cloze** (3 real same-category sentences,
  one blank each) — never inject a word into a foreign sentence.
- `pronunciation.ts` — deterministic Spanish→English phonetic respelling
  (`desarrollar` → `deh-sah-roh-YAHR`, stressed syllable CAPS). Replaced audio
  TTS (device speech engines usually lack a Spanish voice → fell back to English).
- `questions.ts` — Discovery MCQ builder (distractors prefer same CEFR level).

## Conventions

- Use the `cn()` helper and shadcn variant patterns. Tailwind theme tokens are
  CSS vars in `globals.css` (a CEFR color ramp + emerald "vault" primary).
- Numbers that read like money use `.tnum` (tabular figures).
- Toasts: `useToast().push(...)`. Icons: `<Icon name="..."/>` resolves lucide by
  string (used for category/achievement icons stored as strings).
- Feature pages are client components (`"use client"`); the root layout is the
  only server component.

## Verifying changes

1. `npm run typecheck` after every change; `npm run build` before shipping.
2. For **pure `src/lib` functions**, test deterministically with Node — these
   files have no path-alias imports, so Node's TS stripping works:
   ```bash
   node --experimental-strip-types -e "import('./src/lib/pronunciation.ts').then(m=>console.log(m.respell('desarrollar')))"
   ```
   This is how `pos.ts` and `pronunciation.ts` were validated (faster + more
   thorough than clicking through the UI).
3. For UI, use the preview tools. To exercise authed screens, seed
   `localStorage['fluentbank-store-v1']` with `{state:{...}, version:1}` matching
   the store's persisted shape, then navigate. **Note:** the seeded pool is
   verb/noun-heavy at low IDs — to test adjective agreement, seed adjective-range
   IDs or test `pos.ts` directly in Node.

## Deployment

- Vercel CLI is authenticated (`carneiromateus12-3618`); project is linked
  (`.vercel/` gitignored). Deploy: `npx vercel deploy --prod --yes`. Zero-config
  (no env vars needed for the local-first build).
- Git remote `origin` → GitHub; push with `git push origin main` (Git Credential
  Manager has auth). End commit messages with the Co-Authored-By trailer.

## Gotchas

- **Never nest a state setter inside another's updater** (e.g. `setRetries`
  inside `setQueue`) — StrictMode double-invokes updaters. Both session runners
  use a `finalizedRef` guard against double-finalize (would double-count XP).
- Vocabulary `exampleSentence` **must contain the word** (often inflected) — the
  practice engine blanks the word out of its own example.
- The `(app)` route-group dir name has literal parentheses; pass full paths.
