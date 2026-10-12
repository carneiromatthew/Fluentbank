// Locating a vocabulary word inside its own example sentence so it can be
// blanked into a cloze. Pure and alias-free (testable directly with Node).
//
// The word usually appears inflected ("soler" → "Suelo", "sólido" → "sólidas"),
// so matching is accent-insensitive and tolerant of Spanish stem changes. Note
// JS `\b` is ASCII-only — it sees no boundary before "á"/"í" — so word edges are
// expressed with Unicode letter lookarounds instead.

export const BLANK = "_______";

export interface ClozeMatch {
  /** The sentence with the word replaced by BLANK. */
  blanked: string;
  /** The exact text that was blanked, e.g. "sólidas" for the lemma "sólido". */
  surface: string;
}

const NOT_AFTER_LETTER = "(?<![\\p{L}\\p{M}])";
const NOT_BEFORE_LETTER = "(?![\\p{L}\\p{M}])";

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Lowercase and strip accents (á→a, ü→u, ñ→n) for inflection-tolerant compares. */
function fold(s: string): string {
  return s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

// Preterite/future/irregular stems that share no usable prefix with the infinitive.
const IRREGULAR_STEMS: Record<string, string[]> = {
  ser: ["soy", "eres", "es", "somos", "son", "era", "fue", "fui", "sea", "sido", "siendo"],
  ir: ["voy", "vas", "va", "vamos", "van", "iba", "fue", "fui", "vaya", "yendo", "ido"],
  haber: ["he", "has", "ha", "hay", "hemos", "han", "hub", "habr", "haya"],
  estar: ["estoy", "estuv", "este"],
  tener: ["tuv", "tendr", "teng", "tien"],
  poder: ["pud", "podr", "pued"],
  poner: ["pus", "pondr", "pong", "puest"],
  querer: ["quis", "querr", "quier"],
  saber: ["sup", "sabr", "sep", "se"],
  venir: ["vin", "vendr", "veng", "vien"],
  decir: ["dij", "dir", "dig", "dic", "dich"],
  hacer: ["hic", "hiz", "har", "hag", "hech"],
  traer: ["traj", "traig"],
  dar: ["doy", "di", "dio", "dier", "de"],
  ver: ["veo", "ves", "ve", "vemos", "ven", "vi", "vio", "vist", "veia"],
  caber: ["cup", "cabr", "quep"],
  andar: ["anduv"],
  oir: ["oig", "oy"],
  caer: ["caig", "cay"],
  salir: ["salg", "saldr"],
  valer: ["valg", "valdr"],
  volver: ["vuelt"],
  morir: ["muert"],
  abrir: ["abiert"],
  escribir: ["escrit"],
  romper: ["rot"],
  resolver: ["resuelt"],
};

const VERB_ENDING = /(ar|er|ir)(se)?$/;

/** Replace the last occurrence of `from` in `s`. */
function replaceLast(s: string, from: string, to: string): string | null {
  const i = s.lastIndexOf(from);
  return i < 0 ? null : s.slice(0, i) + to + s.slice(i + from.length);
}

/**
 * Folded stems a form of `lemma` may start with. Covers regular inflection,
 * stem-changing verbs (e→ie, o→ue, e→i, …) and spelling changes (c→qu, z→c, …).
 */
function stemsOf(lemma: string): string[] {
  const base = fold(lemma);
  const stems = new Set<string>([base]);

  if (VERB_ENDING.test(base)) {
    const root = base.replace(VERB_ENDING, "");
    const roots = new Set<string>([root]);
    // Stem-vowel changes hit the last vowel of the root.
    for (const [from, to] of [
      ["e", "ie"], ["e", "i"], ["o", "ue"], ["o", "u"], ["u", "ue"], ["i", "ie"],
    ]) {
      const changed = replaceLast(root, from, to);
      if (changed) roots.add(changed);
    }
    // Spelling changes hit the final consonant(s) of the root.
    for (const r of [...roots]) {
      for (const [from, to] of [
        ["c", "qu"], ["c", "z"], ["c", "zc"], ["c", "j"], ["z", "c"], ["g", "gu"],
        ["g", "j"], ["gu", "g"], ["qu", "c"], ["u", "uy"], ["e", "ey"], ["a", "ay"],
      ]) {
        if (r.endsWith(from)) roots.add(r.slice(0, -from.length) + to);
      }
      roots.add(r + "g"); // tener → tengo, salir → salgo
    }
    for (const r of roots) stems.add(r);
    for (const s of IRREGULAR_STEMS[base.replace(/se$/, "")] ?? []) stems.add(s);
  } else {
    // Nouns/adjectives: gender & number swap the final vowel; -z pluralises to -ces.
    if (/[aeo]$/.test(base)) stems.add(base.slice(0, -1));
    if (base.endsWith("z")) stems.add(base.slice(0, -1) + "c");
    if (/(or|on|an|in|es)$/.test(base)) stems.add(base);
  }
  return [...stems];
}

/** Longest-inflection tail we accept after a stem (endings + attached clitics). */
const MAX_TAIL = 8;

function blankSpan(sentence: string, start: number, end: number): ClozeMatch {
  return {
    blanked: sentence.slice(0, start) + BLANK + sentence.slice(end),
    surface: sentence.slice(start, end),
  };
}

/** Find the single token of `sentence` that is the best inflected form of `lemma`. */
function locateToken(sentence: string, lemma: string): { start: number; end: number } | null {
  const stems = stemsOf(lemma);
  const lemmaLen = fold(lemma).length;
  let best: { start: number; end: number; score: number } | null = null;

  for (const m of sentence.matchAll(/[\p{L}\p{M}]+/gu)) {
    const token = fold(m[0]);
    for (const stem of stems) {
      if (!token.startsWith(stem)) continue;
      const tail = token.length - stem.length;
      // Short stems ("ve", "es") must match almost exactly, or "se" would claim
      // every "según". Longer stems may carry a full ending.
      if (stem.length < 3 ? tail > 0 : tail > MAX_TAIL) continue;
      if (stem.length < 4 && stem.length < lemmaLen - 3 && tail > 3) continue;
      const score = stem.length * 10 - tail;
      if (!best || score > best.score) {
        best = { start: m.index, end: m.index + m[0].length, score };
      }
    }
  }
  return best;
}

/**
 * Find `word` in `sentence` (as written, or inflected) and blank it. Returns
 * null when it can't be located confidently — callers must then avoid building
 * a cloze from this sentence rather than blank some other word.
 */
export function locateWord(sentence: string, word: string): ClozeMatch | null {
  const exact = new RegExp(`${NOT_AFTER_LETTER}${escapeRegExp(word)}${NOT_BEFORE_LETTER}`, "iu");
  const m = exact.exec(sentence);
  if (m) return blankSpan(sentence, m.index, m.index + m[0].length);

  const parts = word.trim().split(/\s+/);
  if (parts.length === 1) {
    const hit = locateToken(sentence, word);
    return hit ? blankSpan(sentence, hit.start, hit.end) : null;
  }

  // Multi-word lemma ("darse cuenta", "llevar a cabo"): locate each part in
  // order and blank the whole span, so the phrase isn't half-exposed.
  let cursor = 0;
  let start = -1;
  let end = -1;
  for (const part of parts) {
    const rest = sentence.slice(cursor);
    const hit = locateToken(rest, part);
    if (!hit) return null;
    if (start < 0) start = cursor + hit.start;
    end = cursor + hit.end;
    cursor = end;
  }
  return blankSpan(sentence, start, end);
}
