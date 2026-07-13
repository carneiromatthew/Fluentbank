import type { RawWord } from "./types";

// B2 — Vantage. Abstract and professional vocabulary for arguing a point,
// understanding nuance, and operating confidently across topics.
//
// `usage` authored for the full B2 batch: register/nuance notes, multi-sense
// warnings, gender, collocations, and an extra conjugated example on verbs.
export const B2_WORDS: RawWord[] = [
  {
    word: "ampliar", definition: "to widen, to broaden, to expand", category: "Education",
    example: "La universidad decidió ampliar su oferta de cursos.",
    synonyms: ["extender", "agrandar"],
    usage: {
      grammar: "accent: amplío, amplías",
      note: "To widen/broaden (scope, knowledge, an image = to zoom in). More about extent than desarrollar (to develop).",
      examples: ["Ampliaron la fábrica para producir más."],
      collocations: ["ampliar la oferta", "ampliar los conocimientos"],
    },
  },
  {
    word: "alcanzar", definition: "to reach, to attain", category: "Business",
    example: "El proyecto logró alcanzar todos sus objetivos.",
    synonyms: ["lograr", "conseguir"],
    usage: {
      note: "To reach (a place, level, goal) or attain; also 'alcanzar para' = to be enough. lograr/conseguir stress achieving.",
      examples: ["El corredor alcanzó la meta agotado."],
      collocations: ["alcanzar un objetivo", "alcanzar un acuerdo"],
    },
  },
  {
    word: "gestionar", definition: "to manage, to handle", category: "Business",
    example: "Aprendió a gestionar su tiempo de forma eficaz.",
    synonyms: ["administrar", "dirigir"],
    usage: {
      note: "To manage/handle (time, resources, paperwork, a crisis); administrar leans financial, dirigir = to lead. Noun: gestión.",
      examples: ["Gestiona varias cuentas a la vez."],
      collocations: ["gestionar el tiempo", "gestionar recursos"],
    },
  },
  {
    word: "fomentar", definition: "to promote, to encourage", category: "Education",
    example: "El programa busca fomentar la lectura entre los jóvenes.",
    synonyms: ["promover", "impulsar"],
    usage: {
      note: "To foster/encourage something worthwhile (reading, dialogue, employment); promover/impulsar are close. Abstract objects.",
      examples: ["La beca fomentó su interés por la ciencia."],
      collocations: ["fomentar el empleo", "fomentar la participación"],
    },
  },
  {
    word: "destacar", definition: "to stand out; to highlight", category: "Business",
    example: "Su talento le hizo destacar entre los demás candidatos.",
    synonyms: ["sobresalir", "resaltar"],
    usage: {
      note: "Two senses: (intransitive) to stand out; (transitive) to highlight/emphasise. 'cabe destacar que...' = it's worth noting that.",
      examples: ["El informe destaca los puntos más urgentes."],
      collocations: ["destacar entre", "cabe destacar"],
    },
  },
  {
    word: "plantear", definition: "to raise, to pose (a question/problem)", category: "Academic",
    example: "El informe plantea varias preguntas importantes.",
    synonyms: ["proponer", "exponer"],
    usage: {
      note: "To raise/pose (a question, problem, idea); reflexive 'plantearse' = to consider/wonder. proponer = to propose.",
      examples: ["Planteó una solución audaz al problema."],
      collocations: ["plantear una pregunta", "plantearse algo"],
    },
  },
  {
    word: "suponer", definition: "to suppose; to mean, to involve", category: "Daily Life",
    example: "Mudarse al extranjero supone un gran cambio.",
    synonyms: ["implicar", "presumir"],
    usage: {
      grammar: "irregular: supongo, supuse",
      note: "Two senses: to assume/suppose ('supongo que sí'); and to entail/mean (implicar). 'un supuesto' = an assumption.",
      examples: ["Supuse que llegarías tarde."],
      collocations: ["suponer un cambio", "suponer un problema"],
    },
  },
  {
    word: "asumir", definition: "to take on, to assume (responsibility)", category: "Business",
    example: "Decidió asumir la dirección del equipo.",
    synonyms: ["aceptar", "afrontar"],
    usage: {
      note: "To take on (a role, cost, blame) or come to accept a hard fact. NOT 'assume' as in suppose — that's suponer.",
      examples: ["Asumió la culpa sin dudarlo."],
      collocations: ["asumir la responsabilidad", "asumir un riesgo"],
    },
  },
  {
    word: "afrontar", definition: "to face up to, to confront", category: "Daily Life",
    example: "Tuvimos que afrontar varias dificultades a la vez.",
    synonyms: ["enfrentar", "encarar"],
    usage: {
      note: "To face up to / deal with (difficulties, consequences, costs) head-on; enfrentar/encarar are close. More resolute than 'tratar'.",
      examples: ["Afrontó la situación con calma."],
      collocations: ["afrontar un problema", "afrontar las consecuencias"],
    },
  },
  {
    word: "superar", definition: "to overcome; to exceed", category: "Emotions",
    example: "Consiguió superar todos los obstáculos del camino.",
    synonyms: ["vencer", "rebasar"],
    usage: {
      note: "To overcome (a difficulty, grief) or to exceed/surpass (expectations, a figure); reflexive 'superarse' = to better oneself.",
      examples: ["Superó todas las expectativas."],
      collocations: ["superar un obstáculo", "superar las expectativas"],
    },
  },
  {
    word: "lograr", definition: "to achieve, to manage to", category: "Business",
    example: "Por fin logramos terminar el proyecto a tiempo.",
    synonyms: ["conseguir", "alcanzar"],
    usage: {
      note: "To achieve or succeed in doing ('lograr + inf.'); a near-synonym of conseguir, slightly more formal. Noun: logro (achievement).",
      examples: ["Logró convencer al jurado."],
      collocations: ["lograr un objetivo", "lograr hacer algo"],
    },
  },
  {
    word: "rendir", definition: "to perform, to yield, to produce", category: "Business",
    example: "El equipo rinde mejor cuando trabaja unido.",
    synonyms: ["producir"],
    usage: {
      grammar: "irregular e→i: rindo",
      note: "To perform/be productive, or to yield (returns). Also 'rendir homenaje/cuentas'. Reflexive 'rendirse' = to give up/surrender.",
      examples: ["El nuevo motor rendirá más con menos consumo."],
      collocations: ["rendir al máximo", "rendirse", "rendir cuentas"],
    },
  },
  {
    word: "exigir", definition: "to demand, to require", category: "Business",
    example: "El puesto exige mucha experiencia y dedicación.",
    synonyms: ["requerir", "reclamar"],
    usage: {
      grammar: "irregular g→j: exijo",
      note: "To demand (forcefully) or require (a job, task). requerir is more neutral 'require'; reclamar = to claim/complain. Adjective: exigente.",
      examples: ["Exigieron una respuesta inmediata."],
      collocations: ["exigir experiencia", "exigir responsabilidades"],
    },
  },
  {
    word: "advertir", definition: "to warn; to notice", category: "Health",
    example: "El médico le advirtió de los riesgos del tratamiento.",
    synonyms: ["avisar", "prevenir"],
    usage: {
      grammar: "irregular e→ie: advierto, advirtió",
      note: "Two senses: to warn ('advertir de/que') and to notice/perceive. avisar = to notify. Noun: advertencia (warning).",
      examples: ["Te advierto que no será fácil."],
      collocations: ["advertir de un peligro", "advertir un cambio"],
    },
  },
  {
    word: "prever", definition: "to foresee, to anticipate", category: "Finance",
    example: "Los expertos no pudieron prever la crisis.",
    synonyms: ["anticipar", "pronosticar"],
    usage: {
      grammar: "conjugated like ver: prevé, previó",
      note: "To foresee/anticipate, or to provide for in a plan ('el contrato prevé...'). Adjective: previsto (expected/planned). Not *preveer.",
      examples: ["El plan prevé una segunda fase."],
      collocations: ["prever un problema", "según lo previsto"],
    },
  },
  {
    word: "valorar", definition: "to value, to assess", category: "Society",
    example: "Es importante valorar el esfuerzo de cada persona.",
    synonyms: ["apreciar", "evaluar"],
    usage: {
      note: "To value/appreciate, or to assess/weigh up (options, a situation). apreciar = to appreciate; evaluar = to evaluate formally.",
      examples: ["Valoraron mucho su honestidad."],
      collocations: ["valorar el esfuerzo", "valorar las opciones"],
    },
  },
  {
    word: "evaluar", definition: "to evaluate, to assess", category: "Academic",
    example: "El profesor va a evaluar los proyectos la próxima semana.",
    synonyms: ["valorar", "calificar"],
    usage: {
      grammar: "accent: evalúo, evalúas",
      note: "To evaluate/assess formally (students, risks, results); calificar = to grade/mark. Noun: evaluación.",
      examples: ["El jurado evaluó cada propuesta."],
      collocations: ["evaluar los resultados", "evaluar el riesgo"],
    },
  },
  {
    word: "analizar", definition: "to analyse", category: "Academic",
    example: "Debemos analizar los datos antes de decidir.",
    synonyms: ["examinar", "estudiar"],
    usage: {
      note: "To analyse (data, a text, a situation) — break down and examine; examinar is 'examine'. Noun: análisis (invariable: el/los análisis).",
      examples: ["Analizaron los datos con detalle."],
      collocations: ["analizar los datos", "analizar un problema"],
    },
  },
  {
    word: "comprobar", definition: "to check, to verify", category: "Academic",
    example: "Conviene comprobar la información antes de publicarla.",
    synonyms: ["verificar", "confirmar"],
    usage: {
      grammar: "irregular o→ue: compruebo",
      note: "To check/verify that something is correct; verificar is more technical, confirmar = to confirm. Noun: comprobante = receipt/proof.",
      examples: ["Comprobé que la puerta estaba cerrada."],
      collocations: ["comprobar la información", "comprobar un dato"],
    },
  },
  {
    word: "demostrar", definition: "to prove, to demonstrate", category: "Science",
    example: "El estudio logró demostrar la teoría inicial.",
    synonyms: ["probar", "evidenciar"],
    usage: {
      grammar: "irregular o→ue: demuestro",
      note: "To prove (a theory) or to show/display (a quality, feeling). probar = to prove/test. Noun: demostración.",
      examples: ["Demostró una gran madurez."],
      collocations: ["demostrar una teoría", "demostrar interés"],
    },
  },
  {
    word: "señalar", definition: "to point out, to indicate", category: "Academic",
    example: "El experto señaló los principales errores del plan.",
    synonyms: ["indicar", "marcar"],
    usage: {
      note: "To point out/indicate (verbally, or with a gesture); to mark. Common in reporting: 'el estudio señala que...' = the study notes that.",
      examples: ["El estudio señala una tendencia clara."],
      collocations: ["señalar un error", "señalar que"],
    },
  },
  {
    word: "reflejar", definition: "to reflect, to show", category: "Academic",
    example: "Los resultados reflejan el trabajo de todo el año.",
    synonyms: ["mostrar"],
    usage: {
      note: "To reflect (light/image) or to reflect/show (a reality, mood); reflexive 'reflejarse' = to be reflected. NOT 'to reflect' = ponder (reflexionar).",
      examples: ["El espejo reflejaba toda la sala."],
      collocations: ["reflejar la realidad", "reflejarse en"],
    },
  },
  {
    word: "influir", definition: "to influence", category: "Society",
    example: "La publicidad influye mucho en nuestras decisiones.",
    synonyms: ["afectar", "condicionar"],
    usage: {
      grammar: "+ en; irregular: influyo, influyó",
      note: "To influence — 'influir en algo/alguien' (note: 'en', not a direct object). Noun: influencia. condicionar = to shape/constrain.",
      examples: ["Aquel profesor influyó en su vocación."],
      collocations: ["influir en la decisión", "influir en alguien"],
    },
  },
  {
    word: "repercutir", definition: "to have repercussions, to affect", category: "Finance",
    example: "La subida de precios repercute en toda la economía.",
    synonyms: ["incidir", "afectar"],
    usage: {
      grammar: "+ en",
      note: "To have knock-on effects — 'repercutir en'; more formal than afectar, implies a chain reaction. Noun: repercusión.",
      examples: ["La decisión repercutió en los precios."],
      collocations: ["repercutir en la economía", "repercutir negativamente"],
    },
  },
  {
    word: "contribuir", definition: "to contribute", category: "Environment",
    example: "Cada pequeño gesto contribuye a cuidar el planeta.",
    synonyms: ["aportar", "colaborar"],
    usage: {
      grammar: "+ a; irregular: contribuyo, contribuyó",
      note: "To contribute — 'contribuir a + inf./algo' (to a cause) or 'con' (money). aportar = to provide; colaborar = to collaborate.",
      examples: ["Todos contribuyeron con una donación."],
      collocations: ["contribuir a la mejora", "contribuir al éxito"],
    },
  },
  {
    word: "aportar", definition: "to provide, to contribute", category: "Business",
    example: "El nuevo socio aporta capital y experiencia.",
    synonyms: ["proporcionar", "contribuir"],
    usage: {
      note: "To bring/provide (capital, ideas, evidence) to a shared effort; more concrete than contribuir. Noun: aportación (contribution).",
      examples: ["Aportó ideas muy valiosas al debate."],
      collocations: ["aportar ideas", "aportar pruebas"],
    },
  },
  {
    word: "destinar", definition: "to allocate, to earmark", category: "Finance",
    example: "El gobierno va a destinar más fondos a la sanidad.",
    synonyms: ["asignar", "reservar"],
    usage: {
      grammar: "+ a",
      note: "To allocate/earmark (funds, resources) for a purpose — 'destinar a'; also to post someone (a job location). asignar = to assign.",
      examples: ["Destinaron el dinero a la investigación."],
      collocations: ["destinar fondos a", "destinar recursos"],
    },
  },
  {
    word: "invertir", definition: "to invest; to reverse", category: "Finance",
    example: "Decidieron invertir sus ahorros en una empresa local.",
    synonyms: ["colocar"],
    usage: {
      grammar: "irregular e→ie: invierto, invirtió",
      note: "Two senses: to invest (money, time) and to invert/reverse (an order). Noun: inversión; person: inversor.",
      examples: ["Invirtió sus ahorros en bolsa."],
      collocations: ["invertir en", "invertir el orden"],
    },
  },
  {
    word: "financiar", definition: "to finance, to fund", category: "Finance",
    example: "El banco aceptó financiar la compra de la vivienda.",
    synonyms: ["costear", "subvencionar"],
    usage: {
      note: "To finance/fund (a project, purchase); costear = to bear the cost; subvencionar = to subsidise. Noun: financiación.",
      examples: ["El estado financió el proyecto."],
      collocations: ["financiar un proyecto", "financiar una compra"],
    },
  },
  {
    word: "rentable", definition: "profitable, worthwhile", category: "Finance",
    example: "El negocio resultó más rentable de lo esperado.",
    synonyms: ["lucrativo"],
    usage: {
      note: "Profitable / worth the investment (money, time or effort); lucrativo stresses money. Noun: rentabilidad. Opposite: deficitario.",
      collocations: ["un negocio rentable", "resultar rentable"],
    },
  },
  {
    word: "deuda", definition: "debt", category: "Finance",
    example: "Tardó años en pagar toda su deuda.",
    synonyms: ["pasivo"],
    usage: {
      grammar: "f.",
      note: "A debt (financial, or figurative 'estar en deuda con' = to be indebted to). 'contraer una deuda' = to run up a debt.",
      collocations: ["pagar una deuda", "contraer deudas"],
    },
  },
  {
    word: "ahorro", definition: "saving(s)", category: "Finance",
    example: "El ahorro mensual le permitió comprar un coche.",
    usage: {
      grammar: "m.",
      note: "Saving as an act, or 'los ahorros' = savings (money put by). The verb is ahorrar. Opposite mindset: gasto.",
      collocations: ["los ahorros", "el ahorro energético"],
    },
  },
  {
    word: "ingreso", definition: "income; admission", category: "Finance",
    example: "Sus ingresos aumentaron tras el ascenso.",
    synonyms: ["entrada"],
    usage: {
      grammar: "m.",
      note: "Usually plural 'ingresos' = income/earnings; also a single deposit, or admission (hospital/university). Opposite: gasto.",
      collocations: ["los ingresos", "el ingreso en el hospital"],
    },
  },
  {
    word: "gasto", definition: "expense, spending", category: "Finance",
    example: "Hay que reducir el gasto innecesario.",
    synonyms: ["desembolso"],
    usage: {
      grammar: "m.",
      note: "An expense or spending (often plural 'gastos'); the noun of gastar. Opposite of ingreso/ahorro. 'gastos de envío' = shipping costs.",
      collocations: ["reducir el gasto", "gastos de envío"],
    },
  },
  {
    word: "impuesto", definition: "tax", category: "Finance",
    example: "El nuevo impuesto afecta a los productos importados.",
    synonyms: ["tributo"],
    usage: {
      grammar: "m.",
      note: "A tax; 'el IVA' = VAT. tributo is the formal term. (Also the past participle of imponer, so 'impuesto' = imposed.)",
      collocations: ["pagar impuestos", "subir los impuestos"],
    },
  },
  {
    word: "patrimonio", definition: "assets, heritage, estate", category: "Finance",
    example: "La casa forma parte del patrimonio familiar.",
    synonyms: ["bienes"],
    usage: {
      grammar: "m.",
      note: "One's assets/estate (financial), or heritage ('patrimonio cultural/de la humanidad'). bienes = goods/property.",
      collocations: ["el patrimonio familiar", "patrimonio de la humanidad"],
    },
  },
  {
    word: "competencia", definition: "competition; competence", category: "Business",
    example: "La competencia en el sector es cada vez mayor.",
    synonyms: ["rivalidad"],
    usage: {
      grammar: "f.",
      note: "Three senses: competition/rivals ('la competencia'), competence/skill, and remit/jurisdiction ('no es de mi competencia').",
      collocations: ["la competencia", "hacer la competencia"],
    },
  },
  {
    word: "estrategia", definition: "strategy", category: "Business",
    example: "Necesitamos una estrategia clara para crecer.",
    synonyms: ["plan", "táctica"],
    usage: {
      grammar: "f.",
      note: "A strategy (long-term plan); táctica = tactics (shorter-term). Adjective: estratégico.",
      collocations: ["una estrategia clara", "diseñar una estrategia"],
    },
  },
  {
    word: "objetivo", definition: "objective, goal; objective (adj.); lens", category: "Business",
    example: "El objetivo principal es aumentar las ventas.",
    synonyms: ["meta", "propósito"],
    usage: {
      grammar: "m.",
      note: "A goal/objective; also the adjective 'objective/unbiased' (opposite of subjetivo), and a camera lens. meta = goal/finish line.",
      collocations: ["cumplir un objetivo", "el objetivo principal"],
    },
  },
  {
    word: "rendimiento", definition: "performance, yield", category: "Business",
    example: "Mejorar el rendimiento del equipo es prioritario.",
    synonyms: ["productividad"],
    usage: {
      grammar: "m.",
      note: "Performance/output (of a person, machine, investment); the noun of rendir. 'alto rendimiento' = high performance.",
      collocations: ["el rendimiento del equipo", "bajo rendimiento"],
    },
  },
  {
    word: "plazo", definition: "deadline; term, period", category: "Business",
    example: "Entregamos el informe dentro del plazo previsto.",
    synonyms: ["término"],
    usage: {
      grammar: "m.",
      note: "A deadline or a set period; 'a corto/largo plazo' = short/long-term; 'a plazos' = in instalments.",
      collocations: ["dentro del plazo", "a largo plazo"],
    },
  },
  {
    word: "acuerdo", definition: "agreement", category: "Business",
    example: "Las dos partes llegaron a un acuerdo satisfactorio.",
    synonyms: ["pacto", "convenio"],
    usage: {
      grammar: "m.",
      note: "An agreement; key phrases: 'estar de acuerdo (con)' = to agree; 'llegar a un acuerdo' = to reach a deal; 'de acuerdo' = OK.",
      collocations: ["llegar a un acuerdo", "estar de acuerdo"],
    },
  },
  {
    word: "compromiso", definition: "commitment; engagement; awkward spot", category: "Business",
    example: "Asumió el compromiso de terminar a tiempo.",
    synonyms: ["obligación"],
    usage: {
      grammar: "m.",
      note: "A commitment/obligation; also an engagement (to marry) and a tricky situation ('poner en un compromiso'). NOT a 'compromise' (that's acuerdo/concesión).",
      collocations: ["adquirir un compromiso", "sin compromiso"],
    },
  },
  {
    word: "ventaja", definition: "advantage", category: "Business",
    example: "Hablar varios idiomas es una gran ventaja.",
    synonyms: ["beneficio"],
    usage: {
      grammar: "f.",
      note: "An advantage/edge; 'llevar ventaja' = to be ahead; 'sacar ventaja' = to gain an edge. Opposite: desventaja.",
      collocations: ["una gran ventaja", "llevar ventaja"],
    },
  },
  {
    word: "desventaja", definition: "disadvantage, drawback", category: "Business",
    example: "La principal desventaja es el alto coste inicial.",
    synonyms: ["inconveniente"],
    usage: {
      grammar: "f.",
      note: "A disadvantage/drawback; 'en desventaja' = at a disadvantage. inconveniente = a downside/snag. Opposite: ventaja.",
      collocations: ["una desventaja", "estar en desventaja"],
    },
  },
  {
    word: "riesgo", definition: "risk", category: "Finance",
    example: "Toda inversión conlleva cierto riesgo.",
    synonyms: ["peligro"],
    usage: {
      grammar: "m.",
      note: "A risk; 'correr un riesgo' = to take a risk; 'a riesgo de' = at the risk of. peligro is more 'danger'. Adjective: arriesgado.",
      collocations: ["correr un riesgo", "un grupo de riesgo"],
    },
  },
  {
    word: "fracaso", definition: "failure", category: "Emotions",
    example: "Aprendió mucho de aquel primer fracaso.",
    synonyms: ["derrota"],
    usage: {
      grammar: "m.",
      note: "A failure (of a plan, venture); verb fracasar. Opposite of éxito. derrota = defeat (in a contest).",
      collocations: ["un rotundo fracaso", "el fracaso escolar"],
    },
  },
  {
    word: "éxito", definition: "success", category: "Business",
    example: "El lanzamiento del producto fue todo un éxito.",
    synonyms: ["triunfo"],
    usage: {
      grammar: "m.",
      note: "Success (NOT 'exit' — false friend! exit = salida). 'tener éxito' = to be successful; 'un éxito' = a hit. Opposite: fracaso.",
      collocations: ["tener éxito", "todo un éxito"],
    },
  },
  {
    word: "desafío", definition: "challenge", category: "Business",
    example: "Aceptar el nuevo cargo fue un gran desafío.",
    synonyms: ["reto"],
    usage: {
      grammar: "m.",
      note: "A challenge/dare; reto is a very close synonym. Verb: desafiar. 'un desafío' can also be a formal challenge (a duel).",
      collocations: ["un gran desafío", "afrontar un desafío"],
    },
  },
  {
    word: "propósito", definition: "purpose, intention", category: "Academic",
    example: "El propósito del estudio es claro desde el principio.",
    synonyms: ["finalidad", "intención"],
    usage: {
      grammar: "m.",
      note: "A purpose/aim; 'a propósito' = on purpose, or 'by the way'; 'buenos propósitos' = New Year's resolutions. finalidad = objective.",
      collocations: ["el propósito de", "a propósito"],
    },
  },
  {
    word: "enfoque", definition: "approach, focus", category: "Academic",
    example: "El profesor adoptó un enfoque más práctico.",
    synonyms: ["perspectiva"],
    usage: {
      grammar: "m.",
      note: "An approach/angle to a topic, or camera focus; the noun of enfocar. perspectiva = perspective/viewpoint.",
      collocations: ["un nuevo enfoque", "el enfoque del problema"],
    },
  },
  {
    word: "punto de vista", definition: "point of view", category: "Society",
    example: "Respeto tu punto de vista aunque no lo comparta.",
    synonyms: ["opinión"],
    usage: {
      grammar: "m.",
      note: "A point of view/standpoint; 'desde mi punto de vista' = from my point of view. perspectiva/óptica are close.",
      collocations: ["desde mi punto de vista", "un punto de vista distinto"],
    },
  },
  {
    word: "postura", definition: "stance, position", category: "Politics",
    example: "El partido mantuvo su postura sobre el tema.",
    synonyms: ["posición", "actitud"],
    usage: {
      grammar: "f.",
      note: "A stance/position on an issue (also a physical posture); 'adoptar/mantener una postura'. posición is close.",
      collocations: ["mantener una postura", "una postura firme"],
    },
  },
  {
    word: "polémica", definition: "controversy", category: "Society",
    example: "Sus declaraciones generaron una gran polémica.",
    synonyms: ["controversia"],
    usage: {
      grammar: "f.",
      note: "A controversy/heated public dispute; adjective polémico = controversial. 'levantar/generar polémica'.",
      collocations: ["generar polémica", "una gran polémica"],
    },
  },
  {
    word: "debate", definition: "debate", category: "Politics",
    example: "El debate sobre la educación sigue abierto.",
    synonyms: ["discusión"],
    usage: {
      grammar: "m.",
      note: "A debate (formal or public); verb debatir. 'estar en el debate' / 'abrir el debate'. discusión can also mean an argument.",
      collocations: ["abrir el debate", "un debate público"],
    },
  },
  {
    word: "argumento", definition: "argument, reasoning; plot", category: "Academic",
    example: "Presentó un argumento difícil de rebatir.",
    synonyms: ["razonamiento"],
    usage: {
      grammar: "m.",
      note: "A line of reasoning/argument (NOT a quarrel — that's discusión/pelea); also the plot of a film or book. Verb: argumentar.",
      collocations: ["un argumento sólido", "el argumento de la película"],
    },
  },
  {
    word: "consecuencia", definition: "consequence", category: "Society",
    example: "Cada decisión tiene su consecuencia.",
    synonyms: ["resultado", "efecto"],
    usage: {
      grammar: "f.",
      note: "A consequence/result; 'a consecuencia de' = as a result of; 'en consecuencia' = consequently. Opposite direction: causa.",
      collocations: ["las consecuencias de", "a consecuencia de"],
    },
  },
  {
    word: "causa", definition: "cause; legal case", category: "Society",
    example: "Investigan la causa real del accidente.",
    synonyms: ["motivo", "origen"],
    usage: {
      grammar: "f.",
      note: "A cause/reason, a cause you fight for, or a legal case; 'a causa de' = because of. Opposite direction: consecuencia.",
      collocations: ["la causa de", "a causa de", "una buena causa"],
    },
  },
  {
    word: "factor", definition: "factor", category: "Science",
    example: "El clima fue un factor decisivo en la cosecha.",
    synonyms: ["elemento"],
    usage: {
      grammar: "m.",
      note: "A factor/element contributing to a result; 'un factor clave/decisivo'. elemento = element/component.",
      collocations: ["un factor clave", "un factor decisivo"],
    },
  },
  {
    word: "tendencia", definition: "trend, tendency", category: "Society",
    example: "Existe una clara tendencia hacia el teletrabajo.",
    synonyms: ["inclinación"],
    usage: {
      grammar: "f.",
      note: "A trend (social/market) or a personal tendency; 'tener tendencia a' = to tend to. 'estar de moda / ser tendencia' = to be trending.",
      collocations: ["una tendencia creciente", "la tendencia actual"],
    },
  },
  {
    word: "fenómeno", definition: "phenomenon", category: "Society",
    example: "Las redes sociales son un fenómeno mundial.",
    synonyms: ["acontecimiento"],
    usage: {
      grammar: "m.",
      note: "A phenomenon (natural or social); colloquially '¡eres un fenómeno!' = you're a star. Plural: fenómenos.",
      collocations: ["un fenómeno social", "un fenómeno natural"],
    },
  },
  {
    word: "ámbito", definition: "field, sphere, scope", category: "Academic",
    example: "Es un experto reconocido en el ámbito jurídico.",
    synonyms: ["campo", "área"],
    usage: {
      grammar: "m.",
      note: "A field/sphere/domain ('en el ámbito de' = in the field of); also scope ('el ámbito de aplicación'). campo/área are close.",
      collocations: ["en el ámbito de", "el ámbito laboral"],
    },
  },
  {
    word: "vínculo", definition: "link, bond, tie", category: "Society",
    example: "Existe un fuerte vínculo entre ambos países.",
    synonyms: ["lazo", "conexión"],
    usage: {
      grammar: "m.",
      note: "A bond/tie (emotional, family, between things); also a hyperlink. lazo = tie/bond; conexión = connection. Verb: vincular.",
      collocations: ["un vínculo fuerte", "un vínculo emocional"],
    },
  },
  {
    word: "brecha", definition: "gap, breach", category: "Society",
    example: "La brecha salarial sigue siendo un problema.",
    synonyms: ["diferencia"],
    usage: {
      grammar: "f.",
      note: "A gap (social/economic) or a breach/opening; 'brecha salarial/digital/de género'. 'abrir brecha' = to make a breakthrough.",
      collocations: ["la brecha salarial", "la brecha digital"],
    },
  },
  {
    word: "desigualdad", definition: "inequality", category: "Society",
    example: "La desigualdad económica ha aumentado en la región.",
    synonyms: ["disparidad"],
    usage: {
      grammar: "f.",
      note: "Inequality (social/economic); opposite of igualdad. 'desigualdad de género' = gender inequality.",
      collocations: ["la desigualdad económica", "reducir la desigualdad"],
    },
  },
  {
    word: "pobreza", definition: "poverty", category: "Society",
    example: "El programa busca reducir la pobreza infantil.",
    synonyms: ["miseria"],
    usage: {
      grammar: "f.",
      note: "Poverty; 'umbral de la pobreza' = poverty line. miseria = extreme poverty/wretchedness. Opposite: riqueza.",
      collocations: ["reducir la pobreza", "vivir en la pobreza"],
    },
  },
  {
    word: "bienestar", definition: "well-being, welfare", category: "Health",
    example: "El bienestar de los empleados es una prioridad.",
    synonyms: ["comodidad"],
    usage: {
      grammar: "m.",
      note: "Well-being/welfare; 'el estado del bienestar' = the welfare state. Opposite: malestar (discomfort/unease).",
      collocations: ["el bienestar social", "el estado del bienestar"],
    },
  },
  {
    word: "convivencia", definition: "coexistence, living together", category: "Society",
    example: "La convivencia en el barrio mejoró con el tiempo.",
    usage: {
      grammar: "f.",
      note: "Living together / peaceful coexistence (in a community, household, society); verb convivir. 'normas de convivencia' = house/social rules.",
      collocations: ["la convivencia pacífica", "normas de convivencia"],
    },
  },
  {
    word: "ciudadanía", definition: "citizenship; the citizenry", category: "Politics",
    example: "La ciudadanía exige más transparencia.",
    usage: {
      grammar: "f.",
      note: "Citizenship (the status), and collectively 'the citizens/public' ('la ciudadanía' = the people). Related: ciudadano.",
      collocations: ["la ciudadanía", "obtener la ciudadanía"],
    },
  },
  {
    word: "mayoría", definition: "majority", category: "Politics",
    example: "La mayoría de los presentes votó a favor.",
    synonyms: ["generalidad"],
    usage: {
      grammar: "f.",
      note: "A majority; 'la mayoría de' = most of; 'mayoría absoluta' = absolute majority. Opposite: minoría.",
      collocations: ["la mayoría de", "mayoría absoluta"],
    },
  },
  {
    word: "minoría", definition: "minority", category: "Politics",
    example: "Solo una minoría se mostró en contra.",
    usage: {
      grammar: "f.",
      note: "A minority (numerical or a social group: 'las minorías'). Opposite: mayoría.",
      collocations: ["una minoría", "las minorías"],
    },
  },
  {
    word: "autoridad", definition: "authority", category: "Politics",
    example: "Las autoridades locales tomaron medidas urgentes.",
    synonyms: ["mando"],
    usage: {
      grammar: "f.",
      note: "Authority (power, or an expert); 'las autoridades' = the authorities/officials. 'una autoridad en la materia' = an authority on the subject.",
      collocations: ["las autoridades", "una figura de autoridad"],
    },
  },
  {
    word: "medida", definition: "measure; size", category: "Politics",
    example: "El ayuntamiento aprobó nuevas medidas de seguridad.",
    synonyms: ["disposición"],
    usage: {
      grammar: "f.",
      note: "A measure/action taken, or a measurement/size ('hecho a medida' = made to measure); 'a medida que' = as (over time); 'tomar medidas'.",
      collocations: ["tomar medidas", "a medida que", "hecho a medida"],
    },
  },
  {
    word: "ley", definition: "law", category: "Law",
    example: "La nueva ley entra en vigor el próximo mes.",
    synonyms: ["norma"],
    usage: {
      grammar: "f.",
      note: "A law (statute) or law in general; 'entrar en vigor' = to come into force; 'aprobar una ley'. norma = rule/regulation.",
      collocations: ["aprobar una ley", "cumplir la ley"],
    },
  },
  {
    word: "justicia", definition: "justice", category: "Law",
    example: "La víctima solo pedía justicia.",
    synonyms: ["equidad"],
    usage: {
      grammar: "f.",
      note: "Justice, or the justice system ('la Justicia'). 'hacer justicia' = to do justice; 'tomarse la justicia por su mano' = to take the law into one's own hands.",
      collocations: ["pedir justicia", "hacer justicia"],
    },
  },
  {
    word: "delito", definition: "crime, offence", category: "Law",
    example: "El robo es un delito grave.",
    synonyms: ["crimen"],
    usage: {
      grammar: "m.",
      note: "A crime/offence (legal term for any punishable act); crimen usually implies a serious/violent crime. 'cometer un delito'.",
      collocations: ["cometer un delito", "un delito grave"],
    },
  },
  {
    word: "juicio", definition: "trial; judgement", category: "Law",
    example: "El juicio durará varias semanas.",
    synonyms: ["proceso"],
    usage: {
      grammar: "m.",
      note: "A trial (in court), or judgement/sense ('perder el juicio' = to lose one's mind; 'a mi juicio' = in my opinion). Verb: juzgar.",
      collocations: ["ir a juicio", "a mi juicio"],
    },
  },
  {
    word: "testigo", definition: "witness", category: "Law",
    example: "El testigo declaró ante el juez.",
    usage: {
      grammar: "m./f. (same form)",
      note: "A witness (same form for both genders: el/la testigo); 'testigo presencial' = eyewitness; 'ser testigo de' = to witness.",
      collocations: ["un testigo presencial", "ser testigo de"],
    },
  },
  {
    word: "prueba", definition: "evidence, proof; test", category: "Law",
    example: "La fiscalía presentó nuevas pruebas.",
    synonyms: ["evidencia"],
    usage: {
      grammar: "f.",
      note: "Evidence/proof, or a test/trial (una prueba de acceso, poner a prueba). 'las pruebas' = the evidence. Verb: probar.",
      collocations: ["presentar pruebas", "poner a prueba"],
    },
  },
  {
    word: "denunciar", definition: "to report, to denounce", category: "Law",
    example: "Decidió denunciar el fraude a la policía.",
    synonyms: ["acusar"],
    usage: {
      note: "To report (a crime to authorities) or to denounce (publicly expose); noun: denuncia. acusar = to accuse.",
      examples: ["Denunciaron el caso ante la justicia."],
      collocations: ["denunciar un delito", "denunciar a la policía"],
    },
  },
  {
    word: "sostenible", definition: "sustainable", category: "Environment",
    example: "Apostamos por un modelo de turismo sostenible.",
    synonyms: ["duradero"],
    usage: {
      note: "Sustainable (environmentally or economically viable long-term); noun: sostenibilidad. 'desarrollo sostenible' = sustainable development.",
      collocations: ["desarrollo sostenible", "un modelo sostenible"],
    },
  },
  {
    word: "renovable", definition: "renewable", category: "Environment",
    example: "La energía renovable es cada vez más barata.",
    usage: {
      note: "Renewable (energy, resources, or a contract that can be renewed); 'energías renovables' = renewables. Verb: renovar.",
      collocations: ["energía renovable", "recursos renovables"],
    },
  },
  {
    word: "residuo", definition: "waste, residue", category: "Environment",
    example: "La fábrica trata sus residuos antes de verterlos.",
    synonyms: ["desecho"],
    usage: {
      grammar: "m.",
      note: "Waste/residue (usually plural 'residuos'); 'residuos tóxicos/urbanos'. desecho = waste/refuse. More technical than basura.",
      collocations: ["residuos tóxicos", "tratar los residuos"],
    },
  },
  {
    word: "emisión", definition: "emission; broadcast", category: "Environment",
    example: "Hay que reducir la emisión de gases contaminantes.",
    usage: {
      grammar: "f.",
      note: "Emission (of gases), or a broadcast (TV/radio), or an issue (of shares/stamps); 'emisiones de CO2'. Verb: emitir.",
      collocations: ["emisiones de CO2", "reducir las emisiones"],
    },
  },
  {
    word: "calentamiento", definition: "warming, heating", category: "Environment",
    example: "El calentamiento global afecta a todo el planeta.",
    usage: {
      grammar: "m.",
      note: "Warming, esp. 'calentamiento global' = global warming; also a warm-up (in sport). Verb: calentar.",
      collocations: ["el calentamiento global", "ejercicios de calentamiento"],
    },
  },
  {
    word: "sequía", definition: "drought", category: "Environment",
    example: "La sequía arruinó la cosecha de este año.",
    usage: {
      grammar: "f.",
      note: "A drought; from seco (dry). 'una sequía prolongada'. Opposite conditions: inundaciones (floods).",
      collocations: ["una sequía prolongada", "sufrir sequía"],
    },
  },
  {
    word: "escasez", definition: "shortage, scarcity", category: "Environment",
    example: "La escasez de agua preocupa a los agricultores.",
    synonyms: ["falta", "carencia"],
    usage: {
      grammar: "f.",
      note: "A shortage/scarcity ('escasez de' = shortage of); from escaso (scarce). Opposite: abundancia. falta/carencia = lack.",
      collocations: ["escasez de agua", "escasez de recursos"],
    },
  },
  {
    word: "recurso", definition: "resource; recourse", category: "Environment",
    example: "El agua es un recurso cada vez más valioso.",
    synonyms: ["medio"],
    usage: {
      grammar: "m.",
      note: "A resource (natural, financial, 'recursos humanos'); also a means/recourse, and a legal appeal ('recurso de apelación').",
      collocations: ["recursos naturales", "recursos humanos"],
    },
  },
  {
    word: "consumo", definition: "consumption", category: "Environment",
    example: "El consumo de energía baja en primavera.",
    synonyms: ["gasto"],
    usage: {
      grammar: "m.",
      note: "Consumption (of energy, goods); 'sociedad de consumo' = consumer society; 'consumo responsable'. Verb: consumir.",
      collocations: ["el consumo de energía", "consumo responsable"],
    },
  },
  {
    word: "avance", definition: "advance, progress; preview", category: "Technology",
    example: "El avance de la tecnología no se detiene.",
    synonyms: ["progreso", "adelanto"],
    usage: {
      grammar: "m.",
      note: "Advance/progress; also a preview/trailer ('un avance de la película'). The noun of avanzar. adelanto is close.",
      collocations: ["los avances tecnológicos", "un gran avance"],
    },
  },
  {
    word: "herramienta", definition: "tool", category: "Technology",
    example: "El correo sigue siendo una herramienta esencial.",
    synonyms: ["instrumento"],
    usage: {
      grammar: "f.",
      note: "A tool (physical or figurative — 'una herramienta útil'); instrumento is close (also 'instrument'). 'caja de herramientas' = toolbox.",
      collocations: ["una herramienta útil", "herramientas digitales"],
    },
  },
  {
    word: "dispositivo", definition: "device", category: "Technology",
    example: "Puedes sincronizar la cuenta en varios dispositivos.",
    synonyms: ["aparato"],
    usage: {
      grammar: "m.",
      note: "A device (esp. electronic); also 'un dispositivo de seguridad' = a security arrangement. aparato = device/appliance.",
      collocations: ["un dispositivo móvil", "varios dispositivos"],
    },
  },
  {
    word: "actualizar", definition: "to update", category: "Technology",
    example: "Conviene actualizar el sistema con frecuencia.",
    synonyms: ["renovar"],
    usage: {
      grammar: "spelling: actualicé, actualice",
      note: "To update (software, data, info); reflexive 'actualizarse' = to keep up to date. Noun: actualización (update). NOT 'actually' (that's en realidad).",
      examples: ["Actualicé la aplicación esta mañana."],
      collocations: ["actualizar el sistema", "actualizar los datos"],
    },
  },
  {
    word: "almacenar", definition: "to store", category: "Technology",
    example: "La nube permite almacenar muchos archivos.",
    synonyms: ["guardar"],
    usage: {
      note: "To store (data, goods) — usually in quantity; guardar is the everyday 'keep/save'. Noun: almacén (warehouse/store); almacenamiento.",
      examples: ["Almacenaron los datos en la nube."],
      collocations: ["almacenar datos", "almacenar información"],
    },
  },
  {
    word: "respaldo", definition: "backup; support; backrest", category: "Technology",
    example: "Haz un respaldo de tus datos por seguridad.",
    synonyms: ["copia", "apoyo"],
    usage: {
      grammar: "m.",
      note: "A backup (of data), or backing/support ('el respaldo del partido'), or the back of a chair. Verb: respaldar (to back/support).",
      collocations: ["hacer un respaldo", "contar con el respaldo de"],
    },
  },
  {
    word: "usuario", definition: "user", category: "Technology",
    example: "Cada usuario tiene su propio perfil.",
    usage: {
      grammar: "m. (usuaria f.)",
      note: "A user (of a service, system); 'nombre de usuario' = username. 'usuario final' = end user.",
      collocations: ["nombre de usuario", "el usuario final"],
    },
  },
  {
    word: "balance", definition: "balance sheet; assessment, outcome", category: "Finance",
    example: "El balance del año fue claramente positivo.",
    synonyms: ["resultado"],
    usage: {
      grammar: "m.",
      note: "A balance sheet (finance), or an overall assessment/tally ('hacer balance' = to take stock). For physical balance use equilibrio.",
      collocations: ["hacer balance", "un balance positivo"],
    },
  },
  {
    word: "informe", definition: "report", category: "Business",
    example: "Presentó un informe detallado a la dirección.",
    synonyms: ["reporte"],
    usage: {
      grammar: "m.",
      note: "A report (written); 'elaborar/presentar un informe'. reporte is used more in Latin America. Not the adjective (that's uniforme etc.).",
      collocations: ["un informe detallado", "presentar un informe"],
    },
  },
  {
    word: "dato", definition: "piece of data, fact", category: "Academic",
    example: "Necesitamos más de un dato para concluir.",
    synonyms: ["información"],
    usage: {
      grammar: "m.",
      note: "A piece of data/a fact (countable: 'un dato'); plural 'datos' = data. 'base de datos' = database; 'protección de datos'.",
      collocations: ["un dato importante", "una base de datos"],
    },
  },
  {
    word: "cifra", definition: "figure, number", category: "Finance",
    example: "Las cifras de ventas superaron las previsiones.",
    synonyms: ["número"],
    usage: {
      grammar: "f.",
      note: "A figure/statistic (esp. financial: 'las cifras'), or a digit; 'una cifra récord'. número is the general 'number'.",
      collocations: ["las cifras de ventas", "una cifra récord"],
    },
  },
  {
    word: "promedio", definition: "average", category: "Academic",
    example: "El promedio de edad del grupo es de treinta años.",
    synonyms: ["media"],
    usage: {
      grammar: "m.",
      note: "An average/mean; 'en promedio' = on average. media is a close synonym ('la media'). 'por encima del promedio' = above average.",
      collocations: ["en promedio", "el promedio de"],
    },
  },
  {
    word: "porcentaje", definition: "percentage", category: "Academic",
    example: "Un alto porcentaje de jóvenes usa el móvil a diario.",
    synonyms: ["tanto por ciento"],
    usage: {
      grammar: "m.",
      note: "A percentage; 'un alto/bajo porcentaje'; 'el X por ciento'. Symbol read as 'por ciento'.",
      collocations: ["un alto porcentaje", "un porcentaje elevado"],
    },
  },
  {
    word: "muestra", definition: "sample; sign, token", category: "Science",
    example: "Analizaron una muestra de mil personas.",
    synonyms: ["ejemplar"],
    usage: {
      grammar: "f.",
      note: "A sample (statistical, or a free sample), or a sign/token ('una muestra de cariño'). Also an exhibition. Verb root: mostrar.",
      collocations: ["una muestra representativa", "una muestra de cariño"],
    },
  },
  {
    word: "vacuna", definition: "vaccine", category: "Health",
    example: "La nueva vacuna se distribuyó por todo el país.",
    usage: {
      grammar: "f.",
      note: "A vaccine; verb vacunar; 'ponerse la vacuna' = to get vaccinated. Noun: vacunación.",
      collocations: ["ponerse la vacuna", "una vacuna contra la gripe"],
    },
  },
  {
    word: "tratamiento", definition: "treatment", category: "Health",
    example: "El tratamiento dura aproximadamente tres semanas.",
    synonyms: ["terapia"],
    usage: {
      grammar: "m.",
      note: "Medical treatment (also treatment of data/materials, or a form of address: 'tratamiento de usted'). Verb: tratar. terapia = therapy.",
      collocations: ["seguir un tratamiento", "un tratamiento médico"],
    },
  },
  {
    word: "síntoma", definition: "symptom", category: "Health",
    example: "La fiebre es un síntoma muy común.",
    synonyms: ["señal"],
    usage: {
      grammar: "m. (masculine despite -a)",
      note: "A symptom (medical, or figurative 'un síntoma de la crisis'); despite the -a ending it's masculine. Adjective: sintomático.",
      collocations: ["presentar síntomas", "un síntoma claro"],
    },
  },
  {
    word: "diagnóstico", definition: "diagnosis", category: "Health",
    example: "El diagnóstico tardó varios días en confirmarse.",
    usage: {
      grammar: "m.",
      note: "A diagnosis (medical, or of a problem/situation); verb: diagnosticar. 'un diagnóstico precoz' = early diagnosis.",
      collocations: ["un diagnóstico precoz", "confirmar el diagnóstico"],
    },
  },
  {
    word: "prevención", definition: "prevention", category: "Health",
    example: "La prevención es clave para evitar enfermedades.",
    usage: {
      grammar: "f.",
      note: "Prevention; verb prevenir; 'más vale prevenir que curar' = prevention is better than cure. Adjective: preventivo.",
      collocations: ["la prevención de", "medidas de prevención"],
    },
  },
  {
    word: "esperanza", definition: "hope", category: "Emotions",
    example: "Nunca perdió la esperanza de recuperarse.",
    synonyms: ["ilusión"],
    usage: {
      grammar: "f.",
      note: "Hope; 'tener/perder la esperanza'; 'esperanza de vida' = life expectancy. Related verb: esperar (to hope/wait/expect).",
      collocations: ["perder la esperanza", "tener esperanzas"],
    },
  },
  {
    word: "temor", definition: "fear, dread", category: "Emotions",
    example: "Habló de sus temores con total sinceridad.",
    synonyms: ["miedo"],
    usage: {
      grammar: "m.",
      note: "Fear/apprehension; more formal/reflective than miedo. 'por temor a' = for fear of. Verb: temer.",
      collocations: ["por temor a", "sus temores"],
    },
  },
  {
    word: "angustia", definition: "anguish, distress", category: "Emotions",
    example: "La espera le producía una gran angustia.",
    synonyms: ["ansiedad"],
    usage: {
      grammar: "f.",
      note: "Anguish/deep distress; ansiedad = anxiety (more clinical). 'sentir angustia'. Verb: angustiarse.",
      collocations: ["sentir angustia", "una profunda angustia"],
    },
  },
  {
    word: "alivio", definition: "relief", category: "Emotions",
    example: "Sentí un enorme alivio al recibir la noticia.",
    synonyms: ["consuelo"],
    usage: {
      grammar: "m.",
      note: "Relief (emotional or from pain); '¡qué alivio!' = what a relief! Verb: aliviar. consuelo = comfort/consolation.",
      collocations: ["sentir alivio", "un gran alivio"],
    },
  },
  {
    word: "asombro", definition: "amazement, astonishment", category: "Emotions",
    example: "Miró la obra con verdadero asombro.",
    synonyms: ["sorpresa"],
    usage: {
      grammar: "m.",
      note: "Amazement/astonishment (stronger than sorpresa); 'para asombro de todos'. Verb: asombrar; adjective: asombroso (amazing).",
      collocations: ["con asombro", "para asombro de todos"],
    },
  },
  {
    word: "orgullo", definition: "pride", category: "Emotions",
    example: "Habló de su país con evidente orgullo.",
    usage: {
      grammar: "m.",
      note: "Pride (both the good sense and arrogance, depending on context); 'herir el orgullo' = to wound one's pride. Adjective: orgulloso.",
      collocations: ["con orgullo", "herir el orgullo"],
    },
  },
  {
    word: "vergüenza", definition: "shame, embarrassment", category: "Emotions",
    example: "Le dio vergüenza hablar en público.",
    synonyms: ["bochorno"],
    usage: {
      grammar: "f.",
      note: "Shame or embarrassment; 'dar vergüenza' = to embarrass; '¡qué vergüenza!' = how embarrassing/shameful! bochorno = acute embarrassment.",
      collocations: ["dar vergüenza", "pasar vergüenza"],
    },
  },
  {
    word: "ánimo", definition: "spirits, encouragement", category: "Emotions",
    example: "Sus amigos le dieron ánimo en el momento difícil.",
    synonyms: ["aliento"],
    usage: {
      grammar: "m.",
      note: "One's spirits/mood, or encouragement; '¡ánimo!' = cheer up / you can do it!; 'estado de ánimo' = state of mind; 'dar ánimo' = to encourage.",
      collocations: ["dar ánimo", "estado de ánimo"],
    },
  },
  {
    word: "actitud", definition: "attitude", category: "Emotions",
    example: "Su actitud positiva contagia a todo el equipo.",
    synonyms: ["disposición"],
    usage: {
      grammar: "f.",
      note: "Attitude/disposition; 'una actitud positiva/negativa'. NOT 'aptitude' (that's aptitud — skill). disposición = willingness.",
      collocations: ["una actitud positiva", "cambiar de actitud"],
    },
  },
  {
    word: "carácter", definition: "character, personality", category: "Emotions",
    example: "Tiene un carácter fuerte pero noble.",
    synonyms: ["temperamento"],
    usage: {
      grammar: "m.; pl. caracteres (stress shifts)",
      note: "Character/personality ('tener carácter' = to have a strong personality); also a typographic character. Plural: caracteres.",
      collocations: ["un carácter fuerte", "tener carácter"],
    },
  },
  {
    word: "obra maestra", definition: "masterpiece", category: "Arts",
    example: "Esa novela está considerada una obra maestra.",
    usage: {
      grammar: "f.; pl. obras maestras",
      note: "A masterpiece (fixed phrase); the plural inflects both words: obras maestras. Built on obra (work of art).",
      collocations: ["una obra maestra", "considerada una obra maestra"],
    },
  },
  {
    word: "guion", definition: "script, screenplay; hyphen", category: "Arts",
    example: "El guion de la película recibió varios premios.",
    synonyms: ["libreto"],
    usage: {
      grammar: "m. (also spelled guión)",
      note: "A film/TV script, or a hyphen/dash (-). Person: guionista (scriptwriter). libreto = libretto (opera).",
      collocations: ["el guion de la película", "escribir un guion"],
    },
  },
  {
    word: "estreno", definition: "premiere, release", category: "Arts",
    example: "El estreno de la obra fue todo un acontecimiento.",
    usage: {
      grammar: "m.",
      note: "A premiere/opening/release (film, play), or first use of something new; verb estrenar ('estrenar zapatos' = to wear new shoes for the first time).",
      collocations: ["el estreno de la película", "el día del estreno"],
    },
  },
  {
    word: "crítica", definition: "review; criticism", category: "Arts",
    example: "La crítica elogió la actuación del protagonista.",
    synonyms: ["reseña"],
    usage: {
      grammar: "f.",
      note: "A review (of a film/book), criticism, or 'la crítica' = the critics collectively. reseña = a written review. Adjective/verb: crítico, criticar.",
      collocations: ["una buena crítica", "hacer una crítica"],
    },
  },
  {
    word: "patrimonio cultural", definition: "cultural heritage", category: "Culture",
    example: "La ciudad protege su patrimonio cultural.",
    usage: {
      grammar: "m.",
      note: "Cultural heritage (fixed phrase); 'Patrimonio de la Humanidad' = World Heritage. Built on patrimonio (assets/heritage).",
      collocations: ["el patrimonio cultural", "proteger el patrimonio"],
    },
  },
  {
    word: "fortalecer", definition: "to strengthen", category: "Politics",
    example: "El acuerdo busca fortalecer la cooperación entre ambos.",
    synonyms: ["reforzar", "robustecer"],
    usage: {
      grammar: "irregular: fortalezco",
      note: "To strengthen (ties, an economy, muscles, resolve); from fuerte. reforzar = to reinforce. Reflexive fortalecerse = to grow stronger.",
      examples: ["El ejercicio fortalece los músculos."],
      collocations: ["fortalecer los lazos", "fortalecer la economía"],
    },
  },
  {
    word: "garantizar", definition: "to guarantee, to ensure", category: "Law",
    example: "El contrato pretende garantizar los derechos del cliente.",
    synonyms: ["asegurar", "avalar"],
    usage: {
      grammar: "spelling: garanticé, garantice",
      note: "To guarantee/ensure (rights, quality, a result); noun: garantía (guarantee/warranty). avalar = to vouch for/back.",
      examples: ["La empresa garantizó la devolución del dinero."],
      collocations: ["garantizar los derechos", "garantizar la calidad"],
    },
  },
  {
    word: "perjudicar", definition: "to harm, to damage", category: "Health",
    example: "El ruido constante puede perjudicar la salud.",
    synonyms: ["dañar", "afectar"],
    usage: {
      grammar: "personal a with people; spelling: perjudiqué",
      note: "To harm/be bad for (health, interests, reputation); dañar is more physical damage. Adjective: perjudicial (harmful). Opposite: beneficiar.",
      examples: ["El retraso perjudicó a muchos clientes."],
      collocations: ["perjudicar la salud", "perjudicar los intereses"],
    },
  },
  {
    word: "sobrellevar", definition: "to cope with, to endure", category: "Emotions",
    example: "Aprendió a sobrellevar la presión del trabajo.",
    synonyms: ["soportar", "aguantar"],
    usage: {
      note: "To cope with / bear (an illness, pressure, grief) — endure it while carrying on; soportar/aguantar = to put up with/stand.",
      examples: ["Sobrellevó la enfermedad con entereza."],
      collocations: ["sobrellevar la presión", "sobrellevar una pérdida"],
    },
  },
  {
    word: "cotidiano", definition: "everyday, daily", category: "Daily Life",
    example: "El móvil se ha vuelto un objeto cotidiano.",
    synonyms: ["habitual", "diario"],
    usage: {
      note: "Everyday/routine ('la vida cotidiana' = everyday life); more formal than diario. habitual = usual/customary.",
      collocations: ["la vida cotidiana", "un problema cotidiano"],
    },
  },
  {
    word: "previsible", definition: "foreseeable, predictable", category: "Society",
    example: "El desenlace era totalmente previsible.",
    synonyms: ["esperable"],
    usage: {
      note: "Foreseeable/predictable (from prever); can be neutral or mildly negative ('demasiado previsible'). Opposite: imprevisible.",
      collocations: ["un final previsible", "totalmente previsible"],
    },
  },
];
