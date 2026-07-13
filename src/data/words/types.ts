import type { Category } from "@/types";

/**
 * Dense, hand-authored usage context for a word — the "how to actually use it"
 * layer a single example sentence can't carry. All fields are optional; words
 * without it fall back to a derived baseline (part-of-speech + pronunciation +
 * synonyms + example). Authored in level batches, C1→C2 first.
 */
export interface WordUsage {
  /**
   * Grammar detail the POS heuristic can't infer, shown as a chip beside the
   * derived part of speech: e.g. "reflexive", "m.", "f.", "+ de", "irregular".
   */
  grammar?: string;
  /** ONE dense line on how/when to use it and how it differs from its synonyms. */
  note?: string;
  /** 2–4 common collocations / set phrases the word appears in. */
  collocations?: string[];
  /**
   * 1–2 extra example sentences (beyond the primary `example`), chosen to show
   * the word in a different conjugation/form. NOT used by the practice engine,
   * so these may contain any inflection freely.
   */
  examples?: string[];
}

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
  /** Optional dense usage context surfaced in the portfolio dropdown + feedback. */
  usage?: WordUsage;
}
