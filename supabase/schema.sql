-- ============================================================================
-- FluentBank — Supabase / PostgreSQL schema
--
-- Run this in the Supabase SQL editor (or `supabase db push`) to provision the
-- backend. The app runs local-first without it; set NEXT_PUBLIC_USE_SUPABASE=
-- true (plus URL + anon key) to switch persistence to this schema.
--
-- Design notes
--  * `vocabulary_words` is global, read-only reference data (publicly readable).
--  * Every user-owned table is protected by Row Level Security so a user can
--    only ever see/modify their own rows (auth.uid() = user_id).
--  * The client store in src/store/useStore.ts maps 1:1 onto these tables.
-- ============================================================================

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------------
do $$ begin
  create type cefr_level as enum ('B1', 'B2', 'C1', 'C2');
exception when duplicate_object then null; end $$;

do $$ begin
  create type mastery_status as enum ('new', 'learning', 'known', 'mastered');
exception when duplicate_object then null; end $$;

do $$ begin
  create type session_type as enum ('discovery', 'review', 'practice');
exception when duplicate_object then null; end $$;

-- ---------------------------------------------------------------------------
-- profiles  (1:1 with auth.users)
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id              uuid primary key references auth.users (id) on delete cascade,
  display_name    text not null default 'Investor',
  language_code   text not null default 'es',
  current_level   cefr_level not null default 'B1',
  target_level    cefr_level not null default 'C1',
  daily_goal      int not null default 7 check (daily_goal between 1 and 50),
  xp              int not null default 0 check (xp >= 0),
  current_streak  int not null default 0,
  longest_streak  int not null default 0,
  last_active_date date,
  perfect_sessions int not null default 0,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- vocabulary_words  (global reference data)
-- ---------------------------------------------------------------------------
create table if not exists public.vocabulary_words (
  id               text primary key,                 -- e.g. 'b1-001'
  language_code    text not null default 'es',
  word             text not null,
  definition       text not null,
  example_sentence text not null,
  cefr_level       cefr_level not null,
  category         text not null,
  synonyms         text[] not null default '{}',
  created_at       timestamptz not null default now()
);

create index if not exists idx_vocab_level on public.vocabulary_words (cefr_level);
create index if not exists idx_vocab_category on public.vocabulary_words (category);
create index if not exists idx_vocab_language on public.vocabulary_words (language_code);

-- ---------------------------------------------------------------------------
-- user_vocabulary  (per-word SRS record — the portfolio)
-- ---------------------------------------------------------------------------
create table if not exists public.user_vocabulary (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users (id) on delete cascade,
  word_id         text not null references public.vocabulary_words (id) on delete cascade,
  status          mastery_status not null default 'new',
  mastery_score   numeric(5,2) not null default 0 check (mastery_score between 0 and 100),
  times_correct   int not null default 0,
  times_incorrect int not null default 0,
  streak          int not null default 0,
  banked          boolean not null default false,
  added_at        timestamptz not null default now(),
  date_learned    timestamptz,
  last_reviewed   timestamptz,
  next_review     timestamptz,
  unique (user_id, word_id)
);

create index if not exists idx_uv_user on public.user_vocabulary (user_id);
create index if not exists idx_uv_due on public.user_vocabulary (user_id, next_review);
create index if not exists idx_uv_banked on public.user_vocabulary (user_id, banked);

-- ---------------------------------------------------------------------------
-- review_queue  (explicit due list; the app can also derive this from
-- user_vocabulary.next_review, but it is modelled here per the spec)
-- ---------------------------------------------------------------------------
create table if not exists public.review_queue (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  word_id    text not null references public.vocabulary_words (id) on delete cascade,
  due_at     timestamptz not null default now(),
  reason     text not null default 'scheduled',       -- 'scheduled' | 'missed'
  created_at timestamptz not null default now(),
  unique (user_id, word_id)
);

create index if not exists idx_rq_user_due on public.review_queue (user_id, due_at);

-- ---------------------------------------------------------------------------
-- practice_sessions  (completed study sessions)
-- ---------------------------------------------------------------------------
create table if not exists public.practice_sessions (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references auth.users (id) on delete cascade,
  type           session_type not null,
  exercise_type  text,
  words_reviewed int not null default 0,
  correct        int not null default 0,
  incorrect      int not null default 0,
  xp_earned      int not null default 0,
  completed_at   timestamptz not null default now()
);

create index if not exists idx_ps_user on public.practice_sessions (user_id, completed_at desc);

-- ---------------------------------------------------------------------------
-- achievements  (unlocked badges per user)
-- ---------------------------------------------------------------------------
create table if not exists public.achievements (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users (id) on delete cascade,
  achievement_key text not null,                       -- matches lib/achievements.ts ids
  unlocked_at     timestamptz not null default now(),
  unique (user_id, achievement_key)
);

create index if not exists idx_ach_user on public.achievements (user_id);

-- ---------------------------------------------------------------------------
-- daily_progress  (per-day aggregates for analytics & streaks)
-- ---------------------------------------------------------------------------
create table if not exists public.daily_progress (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references auth.users (id) on delete cascade,
  date           date not null,
  words_learned  int not null default 0,
  words_reviewed int not null default 0,
  correct        int not null default 0,
  incorrect      int not null default 0,
  xp_earned      int not null default 0,
  unique (user_id, date)
);

create index if not exists idx_dp_user_date on public.daily_progress (user_id, date desc);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.profiles          enable row level security;
alter table public.vocabulary_words  enable row level security;
alter table public.user_vocabulary   enable row level security;
alter table public.review_queue       enable row level security;
alter table public.practice_sessions enable row level security;
alter table public.achievements      enable row level security;
alter table public.daily_progress    enable row level security;

-- Reference data: readable by anyone (anon + authenticated).
drop policy if exists "vocab is readable" on public.vocabulary_words;
create policy "vocab is readable" on public.vocabulary_words
  for select using (true);

-- Helper macro pattern: owner-only access. Repeated per table because Postgres
-- policies cannot be parameterised across tables.
drop policy if exists "own profile" on public.profiles;
create policy "own profile" on public.profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "own vocabulary" on public.user_vocabulary;
create policy "own vocabulary" on public.user_vocabulary
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "own review queue" on public.review_queue;
create policy "own review queue" on public.review_queue
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "own sessions" on public.practice_sessions;
create policy "own sessions" on public.practice_sessions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "own achievements" on public.achievements;
create policy "own achievements" on public.achievements
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "own daily progress" on public.daily_progress;
create policy "own daily progress" on public.daily_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- Triggers
-- ---------------------------------------------------------------------------
-- Keep profiles.updated_at fresh.
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end; $$;

drop trigger if exists trg_profiles_updated on public.profiles;
create trigger trg_profiles_updated
  before update on public.profiles
  for each row execute function public.touch_updated_at();

-- Auto-provision a profile row when a new auth user signs up.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', 'Investor'))
  on conflict (id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================================
-- Next: import the vocabulary with `supabase/seed_vocabulary.sql`.
-- ============================================================================
