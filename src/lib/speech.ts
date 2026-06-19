// Browser text-to-speech that actually uses a Spanish voice. Setting
// `utterance.lang` alone is not enough — most browsers keep their default
// (often English) voice unless an explicit Spanish `voice` is assigned. Voices
// can also load asynchronously, so we wait for them on first use.

let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  const synth = window.speechSynthesis;
  const existing = synth.getVoices();
  if (existing.length) {
    cachedVoices = existing;
    return Promise.resolve(existing);
  }
  return new Promise((resolve) => {
    const done = () => {
      cachedVoices = synth.getVoices();
      synth.removeEventListener("voiceschanged", done);
      resolve(cachedVoices);
    };
    synth.addEventListener("voiceschanged", done);
    // Fallback in case the event never fires.
    setTimeout(() => resolve(synth.getVoices()), 600);
  });
}

function pickSpanishVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  const es = voices.filter((v) => v.lang.toLowerCase().startsWith("es"));
  if (!es.length) return undefined;
  // Prefer the higher-quality Google/natural voices, then Castilian Spanish.
  return (
    es.find((v) => /google/i.test(v.name)) ??
    es.find((v) => /natural|enhanced|premium/i.test(v.name)) ??
    es.find((v) => v.lang.toLowerCase().startsWith("es-es")) ??
    es[0]
  );
}

/** Speak `text` in Spanish, selecting a Spanish voice when one is available. */
export async function speakSpanish(text: string): Promise<void> {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;
  const voices = cachedVoices.length ? cachedVoices : await loadVoices();
  const voice = pickSpanishVoice(voices);

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = voice?.lang ?? "es-ES";
  if (voice) utterance.voice = voice;
  utterance.rate = 0.95;

  synth.cancel();
  synth.speak(utterance);
}
