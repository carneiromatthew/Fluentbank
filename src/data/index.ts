import type { CefrLevel, LanguageCode, VocabularyWord } from "@/types";
import { B1_WORDS } from "./words/b1";
import { B2_WORDS } from "./words/b2";
import { C1_WORDS } from "./words/c1";
import { C2_WORDS } from "./words/c2";
import type { RawWord } from "./words/types";

const LANGUAGE: LanguageCode = "es";

/** Expand terse authoring records into full, id-stamped vocabulary words. */
function expand(level: CefrLevel, raws: RawWord[]): VocabularyWord[] {
  return raws.map((r, i) => ({
    id: `${level.toLowerCase()}-${String(i + 1).padStart(3, "0")}`,
    languageCode: LANGUAGE,
    word: r.word,
    definition: r.definition,
    exampleSentence: r.example,
    cefrLevel: level,
    category: r.category,
    synonyms: r.synonyms ?? [],
  }));
}

/** The full Spanish vocabulary bank, ordered B1 → C2. */
export const VOCABULARY: VocabularyWord[] = [
  ...expand("B1", B1_WORDS),
  ...expand("B2", B2_WORDS),
  ...expand("C1", C1_WORDS),
  ...expand("C2", C2_WORDS),
];

/** O(1) lookup by id. */
export const VOCAB_BY_ID: Map<string, VocabularyWord> = new Map(
  VOCABULARY.map((w) => [w.id, w]),
);

export function getWord(id: string): VocabularyWord | undefined {
  return VOCAB_BY_ID.get(id);
}

export function wordsByLevel(level: CefrLevel): VocabularyWord[] {
  return VOCABULARY.filter((w) => w.cefrLevel === level);
}

/** Count of words available per level — used by progress denominators. */
export const LEVEL_TOTALS: Record<CefrLevel, number> = {
  B1: wordsByLevel("B1").length,
  B2: wordsByLevel("B2").length,
  C1: wordsByLevel("C1").length,
  C2: wordsByLevel("C2").length,
};

export const TOTAL_WORDS = VOCABULARY.length;
