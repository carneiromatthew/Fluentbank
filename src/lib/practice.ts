// Generators for the three Context Practice exercise types. All operate on the
// user's *banked* words so practice reinforces what's already in the portfolio.

import type { PracticeExerciseType, VocabularyWord } from "@/types";
import { sample, shuffle } from "@/lib/utils";
import { posOf, agreeAdjective } from "@/lib/pos";
import { locateWord } from "@/lib/cloze";

export interface PracticeQuestion {
  id: string;
  type: PracticeExerciseType;
  /** The word being reinforced. */
  word: VocabularyWord;
  prompt: string;
  /** Optional sub-prompt, e.g. the sentence with a blank. */
  sentence?: string;
  options: string[];
  correctIndex: number;
  /** Shown after answering. */
  explanation: string;
}

/** Exercise 1 — Sentence Completion: choose the word that fits the blank. */
export function buildSentenceCompletion(
  word: VocabularyWord,
  pool: VocabularyWord[],
): PracticeQuestion {
  const cap = locateWord(word.exampleSentence, word.word);
  // Never blank some other word (that leaves the answer visible in the sentence).
  if (!cap) return buildMeaningRecognition(word, pool);
  const { surface, blanked } = cap;
  const targetPos = posOf(word);

  // Correct answer: adjectives & nouns show the exact in-sentence form; verbs
  // show the infinitive — conjugating distractors to match an arbitrary tense
  // isn't feasible, so all verb options stay infinitives (internally consistent).
  const correct = targetPos === "verb" ? word.word : surface;

  // Keep distractors the same part of speech, and (for adjectives) agree them in
  // gender/number with the form the sentence actually requires.
  const samePos = pool.filter((w) => w.id !== word.id && posOf(w) === targetPos);
  const picks = sample(samePos.length >= 3 ? samePos : pool.filter((w) => w.id !== word.id), 8);

  const seen = new Set([correct.toLowerCase()]);
  const distractors: string[] = [];
  for (const w of picks) {
    const form = targetPos === "adjective" ? agreeAdjective(w.word, surface) : w.word;
    if (!seen.has(form.toLowerCase())) {
      seen.add(form.toLowerCase());
      distractors.push(form);
    }
    if (distractors.length === 3) break;
  }

  const options = shuffle([correct, ...distractors]);
  return {
    id: `sc_${word.id}`,
    type: "sentence-completion",
    word,
    prompt: "Complete the sentence with the correct word.",
    sentence: blanked,
    options,
    correctIndex: options.indexOf(correct),
    // Show the word back in its slot — the completed sentence, nothing else.
    // (Dense context — part of speech + usage note — is rendered separately.)
    explanation: word.exampleSentence,
  };
}

/** Exercise 2 — Meaning Recognition: pick the closest meaning/synonym. */
export function buildMeaningRecognition(
  word: VocabularyWord,
  pool: VocabularyWord[],
): PracticeQuestion {
  // Prefer a real synonym as the "correct" answer when we have one; otherwise
  // fall back to the English definition.
  const hasSynonym = word.synonyms.length > 0;
  const correct = hasSynonym ? word.synonyms[0] : word.definition;
  const distractors = hasSynonym
    ? buildSynonymDistractors(word, pool)
    : sample(
        pool.filter((w) => w.id !== word.id && w.definition !== word.definition),
        3,
      ).map((w) => w.definition);

  const options = shuffle([correct, ...distractors]).slice(0, 4);
  return {
    id: `mr_${word.id}`,
    type: "meaning-recognition",
    word,
    prompt: hasSynonym
      ? `Which word is closest in meaning to "${word.word}"?`
      : `What does "${word.word}" mean?`,
    options,
    correctIndex: options.indexOf(correct),
    explanation: `"${word.word}" means ${word.definition}${
      hasSynonym ? ` (e.g. ${word.synonyms.join(", ")})` : ""
    }.`,
  };
}

function buildSynonymDistractors(word: VocabularyWord, pool: VocabularyWord[]): string[] {
  const candidates = pool.filter(
    (w) => w.id !== word.id && !word.synonyms.includes(w.word),
  );
  const picks = sample(candidates, 6);
  const out: string[] = [];
  for (const w of picks) {
    const opt = w.synonyms[0] ?? w.word;
    if (!out.includes(opt) && opt !== word.word) out.push(opt);
    if (out.length === 3) break;
  }
  return out;
}

/**
 * Exercise 3 — Context Selection: a cloze. The user sees three real, grammatical
 * sentences (each with one word blanked) and picks the one the target word
 * correctly completes. Decoys come from the same category where possible, so the
 * wrong options are plausible rather than obviously off.
 */
export function buildContextSelection(
  word: VocabularyWord,
  pool: VocabularyWord[],
): PracticeQuestion {
  const target = locateWord(word.exampleSentence, word.word);
  if (!target) return buildMeaningRecognition(word, pool);

  // Decoys are sentences whose blank takes a *different* part of speech, so the
  // target can't also be a defensible answer there (two same-category nouns
  // like "ámbito"/"alcance" are often interchangeable). Same category first.
  const targetPos = posOf(word);
  const others = pool.filter((w) => w.id !== word.id);
  const tiers = [
    others.filter((w) => posOf(w) !== targetPos && w.category === word.category),
    others.filter((w) => posOf(w) !== targetPos),
    others,
  ];
  const correct = target.blanked;
  const decoys: string[] = [];
  for (const tier of tiers) {
    for (const d of shuffle(tier)) {
      const blanked = locateWord(d.exampleSentence, d.word)?.blanked;
      if (blanked && blanked !== correct && !decoys.includes(blanked)) decoys.push(blanked);
      if (decoys.length === 2) break;
    }
    if (decoys.length === 2) break;
  }
  if (decoys.length < 2) return buildMeaningRecognition(word, pool);

  const options = shuffle([correct, ...decoys]);
  return {
    id: `cs_${word.id}`,
    type: "context-selection",
    word,
    prompt: `Which sentence does “${word.word}” correctly complete?`,
    options,
    correctIndex: options.indexOf(correct),
    explanation: `${word.exampleSentence} (${word.definition})`,
  };
}

export const PRACTICE_LABELS: Record<PracticeExerciseType, { title: string; blurb: string; icon: string }> = {
  "sentence-completion": {
    title: "Sentence Completion",
    blurb: "Drop the right word into a real sentence.",
    icon: "PencilLine",
  },
  "meaning-recognition": {
    title: "Meaning Recognition",
    blurb: "Match a word to its closest meaning.",
    icon: "Lightbulb",
  },
  "context-selection": {
    title: "Context Selection",
    blurb: "Pick the sentence the word correctly completes.",
    icon: "ScanSearch",
  },
};
