// Hand-authored database types mirroring supabase/schema.sql. Replace with the
// output of `supabase gen types typescript` once your project is provisioned.

import type { CefrLevel, MasteryStatus, SessionType, WordUsage } from "@/types";

export interface ProfileRow {
  id: string;
  display_name: string;
  language_code: string;
  current_level: CefrLevel;
  target_level: CefrLevel;
  daily_goal: number;
  xp: number;
  current_streak: number;
  longest_streak: number;
  last_active_date: string | null;
  perfect_sessions: number;
  created_at: string;
  updated_at: string;
}

export interface VocabularyWordRow {
  id: string;
  language_code: string;
  word: string;
  definition: string;
  example_sentence: string;
  cefr_level: CefrLevel;
  category: string;
  synonyms: string[];
  usage: WordUsage | null;
  created_at: string;
}

export interface UserVocabularyRow {
  id: string;
  user_id: string;
  word_id: string;
  status: MasteryStatus;
  mastery_score: number;
  times_correct: number;
  times_incorrect: number;
  streak: number;
  banked: boolean;
  added_at: string;
  date_learned: string | null;
  last_reviewed: string | null;
  next_review: string | null;
}

export interface PracticeSessionRow {
  id: string;
  user_id: string;
  type: SessionType;
  exercise_type: string | null;
  words_reviewed: number;
  correct: number;
  incorrect: number;
  xp_earned: number;
  completed_at: string;
}

export interface DailyProgressRow {
  id: string;
  user_id: string;
  date: string;
  words_learned: number;
  words_reviewed: number;
  correct: number;
  incorrect: number;
  xp_earned: number;
}

export interface AchievementRow {
  id: string;
  user_id: string;
  achievement_key: string;
  unlocked_at: string;
}

type Row<T> = { Row: T; Insert: Partial<T>; Update: Partial<T> };

export interface Database {
  public: {
    Tables: {
      profiles: Row<ProfileRow>;
      vocabulary_words: Row<VocabularyWordRow>;
      user_vocabulary: Row<UserVocabularyRow>;
      practice_sessions: Row<PracticeSessionRow>;
      daily_progress: Row<DailyProgressRow>;
      achievements: Row<AchievementRow>;
    };
  };
}
