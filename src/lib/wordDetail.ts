// Composes the *derived* baseline (part of speech) with any *authored* usage
// detail into a single display label, so the dense word entry never looks empty
// even before its `usage` content has been written. Pure + import-light
// (reuses the existing POS heuristic) so it stays unit-testable.

import { posOf } from "@/lib/pos";
import type { VocabularyWord } from "@/types";

/**
 * Display label for the part-of-speech chip, e.g. "verb", "verb · reflexive",
 * "noun · m.", "adjective". The base POS is derived via `posOf`; the suffix is
 * the hand-authored `usage.grammar` detail the heuristic can't know (gender,
 * reflexivity, governed prepositions, irregularity).
 */
export function posLabel(
  word: Pick<VocabularyWord, "word" | "definition" | "usage">,
): string {
  const base = posOf(word);
  const grammar = word.usage?.grammar?.trim();
  return grammar ? `${base} · ${grammar}` : base;
}

/** True when a word carries any authored usage content worth a dropdown. */
export function hasUsage(word: Pick<VocabularyWord, "usage">): boolean {
  const u = word.usage;
  return Boolean(
    u &&
      (u.note ||
        u.grammar ||
        (u.collocations && u.collocations.length > 0) ||
        (u.examples && u.examples.length > 0)),
  );
}

/**
 * Locate the inflected surface form of `lemma` in `sentence` so the UI can bold
 * it (e.g. "consolidó" for the lemma "consolidar"). Tries an exact match first,
 * then a tolerant prefix match for conjugations/stem changes. Returns null if
 * the form can't be confidently located (caller renders the sentence plain).
 */
export function findWordForm(sentence: string, lemma: string): { index: number; length: number } | null {
  const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Require no trailing letter so an accented suffix (e.g. "acaecer·ía") doesn't
  // count as a boundary — that case falls through to the prefix match below,
  // which captures the whole inflected form.
  const exact = new RegExp(`\\b${esc(lemma)}(?![a-záéíóúüñ])`, "i");
  const em = exact.exec(sentence);
  if (em) return { index: em.index, length: em[0].length };

  const lower = lemma.toLowerCase();
  for (let p = Math.min(6, lower.length); p >= 3; p--) {
    const re = new RegExp(`\\b${esc(lower.slice(0, p))}[a-záéíóúüñ]*`, "gi");
    let m: RegExpExecArray | null;
    while ((m = re.exec(sentence))) {
      if (m[0].length >= Math.max(4, p)) return { index: m.index, length: m[0].length };
    }
  }
  return null;
}
