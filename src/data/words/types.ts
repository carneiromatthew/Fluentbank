import type { Category } from "@/types";

/**
 * Compact authoring shape for seed data. `id`, `cefrLevel` and `languageCode`
 * are derived when the per-level lists are expanded in `data/index.ts`, so the
 * raw files stay terse and merge-friendly. Every `example` MUST contain `word`
 * (the practice engine blanks the word out of its own example sentence).
 */
export interface RawWord {
  word: string;
  definition: string;
  example: string;
  category: Category;
  synonyms?: string[];
}
