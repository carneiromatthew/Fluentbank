import type { MultipleChoiceQuestion, VocabularyWord } from "@/types";
import { sample, shuffle } from "@/lib/utils";

/**
 * Build a 4-option definition question for the Discovery flow. Distractor
 * definitions are drawn preferentially from the same CEFR level so the wrong
 * answers stay plausible (no "obviously easier" giveaways).
 */
export function buildDefinitionQuestion(
  word: VocabularyWord,
  pool: VocabularyWord[],
  optionCount = 4,
): MultipleChoiceQuestion {
  const others = pool.filter(
    (w) => w.id !== word.id && w.definition !== word.definition,
  );
  const sameLevel = others.filter((w) => w.cefrLevel === word.cefrLevel);

  const distractorPool = sameLevel.length >= optionCount - 1 ? sameLevel : others;
  const distractors = dedupeDefinitions(sample(distractorPool, optionCount * 2), word.definition).slice(
    0,
    optionCount - 1,
  );

  const options = shuffle([word.definition, ...distractors.map((d) => d.definition)]);
  return {
    word,
    options,
    correctIndex: options.indexOf(word.definition),
  };
}

function dedupeDefinitions(words: VocabularyWord[], exclude: string): VocabularyWord[] {
  const seen = new Set<string>([exclude.toLowerCase()]);
  const out: VocabularyWord[] = [];
  for (const w of words) {
    const key = w.definition.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(w);
  }
  return out;
}
