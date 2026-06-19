// Deterministic Spanish → English-reader phonetic respelling.
//   "desarrollar" -> "deh-sah-roh-YAHR"   (stressed syllable in CAPS)
//
// Spanish spelling is highly phonetic, so a rule-based transcription is reliable
// and works everywhere — no device speech engine required. Uses Latin-American
// "seseo" (c before e/i and z both sound like "s").

const ACCENT_MAP: Record<string, string> = {
  á: "a", é: "e", í: "i", ó: "o", ú: "u", ü: "u",
};
const VOWELS = new Set("aeiouáéíóúü".split(""));
const STRONG = new Set("aeoáéó".split(""));
const CLUSTERS = new Set([
  "pr", "br", "tr", "dr", "cr", "gr", "fr", "pl", "bl", "cl", "gl", "fl",
]);

const stripAccent = (c: string) => ACCENT_MAP[c] ?? c;
const isVowel = (c: string) => VOWELS.has(c);

/** Two adjacent vowels share a syllable unless they form a hiatus. */
function combines(a: string, b: string): boolean {
  if (a === "í" || a === "ú" || b === "í" || b === "ú") return false; // accented weak → hiatus
  if (STRONG.has(a) && STRONG.has(b)) return false; // two strong vowels → hiatus
  return true;
}

/** How many of the consonants between two vowels stay with the left syllable. */
function splitConsonants(cons: string): number {
  if (cons.length <= 1) return 0;
  if (cons.length === 2) return CLUSTERS.has(cons) ? 0 : 1;
  if (cons.length === 3) return CLUSTERS.has(cons.slice(1)) ? 1 : 2;
  return 2;
}

function unplaceholder(s: string): string {
  return s.replace(/C/g, "ch").replace(/L/g, "ll").replace(/R/g, "rr");
}

/** Split a Spanish word into syllables. */
function syllabify(word: string): string[] {
  // Collapse inseparable digraphs to single placeholder consonants.
  const w = word.toLowerCase().replace(/ch/g, "C").replace(/ll/g, "L").replace(/rr/g, "R");
  const n = w.length;
  const V = (i: number) => i >= 0 && i < n && isVowel(w[i]);

  const nuclei: Array<[number, number]> = [];
  for (let i = 0; i < n; ) {
    if (V(i)) {
      let j = i;
      while (j + 1 < n && V(j + 1) && combines(w[j], w[j + 1])) j++;
      nuclei.push([i, j]);
      i = j + 1;
    } else i++;
  }
  if (nuclei.length <= 1) return [unplaceholder(w)];

  const syls: string[] = [];
  let start = 0;
  for (let k = 0; k < nuclei.length - 1; k++) {
    const cons = w.slice(nuclei[k][1] + 1, nuclei[k + 1][0]);
    const cut = nuclei[k][1] + 1 + splitConsonants(cons);
    syls.push(w.slice(start, cut));
    start = cut;
  }
  syls.push(w.slice(start));
  return syls.map(unplaceholder);
}

/** Index of the stressed syllable per Spanish stress rules. */
function stressIndex(word: string, syls: string[]): number {
  for (let k = 0; k < syls.length; k++) if (/[áéíóú]/.test(syls[k])) return k;
  const last = word[word.length - 1]?.toLowerCase() ?? "";
  if (isVowel(last) || last === "n" || last === "s") return Math.max(0, syls.length - 2);
  return syls.length - 1;
}

const DIPHTHONGS: Record<string, string> = {
  ai: "eye", ay: "eye", ei: "ay", ey: "ay", oi: "oy", oy: "oy", au: "ow",
  ia: "yah", ie: "yeh", io: "yoh", iu: "yoo",
  ua: "wah", ue: "weh", ui: "wee", uy: "wee", uo: "woh",
};
const SINGLE_VOWEL: Record<string, string> = { a: "ah", e: "eh", i: "ee", o: "oh", u: "oo" };

/** Phonetic respelling of a single syllable. */
function transcribe(syl: string): string {
  const s = syl.toLowerCase();
  let out = "";
  for (let i = 0; i < s.length; ) {
    const c = s[i];
    const c1 = s[i + 1];
    const c2 = s[i + 2];

    if (c === "c" && c1 === "h") { out += "ch"; i += 2; continue; }
    if (c === "l" && c1 === "l") { out += "y"; i += 2; continue; }
    if (c === "r" && c1 === "r") { out += "r"; i += 2; continue; }
    if (c === "q" && c1 === "u") { out += "k"; i += 2; continue; } // qu → k, u silent
    if (c === "g" && c1 === "u" && "eiéí".includes(c2 ?? "")) { out += "g"; i += 2; continue; } // gue/gui
    if (c === "g" && c1 === "ü") { out += "gw"; i += 2; continue; }

    if (c === "c") { out += "eiéí".includes(c1 ?? "") ? "s" : "k"; i++; continue; }
    if (c === "g") { out += "eiéí".includes(c1 ?? "") ? "h" : "g"; i++; continue; }
    if (c === "z") { out += "s"; i++; continue; }
    if (c === "ñ") { out += "ny"; i++; continue; }
    if (c === "j") { out += "h"; i++; continue; }
    if (c === "h") { i++; continue; } // silent
    if (c === "v") { out += "b"; i++; continue; }
    if (c === "x") { out += "ks"; i++; continue; }
    if (c === "y") { out += c1 && isVowel(c1) ? "y" : "ee"; i++; continue; }

    if (isVowel(c)) {
      // Vowel + final "y" glide, e.g. "ley" → "lay", "hoy" → "oy".
      if (c1 === "y" && !(c2 && isVowel(c2))) {
        const yd: Record<string, string> = { a: "eye", e: "ay", o: "oy", u: "wee" };
        if (yd[stripAccent(c)]) { out += yd[stripAccent(c)]; i += 2; continue; }
      }
      const pair = stripAccent(c) + (c1 ? stripAccent(c1) : "");
      if (c1 && isVowel(c1) && DIPHTHONGS[pair]) { out += DIPHTHONGS[pair]; i += 2; continue; }
      out += SINGLE_VOWEL[stripAccent(c)] ?? "";
      i++;
      continue;
    }
    out += c; // b d f k l m n p r s t w
    i++;
  }
  return out;
}

/** Full respelling, e.g. "gestionar" → "hehs-tyoh-NAHR". */
export function respell(word: string): string {
  // Multi-word entries (e.g. "medio ambiente"): respell each token.
  if (/\s/.test(word.trim())) {
    return word.trim().split(/\s+/).map(respell).join(" ");
  }
  const syls = syllabify(word);
  if (syls.length === 0) return word;
  const si = stressIndex(word, syls);
  return syls
    .map((s, k) => {
      const t = transcribe(s);
      return syls.length > 1 && k === si ? t.toUpperCase() : t;
    })
    .join("-");
}
