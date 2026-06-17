// Generators for the three Context Practice exercise types. All operate on the
// user's *banked* words so practice reinforces what's already in the portfolio.

import type { PracticeExerciseType, VocabularyWord } from "@/types";
import { sample, shuffle } from "@/lib/utils";

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

const BLANK = "_______";

/** Replace the (first) occurrence of a word in a sentence with a blank. */
function blankOut(sentence: string, word: string): string {
  const re = new RegExp(`\\b${escapeRegExp(word)}\\b`, "i");
  if (re.test(sentence)) return sentence.replace(re, BLANK);
  // Fallback: handle simple inflections by matching the stem.
  const stem = word.length > 4 ? word.slice(0, Math.ceil(word.length * 0.7)) : word;
  const stemRe = new RegExp(`\\b${escapeRegExp(stem)}\\w*`, "i");
  return stemRe.test(sentence) ? sentence.replace(stemRe, BLANK) : `${sentence} (${BLANK})`;
}

function swapWord(sentence: string, from: string, to: string): string {
  const re = new RegExp(`\\b${escapeRegExp(from)}\\b`, "i");
  if (re.test(sentence)) return sentence.replace(re, to);
  const stem = from.length > 4 ? from.slice(0, Math.ceil(from.length * 0.7)) : from;
  const stemRe = new RegExp(`\\b${escapeRegExp(stem)}\\w*`, "i");
  return stemRe.test(sentence) ? sentence.replace(stemRe, to) : sentence;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Exercise 1 — Sentence Completion: choose the word that fits the blank. */
export function buildSentenceCompletion(
  word: VocabularyWord,
  pool: VocabularyWord[],
): PracticeQuestion {
  const distractors = sample(
    pool.filter((w) => w.id !== word.id),
    3,
  ).map((w) => w.word);
  const options = shuffle([word.word, ...distractors]);
  return {
    id: `sc_${word.id}`,
    type: "sentence-completion",
    word,
    prompt: "Complete the sentence with the correct word.",
    sentence: blankOut(word.exampleSentence, word.word),
    options,
    correctIndex: options.indexOf(word.word),
    explanation: `"${word.word}" — ${word.definition}.`,
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

/** Exercise 3 — Context Selection: which sentence uses the word correctly? */
export function buildContextSelection(
  word: VocabularyWord,
  pool: VocabularyWord[],
): PracticeQuestion {
  // The real example is the only correct usage. Decoys reuse two other words'
  // sentences with the target word forced in — grammatically plausible, wrong.
  const donors = sample(
    pool.filter((w) => w.id !== word.id),
    2,
  );
  const decoys = donors.map((d) => swapWord(d.exampleSentence, d.word, word.word));
  const options = shuffle([word.exampleSentence, ...decoys]);
  return {
    id: `cs_${word.id}`,
    type: "context-selection",
    word,
    prompt: `In which sentence is "${word.word}" used correctly?`,
    options,
    correctIndex: options.indexOf(word.exampleSentence),
    explanation: `"${word.word}" means ${word.definition}.`,
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
    blurb: "Spot the sentence that uses the word correctly.",
    icon: "ScanSearch",
  },
};
