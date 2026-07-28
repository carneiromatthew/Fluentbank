import type { VocabularyWord } from "@/types";
import { posLabel, findWordForm } from "@/lib/wordDetail";
import { cn } from "@/lib/utils";

/** An example sentence with the word's inflected form bolded for emphasis. */
function ExampleLine({ sentence, lemma }: { sentence: string; lemma: string }) {
  const m = findWordForm(sentence, lemma);
  return (
    <p className="text-sm italic text-muted-foreground">
      “
      {m ? (
        <>
          {sentence.slice(0, m.index)}
          <strong className="font-semibold not-italic text-foreground/90">
            {sentence.slice(m.index, m.index + m.length)}
          </strong>
          {sentence.slice(m.index + m.length)}
        </>
      ) : (
        sentence
      )}
      ”
    </p>
  );
}

/**
 * Dense, dictionary-style usage entry for a word. Shows the additive context a
 * single example sentence can't carry — part of speech (+ grammar), a usage
 * note, collocations and synonyms — layered on a derived baseline so it's never
 * empty. Reused by the portfolio dropdown (full) and exercise feedback
 * (`compact` → part-of-speech chip + usage note only).
 */
export function WordDetail({
  word,
  compact = false,
  className,
}: {
  word: VocabularyWord;
  compact?: boolean;
  className?: string;
}) {
  const usage = word.usage;

  return (
    <div className={cn(compact ? "space-y-2" : "space-y-3", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
          {posLabel(word)}
        </span>
      </div>

      {usage?.note && <p className="text-sm leading-relaxed text-foreground/90">{usage.note}</p>}

      {!compact && usage?.examples && usage.examples.length > 0 && (
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            In other forms
          </p>
          <div className="mt-1 space-y-1">
            {usage.examples.map((s) => (
              <ExampleLine key={s} sentence={s} lemma={word.word} />
            ))}
          </div>
        </div>
      )}

      {!compact && usage?.collocations && usage.collocations.length > 0 && (
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Collocations
          </p>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {usage.collocations.map((c) => (
              <span
                key={c}
                className="rounded-lg bg-muted px-2 py-0.5 text-xs text-foreground/80"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      )}

      {!compact && word.synonyms.length > 0 && (
        <p className="text-xs text-muted-foreground">
          <span className="font-medium">Synonyms:</span> {word.synonyms.join(", ")}
        </p>
      )}
    </div>
  );
}
