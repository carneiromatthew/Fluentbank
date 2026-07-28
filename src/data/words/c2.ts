import type { RawWord } from "./types";

// C2 — Mastery. Rare, literary and idiomatic vocabulary: fine distinctions of
// register and connotation that mark near-native command of the language.
//
// `usage` authored for the full C2 batch (terse note + collocations; grammar
// when non-obvious; an extra conjugated `example` on verbs).
export const C2_WORDS: RawWord[] = [
  {
    word: "diáfano", definition: "crystal-clear, transparent, limpid", category: "Academic",
    example: "Ofreció una explicación diáfana, sin la menor ambigüedad.",
    synonyms: ["nítido", "claro"],
    usage: {
      note: "Crystal-clear — of light/air/water, and figuratively of prose or explanations; more literary than claro, with a sense of luminous transparency.",
      collocations: ["una explicación diáfana", "un cielo diáfano", "un espacio diáfano"],
    },
  },
  {
    word: "prístino", definition: "pristine, untouched, original", category: "Environment",
    example: "El valle conserva su belleza prístina.",
    synonyms: ["puro", "intacto"],
    usage: {
      note: "Pristine and untouched, esp. of nature or an original state; literary. 'belleza/estado prístino'. puro is the plain word.",
      collocations: ["belleza prístina", "en estado prístino"],
    },
  },
  {
    word: "inefable", definition: "ineffable, indescribable", category: "Emotions",
    example: "Sintió una alegría inefable al volver a casa.",
    synonyms: ["indescriptible", "inenarrable"],
    usage: {
      note: "So overwhelming it can't be put into words (joy, beauty); elevated/literary. indescriptible is the everyday equivalent.",
      collocations: ["una alegría inefable", "una belleza inefable"],
    },
  },
  {
    word: "efímero", definition: "ephemeral, fleeting", category: "Culture",
    example: "La fama suele ser tan efímera como intensa.",
    synonyms: ["fugaz", "pasajero"],
    usage: {
      note: "Lasting only a moment (fame, beauty, pleasure); fugaz is close, efímero stresses brief existence. Opposite of perenne.",
      collocations: ["la fama efímera", "un placer efímero"],
    },
  },
  {
    word: "perenne", definition: "perennial, everlasting", category: "Culture",
    example: "Su obra goza de una vigencia perenne.",
    synonyms: ["perpetuo", "imperecedero"],
    usage: {
      note: "Everlasting; also botanically perennial (de hoja perenne). perpetuo/imperecedero are close. Opposite of efímero.",
      collocations: ["de hoja perenne", "una vigencia perenne"],
    },
  },
  {
    word: "sucinto", definition: "succinct, concise", category: "Academic",
    example: "Redactó un informe sucinto pero completo.",
    synonyms: ["conciso", "breve"],
    usage: {
      note: "Briefly complete — saying all that's needed in few words; conciso is close, sucinto adds economy. Opposite of prolijo.",
      collocations: ["un informe sucinto", "de forma sucinta"],
    },
  },
  {
    word: "prolijo", definition: "long-winded; overly detailed", category: "Academic",
    example: "El discurso resultó prolijo y algo tedioso.",
    synonyms: ["extenso", "farragoso"],
    usage: {
      note: "Tiresomely long-winded or over-detailed; negative, the opposite of sucinto. (In parts of Latin America also = meticulously neat.)",
      collocations: ["un discurso prolijo", "una explicación prolija"],
    },
  },
  {
    word: "escueto", definition: "terse, brief, plain", category: "Society",
    example: "Su respuesta fue escueta y tajante.",
    synonyms: ["conciso", "parco"],
    usage: {
      note: "Terse and bare-bones, stripped of anything extra; parco is close. Of statements, answers, style.",
      collocations: ["una respuesta escueta", "un estilo escueto"],
    },
  },
  {
    word: "contundente", definition: "forceful, conclusive, emphatic", category: "Law",
    example: "Aportó pruebas contundentes ante el tribunal.",
    synonyms: ["rotundo", "concluyente"],
    usage: {
      note: "Forceful and leaving no doubt — proof, an argument, a victory, a blow; rotundo is close, contundente adds weight and impact.",
      collocations: ["pruebas contundentes", "una victoria contundente"],
    },
  },
  {
    word: "fehaciente", definition: "irrefutable, reliable (proof)", category: "Law",
    example: "Presentó un documento fehaciente de la transacción.",
    synonyms: ["irrefutable", "fidedigno"],
    usage: {
      note: "Providing irrefutable proof; formal/legal. 'de forma fehaciente' = verifiably. fidedigno is close.",
      collocations: ["prueba fehaciente", "de forma fehaciente"],
    },
  },
  {
    word: "consabido", definition: "well-known, usual, aforementioned", category: "Society",
    example: "Terminó con el consabido agradecimiento al público.",
    synonyms: ["acostumbrado", "habitual"],
    usage: {
      note: "The well-known, expected one already understood by all — often with mild irony about its predictability. habitual is neutral.",
      collocations: ["el consabido agradecimiento", "la consabida excusa"],
    },
  },
  {
    word: "inveterado", definition: "inveterate, deep-rooted, long-standing", category: "Culture",
    example: "Tenía la inveterada costumbre de madrugar.",
    synonyms: ["arraigado", "crónico"],
    usage: {
      note: "Long-standing and deeply ingrained, esp. habits; arraigado is close, inveterado stresses age. Often faintly negative.",
      collocations: ["una costumbre inveterada", "un hábito inveterado"],
    },
  },
  {
    word: "perentorio", definition: "urgent, peremptory, pressing", category: "Law",
    example: "El plazo perentorio no admitía demoras.",
    synonyms: ["urgente", "apremiante"],
    usage: {
      grammar: "formal/legal",
      note: "Pressingly urgent, brooking no delay; in law, a final deadline. apremiante is close, perentorio more categorical.",
      collocations: ["un plazo perentorio", "de forma perentoria"],
    },
  },
  {
    word: "exiguo", definition: "meagre, scanty", category: "Finance",
    example: "Disponían de un presupuesto exiguo para la obra.",
    synonyms: ["escaso", "insuficiente"],
    usage: {
      note: "Too small to suffice — budget, salary, number; escaso is close, exiguo more formal/literary.",
      collocations: ["un presupuesto exiguo", "una cantidad exigua"],
    },
  },
  {
    word: "ingente", definition: "huge, enormous", category: "Academic",
    example: "Reunir el archivo exigió un esfuerzo ingente.",
    synonyms: ["enorme", "colosal"],
    usage: {
      note: "Vast in scale or effort; literary. enorme is plainer. Often 'un esfuerzo/una cantidad ingente'.",
      collocations: ["un esfuerzo ingente", "una cantidad ingente"],
    },
  },
  {
    word: "ínfimo", definition: "minimal, lowest, negligible", category: "Science",
    example: "La diferencia entre ambos resultados es ínfima.",
    synonyms: ["mínimo", "insignificante"],
    usage: {
      note: "The very lowest or tiniest; superlative in feel. mínimo is close, ínfimo more emphatic. Opposite of máximo.",
      collocations: ["una cantidad ínfima", "un precio ínfimo"],
    },
  },
  {
    word: "magno", definition: "great, grand", category: "Culture",
    example: "Organizaron un magno acto conmemorativo.",
    synonyms: ["grandioso", "ilustre"],
    usage: {
      grammar: "usually before the noun",
      note: "Grand or great, in solemn set phrases (magno acto, magna obra, Alejandro Magno); fixed, elevated register.",
      collocations: ["un magno acto", "una obra magna"],
    },
  },
  {
    word: "soslayo", definition: "sideways glance (de soslayo: sidelong)", category: "Emotions",
    example: "Lo miró de soslayo, sin atreverse a hablar.",
    synonyms: ["reojo"],
    usage: {
      grammar: "m., chiefly in 'de soslayo'",
      note: "Almost always 'de soslayo' = sidelong / out of the corner of one's eye, or evasively. Same idea as 'de reojo'.",
      collocations: ["mirar de soslayo", "de soslayo"],
    },
  },
  {
    word: "atisbo", definition: "hint, glimmer, trace", category: "Emotions",
    example: "No había en su rostro el menor atisbo de duda.",
    synonyms: ["indicio", "vestigio"],
    usage: {
      grammar: "m.",
      note: "A faint first trace of something (doubt, hope, a smile); 'ni el menor atisbo de' = not the slightest hint of. indicio is close.",
      collocations: ["un atisbo de duda", "el menor atisbo de"],
    },
  },
  {
    word: "vestigio", definition: "vestige, remnant, trace", category: "Culture",
    example: "Solo quedan vestigios de la antigua muralla.",
    synonyms: ["resto", "huella"],
    usage: {
      grammar: "m.",
      note: "A surviving trace of something now gone (ruins, customs); often plural. resto is plainer, vestigio more evocative.",
      collocations: ["vestigios del pasado", "los últimos vestigios"],
    },
  },
  {
    word: "quimera", definition: "pipe dream, chimera", category: "Politics",
    example: "La paz perpetua le parecía una quimera.",
    synonyms: ["ilusión", "utopía"],
    usage: {
      grammar: "f.",
      note: "An impossible dream chased in vain; literary. utopía is close but more political/ideal. 'perseguir quimeras'.",
      collocations: ["una quimera imposible", "perseguir quimeras"],
    },
  },
  {
    word: "utopía", definition: "utopia", category: "Politics",
    example: "Aquella sociedad ideal era una pura utopía.",
    synonyms: ["ideal", "quimera"],
    usage: {
      grammar: "f.",
      note: "An ideal but unattainable society or goal; quimera is close, utopía carries the political/philosophical sense. Adjective: utópico.",
      collocations: ["una utopía irrealizable", "una sociedad utópica"],
    },
  },
  {
    word: "albedrío", definition: "free will, discretion", category: "Society",
    example: "Actuó por su libre albedrío, sin presiones.",
    synonyms: ["voluntad", "arbitrio"],
    usage: {
      grammar: "m.",
      note: "Free will / one's own discretion; almost always 'libre albedrío' or 'a su albedrío' (as one pleases). voluntad is plainer.",
      collocations: ["libre albedrío", "a su albedrío"],
    },
  },
  {
    word: "idiosincrasia", definition: "idiosyncrasy, distinctive character", category: "Culture",
    example: "El humor forma parte de la idiosincrasia del país.",
    synonyms: ["carácter", "identidad"],
    usage: {
      grammar: "f.",
      note: "The distinctive character of a people or person; formal. carácter/identidad are close. Adjective: idiosincrásico.",
      collocations: ["la idiosincrasia del país", "formar parte de la idiosincrasia"],
    },
  },
  {
    word: "menester", definition: "need, necessity; task", category: "Law",
    example: "Es menester revisar el contrato antes de firmarlo.",
    synonyms: ["necesidad", "precisión"],
    usage: {
      grammar: "m.",
      note: "Two uses: 'es menester + inf.' = it is necessary to (formal 'hay que'); and plural 'menesteres' = tasks/duties. necesidad is plainer.",
      collocations: ["es menester", "los menesteres diarios"],
    },
  },
  {
    word: "óbice", definition: "obstacle, impediment", category: "Society",
    example: "La distancia no fue óbice para mantener la amistad.",
    synonyms: ["impedimento", "obstáculo"],
    usage: {
      grammar: "m., chiefly negated",
      note: "An obstacle — almost always 'no ser óbice para' = to be no bar to. impedimento is the plain word.",
      collocations: ["no ser óbice para", "sin óbice"],
    },
  },
  {
    word: "menoscabo", definition: "detriment, impairment", category: "Law",
    example: "Defendió sus ideas sin menoscabo de las ajenas.",
    synonyms: ["perjuicio", "daño"],
    usage: {
      grammar: "m.",
      note: "Damage to something valued; 'en/sin menoscabo de' = to/without the detriment of. The noun of menoscabar; perjuicio is plainer.",
      collocations: ["sin menoscabo de", "en menoscabo de"],
    },
  },
  {
    word: "salvedad", definition: "proviso, reservation, exception", category: "Law",
    example: "Aceptó el plan con una única salvedad.",
    synonyms: ["excepción", "reserva"],
    usage: {
      grammar: "f.",
      note: "A caveat attached to an agreement; 'con la salvedad de que...' = with the proviso that. excepción is close.",
      collocations: ["con la salvedad de que", "hacer una salvedad"],
    },
  },
  {
    word: "cariz", definition: "look, aspect (that a situation takes on)", category: "Politics",
    example: "El conflicto tomó un cariz preocupante.",
    synonyms: ["aspecto", "sesgo"],
    usage: {
      grammar: "m.",
      note: "The look or turn a situation is taking; 'tomar mal/buen cariz'. aspecto is plainer, cariz implies a developing trend.",
      collocations: ["tomar mal cariz", "el cariz del asunto"],
    },
  },
  {
    word: "tesitura", definition: "situation, frame of mind, predicament", category: "Society",
    example: "En aquella difícil tesitura, optó por callar.",
    synonyms: ["situación", "coyuntura"],
    usage: {
      grammar: "f.",
      note: "A tricky situation one is placed in (also a voice's range in music); 'en esta tesitura'. coyuntura is close.",
      collocations: ["en esta tesitura", "una difícil tesitura"],
    },
  },
  {
    word: "albur", definition: "chance, risk, hazard", category: "Society",
    example: "Dejó su futuro al albur de una sola decisión.",
    synonyms: ["azar", "riesgo"],
    usage: {
      grammar: "m.",
      note: "Pure chance/risk; 'al albur de' = at the mercy of. azar is plainer, albur stresses the gamble. (In Mexico also a pun.)",
      collocations: ["al albur de", "correr el albur"],
    },
  },
  {
    word: "ardid", definition: "ruse, scheme, trick", category: "Law",
    example: "Descubrieron el ardid antes de que surtiera efecto.",
    synonyms: ["artimaña", "treta"],
    usage: {
      grammar: "m.",
      note: "A clever ruse to deceive or gain advantage; artimaña/treta are close. Neutral-to-negative.",
      collocations: ["un ardid para", "recurrir a un ardid"],
    },
  },
  {
    word: "subterfugio", definition: "subterfuge, evasion", category: "Politics",
    example: "Recurrió a un subterfugio para eludir la pregunta.",
    synonyms: ["evasiva", "pretexto"],
    usage: {
      grammar: "m.",
      note: "An evasive dodge to avoid something; evasiva/pretexto are close, subterfugio more formal. 'recurrir a subterfugios'.",
      collocations: ["recurrir a un subterfugio", "sin subterfugios"],
    },
  },
  {
    word: "argucia", definition: "sophistry, cunning trick", category: "Law",
    example: "Sus argucias legales retrasaron el juicio.",
    synonyms: ["sofisma", "astucia"],
    usage: {
      grammar: "f.",
      note: "A specious, cunning argument — esp. legal hair-splitting; sofisma is close. Pejorative.",
      collocations: ["argucias legales", "una mera argucia"],
    },
  },
  {
    word: "connivencia", definition: "collusion, connivance", category: "Politics",
    example: "Actuaron en connivencia con las autoridades locales.",
    synonyms: ["complicidad", "confabulación"],
    usage: {
      grammar: "f.",
      note: "Secret collusion in wrongdoing; 'en connivencia con' = in cahoots with. complicidad is close.",
      collocations: ["en connivencia con", "actuar en connivencia"],
    },
  },
  {
    word: "fehaciencia", definition: "reliability, authenticity (of proof)", category: "Law",
    example: "La fehaciencia del documento quedó acreditada.",
    synonyms: ["autenticidad"],
    usage: {
      grammar: "f.",
      note: "The quality of being irrefutable proof; rare, formal/legal noun of fehaciente. autenticidad is close.",
      collocations: ["la fehaciencia del documento", "acreditar la fehaciencia"],
    },
  },
  {
    word: "ecuánime", definition: "even-handed, impartial, level-headed", category: "Law",
    example: "El árbitro se mostró ecuánime en todo momento.",
    synonyms: ["imparcial", "sereno"],
    usage: {
      note: "Even-handed and composed under pressure; imparcial stresses fairness, ecuánime adds calm balance. Noun: ecuanimidad.",
      collocations: ["un juez ecuánime", "un juicio ecuánime"],
    },
  },
  {
    word: "displicente", definition: "offhand, disdainful", category: "Emotions",
    example: "Respondió con un tono displicente y altivo.",
    synonyms: ["desdeñoso", "indiferente"],
    usage: {
      note: "Coolly offhand, showing bored disdain; desdeñoso is close. Of tone, gesture, manner.",
      collocations: ["un tono displicente", "un gesto displicente"],
    },
  },
  {
    word: "altanero", definition: "haughty, arrogant", category: "Emotions",
    example: "Su gesto altanero molestó a los presentes.",
    synonyms: ["soberbio", "altivo"],
    usage: {
      note: "Haughtily superior; altivo/soberbio are close. Of look, gesture, bearing.",
      collocations: ["un gesto altanero", "una actitud altanera"],
    },
  },
  {
    word: "pusilánime", definition: "faint-hearted, cowardly", category: "Emotions",
    example: "No fue pusilánime: defendió su postura con firmeza.",
    synonyms: ["cobarde", "timorato"],
    usage: {
      note: "Lacking the courage to act or decide; cobarde is the blunt word, pusilánime is formal and weaker-willed.",
      collocations: ["un gesto pusilánime", "mostrarse pusilánime"],
    },
  },
  {
    word: "magnánimo", definition: "magnanimous, generous in spirit", category: "Emotions",
    example: "Se mostró magnánimo con sus adversarios.",
    synonyms: ["generoso", "noble"],
    usage: {
      note: "Nobly generous, esp. to rivals or the defeated; generoso is plainer, magnánimo adds greatness of spirit. Noun: magnanimidad.",
      collocations: ["magnánimo con los vencidos", "un gesto magnánimo"],
    },
  },
  {
    word: "sagaz", definition: "shrewd, astute", category: "Emotions",
    example: "Una observadora sagaz no pasaría por alto ese detalle.",
    synonyms: ["perspicaz", "astuto"],
    usage: {
      note: "Shrewd at reading people and situations; perspicaz/astuto are close, sagaz adds cunning foresight.",
      collocations: ["una mente sagaz", "un político sagaz"],
    },
  },
  {
    word: "taciturno", definition: "taciturn, sullen, withdrawn", category: "Emotions",
    example: "Desde la noticia, se volvió huraño y taciturno.",
    synonyms: ["callado", "reservado"],
    usage: {
      note: "Habitually silent and withdrawn, often gloomy; callado describes the moment, taciturno the temperament.",
      collocations: ["un hombre taciturno", "huraño y taciturno"],
    },
  },
  {
    word: "locuaz", definition: "talkative, loquacious", category: "Emotions",
    example: "El invitado, muy locuaz, animó la tertulia.",
    synonyms: ["parlanchín", "elocuente"],
    usage: {
      note: "Very talkative, with ready fluency; parlanchín is colloquial, locuaz more neutral. Opposite of taciturno.",
      collocations: ["un invitado locuaz", "mostrarse locuaz"],
    },
  },
  {
    word: "veleidoso", definition: "fickle, capricious", category: "Emotions",
    example: "Su carácter veleidoso le impedía mantener un plan.",
    synonyms: ["voluble", "inconstante"],
    usage: {
      note: "Fickle, forever changing whims and loyalties; voluble/inconstante are close. Of character, affections.",
      collocations: ["un carácter veleidoso", "un amante veleidoso"],
    },
  },
  {
    word: "denodado", definition: "valiant, dauntless, strenuous", category: "Society",
    example: "Hizo un esfuerzo denodado por terminar a tiempo.",
    synonyms: ["valeroso", "esforzado"],
    usage: {
      note: "Valiantly strenuous — of effort, defence, struggle; literary. esforzado is close, denodado adds fearlessness.",
      collocations: ["un esfuerzo denodado", "una denodada defensa"],
    },
  },
  {
    word: "abnegado", definition: "self-sacrificing, selfless", category: "Health",
    example: "Recordaron la abnegada labor del personal sanitario.",
    synonyms: ["altruista", "entregado"],
    usage: {
      note: "Selflessly devoted, putting others first; altruista is close, abnegado stresses sacrifice. Often of carers, parents.",
      collocations: ["una labor abnegada", "una madre abnegada"],
    },
  },
  {
    word: "impávido", definition: "unflinching, fearless, impassive", category: "Emotions",
    example: "Permaneció impávido ante la amenaza.",
    synonyms: ["imperturbable", "sereno"],
    usage: {
      note: "Showing no fear or reaction in the face of danger; imperturbable is close. 'permanecer impávido'.",
      collocations: ["permanecer impávido", "impávido ante el peligro"],
    },
  },
  {
    word: "indómito", definition: "indomitable, untamed", category: "Society",
    example: "Conservó hasta el final su espíritu indómito.",
    synonyms: ["rebelde", "indomable"],
    usage: {
      note: "That cannot be tamed or subdued — spirit, character, nature; rebelde is plainer, indómito more literary and grand.",
      collocations: ["un espíritu indómito", "un carácter indómito"],
    },
  },
  {
    word: "tenacidad", definition: "tenacity, doggedness", category: "Business",
    example: "Solo con tenacidad alcanzó semejante meta.",
    synonyms: ["perseverancia", "constancia"],
    usage: {
      grammar: "f.",
      note: "Dogged persistence toward a goal; perseverancia/constancia are close. 'con tenacidad'.",
      collocations: ["con tenacidad", "la tenacidad de"],
    },
  },
  {
    word: "perspicacia", definition: "perceptiveness, insight", category: "Academic",
    example: "Analizó el caso con notable perspicacia.",
    synonyms: ["agudeza", "lucidez"],
    usage: {
      grammar: "f.",
      note: "Keen insight into what isn't obvious; agudeza/lucidez are close. The noun of perspicaz.",
      collocations: ["con perspicacia", "una notable perspicacia"],
    },
  },
  {
    word: "sutileza", definition: "subtlety, fine distinction", category: "Arts",
    example: "El traductor supo captar cada sutileza del texto.",
    synonyms: ["matiz", "finura"],
    usage: {
      grammar: "f.",
      note: "A fine distinction or delicate touch; matiz is close. 'captar las sutilezas'.",
      collocations: ["captar una sutileza", "las sutilezas del lenguaje"],
    },
  },
  {
    word: "elocuencia", definition: "eloquence", category: "Arts",
    example: "Defendió su tesis con admirable elocuencia.",
    synonyms: ["oratoria", "labia"],
    usage: {
      grammar: "f.",
      note: "Persuasive eloquence in speech; oratoria is the formal art, labia the colloquial gift of the gab.",
      collocations: ["con gran elocuencia", "la elocuencia del orador"],
    },
  },
  {
    word: "verbosidad", definition: "verbosity, wordiness", category: "Academic",
    example: "Su verbosidad acabó por cansar al auditorio.",
    synonyms: ["palabrería", "prolijidad"],
    usage: {
      grammar: "f.",
      note: "An excess of words for little content; pejorative. palabrería is colloquial, prolijidad close. Opposite of concisión.",
      collocations: ["pecar de verbosidad", "una verbosidad cansina"],
    },
  },
  {
    word: "parquedad", definition: "frugality; sparingness of words", category: "Society",
    example: "Hablaba con una parquedad casi solemne.",
    synonyms: ["sobriedad", "moderación"],
    usage: {
      grammar: "f.",
      note: "Sparingness — of words or means; 'parquedad de palabras'. sobriedad is close. From parco.",
      collocations: ["parquedad de palabras", "con parquedad"],
    },
  },
  {
    word: "mesura", definition: "moderation, restraint", category: "Society",
    example: "Actuó siempre con mesura y prudencia.",
    synonyms: ["moderación", "comedimiento"],
    usage: {
      grammar: "f.",
      note: "Calm moderation in conduct or speech; comedimiento is close. 'con mesura'. Opposite of exceso.",
      collocations: ["con mesura", "actuar con mesura"],
    },
  },
  {
    word: "templanza", definition: "temperance, self-control", category: "Emotions",
    example: "La templanza es una de sus mayores virtudes.",
    synonyms: ["moderación", "sobriedad"],
    usage: {
      grammar: "f.",
      note: "Self-control over impulses and appetites — a classical virtue; moderación is close, templanza more moral/elevated.",
      collocations: ["la virtud de la templanza", "con templanza"],
    },
  },
  {
    word: "vehemencia", definition: "vehemence, passion", category: "Emotions",
    example: "Defendió su idea con inusitada vehemencia.",
    synonyms: ["pasión", "ardor"],
    usage: {
      grammar: "f.",
      note: "Passionate intensity in expression; pasión/ardor are close. 'con vehemencia' = forcefully, heatedly.",
      collocations: ["con vehemencia", "defender con vehemencia"],
    },
  },
  {
    word: "ahínco", definition: "earnestness, eagerness", category: "Education",
    example: "Estudió con ahínco hasta dominar la materia.",
    synonyms: ["empeño", "tesón"],
    usage: {
      grammar: "m.",
      note: "Earnest effort and drive; almost always 'con ahínco' = eagerly, hard. empeño/tesón are close.",
      collocations: ["con ahínco", "trabajar con ahínco"],
    },
  },
  {
    word: "denuedo", definition: "boldness, daring, valour", category: "Society",
    example: "Afrontó la crisis con denuedo y serenidad.",
    synonyms: ["valentía", "arrojo"],
    usage: {
      grammar: "m.",
      note: "Fearless boldness in facing difficulty; literary. valentía/arrojo are close. 'con denuedo'.",
      collocations: ["con denuedo", "luchar con denuedo"],
    },
  },
  {
    word: "anhelo", definition: "yearning, longing", category: "Emotions",
    example: "Vivía con el anhelo de regresar a su tierra.",
    synonyms: ["deseo", "ansia"],
    usage: {
      grammar: "m.",
      note: "A deep, often unfulfilled yearning; deseo is plainer, anhelo more intense and heartfelt. Verb: anhelar.",
      collocations: ["el anhelo de", "un anhelo de libertad"],
    },
  },
  {
    word: "congoja", definition: "anguish, grief", category: "Emotions",
    example: "La noticia le produjo una profunda congoja.",
    synonyms: ["pesar", "aflicción"],
    usage: {
      grammar: "f.",
      note: "Deep anguish/heartache, with a choking quality; pesar/aflicción are close. Literary-emotional.",
      collocations: ["una profunda congoja", "sentir congoja"],
    },
  },
  {
    word: "desazón", definition: "unease, disquiet", category: "Emotions",
    example: "Sentía una extraña desazón sin saber por qué.",
    synonyms: ["inquietud", "malestar"],
    usage: {
      grammar: "f.",
      note: "A vague unease you can't quite name; inquietud is close, desazón adds a queasy discomfort.",
      collocations: ["sentir desazón", "una extraña desazón"],
    },
  },
  {
    word: "hastío", definition: "weariness, tedium", category: "Emotions",
    example: "El hastío de la rutina lo empujó a cambiar de vida.",
    synonyms: ["tedio", "aburrimiento"],
    usage: {
      grammar: "m.",
      note: "Weary boredom verging on disgust; tedio is close, hastío adds satiety/revulsion. 'el hastío de la rutina'.",
      collocations: ["el hastío de la rutina", "hasta el hastío"],
    },
  },
  {
    word: "regocijo", definition: "joy, rejoicing", category: "Emotions",
    example: "La victoria fue motivo de regocijo general.",
    synonyms: ["júbilo", "alborozo"],
    usage: {
      grammar: "m.",
      note: "Lively, expressed joy or glee; júbilo is close. 'motivo de regocijo'. Often collective.",
      collocations: ["motivo de regocijo", "con regocijo"],
    },
  },
  {
    word: "júbilo", definition: "jubilation, great joy", category: "Emotions",
    example: "Recibieron la noticia con enorme júbilo.",
    synonyms: ["alegría", "regocijo"],
    usage: {
      grammar: "m.",
      note: "Exultant joy, often public; alegría is plainer, júbilo more intense and elevated. 'estallar en júbilo'.",
      collocations: ["estallar en júbilo", "con júbilo"],
    },
  },
  {
    word: "sosiego", definition: "calm, tranquillity", category: "Emotions",
    example: "Buscaba el sosiego del campo los fines de semana.",
    synonyms: ["calma", "serenidad"],
    usage: {
      grammar: "m.",
      note: "Peaceful calm of mind or place; calma/serenidad are close. 'buscar sosiego'. From sosegar.",
      collocations: ["buscar sosiego", "con sosiego"],
    },
  },
  {
    word: "zozobra", definition: "anxiety, turmoil", category: "Emotions",
    example: "Pasó la noche en una constante zozobra.",
    synonyms: ["angustia", "inquietud"],
    usage: {
      grammar: "f.",
      note: "Restless anxiety/turmoil (literally a boat capsizing); angustia is close. 'vivir en la zozobra'.",
      collocations: ["vivir en zozobra", "una constante zozobra"],
    },
  },
  {
    word: "arrebato", definition: "fit, outburst (of emotion)", category: "Emotions",
    example: "En un arrebato de ira, rompió el documento.",
    synonyms: ["impulso", "rapto"],
    usage: {
      grammar: "m.",
      note: "A sudden fit of strong emotion driving rash action; 'en un arrebato de ira/pasión'. impulso is plainer.",
      collocations: ["un arrebato de ira", "en un arrebato"],
    },
  },
  {
    word: "ímpetu", definition: "impetus, drive, vigour", category: "Business",
    example: "Acometió el proyecto con renovado ímpetu.",
    synonyms: ["energía", "brío"],
    usage: {
      grammar: "m.",
      note: "Driving force and momentum; energía/brío are close, ímpetu adds forward thrust. 'con ímpetu'.",
      collocations: ["con ímpetu", "el ímpetu inicial"],
    },
  },
  {
    word: "fervor", definition: "fervour, zeal", category: "Society",
    example: "Defendió la causa con verdadero fervor.",
    synonyms: ["pasión", "entusiasmo"],
    usage: {
      grammar: "m.",
      note: "Burning zeal or devotion (a cause, a faith); pasión/entusiasmo are close. 'con fervor'.",
      collocations: ["con fervor", "fervor religioso"],
    },
  },
  {
    word: "tesón", definition: "perseverance, grit", category: "Business",
    example: "Con tesón y paciencia, levantó el negocio.",
    synonyms: ["constancia", "tenacidad"],
    usage: {
      grammar: "m.",
      note: "Steady grit that keeps going; constancia/tenacidad are close. 'con tesón'.",
      collocations: ["con tesón", "trabajar con tesón"],
    },
  },
  {
    word: "acometer", definition: "to undertake, to tackle (boldly)", category: "Business",
    example: "Decidieron acometer una reforma de gran calado.",
    synonyms: ["emprender", "abordar"],
    usage: {
      note: "Take on a task boldly and with energy; emprender is neutral, acometer adds vigour and onset. Also 'acometer contra' = to charge at.",
      examples: ["El equipo acometió las obras con energía renovada."],
      collocations: ["acometer una reforma", "acometer un proyecto"],
    },
  },
  {
    word: "atañer", definition: "to concern, to pertain to", category: "Law",
    example: "Ese asunto atañe a todos los socios por igual.",
    synonyms: ["concernir", "incumbir"],
    usage: {
      grammar: "+ a; 3rd person only",
      note: "To concern / be the business of — 'eso me atañe'; defective, used only in the 3rd person. concernir/incumbir are close.",
      examples: ["Esas decisiones atañen únicamente a la dirección."],
      collocations: ["atañer a alguien", "en lo que atañe a"],
    },
  },
  {
    word: "dirimir", definition: "to settle, to resolve (a dispute)", category: "Law",
    example: "El tribunal habrá de dirimir la controversia.",
    synonyms: ["resolver", "zanjar"],
    usage: {
      note: "To settle a dispute or conflict authoritatively; zanjar is close but blunter, dirimir more formal/legal. 'dirimir diferencias'.",
      examples: ["Un segundo árbitro dirimió el empate."],
      collocations: ["dirimir un conflicto", "dirimir diferencias"],
    },
  },
  {
    word: "zanjar", definition: "to settle, to put an end to", category: "Business",
    example: "El director quiso zanjar la discusión de inmediato.",
    synonyms: ["resolver", "concluir"],
    usage: {
      note: "To put a definitive end to a discussion or matter; resolver is neutral, zanjar implies cutting it off decisively.",
      examples: ["Con una sola frase zanjó toda polémica."],
      collocations: ["zanjar la discusión", "zanjar el asunto"],
    },
  },
  {
    word: "ceñirse", definition: "to stick to, to confine oneself to", category: "Law",
    example: "Le pidieron ceñirse estrictamente a los hechos.",
    synonyms: ["limitarse", "atenerse"],
    usage: {
      grammar: "reflexive; + a; stem e→i (me ciño)",
      note: "To stick strictly to limits or a topic — 'ceñirse a los hechos / al guion'; limitarse/atenerse are close.",
      examples: ["Siempre se ceñía al guion establecido."],
      collocations: ["ceñirse a los hechos", "ceñirse al tema"],
    },
  },
  {
    word: "soslayar", definition: "to circumvent, to skirt around", category: "Politics",
    example: "El orador soslayó con habilidad los temas espinosos.",
    synonyms: ["eludir", "sortear"],
    usage: {
      note: "To sidestep or skirt a difficulty/question deftly; eludir is close, soslayar adds going around it. Cf. 'de soslayo'.",
      examples: ["El ministro soslaya siempre las preguntas espinosas."],
      collocations: ["soslayar un problema", "soslayar la cuestión"],
    },
  },
  {
    word: "subyacer", definition: "to underlie, to lie beneath", category: "Society",
    example: "Una vieja rivalidad subyace en el conflicto.",
    synonyms: ["latir"],
    usage: {
      grammar: "irregular: subyace; 3rd person",
      note: "To lie underneath as a hidden cause or idea; 'subyacer en/a algo'. Almost always 3rd person.",
      examples: ["Bajo su aparente calma subyacía una gran tensión."],
      collocations: ["subyacer en el conflicto", "la idea que subyace"],
    },
  },
  {
    word: "dilucidar", definition: "to elucidate, to clear up", category: "Science",
    example: "El estudio pretende dilucidar el origen del fenómeno.",
    synonyms: ["esclarecer", "aclarar"],
    usage: {
      note: "To clear up something obscure through reasoning; esclarecer/aclarar are close, dilucidar more intellectual and formal.",
      examples: ["Los expertos aún no han dilucidado la causa."],
      collocations: ["dilucidar una cuestión", "dilucidar el origen"],
    },
  },
  {
    word: "vislumbrarse", definition: "to be dimly perceived, to loom", category: "Politics",
    example: "Comienza a vislumbrarse una salida a la crisis.",
    synonyms: ["entreverse"],
    usage: {
      grammar: "pronominal; impersonal",
      note: "To be dimly perceived on the horizon (a solution, an end); the pronominal of vislumbrar, used impersonally. entreverse is close.",
      examples: ["Por fin se vislumbra el final del túnel."],
      collocations: ["vislumbrarse una salida", "empezar a vislumbrarse"],
    },
  },
  {
    word: "atinar", definition: "to get it right, to hit the mark", category: "Academic",
    example: "Atinó con la respuesta a la primera.",
    synonyms: ["acertar"],
    usage: {
      grammar: "+ con / a",
      note: "To hit the mark / get it right, by good judgement or luck; 'atinar con la respuesta', 'atinar a + inf.'. acertar is the everyday word.",
      examples: ["No atinó a responder en aquel momento."],
      collocations: ["atinar con la respuesta", "atinar a explicar"],
    },
  },
  {
    word: "discurrir", definition: "to ponder; to flow, to pass (time)", category: "Society",
    example: "La conversación discurrió por cauces amistosos.",
    synonyms: ["transcurrir", "reflexionar"],
    usage: {
      note: "Two senses: to ponder/reason; and (of time, talks, a river) to flow/pass. transcurrir covers time, reflexionar the thinking.",
      examples: ["La velada discurrió sin incidentes."],
      collocations: ["discurrir sobre un tema", "discurrir plácidamente"],
    },
  },
  {
    word: "ahondar", definition: "to delve deeper into", category: "Academic",
    example: "El autor ahonda en las raíces del problema.",
    synonyms: ["profundizar"],
    usage: {
      grammar: "+ en",
      note: "To delve deeper into a topic (or a wound); 'ahondar en' = to go further into. profundizar is the close everyday word.",
      examples: ["El segundo capítulo ahondó en sus motivaciones."],
      collocations: ["ahondar en el tema", "ahondar en las causas"],
    },
  },
  {
    word: "extrapolar", definition: "to extrapolate", category: "Science",
    example: "No conviene extrapolar conclusiones de un solo caso.",
    synonyms: ["generalizar"],
    usage: {
      note: "To project findings beyond their data or context; technical. 'extrapolar a partir de'. generalizar is plainer.",
      examples: ["Extrapolaron los resultados a toda la población."],
      collocations: ["extrapolar conclusiones", "extrapolar datos"],
    },
  },
  {
    word: "deslucir", definition: "to spoil, to take the shine off", category: "Culture",
    example: "La lluvia deslució por completo la ceremonia.",
    synonyms: ["estropear", "empañar"],
    usage: {
      note: "To dull the shine or spoil the effect of an event; estropear is plainer, empañar close. 'deslucir una ceremonia'.",
      examples: ["Unos incidentes deslucieron la celebración."],
      collocations: ["deslucir una ceremonia", "deslucir el acto"],
    },
  },
  {
    word: "menospreciar", definition: "to despise, to belittle", category: "Society",
    example: "Sería un error menospreciar al rival.",
    synonyms: ["despreciar", "subestimar"],
    usage: {
      note: "To look down on or undervalue; despreciar is stronger (open scorn), subestimar = to underestimate.",
      examples: ["Tiende a menospreciar a quienes no piensan como él."],
      collocations: ["menospreciar al rival", "menospreciar el riesgo"],
    },
  },
  {
    word: "enaltecer", definition: "to exalt, to extol", category: "Culture",
    example: "El monumento busca enaltecer la memoria de los caídos.",
    synonyms: ["ensalzar", "glorificar"],
    usage: {
      grammar: "irregular: enaltezco",
      note: "To exalt or honour, raising someone's standing; ensalzar is close, glorificar stronger. Opposite of denigrar.",
      examples: ["Sus actos enaltecieron a toda la institución."],
      collocations: ["enaltecer la memoria", "enaltecer los valores"],
    },
  },
  {
    word: "denostar", definition: "to revile, to insult", category: "Society",
    example: "No es propio de un profesional denostar al contrario.",
    synonyms: ["injuriar", "vilipendiar"],
    usage: {
      grammar: "irregular: denuesto",
      note: "To revile with harsh words; injuriar/vilipendiar are close. Formal/literary.",
      examples: ["Lo denostaron sin pruebas en la prensa."],
      collocations: ["denostar al contrario", "denostar públicamente"],
    },
  },
  {
    word: "esclarecer", definition: "to clarify, to shed light on", category: "Law",
    example: "La investigación logró esclarecer los hechos.",
    synonyms: ["aclarar", "dilucidar"],
    usage: {
      grammar: "irregular: esclarezco",
      note: "To shed light on / clear up facts, esp. in an investigation; aclarar is plainer, dilucidar more intellectual.",
      examples: ["La autopsia esclareció las causas de la muerte."],
      collocations: ["esclarecer los hechos", "esclarecer un crimen"],
    },
  },
  {
    word: "discrepancia", definition: "discrepancy, disagreement", category: "Academic",
    example: "Surgió una notable discrepancia entre los informes.",
    synonyms: ["divergencia", "desacuerdo"],
    usage: {
      grammar: "f.",
      note: "A divergence or disagreement between views or figures; divergencia/desacuerdo are close. 'discrepancias entre'.",
      collocations: ["discrepancias entre", "una clara discrepancia"],
    },
  },
  {
    word: "consonancia", definition: "harmony, accordance", category: "Society",
    example: "Actuó en consonancia con sus principios.",
    synonyms: ["concordancia", "armonía"],
    usage: {
      grammar: "f.",
      note: "Agreement or harmony between things; almost always 'en consonancia con' = in keeping with. concordancia is close.",
      collocations: ["en consonancia con", "estar en consonancia"],
    },
  },
  {
    word: "salvaguardar", definition: "to safeguard", category: "Law",
    example: "El tratado pretende salvaguardar los derechos humanos.",
    synonyms: ["proteger", "preservar"],
    usage: {
      note: "To protect or safeguard rights, interests, secrets; proteger is plainer, salvaguardar more formal/legal. Noun: salvaguarda.",
      examples: ["El acuerdo salvaguarda los intereses de ambas partes."],
      collocations: ["salvaguardar los derechos", "salvaguardar los intereses"],
    },
  },
  {
    word: "supeditar", definition: "to subordinate, to make conditional on", category: "Politics",
    example: "Supeditó su decisión al resultado de la votación.",
    synonyms: ["subordinar", "condicionar"],
    usage: {
      grammar: "+ a; often reflexive",
      note: "To make one thing conditional on / subordinate to another; 'supeditar A a B'. subordinar/condicionar are close.",
      examples: ["Supeditaron la ayuda a ciertas reformas."],
      collocations: ["supeditar a una condición", "supeditarse a"],
    },
  },
  {
    word: "preconizar", definition: "to advocate, to recommend", category: "Politics",
    example: "El informe preconiza un cambio de modelo energético.",
    synonyms: ["recomendar", "abogar por"],
    usage: {
      note: "To publicly advocate or recommend a course of action; 'abogar por' is close, preconizar more formal. 'preconizar un cambio'.",
      examples: ["Desde hace años preconizan un modelo más sostenible."],
      collocations: ["preconizar un cambio", "preconizar una reforma"],
    },
  },
  {
    word: "vaticinar", definition: "to predict, to foretell", category: "Science",
    example: "Pocos se atrevieron a vaticinar semejante desenlace.",
    synonyms: ["pronosticar", "augurar"],
    usage: {
      note: "To foretell or predict, often boldly; pronosticar is neutral/technical, augurar close. Noun: vaticinio.",
      examples: ["Los analistas vaticinaron una caída de las ventas."],
      collocations: ["vaticinar el resultado", "vaticinar un desenlace"],
    },
  },
  {
    word: "atisbar", definition: "to glimpse, to spy", category: "Travel",
    example: "Desde la cima se atisbaba el mar a lo lejos.",
    synonyms: ["vislumbrar", "divisar"],
    usage: {
      note: "To glimpse or barely make out (also to spy/peek); vislumbrar is close. Both literal (atisbar el mar) and figurative.",
      examples: ["Apenas se atisbaban las luces del pueblo."],
      collocations: ["atisbar el horizonte", "atisbar una posibilidad"],
    },
  },
  {
    word: "deambular", definition: "to wander, to roam", category: "Travel",
    example: "Pasó la tarde deambulando por las callejuelas.",
    synonyms: ["vagar", "errar"],
    usage: {
      note: "To wander aimlessly; vagar/errar are close. 'deambular por' = to roam around.",
      examples: ["Deambuló un buen rato hasta dar con la plaza."],
      collocations: ["deambular por las calles", "deambular sin rumbo"],
    },
  },
  {
    word: "recóndito", definition: "hidden, remote, recondite", category: "Travel",
    example: "Visitaron un rincón recóndito de la sierra.",
    synonyms: ["escondido", "apartado"],
    usage: {
      note: "Hidden away and remote — a place, or a deep feeling ('lo más recóndito del alma'); escondido/apartado are plainer.",
      collocations: ["un lugar recóndito", "lo más recóndito de"],
    },
  },
  {
    word: "paraje", definition: "spot, place (esp. natural)", category: "Environment",
    example: "Acamparon en un paraje solitario junto al río.",
    synonyms: ["lugar", "sitio"],
    usage: {
      grammar: "m.",
      note: "A spot or place, usually natural or scenic; lugar/sitio are plainer, paraje evokes wild or solitary settings.",
      collocations: ["un paraje solitario", "un paraje natural"],
    },
  },
  {
    word: "aciago", definition: "fateful, ill-fated", category: "Society",
    example: "Fue un día aciago que nadie quiso recordar.",
    synonyms: ["funesto", "desdichado"],
    usage: {
      note: "Fateful and unlucky — a day, date, omen; funesto is close. Literary. Opposite of venturoso.",
      collocations: ["un día aciago", "una fecha aciaga"],
    },
  },
  {
    word: "fortuito", definition: "fortuitous, chance, accidental", category: "Society",
    example: "El encuentro fue del todo fortuito.",
    synonyms: ["casual", "accidental"],
    usage: {
      note: "Happening purely by chance; casual/accidental are close. 'caso fortuito' is a legal term (act of God).",
      collocations: ["un encuentro fortuito", "caso fortuito"],
    },
  },
  {
    word: "ineludible", definition: "unavoidable, inescapable", category: "Society",
    example: "Asumir el cambio era ya algo ineludible.",
    synonyms: ["inevitable", "forzoso"],
    usage: {
      note: "That cannot be avoided or escaped — a duty, fact, deadline; inevitable is close, ineludible stresses obligation.",
      collocations: ["un deber ineludible", "una cita ineludible"],
    },
  },
  {
    word: "soslayable", definition: "avoidable, that can be sidestepped", category: "Society",
    example: "El conflicto era difícilmente soslayable.",
    synonyms: ["evitable"],
    usage: {
      note: "Able to be sidestepped — usually negated ('difícilmente soslayable'); rare, from soslayar. evitable is the plain word.",
      collocations: ["difícilmente soslayable", "un asunto no soslayable"],
    },
  },
  {
    word: "irrisorio", definition: "laughable, derisory (sum)", category: "Finance",
    example: "Ofrecieron una cantidad irrisoria por la casa.",
    synonyms: ["ridículo", "insignificante"],
    usage: {
      note: "So small or poor as to be laughable, esp. a sum or offer; ridículo is close. 'una cantidad irrisoria'.",
      collocations: ["una cantidad irrisoria", "un precio irrisorio"],
    },
  },
  {
    word: "boyante", definition: "buoyant, prosperous, thriving", category: "Finance",
    example: "La empresa atraviesa una etapa boyante.",
    synonyms: ["próspero", "floreciente"],
    usage: {
      note: "Thriving and prosperous — economy, business; próspero/floreciente are close. (Originally of a buoyant ship.)",
      collocations: ["una economía boyante", "una etapa boyante"],
    },
  },
  {
    word: "menguante", definition: "waning, decreasing", category: "Politics",
    example: "Su influencia, antes enorme, es ya menguante.",
    synonyms: ["decreciente"],
    usage: {
      note: "Waning or decreasing — influence, the moon (luna menguante); decreciente is close. Opposite of creciente. From menguar.",
      collocations: ["luna menguante", "una influencia menguante"],
    },
  },
  {
    word: "pujante", definition: "thriving, vigorous, surging", category: "Business",
    example: "Lidera un sector pujante y lleno de talento.",
    synonyms: ["floreciente", "vigoroso"],
    usage: {
      note: "Vigorously growing — a sector, economy, movement; floreciente/vigoroso are close, pujante adds surging momentum.",
      collocations: ["un sector pujante", "una economía pujante"],
    },
  },
  {
    word: "lucrativo", definition: "lucrative, profitable", category: "Finance",
    example: "Convirtió su afición en un negocio lucrativo.",
    synonyms: ["rentable", "provechoso"],
    usage: {
      note: "Bringing good profit; rentable is close, lucrativo can hint at money-driven. Cf. 'sin ánimo de lucro' (non-profit).",
      collocations: ["un negocio lucrativo", "sin fines lucrativos"],
    },
  },
  {
    word: "sufragar", definition: "to defray, to cover the cost of", category: "Finance",
    example: "Una beca sufragó por completo sus estudios.",
    synonyms: ["costear", "financiar"],
    usage: {
      note: "To pay for / cover the cost of (studies, expenses); costear/financiar are close. (Also 'sufragar' = to vote, in some contexts.)",
      examples: ["El ayuntamiento sufragará las obras del nuevo parque."],
      collocations: ["sufragar los gastos", "sufragar los estudios"],
    },
  },
  {
    word: "munificencia", definition: "munificence, lavish generosity", category: "Culture",
    example: "El museo nació de la munificencia de un coleccionista.",
    synonyms: ["generosidad", "largueza"],
    usage: {
      grammar: "f.",
      note: "Lavish, lordly generosity, esp. of a patron; generosidad is plainer, munificencia formal/literary. Cf. mecenas.",
      collocations: ["la munificencia de", "con munificencia"],
    },
  },
  {
    word: "austeridad", definition: "austerity, severity", category: "Finance",
    example: "Vivía con una austeridad casi monacal.",
    synonyms: ["sobriedad", "frugalidad"],
    usage: {
      grammar: "f.",
      note: "Severe plainness or thrift, by choice or policy; sobriedad/frugalidad are close. 'medidas de austeridad'.",
      collocations: ["medidas de austeridad", "vivir con austeridad"],
    },
  },
  {
    word: "prodigar", definition: "to lavish, to give generously", category: "Society",
    example: "Le prodigaron toda clase de atenciones.",
    synonyms: ["derrochar", "colmar"],
    usage: {
      grammar: "often reflexive: prodigarse",
      note: "To lavish (attention, praise) freely; reflexive 'prodigarse en' = to be generous with / appear often. derrochar/colmar are close.",
      examples: ["Rara vez prodiga elogios sin un buen motivo."],
      collocations: ["prodigar atenciones", "prodigar elogios"],
    },
  },
  {
    word: "esmero", definition: "great care, painstaking effort", category: "Arts",
    example: "Restauró el cuadro con sumo esmero.",
    synonyms: ["cuidado", "dedicación"],
    usage: {
      grammar: "m.",
      note: "Painstaking care put into doing something well; cuidado/dedicación are close. 'con (sumo) esmero'.",
      collocations: ["con esmero", "con sumo esmero"],
    },
  },
  {
    word: "pericia", definition: "expertise, skill", category: "Business",
    example: "Maniobró con la pericia de un veterano.",
    synonyms: ["destreza", "maestría"],
    usage: {
      grammar: "f.",
      note: "Practised skill or expertise at a craft; destreza/maestría are close. 'con pericia'. Adjective: perito (expert).",
      collocations: ["con pericia", "una gran pericia"],
    },
  },
  {
    word: "maestría", definition: "mastery, great skill", category: "Arts",
    example: "Tocó la pieza con absoluta maestría.",
    synonyms: ["pericia", "virtuosismo"],
    usage: {
      grammar: "f.",
      note: "Consummate mastery of an art or skill; pericia is close, maestría implies the highest command. (In Latin America also a master's degree.)",
      collocations: ["con maestría", "absoluta maestría"],
    },
  },
  {
    word: "acuciante", definition: "pressing, urgent", category: "Environment",
    example: "La escasez de agua es un problema acuciante.",
    synonyms: ["apremiante", "urgente"],
    usage: {
      note: "Pressing and demanding immediate attention — a need, problem; apremiante/urgente are close. From acuciar.",
      collocations: ["un problema acuciante", "una necesidad acuciante"],
    },
  },
  {
    word: "soslayo cultural", definition: "cultural sidelining/neglect", category: "Culture",
    example: "Denunció el soslayo cultural de las lenguas minoritarias.",
    usage: {
      note: "Set phrase = the sidelining/neglect of something cultural; built on 'soslayo' (see soslayo). Used in critique and journalism.",
      collocations: ["el soslayo cultural de", "denunciar el soslayo"],
    },
  },
  {
    word: "encomiable", definition: "praiseworthy, commendable", category: "Society",
    example: "Realizó una labor encomiable durante la crisis.",
    synonyms: ["loable", "meritorio"],
    usage: {
      note: "Deserving of praise — effort, attitude, work; loable is synonymous, both formal. 'una labor encomiable'.",
      collocations: ["una labor encomiable", "un esfuerzo encomiable"],
    },
  },
  {
    word: "loable", definition: "laudable, praiseworthy", category: "Society",
    example: "Es loable su empeño por mejorar las cosas.",
    synonyms: ["encomiable", "meritorio"],
    usage: {
      note: "Praiseworthy — intentions, efforts; encomiable/meritorio are close. 'un empeño loable'.",
      collocations: ["un empeño loable", "una iniciativa loable"],
    },
  },
  {
    word: "baladí", definition: "trivial, of little importance", category: "Society",
    example: "No era un asunto baladí, sino crucial.",
    synonyms: ["trivial", "insignificante"],
    usage: {
      grammar: "invariable; pl. baladíes",
      note: "Trivial, of no importance — often negated for emphasis ('no es asunto baladí'). trivial/insignificante are close.",
      collocations: ["un asunto baladí", "no es baladí"],
    },
  },
  {
    word: "inopinado", definition: "unexpected, unforeseen", category: "Society",
    example: "Un giro inopinado cambió el rumbo de los hechos.",
    synonyms: ["inesperado", "imprevisto"],
    usage: {
      note: "Unexpected and unforeseen; inesperado/imprevisto are close, inopinado more literary. 'un giro inopinado'.",
      collocations: ["un giro inopinado", "de forma inopinada"],
    },
  },
  {
    word: "soterrado", definition: "hidden, buried, latent", category: "Politics",
    example: "Bajo la calma latía un descontento soterrado.",
    synonyms: ["oculto", "encubierto"],
    usage: {
      note: "Hidden beneath the surface — a conflict, discontent; oculto/encubierto are close. From soterrar. 'un malestar soterrado'.",
      collocations: ["un descontento soterrado", "una tensión soterrada"],
    },
  },
  {
    word: "acendrado", definition: "pure, deep-seated (of feelings)", category: "Emotions",
    example: "Profesaba un acendrado amor por su tierra.",
    synonyms: ["puro", "arraigado"],
    usage: {
      note: "Pure and deeply held — of feelings or virtues ('acendrado amor/patriotismo'); puro/arraigado are close, acendrado is literary and refined.",
      collocations: ["un acendrado amor", "un acendrado patriotismo"],
    },
  },
];
