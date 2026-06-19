// Lightweight Spanish part-of-speech + agreement heuristics used to keep
// exercise options grammatically consistent (e.g. all adjectives, agreeing in
// gender/number with the sentence). Intentionally simple: verbs are detected
// reliably from the English gloss ("to ..."), and adjectives from characteristic
// Spanish endings, with a small noun-override set for look-alikes.

export type Pos = "verb" | "adjective" | "noun";

/** Nouns whose ending mimics an adjective in our dataset. */
const NOUN_OVERRIDES = new Set<string>([
  "medida", "moneda", "receta", "cuenta", "factura", "ganga", "huella", "brecha",
  "muestra", "prueba", "obra", "cita", "norma", "vacuna", "encuesta", "cuadro",
  "barrio", "recurso", "riesgo", "gasto", "ingreso", "residuo", "vínculo",
  "ejemplo", "consejo", "anuncio", "comercio", "estímulo",
]);

/** Adjectives lacking a distinctive suffix (caught by override instead). */
const ADJ_OVERRIDES = new Set<string>([
  "ambiguo", "exiguo", "magno", "íntegro", "diáfano", "prístino", "efímero",
  "sólido", "rápido", "lento", "limpio", "sucio", "lleno", "vacío", "ligero",
  "pesado", "tímido", "perezoso", "fuerte", "débil", "amable", "orgulloso",
]);

const ADJ_ENDING =
  /(?:os[oa]|iv[oa]|ic[oa]|ud[oa]|ad[oa]|id[oa]|ble|ante|ente|iente|az|oz|eñ[oa]|és|esa)$/i;

export function posOf(w: { word: string; definition: string }): Pos {
  if (/^to\b/i.test(w.definition.trim())) return "verb";
  const word = w.word.toLowerCase();
  if (NOUN_OVERRIDES.has(word)) return "noun";
  if (ADJ_OVERRIDES.has(word) || ADJ_ENDING.test(word)) return "adjective";
  return "noun";
}

/** Gender/number inferred from a surface word form. */
function inferAgreement(surface: string): { feminine: boolean; plural: boolean; gendered: boolean } {
  const s = surface.toLowerCase();
  if (/as$/.test(s)) return { feminine: true, plural: true, gendered: true };
  if (/os$/.test(s)) return { feminine: false, plural: true, gendered: true };
  if (/a$/.test(s)) return { feminine: true, plural: false, gendered: true };
  if (/o$/.test(s)) return { feminine: false, plural: false, gendered: true };
  if (/es$/.test(s)) return { feminine: false, plural: true, gendered: false };
  return { feminine: false, plural: false, gendered: false };
}

/**
 * Inflect an adjective lemma to agree with a target surface form. Handles
 * gendered (-o/-a) adjectives and invariant ones (e.g. "pertinente").
 */
export function agreeAdjective(lemma: string, surface: string): string {
  const { feminine, plural } = inferAgreement(surface);
  const lemmaGendered = /[oa]s?$/i.test(lemma);

  if (!lemmaGendered) {
    if (!plural) return lemma;
    return /[aeiouáéíóú]$/i.test(lemma) ? `${lemma}s` : `${lemma}es`;
  }

  const root = lemma.replace(/[oa]s?$/i, "");
  return root + (feminine ? "a" : "o") + (plural ? "s" : "");
}
