# FluentBank 🏦

> **Vocabulary learned is deposited into your FluentBank.**

A structured vocabulary mastery platform that helps learners build the lexical
foundation needed to climb the CEFR ladder — **B1 → B2 → C1 → C2**. The first
edition ships **508 curated Spanish words**, but the architecture is
language-agnostic and designed to scale to tens of thousands.

FluentBank reframes language learning as *building a portfolio*: every word you
master is a **deposit**, your vocabulary is an **asset**, and a smart spaced-
repetition engine keeps that portfolio healthy.

---

## ✨ Highlights

- **Daily Discovery** — multiple-choice meaning checks tuned to your target
  level; correct answers are "deposited" into your portfolio.
- **FluentBank Portfolio** — an investment-dashboard view of every word you own,
  with search, filtering (level / category / mastery) and sorting.
- **Spaced Repetition** — a mastery-score-driven Leitner engine (New → Learning →
  Known → Mastered) that resurfaces weak words and rests strong ones.
- **Context Practice** — three reinforcement exercise types: Sentence Completion,
  Meaning Recognition and Context Selection.
- **Dashboard & Analytics** — streaks, XP, per-level CEFR progress, accuracy
  trends, hardest categories and hardest words (Recharts).
- **Gamification** — XP, levels with investor ranks, streaks and 15 achievements.
- **Polished, mobile-first UX** — light/dark themes, responsive shell, subtle
  fintech-inspired styling.
- **Runs with zero setup** — local-first persistence (localStorage). Optional
  Supabase backend for auth + cross-device sync.

---

## 🧱 Tech stack

| Layer | Choice |
| --- | --- |
| Framework | **Next.js 14** (App Router) + **React 18** + **TypeScript** |
| Styling | **Tailwind CSS** + shadcn-style component primitives |
| State | **Zustand** (with `persist` → localStorage) |
| Charts | **Recharts** |
| Icons | **lucide-react** |
| Backend (optional) | **Supabase** (PostgreSQL + Auth + RLS) |

---

## 🚀 Getting started

Requirements: **Node 18.18+** (Node 20+ recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the app
#    http://localhost:3000
```

That's it — the app runs fully **local-first**. Your profile, portfolio, XP and
history are stored in your browser. No account or environment variables needed.

### Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run export:vocab` | Regenerate `supabase/seed_vocabulary.sql` + `vocabulary.json` from the TS seed data |

---

## ▲ Deploy to Vercel

The app is **zero-config** on Vercel — Next.js is auto-detected and no
environment variables are required (it runs local-first). Two ways:

**Option A — Vercel CLI (fastest, no GitHub needed):**

```bash
cd fluentbank
npx vercel          # first run: log in via browser, accept the detected defaults
npx vercel --prod   # promote to a production URL
```

**Option B — GitHub + Vercel dashboard (gives push-to-deploy):**

```bash
# create a repo and push (replace with your account)
gh repo create fluentbank --private --source=. --push
# then go to vercel.com → "Add New… → Project" → import the repo → Deploy
```

To enable the Supabase backend on a deployment, add `NEXT_PUBLIC_SUPABASE_URL`,
`NEXT_PUBLIC_SUPABASE_ANON_KEY` and `NEXT_PUBLIC_USE_SUPABASE=true` under the
project's **Environment Variables** in Vercel, then redeploy.

---

## 🗂️ Project structure

```
fluentbank/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout (fonts, theme, providers)
│   │   ├── page.tsx              # Marketing landing
│   │   ├── onboarding/           # Level + goal selection
│   │   └── (app)/                # Authenticated app shell
│   │       ├── dashboard/        # Overview + CEFR progress
│   │       ├── discover/         # Daily Discovery & Review sessions
│   │       ├── portfolio/        # Vocabulary portfolio
│   │       ├── practice/         # Context Practice (3 exercise types)
│   │       ├── analytics/        # Charts & insights
│   │       ├── achievements/     # Badges
│   │       └── settings/         # Profile, goals, data management
│   ├── components/
│   │   ├── ui/                   # shadcn-style primitives (button, card, …)
│   │   ├── shared/               # Domain components (badges, logo, rings)
│   │   ├── app/                  # App shell, nav, theme toggle
│   │   ├── discover/             # Discovery session engine
│   │   └── practice/             # Practice session engine
│   ├── data/
│   │   ├── words/{b1,b2,c1,c2}.ts# Curated vocabulary (508 words)
│   │   └── index.ts              # Expands + indexes the bank
│   ├── lib/                      # Domain logic (srs, xp, achievements, cefr…)
│   ├── store/                    # Zustand store, selectors, hooks
│   └── types/                    # Shared TypeScript types
├── supabase/
│   ├── schema.sql                # Tables, RLS, indexes, triggers
│   ├── seed_vocabulary.sql       # Generated INSERTs for vocabulary_words
│   └── vocabulary.json           # Generated JSON export
└── scripts/export-vocab.mjs      # Seed generator
```

---

## 🧠 How the learning engine works

### Mastery & spaced repetition (`src/lib/srs.ts`)

Each word the user touches carries a continuous **mastery score (0–100)**. The
four mastery boxes — and their review intervals — are *derived* from it:

| Status | Score | Next review |
| --- | --- | --- |
| New | 0–24 | +1 day |
| Learning | 25–54 | +3 days |
| Known | 55–84 | +7 days |
| Mastered | 85–100 | +21 days |

- **Correct** answers raise the score with diminishing returns (fast early gains,
  hard to fully master).
- **Incorrect** answers lower it and resurface the word the next day — and within
  a Discovery session missed words are re-queued until answered correctly.
- Review priority weights *low mastery* and *overdue* words highest, so the most
  valuable items surface first.

### XP, levels & gamification (`src/lib/xp.ts`, `src/lib/achievements.ts`)

XP is awarded per correct answer, weighted by CEFR difficulty (C2 words are worth
2× a B1 word) with bonuses for first deposits, promotions and streaks. Levels
follow a gently super-linear curve and map to "investor rank" titles. 15
achievements track milestones (First Deposit, 100 Words Saved, B2 Builder, C1
Challenger, Vocabulary Investor 30-day streak, and more).

---

## 🔌 Connecting Supabase (optional)

The app is production-ready to run on Supabase for authentication and
cross-device persistence.

1. **Create a project** at [supabase.com](https://supabase.com).
2. **Provision the schema** — open the SQL editor and run:
   - `supabase/schema.sql` (tables, RLS, indexes, triggers)
   - `supabase/seed_vocabulary.sql` (the 508-word reference bank)
3. **Configure env** — copy `.env.local.example` to `.env.local` and fill in:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR-ANON-KEY
   NEXT_PUBLIC_USE_SUPABASE=true
   ```
4. Restart the dev server.

### Data model

The Supabase schema maps 1:1 onto the client store:

| Table | Purpose |
| --- | --- |
| `profiles` | User profile, level targets, XP, streak (1:1 with `auth.users`) |
| `vocabulary_words` | Global, read-only reference bank |
| `user_vocabulary` | Per-word SRS record (the portfolio) |
| `review_queue` | Explicit due list (also derivable from `next_review`) |
| `practice_sessions` | Completed study sessions |
| `achievements` | Unlocked badges per user |
| `daily_progress` | Per-day aggregates for analytics & streaks |

Every user-owned table is protected by **Row Level Security** (`auth.uid() =
user_id`); `vocabulary_words` is publicly readable. A trigger auto-creates a
`profiles` row on signup.

The typed browser client lives in `src/lib/supabase/client.ts` and is gated by
`isSupabaseEnabled()`, so callers transparently fall back to local storage.

---

## 🌍 Adding another language

The model is language-agnostic — a `VocabularyWord` carries a `languageCode`. To
add (say) French: create `src/data/words/fr-*.ts` files, register them in
`src/data/index.ts`, and extend the `LanguageCode` type. No engine changes are
required.

---

## 🛣️ Roadmap

- **Phase 1 (shipped)** — Auth-ready onboarding, Daily Discovery, Portfolio,
  Spaced Repetition, Dashboard.
- **Phase 2 (shipped)** — Context Practice, Analytics, Achievements.
- **Phase 3 (next)** — AI-generated exercises, personalized recommendations,
  audio pronunciation (a Web Speech hook is already wired into Discovery),
  additional languages, and a React Native client sharing the `lib/` domain core.

---

## 📦 Notes

- Curated dataset: **508 words** (B1 ×131 · B2 ×129 · C1 ×124 · C2 ×124) across 16
  categories, each with definition, example sentence and synonyms.
- The architecture keeps all learning logic pure and framework-free in `src/lib`,
  so it can be reused by a future mobile app or server-side sync worker.
