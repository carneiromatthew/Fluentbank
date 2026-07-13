import type { RawWord } from "./types";

// C1 — Advanced. Precise, lower-frequency vocabulary for academic, professional
// and literary registers, including nuance, connotation and idiom.
//
// `usage` (dense dictionary context) authored for the full C1 batch. Keep it
// terse: grammar only when the POS heuristic can't infer it, ONE usage note,
// 2–4 real collocations.
export const C1_WORDS: RawWord[] = [
  {
    word: "consolidar", definition: "to consolidate, to strengthen", category: "Business",
    example: "La empresa logró consolidar su posición en el mercado.",
    synonyms: ["afianzar", "reforzar"],
    usage: {
      note: "Make something already established firmer and lasting (a position, power, friendship); afianzar/reforzar are close, but consolidar stresses durable stability.",
      examples: ["Con los años, consolidó su prestigio como cirujano."],
      collocations: ["consolidar una posición", "consolidar el poder", "consolidar una amistad"],
    },
  },
  {
    word: "vislumbrar", definition: "to glimpse, to make out faintly", category: "Arts",
    example: "Apenas se podía vislumbrar la costa entre la niebla.",
    synonyms: ["entrever", "atisbar"],
    usage: {
      note: "Literally to barely make out through fog/distance; very common figuratively for faintly perceiving a possibility. Stronger 'barely' sense than entrever/atisbar.",
      examples: ["Por fin vislumbramos una salida al conflicto."],
      collocations: ["vislumbrar una solución", "vislumbrar la costa", "vislumbrar un futuro"],
    },
  },
  {
    word: "esbozar", definition: "to sketch, to outline", category: "Academic",
    example: "El ponente esbozó las líneas generales del proyecto.",
    synonyms: ["bosquejar", "perfilar"],
    usage: {
      note: "Rough out in broad strokes — a plan, an idea, or even a faint smile (esbozar una sonrisa); the most idiomatic of its synonyms for plans and ideas.",
      examples: ["En la reunión esbozaremos las primeras ideas."],
      collocations: ["esbozar un plan", "esbozar una sonrisa", "esbozar las líneas generales"],
    },
  },
  {
    word: "acentuar", definition: "to accentuate, to intensify", category: "Society",
    example: "La crisis acentuó las diferencias entre regiones.",
    synonyms: ["intensificar", "agravar"],
    usage: {
      grammar: "also reflexive: acentuarse",
      note: "Make an existing quality or contrast more pronounced; like intensificar but implies sharpening something already there. Reflexive = to become more marked.",
      examples: ["La sequía acentúa la escasez de alimentos."],
      collocations: ["acentuar las diferencias", "acentuarse la crisis"],
    },
  },
  {
    word: "atenuar", definition: "to mitigate, to soften", category: "Politics",
    example: "Las medidas buscan atenuar el impacto económico.",
    synonyms: ["mitigar", "suavizar"],
    usage: {
      note: "Soften the force of something negative (impact, blow, pain); formal cousin of suavizar. 'Circunstancias atenuantes' = mitigating circumstances.",
      examples: ["Estas pastillas atenúan el dolor en pocos minutos."],
      collocations: ["atenuar el impacto", "atenuar los efectos", "circunstancias atenuantes"],
    },
  },
  {
    word: "menguar", definition: "to diminish, to wane", category: "Emotions",
    example: "Su entusiasmo inicial empezó a menguar con el tiempo.",
    synonyms: ["disminuir", "decrecer"],
    usage: {
      note: "Wane or shrink gradually (enthusiasm, light, the moon — luna menguante); more literary than disminuir.",
      examples: ["Con el paso de los días, menguaron las provisiones."],
      collocations: ["menguar el entusiasmo", "luna menguante"],
    },
  },
  {
    word: "incrementar", definition: "to increase, to raise", category: "Business",
    example: "El plan pretende incrementar la productividad.",
    synonyms: ["aumentar", "elevar"],
    usage: {
      grammar: "also reflexive: incrementarse",
      note: "Formal/business 'to increase', often with figures or output; interchangeable with aumentar but more technical.",
      examples: ["La empresa ha incrementado sus exportaciones un 20%."],
      collocations: ["incrementar la productividad", "incrementar las ventas"],
    },
  },
  {
    word: "ponderar", definition: "to weigh up, to consider carefully", category: "Academic",
    example: "Conviene ponderar los riesgos antes de decidir.",
    synonyms: ["sopesar", "valorar"],
    usage: {
      note: "Weigh up pros and cons carefully before deciding; sopesar is the everyday equivalent. (Also formally 'to praise'.)",
      examples: ["El tribunal ponderó todas las pruebas antes del fallo."],
      collocations: ["ponderar los riesgos", "ponderar los pros y los contras"],
    },
  },
  {
    word: "discrepar", definition: "to disagree, to differ", category: "Academic",
    example: "Los expertos discrepan sobre las causas del fenómeno.",
    synonyms: ["disentir"],
    usage: {
      grammar: "+ de / en / sobre",
      note: "Disagree, esp. in formal or academic debate: discrepar de alguien, en/sobre algo. More formal than 'no estar de acuerdo'.",
      examples: ["Discrepé de su análisis en varios puntos."],
      collocations: ["discrepar de la opinión", "discrepar en algo"],
    },
  },
  {
    word: "matizar", definition: "to qualify, to add nuance to", category: "Academic",
    example: "El autor matiza sus afirmaciones en el segundo capítulo.",
    synonyms: ["puntualizar", "precisar"],
    usage: {
      note: "Add qualifications so a statement isn't taken absolutely — a key academic verb. precisar/puntualizar overlap, but matizar specifically softens and nuances.",
      examples: ["Los autores matizaron sus conclusiones en la segunda edición."],
      collocations: ["matizar una afirmación", "matizar las palabras"],
    },
  },
  {
    word: "constatar", definition: "to verify, to confirm (a fact)", category: "Science",
    example: "El estudio permitió constatar una mejora notable.",
    synonyms: ["comprobar", "verificar"],
    usage: {
      note: "Establish a fact through observation or evidence; formal, frequent in reports. comprobar is the everyday word.",
      examples: ["Los inspectores constataron varias irregularidades."],
      collocations: ["constatar una mejora", "constatar los hechos"],
    },
  },
  {
    word: "subrayar", definition: "to underline, to emphasise", category: "Academic",
    example: "El informe subraya la urgencia de actuar.",
    synonyms: ["recalcar", "resaltar"],
    usage: {
      note: "Literally to underline; extremely common figuratively = to stress a point. The most neutral-formal of its synonyms.",
      examples: ["El profesor subrayó la importancia de citar las fuentes."],
      collocations: ["subrayar la importancia", "subrayar la urgencia"],
    },
  },
  {
    word: "aludir", definition: "to allude, to refer to", category: "Politics",
    example: "El ministro aludió a la situación sin dar detalles.",
    synonyms: ["mencionar", "referirse"],
    usage: {
      grammar: "+ a",
      note: "Refer to something indirectly; always 'aludir a algo/alguien'. 'Darse por aludido' = to take a remark personally.",
      examples: ["El informe alude repetidamente a ese precedente."],
      collocations: ["aludir a un tema", "darse por aludido"],
    },
  },
  {
    word: "rehuir", definition: "to avoid, to shy away from", category: "Politics",
    example: "Rehuyó la pregunta más comprometida con elegancia.",
    synonyms: ["eludir", "evitar"],
    usage: {
      grammar: "irregular: rehúyo, rehúye",
      note: "Shy away from a question, responsibility or contact, almost by instinct; slightly more evasive than eludir/evitar.",
      examples: ["De niño rehuía el contacto con los desconocidos."],
      collocations: ["rehuir la pregunta", "rehuir el contacto"],
    },
  },
  {
    word: "eludir", definition: "to evade, to dodge", category: "Law",
    example: "No se puede eludir la responsabilidad indefinidamente.",
    synonyms: ["evadir", "esquivar"],
    usage: {
      note: "Deliberately evade a responsibility, topic or the law; cooler and more calculated than evitar.",
      examples: ["El sospechoso eludió la vigilancia policial."],
      collocations: ["eludir la responsabilidad", "eludir el tema", "eludir la justicia"],
    },
  },
  {
    word: "rebatir", definition: "to refute, to counter", category: "Law",
    example: "El abogado supo rebatir todos los argumentos contrarios.",
    synonyms: ["refutar", "contradecir"],
    usage: {
      note: "Counter an argument point by point; near refutar, but emphasises arguing back rather than conclusively disproving.",
      examples: ["Rebatió cada acusación con datos concretos."],
      collocations: ["rebatir un argumento", "rebatir las críticas"],
    },
  },
  {
    word: "refutar", definition: "to refute, to disprove", category: "Science",
    example: "Los datos refutan por completo aquella hipótesis.",
    synonyms: ["rebatir", "desmentir"],
    usage: {
      note: "Prove an argument or hypothesis false, usually with evidence; stronger and more conclusive than rebatir.",
      examples: ["El nuevo experimento refutó la teoría anterior."],
      collocations: ["refutar una hipótesis", "refutar una teoría"],
    },
  },
  {
    word: "corroborar", definition: "to corroborate, to back up", category: "Law",
    example: "Varios testigos corroboraron su versión de los hechos.",
    synonyms: ["confirmar", "ratificar"],
    usage: {
      note: "Back up a claim with further evidence or testimony; formal, frequent in law and science. confirmar is the everyday word.",
      examples: ["Las imágenes corroboran su testimonio."],
      collocations: ["corroborar una versión", "corroborar los datos"],
    },
  },
  {
    word: "discernir", definition: "to discern, to distinguish", category: "Academic",
    example: "Es difícil discernir lo esencial de lo accesorio.",
    synonyms: ["distinguir", "diferenciar"],
    usage: {
      grammar: "irregular: discierno",
      note: "Tell apart things that are close or subtle (essential vs trivial, right vs wrong); more cognitive than plain distinguir.",
      examples: ["A esa edad ya disciernen entre la realidad y la ficción."],
      collocations: ["discernir lo esencial", "discernir el bien del mal"],
    },
  },
  {
    word: "deslindar", definition: "to delimit, to separate clearly", category: "Law",
    example: "Hay que deslindar las responsabilidades de cada parte.",
    synonyms: ["delimitar", "separar"],
    usage: {
      note: "Draw clear boundaries between things, esp. responsibilities or concepts; formal/legal, often 'deslindar responsabilidades'.",
      examples: ["El juez deslindó las competencias de cada organismo."],
      collocations: ["deslindar responsabilidades", "deslindar competencias"],
    },
  },
  {
    word: "abordar", definition: "to tackle, to address (an issue)", category: "Academic",
    example: "El congreso abordará los retos de la educación.",
    synonyms: ["tratar", "afrontar"],
    usage: {
      note: "The go-to formal verb for taking on a problem, task or person; also literally 'to board' a vehicle.",
      examples: ["El documental aborda el problema desde varios ángulos."],
      collocations: ["abordar un problema", "abordar un tema", "abordar un reto"],
    },
  },
  {
    word: "afianzar", definition: "to secure, to reinforce", category: "Politics",
    example: "El acuerdo sirvió para afianzar la alianza entre ambos.",
    synonyms: ["consolidar", "asegurar"],
    usage: {
      grammar: "also reflexive: afianzarse",
      note: "Make something firm and secure (an alliance, position, knowledge); near consolidar but stresses giving solid support. Reflexive = to establish oneself.",
      examples: ["Con cada victoria, el equipo afianzó su liderato."],
      collocations: ["afianzar una alianza", "afianzarse en el cargo"],
    },
  },
  {
    word: "propiciar", definition: "to foster, to bring about", category: "Politics",
    example: "El diálogo propició un clima de mayor confianza.",
    synonyms: ["favorecer", "facilitar"],
    usage: {
      note: "Create the favourable conditions for something to happen; subtler than provocar — it enables rather than directly causes.",
      examples: ["Un buen ambiente propicia la creatividad."],
      collocations: ["propiciar el diálogo", "propiciar un clima de confianza"],
    },
  },
  {
    word: "suscitar", definition: "to arouse, to provoke (interest/debate)", category: "Society",
    example: "La propuesta suscitó un intenso debate público.",
    synonyms: ["provocar", "generar"],
    usage: {
      note: "Stir up an abstract reaction — interest, debate, doubt, suspicion; near provocar but more neutral and formal.",
      examples: ["Sus declaraciones suscitan polémica cada semana."],
      collocations: ["suscitar interés", "suscitar un debate", "suscitar dudas"],
    },
  },
  {
    word: "desencadenar", definition: "to trigger, to unleash", category: "Politics",
    example: "La noticia desencadenó una ola de protestas.",
    synonyms: ["provocar", "originar"],
    usage: {
      grammar: "also reflexive: desencadenarse",
      note: "Trigger a chain of events (crisis, protests, reaction) — vivid image of breaking a chain. Reflexive for the events themselves.",
      examples: ["La medida desencadena reacciones encontradas."],
      collocations: ["desencadenar una crisis", "desencadenar una reacción"],
    },
  },
  {
    word: "paliar", definition: "to alleviate, to ease", category: "Society",
    example: "El subsidio ayudó a paliar los efectos del paro.",
    synonyms: ["aliviar", "mitigar"],
    usage: {
      note: "Ease the effects or symptoms of a problem without curing it (poverty, pain); formal cousin of aliviar. Cf. 'cuidados paliativos'.",
      examples: ["El gobierno palió la crisis con ayudas directas."],
      collocations: ["paliar los efectos", "paliar la situación", "cuidados paliativos"],
    },
  },
  {
    word: "subsanar", definition: "to rectify, to put right", category: "Business",
    example: "La empresa se comprometió a subsanar los errores.",
    synonyms: ["corregir", "remediar"],
    usage: {
      note: "Put right an error, defect or omission, esp. administrative or legal; more formal and specific than corregir.",
      examples: ["La empresa subsanó el fallo en cuestión de horas."],
      collocations: ["subsanar un error", "subsanar deficiencias"],
    },
  },
  {
    word: "acatar", definition: "to abide by, to comply with", category: "Law",
    example: "Todos deben acatar las decisiones del tribunal.",
    synonyms: ["obedecer", "cumplir"],
    usage: {
      note: "Obey rules, authority or a ruling — often reluctantly but dutifully; a stronger sense of submission than cumplir.",
      examples: ["Aunque no le gustó, acató la orden sin rechistar."],
      collocations: ["acatar las normas", "acatar una decisión", "acatar la ley"],
    },
  },
  {
    word: "vulnerar", definition: "to violate, to infringe", category: "Law",
    example: "La medida vulnera derechos fundamentales.",
    synonyms: ["infringir", "transgredir"],
    usage: {
      note: "Violate a right, law or principle; formal/legal and always abstract objects, never physical ones.",
      examples: ["La sentencia concluyó que se vulneraron sus derechos."],
      collocations: ["vulnerar un derecho", "vulnerar la ley", "vulnerar la intimidad"],
    },
  },
  {
    word: "incurrir", definition: "to incur, to fall into (error/offence)", category: "Academic",
    example: "El informe incurre en varias contradicciones.",
    synonyms: ["cometer"],
    usage: {
      grammar: "+ en",
      note: "Always 'incurrir en' — to fall into an error, contradiction, cost or offence. Formal.",
      examples: ["El banco incurrió en graves pérdidas ese trimestre."],
      collocations: ["incurrir en un error", "incurrir en gastos", "incurrir en un delito"],
    },
  },
  {
    word: "entablar", definition: "to start, to strike up (a relationship/talks)", category: "Politics",
    example: "Las partes acordaron entablar negociaciones.",
    synonyms: ["iniciar", "establecer"],
    usage: {
      note: "Initiate something that unfolds between parties — talks, a lawsuit, a conversation, a friendship; more specific than plain iniciar.",
      examples: ["Pronto entablaron una sólida amistad."],
      collocations: ["entablar negociaciones", "entablar una conversación", "entablar amistad"],
    },
  },
  {
    word: "deliberar", definition: "to deliberate", category: "Law",
    example: "El jurado se retiró a deliberar durante horas.",
    synonyms: ["debatir", "discutir"],
    usage: {
      grammar: "+ sobre",
      note: "Debate formally before reaching a decision (juries, committees); implies weighing options, not just discussing.",
      examples: ["El jurado deliberó durante toda la tarde."],
      collocations: ["deliberar sobre un caso", "retirarse a deliberar"],
    },
  },
  {
    word: "dictaminar", definition: "to rule, to give a verdict", category: "Law",
    example: "El comité dictaminó a favor del demandante.",
    synonyms: ["sentenciar", "resolver"],
    usage: {
      note: "Issue an expert ruling or verdict (court, committee, doctor); formal and technical.",
      examples: ["El perito dictaminará la causa del incendio."],
      collocations: ["dictaminar a favor", "dictaminar sobre la causa"],
    },
  },
  {
    word: "promulgar", definition: "to enact, to promulgate (a law)", category: "Law",
    example: "El parlamento promulgó la nueva normativa.",
    synonyms: ["aprobar", "decretar"],
    usage: {
      note: "Officially put a law or decree into force; aprobar is broader (any approval), promulgar is the formal legislative act.",
      examples: ["El rey promulgará la ley la próxima semana."],
      collocations: ["promulgar una ley", "promulgar un decreto"],
    },
  },
  {
    word: "derogar", definition: "to repeal, to abolish", category: "Law",
    example: "El gobierno decidió derogar la antigua ley.",
    synonyms: ["abolir", "anular"],
    usage: {
      note: "Repeal an existing law — the exact opposite of promulgar; formal/legal only.",
      examples: ["El nuevo gobierno derogó varios decretos polémicos."],
      collocations: ["derogar una ley", "derogar una norma"],
    },
  },
  {
    word: "índole", definition: "nature, kind, sort", category: "Academic",
    example: "Surgieron problemas de índole técnica.",
    synonyms: ["naturaleza", "tipo"],
    usage: {
      grammar: "f.",
      note: "The 'nature/kind' of something abstract; almost always 'de índole + adjective' (de índole técnica/social). naturaleza is more general.",
      collocations: ["de índole técnica", "de índole social", "problemas de índole..."],
    },
  },
  {
    word: "envergadura", definition: "scale, scope, importance", category: "Business",
    example: "Es un proyecto de gran envergadura.",
    synonyms: ["magnitud", "alcance"],
    usage: {
      grammar: "f.",
      note: "The scale or significance of an undertaking (also a bird's wingspan); 'de gran envergadura' = large-scale.",
      collocations: ["de gran envergadura", "un proyecto de envergadura"],
    },
  },
  {
    word: "alcance", definition: "reach, scope", category: "Academic",
    example: "Aún no se conoce el alcance real del problema.",
    synonyms: ["extensión"],
    usage: {
      grammar: "m.",
      note: "Reach or scope; 'al alcance de' = within reach of, 'de largo alcance' = far-reaching.",
      collocations: ["el alcance del problema", "al alcance de la mano", "de largo alcance"],
    },
  },
  {
    word: "vertiente", definition: "aspect, facet; slope", category: "Academic",
    example: "El asunto tiene una clara vertiente ética.",
    synonyms: ["faceta", "aspecto"],
    usage: {
      grammar: "f.",
      note: "One facet or side of an issue (also a mountainside); use to flag a single dimension of a topic. faceta is synonymous.",
      collocations: ["la vertiente ética", "la vertiente económica"],
    },
  },
  {
    word: "matiz", definition: "nuance, shade of meaning", category: "Arts",
    example: "Cada palabra aporta un matiz distinto.",
    synonyms: ["tono", "sutileza"],
    usage: {
      grammar: "m., pl. matices",
      note: "A subtle shade of meaning or colour; 'sin matices' = black-and-white/categorical.",
      collocations: ["un matiz distinto", "sin matices", "matices de significado"],
    },
  },
  {
    word: "sesgo", definition: "bias; slant", category: "Academic",
    example: "El estudio presenta un evidente sesgo ideológico.",
    synonyms: ["parcialidad", "inclinación"],
    usage: {
      grammar: "m.",
      note: "Bias or slant in data/reporting; technical in statistics ('sesgo de selección'). 'Al sesgo' = on the bias/diagonally.",
      collocations: ["sesgo ideológico", "sesgo de selección"],
    },
  },
  {
    word: "premisa", definition: "premise", category: "Academic",
    example: "Su razonamiento parte de una premisa falsa.",
    synonyms: ["supuesto"],
    usage: {
      grammar: "f.",
      note: "A premise an argument rests on; 'partir de la premisa de que...'. supuesto is close.",
      collocations: ["partir de una premisa", "una premisa falsa"],
    },
  },
  {
    word: "hipótesis", definition: "hypothesis", category: "Science",
    example: "Los datos contradicen la hipótesis inicial.",
    synonyms: ["conjetura", "suposición"],
    usage: {
      grammar: "f., invariable (la/las hipótesis)",
      note: "Hypothesis; same form singular and plural. 'Plantear/contrastar una hipótesis'.",
      collocations: ["plantear una hipótesis", "contrastar la hipótesis"],
    },
  },
  {
    word: "paradigma", definition: "paradigm, model", category: "Science",
    example: "El descubrimiento supuso un cambio de paradigma.",
    synonyms: ["modelo"],
    usage: {
      grammar: "m. (despite -a ending)",
      note: "A model or framework; 'cambio de paradigma' = paradigm shift.",
      collocations: ["cambio de paradigma", "un nuevo paradigma"],
    },
  },
  {
    word: "índice", definition: "index, rate; table of contents", category: "Finance",
    example: "El índice de desempleo bajó ligeramente.",
    synonyms: ["tasa"],
    usage: {
      grammar: "m.",
      note: "Index, rate, or table of contents — also the index finger. Use 'índice de + noun' for rates (índice de desempleo).",
      collocations: ["índice de desempleo", "índice de precios", "el índice del libro"],
    },
  },
  {
    word: "umbral", definition: "threshold", category: "Society",
    example: "Muchas familias viven por debajo del umbral de la pobreza.",
    synonyms: ["límite"],
    usage: {
      grammar: "m.",
      note: "Threshold, literal (a doorway) and figurative (umbral de la pobreza / del dolor). límite is more general.",
      collocations: ["umbral de la pobreza", "umbral del dolor"],
    },
  },
  {
    word: "auge", definition: "boom, peak, height", category: "Finance",
    example: "El turismo vive un auge sin precedentes.",
    synonyms: ["apogeo", "esplendor"],
    usage: {
      grammar: "m.",
      note: "A peak or boom; 'en pleno auge' = at its height, 'estar en auge' = to be booming. Opposite of declive.",
      collocations: ["en pleno auge", "estar en auge"],
    },
  },
  {
    word: "declive", definition: "decline, downturn", category: "Finance",
    example: "La industria entró en un lento declive.",
    synonyms: ["decadencia", "ocaso"],
    usage: {
      grammar: "m.",
      note: "Decline or downturn (also a physical slope); 'en declive' = in decline. The opposite of auge.",
      collocations: ["en declive", "el declive de la industria"],
    },
  },
  {
    word: "estancamiento", definition: "stagnation, standstill", category: "Finance",
    example: "La economía sufre un preocupante estancamiento.",
    synonyms: ["parálisis"],
    usage: {
      grammar: "m.",
      note: "Stagnation — economic or in negotiations; from estancar (to bring to a standstill). Connotes a worrying lack of progress.",
      collocations: ["estancamiento económico", "estancamiento de las negociaciones"],
    },
  },
  {
    word: "incertidumbre", definition: "uncertainty", category: "Politics",
    example: "La incertidumbre política frena la inversión.",
    synonyms: ["inseguridad"],
    usage: {
      grammar: "f.",
      note: "Abstract uncertainty about the future; opposite of certeza. inseguridad leans more personal/emotional.",
      collocations: ["incertidumbre política", "clima de incertidumbre"],
    },
  },
  {
    word: "coyuntura", definition: "situation, juncture, set of circumstances", category: "Finance",
    example: "La actual coyuntura económica es delicada.",
    synonyms: ["situación"],
    usage: {
      grammar: "f.",
      note: "The set of circumstances at a given moment, esp. economic or political; 'la coyuntura actual'. No exact one-word English match.",
      collocations: ["la coyuntura actual", "coyuntura económica"],
    },
  },
  {
    word: "repunte", definition: "upturn, rebound", category: "Finance",
    example: "Se observa un ligero repunte de las ventas.",
    synonyms: ["recuperación", "alza"],
    usage: {
      grammar: "m.",
      note: "An upturn or rebound after a dip (sales, prices, cases); journalistic-economic. Opposite of caída.",
      collocations: ["un repunte de las ventas", "repunte de los casos"],
    },
  },
  {
    word: "solvencia", definition: "solvency; reliability", category: "Finance",
    example: "El banco evaluó la solvencia del cliente.",
    synonyms: ["fiabilidad"],
    usage: {
      grammar: "f.",
      note: "Financial solvency, and figuratively reliability or competence ('con solvencia'). Adjective: solvente.",
      collocations: ["solvencia económica", "con solvencia"],
    },
  },
  {
    word: "rentabilidad", definition: "profitability, return", category: "Finance",
    example: "La rentabilidad del fondo superó las expectativas.",
    synonyms: ["rendimiento"],
    usage: {
      grammar: "f.",
      note: "Profitability or return on investment; 'rentabilidad de + noun'. Adjective rentable = profitable.",
      collocations: ["rentabilidad del fondo", "alta rentabilidad"],
    },
  },
  {
    word: "perspicaz", definition: "perceptive, shrewd", category: "Emotions",
    example: "Es una analista perspicaz y muy bien informada.",
    synonyms: ["agudo", "sagaz"],
    usage: {
      note: "Sharp at noticing what others miss; describes people and minds. agudo/sagaz are close; perspicaz stresses insight.",
      collocations: ["una mente perspicaz", "un observador perspicaz"],
    },
  },
  {
    word: "tenaz", definition: "tenacious, persistent", category: "Emotions",
    example: "Su carácter tenaz le permitió superar la adversidad.",
    synonyms: ["perseverante", "constante"],
    usage: {
      note: "Persistently determined, with a positive ring (unlike obstinado). Also of stains/illnesses = stubborn.",
      collocations: ["un carácter tenaz", "un esfuerzo tenaz"],
    },
  },
  {
    word: "reticente", definition: "reluctant, reticent", category: "Emotions",
    example: "Se mostró reticente a compartir los detalles.",
    synonyms: ["reacio", "renuente"],
    usage: {
      grammar: "+ a",
      note: "Reluctant, holding back: 'reticente a + infinitive'. reacio is synonymous. Note it means reluctance, not the English 'reticent = quiet'.",
      collocations: ["reticente a hablar", "mostrarse reticente"],
    },
  },
  {
    word: "obstinado", definition: "obstinate, stubborn", category: "Emotions",
    example: "Es tan obstinado que nunca admite un error.",
    synonyms: ["terco", "testarudo"],
    usage: {
      note: "Stubborn in a negative, won't-budge way; stronger and less admiring than tenaz. terco/testarudo are the everyday equivalents.",
      collocations: ["obstinado en su error", "un carácter obstinado"],
    },
  },
  {
    word: "íntegro", definition: "honest, upright; whole", category: "Emotions",
    example: "Todos lo consideran un profesional íntegro.",
    synonyms: ["honesto", "recto"],
    usage: {
      note: "Of a person = honest and upright; of a thing = whole/entire (el texto íntegro). honesto covers only the moral sense.",
      collocations: ["una persona íntegra", "el documento íntegro"],
    },
  },
  {
    word: "altruista", definition: "altruistic, selfless", category: "Society",
    example: "Dedica su tiempo a causas altruistas.",
    synonyms: ["generoso", "desinteresado"],
    usage: {
      grammar: "invariable (m./f.)",
      note: "Selfless, putting others first; same form for both genders. Opposite of egoísta. Noun: el/la altruista.",
      collocations: ["causas altruistas", "un gesto altruista"],
    },
  },
  {
    word: "indiferente", definition: "indifferent, unconcerned", category: "Emotions",
    example: "Permaneció indiferente ante las críticas.",
    synonyms: ["impasible", "apático"],
    usage: {
      grammar: "+ a / ante",
      note: "Unmoved or uninterested; 'serle indiferente a alguien' = to not matter to someone. impasible stresses outward calm.",
      collocations: ["indiferente ante las críticas", "me es indiferente"],
    },
  },
  {
    word: "susceptible", definition: "touchy; liable to", category: "Emotions",
    example: "Es muy susceptible a cualquier comentario.",
    synonyms: ["sensible"],
    usage: {
      grammar: "+ de / a",
      note: "Two senses: (of a person) touchy, easily offended; (+ de) liable to / capable of — 'susceptible de mejora'.",
      collocations: ["susceptible de mejora", "una persona susceptible"],
    },
  },
  {
    word: "arraigado", definition: "deep-rooted, ingrained", category: "Culture",
    example: "Es una costumbre profundamente arraigada en la región.",
    synonyms: ["enraizado"],
    usage: {
      note: "Deep-rooted — customs, beliefs, fears; from arraigar (to take root). 'Profundamente arraigado' = thoroughly entrenched.",
      collocations: ["una costumbre arraigada", "profundamente arraigado"],
    },
  },
  {
    word: "imprescindible", definition: "essential, indispensable", category: "Business",
    example: "Su colaboración fue imprescindible para el éxito.",
    synonyms: ["esencial", "indispensable"],
    usage: {
      note: "Absolutely essential — something you cannot do without; stronger than necesario. 'Es imprescindible + infinitive'.",
      collocations: ["es imprescindible", "un requisito imprescindible"],
    },
  },
  {
    word: "controvertido", definition: "controversial", category: "Politics",
    example: "Tomó una decisión muy controvertida.",
    synonyms: ["polémico", "discutido"],
    usage: {
      note: "Controversial — describes decisions, figures and topics. polémico is the everyday synonym.",
      collocations: ["una decisión controvertida", "un tema controvertido"],
    },
  },
  {
    word: "rotundo", definition: "categorical, resounding", category: "Society",
    example: "Dio una respuesta rotunda y sin matices.",
    synonyms: ["tajante", "categórico"],
    usage: {
      note: "Categorical and emphatic — a 'no', or a success (un éxito rotundo); leaves no room for doubt. tajante is close.",
      collocations: ["un no rotundo", "un éxito rotundo"],
    },
  },
  {
    word: "ambiguo", definition: "ambiguous", category: "Academic",
    example: "Su declaración fue deliberadamente ambigua.",
    synonyms: ["equívoco", "impreciso"],
    usage: {
      note: "Open to more than one reading; can be deliberate ('deliberadamente ambiguo'). Noun: ambigüedad.",
      collocations: ["deliberadamente ambiguo", "una respuesta ambigua"],
    },
  },
  {
    word: "exhaustivo", definition: "exhaustive, thorough", category: "Academic",
    example: "Realizaron un análisis exhaustivo de los datos.",
    synonyms: ["minucioso", "completo"],
    usage: {
      note: "Covering every last detail (analysis, search, list); minucioso stresses care, exhaustivo stresses completeness.",
      collocations: ["un análisis exhaustivo", "una búsqueda exhaustiva"],
    },
  },
  {
    word: "pertinente", definition: "relevant, pertinent", category: "Academic",
    example: "Hizo varias observaciones muy pertinentes.",
    synonyms: ["oportuno", "adecuado"],
    usage: {
      note: "Relevant and apt to the matter at hand; also 'las medidas pertinentes' = the appropriate measures. oportuno is close.",
      collocations: ["una observación pertinente", "las medidas pertinentes"],
    },
  },
  {
    word: "verosímil", definition: "credible, plausible", category: "Academic",
    example: "La explicación resulta del todo verosímil.",
    synonyms: ["creíble", "plausible"],
    usage: {
      note: "Believable, esp. of stories and explanations; literally 'truth-like'. Opposite inverosímil; creíble is the everyday word.",
      collocations: ["una explicación verosímil", "poco verosímil"],
    },
  },
  {
    word: "endeble", definition: "flimsy, feeble", category: "Academic",
    example: "El argumento se apoya en bases endebles.",
    synonyms: ["frágil", "débil"],
    usage: {
      note: "Weak and likely to give way — arguments, structures, health; more dismissive than débil. Opposite of sólido.",
      collocations: ["un argumento endeble", "bases endebles"],
    },
  },
  {
    word: "sólido", definition: "solid, sound", category: "Academic",
    example: "Presentó una argumentación sólida y coherente.",
    synonyms: ["firme", "consistente"],
    usage: {
      note: "Solid and sound (argument, knowledge, company); the positive opposite of endeble. firme/consistente are close.",
      collocations: ["una argumentación sólida", "conocimientos sólidos"],
    },
  },
  {
    word: "vigente", definition: "in force, current, valid", category: "Law",
    example: "La normativa sigue vigente hasta nuevo aviso.",
    synonyms: ["válido", "actual"],
    usage: {
      note: "Currently in force — law, contract, ideas; 'seguir vigente' = to still apply. Opposite of derogado/caduco.",
      collocations: ["la ley vigente", "seguir vigente"],
    },
  },
  {
    word: "inminente", definition: "imminent, impending", category: "Politics",
    example: "Se temía una crisis inminente.",
    synonyms: ["próximo", "cercano"],
    usage: {
      note: "About to happen at any moment, usually something feared (crisis, danger, collapse). próximo is neutral.",
      collocations: ["un peligro inminente", "una crisis inminente"],
    },
  },
  {
    word: "paulatino", definition: "gradual", category: "Society",
    example: "Se observa un cambio paulatino en los hábitos.",
    synonyms: ["progresivo", "gradual"],
    usage: {
      note: "Gradual and steady; a more formal/literary near-synonym of progresivo. Adverb: paulatinamente.",
      collocations: ["un cambio paulatino", "de forma paulatina"],
    },
  },
  {
    word: "minucioso", definition: "meticulous, detailed", category: "Academic",
    example: "Llevó a cabo un trabajo minucioso y riguroso.",
    synonyms: ["detallado", "meticuloso"],
    usage: {
      note: "Painstakingly thorough, attentive to every small detail — of people or work. detallado is close; minucioso adds care.",
      collocations: ["un trabajo minucioso", "un examen minucioso"],
    },
  },
  {
    word: "riguroso", definition: "rigorous, strict", category: "Science",
    example: "Aplican un control de calidad muy riguroso.",
    synonyms: ["estricto", "severo"],
    usage: {
      note: "Rigorous or strict — method, control, even climate ('un invierno riguroso'); implies no laxity. estricto is close.",
      collocations: ["un control riguroso", "un análisis riguroso"],
    },
  },
  {
    word: "índice de audiencia", definition: "audience rating", category: "Arts",
    example: "El programa lidera el índice de audiencia.",
    usage: {
      grammar: "m.",
      note: "The audience/viewer ratings of a TV or radio show — the equivalent of 'ratings/share'. 'Liderar el índice de audiencia'.",
      collocations: ["liderar el índice de audiencia", "subir el índice de audiencia"],
    },
  },
  {
    word: "trayectoria", definition: "career path, trajectory", category: "Business",
    example: "Tiene una larga trayectoria en el periodismo.",
    synonyms: ["recorrido"],
    usage: {
      grammar: "f.",
      note: "A career path or track record over time (also a physical trajectory); 'una larga trayectoria'. recorrido is close.",
      collocations: ["una larga trayectoria", "trayectoria profesional"],
    },
  },
  {
    word: "cometido", definition: "task, remit, role", category: "Business",
    example: "Cada miembro conoce bien su cometido.",
    synonyms: ["función", "tarea"],
    usage: {
      grammar: "m.",
      note: "An assigned task or remit; 'cumplir su cometido'. función/tarea are close, but cometido stresses the duty entrusted.",
      collocations: ["cumplir su cometido", "su cometido principal"],
    },
  },
  {
    word: "índole social", definition: "social nature", category: "Society",
    example: "Se trata de un problema de índole social.",
    usage: {
      note: "Set phrase = 'of a social nature' — one instance of 'de índole + adj.' (see índole). Used to classify a problem's type.",
      collocations: ["un problema de índole social", "asuntos de índole social"],
    },
  },
  {
    word: "menoscabar", definition: "to undermine, to damage", category: "Society",
    example: "Aquellas palabras menoscabaron su reputación.",
    synonyms: ["dañar", "perjudicar"],
    usage: {
      note: "Undermine or diminish something valued — reputation, rights, health; formal and abstract, where dañar is everyday.",
      examples: ["El escándalo menoscaba su credibilidad día a día."],
      collocations: ["menoscabar la reputación", "menoscabar los derechos"],
    },
  },
  {
    word: "ensalzar", definition: "to praise, to extol", category: "Society",
    example: "La prensa ensalzó la labor del equipo médico.",
    synonyms: ["elogiar", "alabar"],
    usage: {
      note: "Praise highly or extol; more elevated than elogiar. Opposite of menospreciar.",
      examples: ["Todos ensalzan su generosidad."],
      collocations: ["ensalzar la labor", "ensalzar las virtudes"],
    },
  },
  {
    word: "desprestigiar", definition: "to discredit", category: "Politics",
    example: "La campaña pretendía desprestigiar al rival.",
    synonyms: ["difamar", "desacreditar"],
    usage: {
      grammar: "also reflexive: desprestigiarse",
      note: "Damage someone's standing, often deliberately; difamar implies outright lies, desprestigiar just erodes prestige. Reflexive = to lose credibility.",
      examples: ["Esos rumores lo desprestigiaron ante sus colegas."],
      collocations: ["desprestigiar al rival", "una campaña para desprestigiar"],
    },
  },
  {
    word: "reivindicar", definition: "to claim, to demand (rights)", category: "Politics",
    example: "Los trabajadores salieron a reivindicar sus derechos.",
    synonyms: ["exigir", "reclamar"],
    usage: {
      note: "Demand rights or recognition as one's due; also to claim responsibility for (un atentado). Stronger and more political than simple pedir.",
      examples: ["Los vecinos reivindican más zonas verdes en el barrio."],
      collocations: ["reivindicar derechos", "reivindicar un atentado"],
    },
  },
  {
    word: "consensuar", definition: "to reach a consensus on", category: "Politics",
    example: "Lograron consensuar una postura común.",
    synonyms: ["acordar", "pactar"],
    usage: {
      note: "Hammer out an agreement everyone accepts (from consenso); acordar is close but consensuar stresses the joint process.",
      examples: ["Tras horas de debate, consensuaron el texto final."],
      collocations: ["consensuar una postura", "consensuar un acuerdo"],
    },
  },
  {
    word: "delegar", definition: "to delegate", category: "Business",
    example: "Un buen líder sabe delegar responsabilidades.",
    synonyms: ["encomendar"],
    usage: {
      grammar: "+ en",
      note: "Hand responsibility to someone — 'delegar algo en alguien'. A key management verb.",
      examples: ["Delegó la gestión diaria en su socio de confianza."],
      collocations: ["delegar responsabilidades", "delegar funciones", "delegar en alguien"],
    },
  },
  {
    word: "supervisar", definition: "to supervise, to oversee", category: "Business",
    example: "Se encarga de supervisar todo el proceso.",
    synonyms: ["controlar", "vigilar"],
    usage: {
      note: "Oversee work or people to make sure it's done right; controlar/vigilar overlap, but supervisar is the neutral professional term.",
      examples: ["Un ingeniero supervisa cada fase de la obra."],
      collocations: ["supervisar el proceso", "supervisar a un equipo"],
    },
  },
  {
    word: "optimizar", definition: "to optimise", category: "Technology",
    example: "El software ayuda a optimizar los recursos disponibles.",
    synonyms: ["mejorar", "rentabilizar"],
    usage: {
      note: "Get the most out of resources or processes; rentabilizar focuses on profit, optimizar on efficiency.",
      examples: ["El nuevo algoritmo optimizó los tiempos de carga."],
      collocations: ["optimizar los recursos", "optimizar el rendimiento"],
    },
  },
  {
    word: "depurar", definition: "to refine, to debug, to purge", category: "Technology",
    example: "Tardaron semanas en depurar el sistema.",
    synonyms: ["pulir", "refinar"],
    usage: {
      note: "Refine or purify — code (debug), a system, prose, or politically to purge. pulir/refinar cover the 'polish' sense.",
      examples: ["Los programadores depuraron el código durante días."],
      collocations: ["depurar un sistema", "depurar el código", "depurar responsabilidades"],
    },
  },
  {
    word: "implementar", definition: "to implement", category: "Business",
    example: "La empresa decidió implementar nuevas políticas.",
    synonyms: ["aplicar", "ejecutar"],
    usage: {
      note: "Put a plan, policy or system into practice; aplicar/ejecutar are close, implementar is the modern technocratic term.",
      examples: ["El hospital ya ha implementado el nuevo protocolo."],
      collocations: ["implementar políticas", "implementar un sistema"],
    },
  },
  {
    word: "desplegar", definition: "to deploy, to unfold", category: "Politics",
    example: "El ejército desplegó tropas en la frontera.",
    synonyms: ["extender"],
    usage: {
      grammar: "also reflexive: desplegarse",
      note: "Deploy (troops, resources, effort) or unfold/spread out; wide literal and figurative range.",
      examples: ["La empresa desplegará la red en todo el país."],
      collocations: ["desplegar tropas", "desplegar recursos", "desplegar esfuerzos"],
    },
  },
  {
    word: "vanguardia", definition: "forefront, avant-garde", category: "Science",
    example: "El laboratorio está a la vanguardia de la investigación.",
    synonyms: ["avanzada"],
    usage: {
      grammar: "f.",
      note: "The cutting edge or avant-garde; 'a la vanguardia de' = at the forefront of. Opposite of retaguardia.",
      collocations: ["a la vanguardia de", "la vanguardia artística"],
    },
  },
  {
    word: "indagar", definition: "to investigate, to inquire", category: "Law",
    example: "La comisión indagará las causas del incidente.",
    synonyms: ["investigar", "averiguar"],
    usage: {
      grammar: "+ en / sobre",
      note: "Probe or inquire into causes and facts; more investigative than preguntar, while averiguar focuses on finding out.",
      examples: ["La policía indagó en su pasado durante meses."],
      collocations: ["indagar en las causas", "indagar sobre un asunto"],
    },
  },
  {
    word: "esgrimir", definition: "to put forward, to wield (an argument)", category: "Law",
    example: "Esgrimió razones de peso para justificar su decisión.",
    synonyms: ["alegar", "argüir"],
    usage: {
      note: "Wield an argument or reason like a weapon in debate — a figurative use of 'to fence'. alegar/argüir are plainer.",
      examples: ["Siempre esgrime los mismos argumentos."],
      collocations: ["esgrimir argumentos", "esgrimir razones"],
    },
  },
  {
    word: "acaecer", definition: "to occur, to happen (formal)", category: "Law",
    example: "Los hechos acaecieron durante la madrugada.",
    synonyms: ["suceder", "ocurrir"],
    usage: {
      grammar: "formal, 3rd person only",
      note: "Literary/formal 'to happen', used only of events in the 3rd person (los hechos acaecieron). suceder/ocurrir are everyday.",
      examples: ["Nadie imaginaba lo que acaecería aquella noche."],
      collocations: ["los hechos acaecieron", "acaecer un suceso"],
    },
  },
  {
    word: "perdurar", definition: "to endure, to last", category: "Culture",
    example: "Su legado perdura hasta nuestros días.",
    synonyms: ["permanecer", "subsistir"],
    usage: {
      note: "Live on or last over time — a legacy, memory, custom; emphasises endurance, where permanecer is more static.",
      examples: ["Su obra perdurará durante generaciones."],
      collocations: ["perdurar en el tiempo", "su legado perdura"],
    },
  },
  {
    word: "forjar", definition: "to forge, to build (a future/character)", category: "Society",
    example: "Supo forjar una carrera brillante con esfuerzo.",
    synonyms: ["construir", "crear"],
    usage: {
      grammar: "also reflexive: forjarse",
      note: "Build something through effort — a career, character, friendship, future; a metaphor from metalworking. 'Forjarse un futuro'.",
      examples: ["A base de esfuerzo, forjó una reputación intachable."],
      collocations: ["forjar una carrera", "forjarse un futuro", "forjar el carácter"],
    },
  },
  {
    word: "índole íntima", definition: "intimate / private nature", category: "Emotions",
    example: "Prefirió no hablar de asuntos de índole íntima.",
    usage: {
      note: "Set phrase = 'of a private/personal nature' — one instance of 'de índole + adj.', used for delicate, intimate matters.",
      collocations: ["asuntos de índole íntima", "cuestiones de índole íntima"],
    },
  },
  {
    word: "recelo", definition: "suspicion, mistrust", category: "Emotions",
    example: "Lo recibieron con cierto recelo al principio.",
    synonyms: ["desconfianza", "sospecha"],
    usage: {
      grammar: "m.",
      note: "Wary mistrust; 'con recelo' = warily. desconfianza is close, but recelo adds a guarded, instinctive edge.",
      collocations: ["con recelo", "mirar con recelo"],
    },
  },
  {
    word: "desdén", definition: "disdain, contempt", category: "Emotions",
    example: "Trató la propuesta con absoluto desdén.",
    synonyms: ["desprecio", "menosprecio"],
    usage: {
      grammar: "m.",
      note: "Cold disdain; 'con desdén' = scornfully. desprecio is close, but desdén adds aloof indifference.",
      collocations: ["con desdén", "tratar con desdén"],
    },
  },
  {
    word: "nostalgia", definition: "nostalgia, longing", category: "Emotions",
    example: "Recordaba su infancia con cierta nostalgia.",
    synonyms: ["añoranza", "melancolía"],
    usage: {
      grammar: "f.",
      note: "Bittersweet longing for the past or home; 'sentir nostalgia de'. añoranza is close.",
      collocations: ["sentir nostalgia", "nostalgia de casa"],
    },
  },
  {
    word: "euforia", definition: "euphoria, elation", category: "Emotions",
    example: "La victoria desató la euforia entre los aficionados.",
    synonyms: ["júbilo", "entusiasmo"],
    usage: {
      grammar: "f.",
      note: "Intense elation, often collective (fans, crowds); 'desatar la euforia'. Opposite of abatimiento.",
      collocations: ["desatar la euforia", "un momento de euforia"],
    },
  },
  {
    word: "resiliencia", definition: "resilience", category: "Health",
    example: "Demostró una enorme resiliencia ante la adversidad.",
    synonyms: ["fortaleza", "entereza"],
    usage: {
      grammar: "f.",
      note: "The capacity to bounce back from adversity; a borrowed psychology term, increasingly common. fortaleza/entereza are close.",
      collocations: ["mostrar resiliencia", "resiliencia ante la adversidad"],
    },
  },
  {
    word: "agotamiento", definition: "exhaustion, depletion", category: "Health",
    example: "El agotamiento físico le obligó a descansar.",
    synonyms: ["cansancio", "fatiga"],
    usage: {
      grammar: "m.",
      note: "Exhaustion (physical or mental) or depletion of resources; from agotar. cansancio is much milder.",
      collocations: ["agotamiento físico", "agotamiento de recursos"],
    },
  },
  {
    word: "dolencia", definition: "ailment, complaint", category: "Health",
    example: "Sufre una dolencia crónica desde hace años.",
    synonyms: ["afección", "enfermedad"],
    usage: {
      grammar: "f.",
      note: "An ailment or complaint, esp. chronic or minor; gentler and more formal than enfermedad. afección is close.",
      collocations: ["una dolencia crónica", "padecer una dolencia"],
    },
  },
  {
    word: "secuela", definition: "after-effect, sequel", category: "Health",
    example: "El accidente le dejó secuelas permanentes.",
    synonyms: ["consecuencia"],
    usage: {
      grammar: "f.",
      note: "A lasting after-effect of illness or trauma (usually plural: secuelas); also a film sequel. consecuencia is more general.",
      collocations: ["dejar secuelas", "secuelas permanentes"],
    },
  },
  {
    word: "propenso", definition: "prone, liable", category: "Health",
    example: "Es propenso a sufrir resfriados en invierno.",
    synonyms: ["proclive", "predispuesto"],
    usage: {
      grammar: "+ a",
      note: "Prone or liable to (illness, mistakes): 'propenso a + noun/infinitive'. proclive is close, often for behaviours.",
      collocations: ["propenso a resfriados", "propenso a sufrir"],
    },
  },
  {
    word: "sedentario", definition: "sedentary", category: "Health",
    example: "Un estilo de vida sedentario perjudica la salud.",
    usage: {
      note: "Sedentary — of lifestyle or work, and of peoples (vs nomadic); opposite of activo/nómada. 'Vida sedentaria'.",
      collocations: ["vida sedentaria", "estilo de vida sedentario"],
    },
  },
  {
    word: "biodiversidad", definition: "biodiversity", category: "Environment",
    example: "La selva alberga una enorme biodiversidad.",
    usage: {
      grammar: "f.",
      note: "The variety of life in an ecosystem; environmental term. 'Pérdida de biodiversidad'.",
      collocations: ["pérdida de biodiversidad", "rica biodiversidad"],
    },
  },
  {
    word: "ecosistema", definition: "ecosystem", category: "Environment",
    example: "La contaminación amenaza todo el ecosistema marino.",
    usage: {
      grammar: "m. (despite -a ending)",
      note: "Ecosystem, literal and figurative (ecosistema digital). Despite the -a ending it is masculine.",
      collocations: ["ecosistema marino", "el equilibrio del ecosistema"],
    },
  },
  {
    word: "deforestación", definition: "deforestation", category: "Environment",
    example: "La deforestación avanza a un ritmo alarmante.",
    usage: {
      grammar: "f.",
      note: "Deforestation; 'avanzar/frenar la deforestación'. Opposite of reforestación.",
      collocations: ["frenar la deforestación", "la deforestación de la selva"],
    },
  },
  {
    word: "vertido", definition: "spill, discharge", category: "Environment",
    example: "El vertido de petróleo afectó a toda la costa.",
    synonyms: ["derrame"],
    usage: {
      grammar: "m.",
      note: "A spill or discharge of waste into the environment; from verter. derrame is close, often used for oil.",
      collocations: ["vertido de petróleo", "vertidos tóxicos"],
    },
  },
  {
    word: "huella", definition: "footprint, mark, trace", category: "Environment",
    example: "Cada uno puede reducir su huella de carbono.",
    synonyms: ["rastro", "marca"],
    usage: {
      grammar: "f.",
      note: "Footprint or trace, literal and figurative; 'huella de carbono' = carbon footprint, 'dejar huella' = to leave a mark, 'huellas dactilares' = fingerprints.",
      collocations: ["huella de carbono", "dejar huella", "huellas dactilares"],
    },
  },
  {
    word: "yacimiento", definition: "deposit, site (mineral/archaeological)", category: "Science",
    example: "Descubrieron un importante yacimiento arqueológico.",
    synonyms: ["mina"],
    usage: {
      grammar: "m.",
      note: "A deposit or site — mineral, oil or archaeological; context decides which. 'Yacimiento petrolífero/arqueológico'.",
      collocations: ["yacimiento arqueológico", "yacimiento petrolífero"],
    },
  },
  {
    word: "legado", definition: "legacy", category: "Culture",
    example: "Su legado artístico sigue influyendo hoy.",
    synonyms: ["herencia"],
    usage: {
      grammar: "m.",
      note: "Legacy — what someone leaves behind (cultural, artistic, or an inheritance). herencia overlaps but is more material/legal.",
      collocations: ["legado cultural", "dejar un legado"],
    },
  },
  {
    word: "acervo", definition: "heritage, body (of knowledge/works)", category: "Culture",
    example: "El museo conserva un valioso acervo cultural.",
    synonyms: ["patrimonio", "conjunto"],
    usage: {
      grammar: "m.",
      note: "A shared body of heritage, knowledge or works; formal, very often 'acervo cultural'. patrimonio is close.",
      collocations: ["acervo cultural", "el acervo común"],
    },
  },
  {
    word: "mecenas", definition: "patron, sponsor", category: "Arts",
    example: "El artista contó con el apoyo de un generoso mecenas.",
    synonyms: ["patrocinador", "benefactor"],
    usage: {
      grammar: "m./f., invariable",
      note: "A patron who funds the arts (from Maecenas); same form sg/pl. patrocinador is the modern, commercial term.",
      collocations: ["un generoso mecenas", "el mecenas de las artes"],
    },
  },
  {
    word: "narrativa", definition: "narrative", category: "Arts",
    example: "La novela destaca por su cuidada narrativa.",
    synonyms: ["relato"],
    usage: {
      grammar: "f.",
      note: "Narrative — both the craft of storytelling and, in modern usage, a political 'narrative' or spin. relato is a single story.",
      collocations: ["una cuidada narrativa", "la narrativa política"],
    },
  },
  {
    word: "estética", definition: "aesthetics; aesthetic (adj.)", category: "Arts",
    example: "La película apuesta por una estética minimalista.",
    usage: {
      grammar: "f.",
      note: "Aesthetics or a visual style ('una estética minimalista'); also the adjective estético/a, and the beauty-salon sense (centro de estética).",
      collocations: ["una estética minimalista", "la estética del film"],
    },
  },
  {
    word: "acotar", definition: "to delimit, to narrow down", category: "Academic",
    example: "Conviene acotar bien el alcance del estudio.",
    synonyms: ["delimitar", "restringir"],
    usage: {
      note: "Narrow down or delimit scope (a study, topic, quote); also to annotate. delimitar is close, acotar adds a 'fence in' sense.",
      examples: ["El comité acotó el alcance de la investigación."],
      collocations: ["acotar el alcance", "acotar el tema"],
    },
  },
  {
    word: "cotejar", definition: "to compare, to collate", category: "Academic",
    example: "Cotejaron las dos versiones para hallar diferencias.",
    synonyms: ["comparar", "contrastar"],
    usage: {
      note: "Cross-check two versions or documents side by side; formal. comparar is general, cotejar implies careful collation.",
      examples: ["El editor coteja cada cita con el original."],
      collocations: ["cotejar dos versiones", "cotejar datos"],
    },
  },
  {
    word: "dilatar", definition: "to prolong, to delay; to dilate", category: "Business",
    example: "No conviene dilatar más la decisión.",
    synonyms: ["retrasar", "prolongar"],
    usage: {
      grammar: "also reflexive: dilatarse",
      note: "Drag out or postpone (a decision) — reflexive dilatarse = to drag on; also physically to dilate (pupils). retrasar is plainer.",
      examples: ["El trámite se dilató varios meses sin explicación."],
      collocations: ["dilatar una decisión", "dilatarse en el tiempo"],
    },
  },
  {
    word: "tajante", definition: "categorical, emphatic, blunt", category: "Society",
    example: "Dio una negativa tajante, sin lugar a réplica.",
    synonyms: ["rotundo", "categórico"],
    usage: {
      note: "Blunt and categorical, allowing no reply (a 'no', a tone); near rotundo, but tajante adds a cutting edge.",
      collocations: ["una negativa tajante", "un tono tajante"],
    },
  },
];
