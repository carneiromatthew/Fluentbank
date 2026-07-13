import type { RawWord } from "./types";

// B1 — Threshold. Everyday vocabulary for handling common situations,
// expressing opinions, and managing routine work, travel and study.
//
// `usage` authored for the full B1 batch: practical notes (multi-sense words,
// false friends, gender), collocations, and an extra conjugated example on verbs.
export const B1_WORDS: RawWord[] = [
  {
    word: "desarrollar", definition: "to develop, to expand", category: "Business",
    example: "La empresa quiere desarrollar nuevos productos este año.",
    synonyms: ["ampliar", "crear"],
    usage: {
      note: "To develop or build up (products, skills, ideas, a plot); reflexive desarrollarse = to take place/grow. ampliar is more 'widen'.",
      examples: ["El país desarrolló su industria en pocas décadas."],
      collocations: ["desarrollar un proyecto", "desarrollar una habilidad"],
    },
  },
  {
    word: "conseguir", definition: "to get, to manage to achieve", category: "Daily Life",
    example: "Por fin conseguí un trabajo en el extranjero.",
    synonyms: ["lograr", "obtener"],
    usage: {
      grammar: "irregular e→i: consigo, consiguió",
      note: "To get / succeed in getting; 'conseguir + inf.' = to manage to. lograr is close; obtener is more formal 'obtain'.",
      examples: ["Con esfuerzo conseguirás lo que te propones."],
      collocations: ["conseguir un trabajo", "conseguir algo"],
    },
  },
  {
    word: "mejorar", definition: "to improve", category: "Education",
    example: "Quiero mejorar mi pronunciación en español.",
    synonyms: ["perfeccionar"],
    usage: {
      note: "To improve — something, or (intransitive) to get better (health, weather). perfeccionar = to polish to near-perfect.",
      examples: ["Su español mejoró muchísimo tras el curso."],
      collocations: ["mejorar la calidad", "mejorar notablemente"],
    },
  },
  {
    word: "ahorrar", definition: "to save (money or time)", category: "Finance",
    example: "Intento ahorrar un poco de dinero cada mes.",
    synonyms: ["economizar"],
    usage: {
      note: "To save money, time or effort (put aside / not waste). NOT 'save' as in rescue (that's salvar) or save a file (guardar).",
      examples: ["Ahorró lo suficiente para comprar un piso."],
      collocations: ["ahorrar dinero", "ahorrar tiempo"],
    },
  },
  {
    word: "gastar", definition: "to spend", category: "Finance",
    example: "No quiero gastar mucho dinero este fin de semana.",
    synonyms: ["malgastar"],
    usage: {
      note: "To spend money, or use up/wear out (gastar pilas, gastar zapatos). For spending time use pasar. malgastar = to waste.",
      examples: ["Gastó todos sus ahorros en el coche."],
      collocations: ["gastar dinero", "gastar una broma"],
    },
  },
  {
    word: "prestar", definition: "to lend", category: "Daily Life",
    example: "¿Me puedes prestar tu cargador un momento?",
    synonyms: ["dejar"],
    usage: {
      note: "To lend (give temporarily). The reverse — to borrow — is 'pedir prestado'. Also 'prestar atención' = to pay attention.",
      examples: ["Le presté mi paraguas y no me lo devolvió."],
      collocations: ["prestar dinero", "prestar atención", "pedir prestado"],
    },
  },
  {
    word: "devolver", definition: "to return (something)", category: "Daily Life",
    example: "Tengo que devolver estos libros a la biblioteca.",
    synonyms: ["restituir"],
    usage: {
      grammar: "irregular o→ue: devuelvo",
      note: "To give something back (goods, money, a favour). For coming back yourself use volver/regresar, not devolver.",
      examples: ["Ya devolví los libros a la biblioteca."],
      collocations: ["devolver el dinero", "devolver una llamada"],
    },
  },
  {
    word: "reservar", definition: "to book, to reserve", category: "Travel",
    example: "Voy a reservar una mesa para cuatro personas.",
    synonyms: ["apartar"],
    usage: {
      note: "To book/reserve (table, room, ticket) or set aside for later. Noun: reserva (booking).",
      examples: ["Reservé una habitación con vistas al mar."],
      collocations: ["reservar una mesa", "reservar un hotel"],
    },
  },
  {
    word: "alojarse", definition: "to stay, to lodge", category: "Travel",
    example: "Nos vamos a alojar en un hotel cerca de la playa.",
    synonyms: ["hospedarse"],
    usage: {
      grammar: "reflexive",
      note: "To stay/lodge somewhere as a guest; hospedarse is a close synonym. For remaining/staying put use quedarse.",
      examples: ["Se alojaron en una casa rural encantadora."],
      collocations: ["alojarse en un hotel", "alojarse en casa de alguien"],
    },
  },
  {
    word: "recorrer", definition: "to travel through, to cover (distance)", category: "Travel",
    example: "Queremos recorrer toda la costa en coche.",
    synonyms: ["atravesar"],
    usage: {
      note: "To travel over/around an area or cover a distance; atravesar = to cross straight through. Noun: recorrido (route).",
      examples: ["Recorrimos el país entero en autobús."],
      collocations: ["recorrer un camino", "recorrer una distancia"],
    },
  },
  {
    word: "aprovechar", definition: "to take advantage of, to make the most of", category: "Daily Life",
    example: "Hay que aprovechar el buen tiempo para salir.",
    synonyms: ["explotar"],
    usage: {
      note: "To make the most of an opportunity (positive); reflexive 'aprovecharse de' = to exploit unfairly (negative). '¡Que aproveche!' = enjoy your meal.",
      examples: ["Aproveché el descuento para renovar el móvil."],
      collocations: ["aprovechar la ocasión", "aprovecharse de alguien"],
    },
  },
  {
    word: "quedar", definition: "to arrange to meet; to remain", category: "Daily Life",
    example: "Quedamos a las ocho delante del cine.",
    synonyms: ["citarse"],
    usage: {
      note: "Many uses: 'quedar con alguien' = arrange to meet; 'quedar' = to be left/remain; 'quedarse' = to stay; 'quedar bien/mal' = to look good/bad.",
      examples: ["Me quedé en casa todo el fin de semana."],
      collocations: ["quedar con alguien", "quedarse en casa", "quedar bien"],
    },
  },
  {
    word: "soler", definition: "to usually do something", category: "Daily Life",
    usage: {
      grammar: "irregular o→ue; only + infinitive",
      note: "'soler + infinitive' = to usually/tend to do something — there's no single English verb; translate with 'usually'. Only in present & imperfect.",
      examples: ["De pequeños solíamos veranear en el pueblo."],
      collocations: ["suelo hacer", "solía ir"],
    },
    example: "Suelo desayunar café con tostadas.",
  },
  {
    word: "tardar", definition: "to take time, to be late", category: "Travel",
    example: "El tren tarda dos horas en llegar a la ciudad.",
    synonyms: ["demorar"],
    usage: {
      note: "'tardar + time + en + inf.' = to take (that long) to do; also to be late/slow. Don't confuse with tarde (afternoon/late).",
      examples: ["Tardé una hora en encontrar aparcamiento."],
      collocations: ["tardar en llegar", "tardar mucho"],
    },
  },
  {
    word: "apuntar", definition: "to note down; to sign up", category: "Education",
    example: "Voy a apuntar la dirección en mi teléfono.",
    synonyms: ["anotar"],
    usage: {
      note: "To jot down; also to point at, and reflexive 'apuntarse a' = to sign up for. anotar is the plain 'note down'.",
      examples: ["Apunté su número en una servilleta."],
      collocations: ["apuntar una dirección", "apuntarse a un curso"],
    },
  },
  {
    word: "entregar", definition: "to hand in, to deliver", category: "Education",
    example: "Debo entregar el trabajo antes del viernes.",
    synonyms: ["presentar"],
    usage: {
      note: "To hand over/in (homework, a package, a prize); reflexive 'entregarse a' = to devote oneself / surrender. presentar = to present/submit.",
      examples: ["Entregó el trabajo justo a tiempo."],
      collocations: ["entregar un trabajo", "entregar un premio"],
    },
  },
  {
    word: "aprobar", definition: "to pass (an exam); to approve", category: "Education",
    example: "Estudié mucho para aprobar el examen de historia.",
    synonyms: ["pasar"],
    usage: {
      grammar: "irregular o→ue: apruebo",
      note: "To pass an exam/subject, or to approve (a law, plan). Opposite of suspender. Note: 'aprobar', not 'pasar', for exams.",
      examples: ["Aprobó todas las asignaturas en junio."],
      collocations: ["aprobar un examen", "aprobar una ley"],
    },
  },
  {
    word: "suspender", definition: "to fail (an exam); to suspend", category: "Education",
    example: "No quiero suspender ninguna asignatura este curso.",
    synonyms: ["reprobar"],
    usage: {
      note: "To fail an exam (Spain), or to suspend/call off (an event, someone). Opposite of aprobar. In Latin America 'reprobar' is common for failing.",
      examples: ["Suspendió el examen de conducir dos veces."],
      collocations: ["suspender un examen", "suspender un partido"],
    },
  },
  {
    word: "matricularse", definition: "to enroll, to register", category: "Education",
    example: "Me voy a matricular en un curso de italiano.",
    synonyms: ["inscribirse"],
    usage: {
      grammar: "reflexive; + en",
      note: "To enrol in a course/school; inscribirse is close (also for events). Noun: matrícula (enrolment; also number plate).",
      examples: ["Se matriculó en la universidad este año."],
      collocations: ["matricularse en un curso", "matricularse en la universidad"],
    },
  },
  {
    word: "asignatura", definition: "school subject", category: "Education",
    example: "Mi asignatura favorita siempre fue la geografía.",
    synonyms: ["materia"],
    usage: {
      grammar: "f.",
      note: "A school/university subject; materia is a close synonym. 'asignatura pendiente' = an unresolved matter (idiom).",
      collocations: ["una asignatura optativa", "asignatura pendiente"],
    },
  },
  {
    word: "horario", definition: "schedule, timetable", category: "Daily Life",
    example: "El horario de la biblioteca cambia en verano.",
    synonyms: ["agenda"],
    usage: {
      grammar: "m.",
      note: "A timetable/opening hours; 'horario laboral' = working hours. agenda is your personal planner/diary.",
      collocations: ["horario laboral", "horario de apertura"],
    },
  },
  {
    word: "reunión", definition: "meeting", category: "Business",
    example: "Tenemos una reunión importante el lunes por la mañana.",
    synonyms: ["junta"],
    usage: {
      grammar: "f.",
      note: "A meeting or gathering; junta is more a formal board meeting. Verb: reunirse (to meet up).",
      collocations: ["una reunión de trabajo", "convocar una reunión"],
    },
  },
  {
    word: "empresa", definition: "company, firm", category: "Business",
    example: "Trabaja en una empresa de tecnología desde hace años.",
    synonyms: ["compañía"],
    usage: {
      grammar: "f.",
      note: "A company/firm (also 'an undertaking'); compañía is a near-synonym. Person who runs one: empresario/a.",
      collocations: ["una empresa privada", "montar una empresa"],
    },
  },
  {
    word: "sueldo", definition: "salary, wage", category: "Finance",
    example: "Su nuevo sueldo le permite ahorrar más.",
    synonyms: ["salario"],
    usage: {
      grammar: "m.",
      note: "Regular pay/salary; salario is the more formal/legal term. 'sueldo mínimo' = minimum wage.",
      collocations: ["cobrar un sueldo", "un buen sueldo"],
    },
  },
  {
    word: "factura", definition: "bill, invoice", category: "Finance",
    example: "Aún no he pagado la factura de la luz.",
    synonyms: ["recibo"],
    usage: {
      grammar: "f.",
      note: "An invoice/utility bill; recibo is more a receipt/proof of payment. A restaurant bill is 'la cuenta'.",
      collocations: ["pagar una factura", "la factura de la luz"],
    },
  },
  {
    word: "cuenta", definition: "account; bill", category: "Finance",
    example: "Abrí una cuenta nueva en el banco esta semana.",
    usage: {
      grammar: "f.",
      note: "Bank account, or the bill (in a restaurant). Key idiom: 'darse cuenta de' = to realise; 'tener en cuenta' = to bear in mind.",
      collocations: ["una cuenta bancaria", "darse cuenta de", "pedir la cuenta"],
    },
  },
  {
    word: "presupuesto", definition: "budget; estimate", category: "Finance",
    example: "Tenemos un presupuesto limitado para el viaje.",
    synonyms: ["estimación"],
    usage: {
      grammar: "m.",
      note: "A budget, or a price estimate/quote (e.g. from a builder). 'pedir un presupuesto' = to ask for a quote.",
      collocations: ["un presupuesto ajustado", "pedir un presupuesto"],
    },
  },
  {
    word: "barato", definition: "cheap, inexpensive", category: "Finance",
    example: "Encontramos un vuelo muy barato a Lisboa.",
    synonyms: ["económico"],
    usage: {
      note: "Cheap/inexpensive; económico is a softer 'affordable'. Opposite of caro. 'lo barato sale caro' = buy cheap, pay twice.",
      collocations: ["muy barato", "salir barato"],
    },
  },
  {
    word: "caro", definition: "expensive", category: "Finance",
    example: "Ese restaurante es demasiado caro para mí.",
    synonyms: ["costoso"],
    usage: {
      note: "Expensive; costoso is more formal. Opposite of barato. Also adverb: 'costar caro' = to cost dearly.",
      collocations: ["demasiado caro", "costar caro"],
    },
  },
  {
    word: "gratis", definition: "free of charge", category: "Daily Life",
    example: "La entrada al museo es gratis los domingos.",
    synonyms: ["gratuito"],
    usage: {
      grammar: "invariable",
      note: "Free of charge; invariable (never *gratises*). gratuito/a is the adjective that agrees. Not 'free' as in libre (unrestricted).",
      collocations: ["entrada gratis", "totalmente gratis"],
    },
  },
  {
    word: "descuento", definition: "discount", category: "Finance",
    example: "Me hicieron un descuento del veinte por ciento.",
    synonyms: ["rebaja"],
    usage: {
      grammar: "m.",
      note: "A discount; rebaja is more a sale/markdown (las rebajas = the sales). 'hacer un descuento' = to give a discount.",
      collocations: ["hacer un descuento", "un descuento del 20%"],
    },
  },
  {
    word: "ganga", definition: "bargain", category: "Finance",
    example: "Estos zapatos fueron una auténtica ganga.",
    synonyms: ["chollo"],
    usage: {
      grammar: "f.",
      note: "A bargain — something great for very little money; chollo is the colloquial equivalent. '¡Es una ganga!'.",
      collocations: ["una auténtica ganga", "conseguir una ganga"],
    },
  },
  {
    word: "moneda", definition: "coin; currency", category: "Finance",
    example: "Necesito una moneda para el carrito del supermercado.",
    synonyms: ["divisa"],
    usage: {
      grammar: "f.",
      note: "A coin, or a currency (la moneda única = the single currency). divisa is 'foreign currency' in finance.",
      collocations: ["una moneda de euro", "la moneda nacional"],
    },
  },
  {
    word: "paisaje", definition: "landscape, scenery", category: "Travel",
    example: "El paisaje de las montañas era impresionante.",
    synonyms: ["panorama"],
    usage: {
      grammar: "m. (despite -e it's masculine)",
      note: "Landscape/scenery; also a genre in art (un paisaje = a landscape painting). panorama = a sweeping view.",
      collocations: ["un paisaje impresionante", "un paisaje urbano"],
    },
  },
  {
    word: "frontera", definition: "border", category: "Travel",
    example: "Cruzamos la frontera sin ningún problema.",
    synonyms: ["límite"],
    usage: {
      grammar: "f.",
      note: "A national border; also figurative limits (las fronteras del conocimiento). Adjective: fronterizo.",
      collocations: ["cruzar la frontera", "la frontera con Francia"],
    },
  },
  {
    word: "equipaje", definition: "luggage", category: "Travel",
    example: "Perdí el equipaje en el aeropuerto.",
    synonyms: ["maletas"],
    usage: {
      grammar: "m., uncountable",
      note: "Luggage as a whole (uncountable, like English); 'equipaje de mano' = hand luggage. For individual bags: maletas.",
      collocations: ["equipaje de mano", "facturar el equipaje"],
    },
  },
  {
    word: "retraso", definition: "delay", category: "Travel",
    example: "El vuelo salió con dos horas de retraso.",
    synonyms: ["demora"],
    usage: {
      grammar: "m.",
      note: "A delay/lateness; 'con retraso' = late, 'llevar retraso' = to be running behind. demora is a close synonym.",
      collocations: ["con retraso", "un retraso de dos horas"],
    },
  },
  {
    word: "alojamiento", definition: "accommodation", category: "Travel",
    example: "Buscamos alojamiento barato cerca del centro.",
    synonyms: ["hospedaje"],
    usage: {
      grammar: "m.",
      note: "Accommodation/lodging (uncountable); the noun of alojarse. hospedaje is a close synonym.",
      collocations: ["buscar alojamiento", "alojamiento y desayuno"],
    },
  },
  {
    word: "itinerario", definition: "itinerary, route", category: "Travel",
    example: "Preparé un itinerario completo para el viaje.",
    synonyms: ["recorrido"],
    usage: {
      grammar: "m.",
      note: "A planned itinerary/route; recorrido is the route actually travelled. 'seguir un itinerario'.",
      collocations: ["preparar un itinerario", "un itinerario turístico"],
    },
  },
  {
    word: "costumbre", definition: "custom, habit", category: "Culture",
    example: "Probar la comida local es una buena costumbre.",
    synonyms: ["hábito"],
    usage: {
      grammar: "f.",
      note: "A custom (shared) or personal habit; 'como de costumbre' = as usual; 'tener la costumbre de' = to be in the habit of.",
      collocations: ["como de costumbre", "una vieja costumbre"],
    },
  },
  {
    word: "tradición", definition: "tradition", category: "Culture",
    example: "La tradición de la siesta sigue viva en algunos pueblos.",
    synonyms: ["usanza"],
    usage: {
      grammar: "f.",
      note: "A tradition; 'por tradición' = traditionally. Adjective: tradicional. usanza is more literary ('a la antigua usanza').",
      collocations: ["una tradición popular", "mantener la tradición"],
    },
  },
  {
    word: "fiesta", definition: "party; festival; public holiday", category: "Culture",
    example: "La fiesta del pueblo dura toda la semana.",
    synonyms: ["celebración"],
    usage: {
      grammar: "f.",
      note: "A party, a town festival, or a public holiday ('mañana es fiesta' = tomorrow's a holiday). 'las fiestas' = the festivities.",
      collocations: ["una fiesta de cumpleaños", "día de fiesta"],
    },
  },
  {
    word: "receta", definition: "recipe; prescription", category: "Daily Life",
    example: "Mi abuela me dio la receta de la paella.",
    usage: {
      grammar: "f.",
      note: "A cooking recipe, or a medical prescription — context decides. For the medical sense you'll also see 'receta médica'.",
      collocations: ["la receta de la paella", "una receta médica"],
    },
  },
  {
    word: "ingrediente", definition: "ingredient", category: "Daily Life",
    example: "Falta un ingrediente para terminar el postre.",
    usage: {
      grammar: "m. (despite -e it's masculine)",
      note: "An ingredient (cooking, or figuratively of success). 'los ingredientes de una receta'.",
      collocations: ["los ingredientes de una receta", "un ingrediente clave"],
    },
  },
  {
    word: "saludable", definition: "healthy (food, lifestyle)", category: "Health",
    example: "Intento llevar una dieta más saludable.",
    synonyms: ["sano"],
    usage: {
      note: "Healthy/health-giving — of food, habits, lifestyle. sano can describe a person's health too; saludable is what's good for you.",
      collocations: ["una dieta saludable", "un estilo de vida saludable"],
    },
  },
  {
    word: "enfermedad", definition: "illness, disease", category: "Health",
    example: "Es una enfermedad común pero fácil de tratar.",
    synonyms: ["dolencia"],
    usage: {
      grammar: "f.",
      note: "Illness or disease in general; dolencia is a milder ailment/complaint. Person who is ill: enfermo.",
      collocations: ["una enfermedad grave", "prevenir enfermedades"],
    },
  },
  {
    word: "receta médica", definition: "medical prescription", category: "Health",
    example: "Necesito una receta médica para este medicamento.",
    usage: {
      grammar: "f.",
      note: "A doctor's prescription (the specific sense of receta); 'con receta' = prescription-only, 'sin receta' = over the counter.",
      collocations: ["con receta médica", "sin receta"],
    },
  },
  {
    word: "cita", definition: "appointment; date; quotation", category: "Health",
    example: "Tengo cita con el dentista el jueves.",
    synonyms: ["turno"],
    usage: {
      grammar: "f.",
      note: "An appointment or a romantic date; also a quotation (in a text). 'pedir cita' = to make an appointment. In parts of L.America 'turno'.",
      collocations: ["pedir cita", "una cita médica", "una primera cita"],
    },
  },
  {
    word: "descansar", definition: "to rest", category: "Health",
    example: "Después de tanto trabajo, necesito descansar.",
    synonyms: ["reposar"],
    usage: {
      note: "To rest/take a break; reposar is more 'lie still / let settle'. '¡Que descanses!' = sleep well / take care.",
      examples: ["Descansé toda la tarde después del viaje."],
      collocations: ["descansar un rato", "necesitar descansar"],
    },
  },
  {
    word: "doler", definition: "to hurt, to ache", category: "Health",
    example: "Me duele la cabeza desde esta mañana.",
    usage: {
      grammar: "irregular o→ue; works like gustar (me duele/duelen)",
      note: "Used like gustar: the body part is the subject — 'me duele la cabeza', 'me duelen los pies'. Also emotional: 'me dolió mucho'.",
      examples: ["Después de correr le dolían las piernas."],
      collocations: ["me duele la cabeza", "doler el estómago"],
    },
  },
  {
    word: "esfuerzo", definition: "effort", category: "Education",
    example: "Con un poco de esfuerzo, aprobarás sin problema.",
    synonyms: ["empeño"],
    usage: {
      grammar: "m.",
      note: "Effort/exertion; 'hacer un esfuerzo' = to make an effort; 'sin esfuerzo' = effortlessly. empeño adds determination.",
      collocations: ["hacer un esfuerzo", "merecer la pena el esfuerzo"],
    },
  },
  {
    word: "consejo", definition: "advice, piece of advice; council", category: "Education",
    example: "Mi profesor me dio un buen consejo.",
    synonyms: ["recomendación"],
    usage: {
      grammar: "m.",
      note: "Advice — countable in Spanish ('un consejo' = a piece of advice); 'dar/pedir consejo'. Also 'council' (consejo de administración).",
      collocations: ["dar un consejo", "pedir consejo"],
    },
  },
  {
    word: "duda", definition: "doubt, question", category: "Education",
    example: "Si tienes alguna duda, pregúntame.",
    synonyms: ["incertidumbre"],
    usage: {
      grammar: "f.",
      note: "A doubt or a query (in class, 'una duda' = a question). 'sin duda' = undoubtedly; 'no cabe duda' = there's no question.",
      collocations: ["tener una duda", "sin duda"],
    },
  },
  {
    word: "tema", definition: "topic, subject; issue", category: "Academic",
    example: "El tema de la charla fue el cambio climático.",
    synonyms: ["asunto"],
    usage: {
      grammar: "m. (masculine despite -a)",
      note: "A topic/subject of discussion; also a colloquial 'matter/issue' and a song ('un temazo'). asunto = matter/affair.",
      collocations: ["cambiar de tema", "el tema principal"],
    },
  },
  {
    word: "resumen", definition: "summary", category: "Academic",
    example: "Escribe un resumen breve del artículo.",
    synonyms: ["síntesis"],
    usage: {
      grammar: "m.",
      note: "A summary; 'en resumen' = in short/to sum up. Verb: resumir. síntesis is a close synonym.",
      collocations: ["en resumen", "hacer un resumen"],
    },
  },
  {
    word: "ejemplo", definition: "example", category: "Academic",
    example: "El profesor puso un ejemplo muy claro.",
    synonyms: ["muestra"],
    usage: {
      grammar: "m.",
      note: "An example; 'por ejemplo' = for example; 'dar/poner un ejemplo' = to give an example; 'predicar con el ejemplo' = to lead by example.",
      collocations: ["por ejemplo", "poner un ejemplo"],
    },
  },
  {
    word: "noticia", definition: "piece of news", category: "Society",
    example: "Escuché la noticia en la radio esta mañana.",
    synonyms: ["nueva"],
    usage: {
      grammar: "f.",
      note: "A piece of news (countable: 'una noticia'); 'las noticias' = the news (broadcast). Not the same as periódico (newspaper).",
      collocations: ["una buena noticia", "dar una noticia"],
    },
  },
  {
    word: "periódico", definition: "newspaper", category: "Society",
    example: "Leo el periódico mientras desayuno.",
    synonyms: ["diario"],
    usage: {
      grammar: "m.",
      note: "A newspaper; diario is a synonym (also = daily / a diary). As an adjective 'periódico' = periodic/recurring.",
      collocations: ["leer el periódico", "un periódico digital"],
    },
  },
  {
    word: "encuesta", definition: "survey, poll", category: "Society",
    example: "Participé en una encuesta sobre transporte público.",
    synonyms: ["sondeo"],
    usage: {
      grammar: "f.",
      note: "A survey or opinion poll; sondeo is a close synonym (esp. political polling). 'hacer una encuesta'.",
      collocations: ["hacer una encuesta", "según la encuesta"],
    },
  },
  {
    word: "vecino", definition: "neighbour", category: "Society",
    example: "Mi vecino siempre me ayuda con el jardín.",
    usage: {
      grammar: "m. (vecina f.)",
      note: "A neighbour; also a resident of a town ('los vecinos del barrio'). As an adjective = neighbouring (el país vecino).",
      collocations: ["el vecino de al lado", "los vecinos del barrio"],
    },
  },
  {
    word: "barrio", definition: "neighbourhood", category: "Society",
    example: "Mi barrio es tranquilo y tiene muchos parques.",
    synonyms: ["vecindario"],
    usage: {
      grammar: "m.",
      note: "A neighbourhood/district; 'el barrio' can also mean the local area you're from. vecindario = the neighbourhood/its residents.",
      collocations: ["un barrio tranquilo", "el barrio antiguo"],
    },
  },
  {
    word: "medio ambiente", definition: "the environment", category: "Environment",
    example: "Debemos cuidar el medio ambiente entre todos.",
    usage: {
      grammar: "m.",
      note: "The natural environment (fixed phrase, usually with 'el'); adjective form: medioambiental. Not 'environment' as in surroundings (entorno).",
      collocations: ["cuidar el medio ambiente", "el impacto en el medio ambiente"],
    },
  },
  {
    word: "reciclar", definition: "to recycle", category: "Environment",
    example: "En casa intentamos reciclar todo el plástico.",
    usage: {
      note: "To recycle; also figuratively to retrain/repurpose ('reciclarse' = to retrain professionally). Noun: reciclaje.",
      examples: ["Recicla el vidrio y el papel por separado."],
      collocations: ["reciclar el plástico", "reciclar residuos"],
    },
  },
  {
    word: "basura", definition: "rubbish, trash", category: "Environment",
    example: "Saca la basura antes de que pase el camión.",
    synonyms: ["desperdicios"],
    usage: {
      grammar: "f., uncountable",
      note: "Rubbish/trash (uncountable); 'sacar la basura' = take out the bin. Also figuratively junk ('comida basura' = junk food).",
      collocations: ["sacar la basura", "comida basura"],
    },
  },
  {
    word: "contaminación", definition: "pollution", category: "Environment",
    example: "La contaminación del aire es peor en la ciudad.",
    synonyms: ["polución"],
    usage: {
      grammar: "f.",
      note: "Pollution/contamination; verb: contaminar. 'contaminación acústica' = noise pollution. polución is a close synonym.",
      collocations: ["la contaminación del aire", "reducir la contaminación"],
    },
  },
  {
    word: "naturaleza", definition: "nature", category: "Environment",
    example: "Los fines de semana salimos a disfrutar de la naturaleza.",
    usage: {
      grammar: "f.",
      note: "Nature (the natural world), and also 'nature' as in essential character ('la naturaleza humana'). 'en plena naturaleza' = out in the wild.",
      collocations: ["disfrutar de la naturaleza", "la naturaleza humana"],
    },
  },
  {
    word: "clima", definition: "climate; atmosphere", category: "Environment",
    example: "El clima de la costa es suave todo el año.",
    synonyms: ["tiempo"],
    usage: {
      grammar: "m. (masculine despite -a)",
      note: "Climate (long-term), and figuratively an atmosphere ('un clima de tensión'). Day-to-day weather is 'el tiempo'.",
      collocations: ["el cambio climático", "un clima cálido"],
    },
  },
  {
    word: "pantalla", definition: "screen", category: "Technology",
    example: "Paso demasiadas horas delante de la pantalla.",
    synonyms: ["monitor"],
    usage: {
      grammar: "f.",
      note: "A screen (phone, TV, cinema); 'la gran pantalla' = the big screen. monitor is specifically a computer monitor.",
      collocations: ["la pantalla del móvil", "pantalla táctil"],
    },
  },
  {
    word: "contraseña", definition: "password", category: "Technology",
    example: "Olvidé la contraseña de mi correo otra vez.",
    synonyms: ["clave"],
    usage: {
      grammar: "f.",
      note: "A password; clave is a close synonym (also 'PIN/code'). 'introducir la contraseña' = to enter the password.",
      collocations: ["introducir la contraseña", "cambiar la contraseña"],
    },
  },
  {
    word: "archivo", definition: "file; archive", category: "Technology",
    example: "Guardé el archivo en una carpeta nueva.",
    synonyms: ["fichero"],
    usage: {
      grammar: "m.",
      note: "A computer file, or an archive (of records). fichero is a synonym for a file. 'adjuntar un archivo' = to attach a file.",
      collocations: ["guardar un archivo", "adjuntar un archivo"],
    },
  },
  {
    word: "red", definition: "network; net", category: "Technology",
    example: "No hay buena red en este pueblo.",
    usage: {
      grammar: "f.",
      note: "A network (phone signal, computer network), the internet ('la red'), or a physical net. 'las redes sociales' = social media.",
      collocations: ["las redes sociales", "red wifi"],
    },
  },
  {
    word: "aplicación", definition: "app; application", category: "Technology",
    example: "Descargué una aplicación para aprender idiomas.",
    synonyms: ["app"],
    usage: {
      grammar: "f.",
      note: "A phone/computer app (often shortened to 'app'); also 'application' as in applying something ('la aplicación de una ley').",
      collocations: ["descargar una aplicación", "una aplicación móvil"],
    },
  },
  {
    word: "encender", definition: "to switch on, to light", category: "Daily Life",
    example: "¿Puedes encender la luz, por favor?",
    synonyms: ["prender"],
    usage: {
      grammar: "irregular e→ie: enciendo",
      note: "To switch on (light, device) or light (a fire, candle). Opposite of apagar. In much of Latin America 'prender'.",
      examples: ["Encendió la chimenea porque hacía frío."],
      collocations: ["encender la luz", "encender el fuego"],
    },
  },
  {
    word: "apagar", definition: "to switch off, to turn off", category: "Daily Life",
    example: "No olvides apagar el ordenador al salir.",
    usage: {
      note: "To switch off (a device, light) or put out (a fire). Opposite of encender. Noun: apagón = blackout.",
      examples: ["Apagué todas las luces antes de salir."],
      collocations: ["apagar la luz", "apagar el móvil"],
    },
  },
  {
    word: "enchufar", definition: "to plug in", category: "Technology",
    example: "Tengo que enchufar el móvil porque está sin batería.",
    synonyms: ["conectar"],
    usage: {
      note: "To plug in (into a socket, enchufe). Colloquially 'enchufe' also = connections/pulling strings to get a job.",
      examples: ["Enchufó el ordenador y empezó a trabajar."],
      collocations: ["enchufar el cargador", "desenchufar"],
    },
  },
  {
    word: "averiguar", definition: "to find out", category: "Daily Life",
    example: "Quiero averiguar a qué hora abre la tienda.",
    synonyms: ["descubrir"],
    usage: {
      grammar: "spelling: averigüé (diéresis)",
      note: "To find out / ascertain (by asking or investigating); descubrir = to discover. Note the ü in 'averigüé, averigüe'.",
      examples: ["Averigüé la verdad por casualidad."],
      collocations: ["averiguar la verdad", "averiguar qué pasó"],
    },
  },
  {
    word: "elegir", definition: "to choose", category: "Daily Life",
    example: "Es difícil elegir entre tantas opciones.",
    synonyms: ["seleccionar"],
    usage: {
      grammar: "irregular e→i: elijo, eligió",
      note: "To choose or to elect (a leader). seleccionar is more 'select'. Adjective: elegido (chosen); noun: elección.",
      examples: ["Mañana elegirán al nuevo representante."],
      collocations: ["elegir una opción", "elegir bien"],
    },
  },
  {
    word: "preocuparse", definition: "to worry", category: "Emotions",
    example: "No te preocupes, todo va a salir bien.",
    synonyms: ["inquietarse"],
    usage: {
      grammar: "reflexive; + por",
      note: "To worry ('preocuparse por' = to worry about / to see to). Non-reflexive 'preocupar' = to worry someone ('me preocupa').",
      examples: ["Se preocupa demasiado por cosas pequeñas."],
      collocations: ["no te preocupes", "preocuparse por algo"],
    },
  },
  {
    word: "alegrarse", definition: "to be glad, to be happy", category: "Emotions",
    example: "Me alegro mucho de verte de nuevo.",
    usage: {
      grammar: "reflexive; + de",
      note: "To be glad ('alegrarse de + inf./de que + subjunctive'). Non-reflexive 'alegrar' = to make someone happy ('me alegra que...').",
      examples: ["Se alegraron mucho al recibir la noticia."],
      collocations: ["alegrarse de algo", "me alegro por ti"],
    },
  },
  {
    word: "enfadarse", definition: "to get angry", category: "Emotions",
    example: "Mi hermano se enfada por cualquier cosa.",
    synonyms: ["enojarse"],
    usage: {
      grammar: "reflexive; enfadarse con (alguien) / por (algo)",
      note: "To get angry (Spain); 'enfadarse con alguien' = to get angry at someone. In Latin America 'enojarse' is more common.",
      examples: ["Se enfadó conmigo sin motivo."],
      collocations: ["enfadarse con alguien", "enfadarse por algo"],
    },
  },
  {
    word: "aburrirse", definition: "to get bored", category: "Emotions",
    example: "Los niños se aburren si llueve todo el día.",
    usage: {
      grammar: "reflexive",
      note: "To get bored (reflexive). Non-reflexive 'aburrir' = to bore someone ('me aburre'). Adjective pair: aburrido (bored / boring).",
      examples: ["Me aburrí muchísimo en la conferencia."],
      collocations: ["aburrirse en clase", "aburrirse como una ostra"],
    },
  },
  {
    word: "sorprender", definition: "to surprise", category: "Emotions",
    example: "Me sorprendió su reacción tan tranquila.",
    synonyms: ["asombrar"],
    usage: {
      note: "To surprise (often like gustar: 'me sorprende que...'); reflexive 'sorprenderse de' = to be surprised. Also to catch in the act.",
      examples: ["No me sorprende que haya ganado."],
      collocations: ["sorprender a alguien", "no me sorprende"],
    },
  },
  {
    word: "confiar", definition: "to trust", category: "Emotions",
    example: "Puedes confiar en mí para lo que necesites.",
    synonyms: ["fiarse"],
    usage: {
      grammar: "+ en; accent: confío, confías",
      note: "To trust ('confiar en alguien') or to entrust; 'confiar en que...' = to be confident that. fiarse (de) is the reflexive close synonym.",
      examples: ["Confió en la persona equivocada."],
      collocations: ["confiar en alguien", "confiar en el futuro"],
    },
  },
  {
    word: "echar de menos", definition: "to miss (someone/something)", category: "Emotions",
    example: "Echo de menos a mi familia cuando viajo.",
    synonyms: ["añorar"],
    usage: {
      grammar: "fixed phrase",
      note: "Fixed expression = to miss someone/something; the person missed is the object ('te echo de menos'). In L. America also 'extrañar'.",
      examples: ["Echábamos de menos la comida de casa."],
      collocations: ["echar de menos a alguien", "echar de menos algo"],
    },
  },
  {
    word: "orgulloso", definition: "proud", category: "Emotions",
    example: "Estoy muy orgulloso de lo que has conseguido.",
    synonyms: ["satisfecho"],
    usage: {
      grammar: "+ de",
      note: "Proud — 'orgulloso de' = proud of (positive), but can also mean arrogant depending on tone. Noun: orgullo.",
      collocations: ["orgulloso de", "sentirse orgulloso"],
    },
  },
  {
    word: "amable", definition: "kind, friendly", category: "Emotions",
    example: "La recepcionista fue muy amable con nosotros.",
    synonyms: ["simpático"],
    usage: {
      note: "Kind/courteous (esp. in service or manner); simpático is more 'likeable/nice'. 'muy amable' = that's very kind (of you).",
      collocations: ["muy amable", "amable con alguien"],
    },
  },
  {
    word: "tímido", definition: "shy", category: "Emotions",
    example: "De niño era muy tímido en clase.",
    synonyms: ["vergonzoso"],
    usage: {
      note: "Shy/timid; noun timidez. (Careful: vergonzoso can mean shy but also 'shameful'.)",
      collocations: ["ser tímido", "una sonrisa tímida"],
    },
  },
  {
    word: "valiente", definition: "brave", category: "Emotions",
    example: "Fue muy valiente al hablar delante de todos.",
    synonyms: ["audaz"],
    usage: {
      note: "Brave/courageous; audaz leans 'bold/daring'. Noun: valentía. Same form for m./f.",
      collocations: ["ser valiente", "una decisión valiente"],
    },
  },
  {
    word: "perezoso", definition: "lazy", category: "Emotions",
    example: "Los domingos me siento un poco perezoso.",
    synonyms: ["vago"],
    usage: {
      note: "Lazy; vago is the more colloquial word. Noun: pereza ('me da pereza' = I can't be bothered). (Also 'perezoso' = a sloth.)",
      collocations: ["sentirse perezoso", "me da pereza"],
    },
  },
  {
    word: "fuerte", definition: "strong", category: "Daily Life",
    example: "El café de esta cafetería es muy fuerte.",
    synonyms: ["potente"],
    usage: {
      note: "Strong (physically, in flavour, intensity); also as an adverb ('hablar fuerte' = to speak loudly). Opposite of débil.",
      collocations: ["muy fuerte", "hablar fuerte"],
    },
  },
  {
    word: "débil", definition: "weak", category: "Health",
    example: "Después de la gripe me sentía muy débil.",
    synonyms: ["flojo"],
    usage: {
      note: "Weak (physically, or of an argument/signal); flojo is more colloquial. Opposite of fuerte. Noun: debilidad.",
      collocations: ["sentirse débil", "un punto débil"],
    },
  },
  {
    word: "ligero", definition: "light (weight); slight", category: "Health",
    example: "Prefiero una cena ligera por la noche.",
    synonyms: ["liviano"],
    usage: {
      note: "Light in weight, or slight/mild (una cena ligera, un ligero dolor); also quick/nimble. Opposite of pesado. NOT 'light' as in luz.",
      collocations: ["una cena ligera", "un ligero cambio"],
    },
  },
  {
    word: "pesado", definition: "heavy; annoying", category: "Daily Life",
    usage: {
      note: "Heavy (weight), or figuratively tiresome/annoying ('¡qué pesado eres!' = you're such a pain). Opposite of ligero.",
      collocations: ["muy pesado", "una comida pesada"],
    },
    example: "Esta maleta es demasiado pesada para llevarla.",
  },
  {
    word: "lleno", definition: "full", category: "Daily Life",
    example: "El autobús iba completamente lleno.",
    synonyms: ["repleto"],
    usage: {
      note: "Full ('lleno de' = full of); repleto is 'packed'. Opposite of vacío. 'estar lleno' = to be full (also full up after eating).",
      collocations: ["lleno de gente", "estar lleno"],
    },
  },
  {
    word: "vacío", definition: "empty", category: "Daily Life",
    usage: {
      note: "Empty; also a noun 'el vacío' = emptiness/the void. Opposite of lleno. Verb: vaciar.",
      collocations: ["una casa vacía", "sentir un vacío"],
    },
    example: "Encontramos el restaurante casi vacío.",
  },
  {
    word: "limpio", definition: "clean", category: "Daily Life",
    example: "Me gusta mantener mi habitación limpia.",
    synonyms: ["aseado"],
    usage: {
      note: "Clean; also 'fair/honest' ('juego limpio' = fair play). Opposite of sucio. Verb: limpiar.",
      collocations: ["mantener limpio", "juego limpio"],
    },
  },
  {
    word: "sucio", definition: "dirty", category: "Daily Life",
    usage: {
      note: "Dirty; also figuratively 'dirty/underhand' (juego sucio). Opposite of limpio. Verb: ensuciar (to make dirty).",
      collocations: ["muy sucio", "ropa sucia"],
    },
    example: "Los zapatos están sucios después de la lluvia.",
  },
  {
    word: "roto", definition: "broken", category: "Daily Life",
    example: "El ascensor lleva roto toda la semana.",
    synonyms: ["estropeado"],
    usage: {
      note: "Broken (irregular past participle of romper); estropeado = out of order/spoilt. 'llevar roto' = to have been broken (for a while).",
      collocations: ["estar roto", "un cristal roto"],
    },
  },
  {
    word: "seguro", definition: "safe; sure; insurance", category: "Daily Life",
    example: "No estoy seguro de qué camino tomar.",
    synonyms: ["cierto"],
    usage: {
      note: "Adjective = safe or sure ('estar seguro de' = to be sure of). As a noun 'el seguro' = insurance. Adverb 'seguro que...' = surely.",
      collocations: ["estar seguro de", "un lugar seguro"],
    },
  },
  {
    word: "peligroso", definition: "dangerous", category: "Daily Life",
    example: "Es peligroso cruzar la calle sin mirar.",
    synonyms: ["arriesgado"],
    usage: {
      note: "Dangerous; arriesgado is 'risky'. Noun: peligro ('¡peligro!' = danger!). 'correr peligro' = to be in danger.",
      collocations: ["muy peligroso", "correr peligro"],
    },
  },
  {
    word: "tranquilo", definition: "calm, quiet", category: "Emotions",
    example: "Vivimos en un pueblo muy tranquilo.",
    synonyms: ["sereno"],
    usage: {
      note: "Calm/peaceful (a person, place, moment); '¡tranquilo!' = relax/don't worry. Noun: tranquilidad. sereno is more literary.",
      collocations: ["estar tranquilo", "una vida tranquila"],
    },
  },
  {
    word: "ruidoso", definition: "noisy", category: "Daily Life",
    usage: {
      note: "Noisy; from ruido (noise). Opposite of tranquilo/silencioso.",
      collocations: ["un bar ruidoso", "demasiado ruidoso"],
    },
    example: "El bar de al lado es demasiado ruidoso.",
  },
  {
    word: "rápido", definition: "fast, quick", category: "Travel",
    example: "El nuevo tren es mucho más rápido.",
    synonyms: ["veloz"],
    usage: {
      note: "Fast; also used adverbially ('ve rápido' = go quickly, alongside rápidamente). veloz is more literary. Opposite of lento.",
      collocations: ["muy rápido", "comida rápida"],
    },
  },
  {
    word: "lento", definition: "slow", category: "Technology",
    example: "La conexión a internet va muy lenta hoy.",
    synonyms: ["pausado"],
    usage: {
      note: "Slow; adverb lentamente. Opposite of rápido. 'a fuego lento' = on low heat.",
      collocations: ["muy lento", "a fuego lento"],
    },
  },
  {
    word: "anuncio", definition: "advertisement; announcement", category: "Business",
    example: "Vi el anuncio del trabajo en internet.",
    synonyms: ["aviso"],
    usage: {
      grammar: "m.",
      note: "An advert (TV/online) or an announcement; verb anunciar. aviso is more a notice/warning.",
      collocations: ["un anuncio de televisión", "poner un anuncio"],
    },
  },
  {
    word: "cliente", definition: "customer, client", category: "Business",
    example: "El cliente siempre tiene preguntas sobre el precio.",
    synonyms: ["comprador"],
    usage: {
      grammar: "m. (clienta/cliente f.)",
      note: "A customer or client; 'el cliente siempre tiene razón'. comprador = buyer/purchaser specifically.",
      collocations: ["atender al cliente", "un cliente habitual"],
    },
  },
  {
    word: "jefe", definition: "boss", category: "Business",
    example: "Mi jefe es exigente pero justo.",
    synonyms: ["superior"],
    usage: {
      grammar: "m. (jefa f.)",
      note: "A boss/head; 'jefe de' = head of (a department). superior is more formal ('your superior').",
      collocations: ["el jefe de equipo", "hablar con el jefe"],
    },
  },
  {
    word: "compañero", definition: "colleague, classmate, companion", category: "Business",
    example: "Mis compañeros de trabajo son muy agradables.",
    synonyms: ["colega"],
    usage: {
      grammar: "m. (compañera f.)",
      note: "A companion in some shared context: 'compañero de trabajo/clase/piso'. Also = partner (in a relationship). colega = colleague/mate.",
      collocations: ["compañero de trabajo", "compañero de clase"],
    },
  },
  {
    word: "entrevista", definition: "interview", category: "Business",
    example: "Tengo una entrevista de trabajo mañana.",
    usage: {
      grammar: "f.",
      note: "An interview (job, or journalistic); verb entrevistar. 'entrevista de trabajo' = job interview.",
      collocations: ["una entrevista de trabajo", "hacer una entrevista"],
    },
  },
  {
    word: "currículum", definition: "CV, résumé", category: "Business",
    example: "Actualicé mi currículum antes de enviarlo.",
    usage: {
      grammar: "m.; also 'currículo'",
      note: "A CV/résumé (from 'currículum vitae', often shortened to 'el currículum' or colloquially 'el curri').",
      collocations: ["enviar el currículum", "actualizar el currículum"],
    },
  },
  {
    word: "contrato", definition: "contract", category: "Business",
    example: "Firmé el contrato esta misma tarde.",
    synonyms: ["acuerdo"],
    usage: {
      grammar: "m.",
      note: "A contract; verb contratar (to hire / take on). 'firmar un contrato' = to sign a contract. acuerdo is a broader 'agreement'.",
      collocations: ["firmar un contrato", "un contrato temporal"],
    },
  },
  {
    word: "deber", definition: "duty; to owe; must", category: "Society",
    example: "Es nuestro deber respetar las normas.",
    synonyms: ["obligación"],
    usage: {
      note: "As a noun 'el deber' = duty (plural 'los deberes' = homework). As a verb: 'deber + inf.' = must/should; 'deber' + money = to owe.",
      collocations: ["cumplir con el deber", "hacer los deberes"],
    },
  },
  {
    word: "derecho", definition: "right; law; straight", category: "Law",
    example: "Todos tenemos derecho a la educación.",
    synonyms: ["privilegio"],
    usage: {
      note: "Three senses: a right ('derecho a'); the field of Law (estudiar Derecho); and straight/upright ('todo derecho' = straight ahead).",
      collocations: ["tener derecho a", "los derechos humanos", "todo derecho"],
    },
  },
  {
    word: "norma", definition: "rule, norm", category: "Law",
    example: "Hay que seguir las normas de seguridad.",
    synonyms: ["regla"],
    usage: {
      grammar: "f.",
      note: "A rule/regulation or a social norm; regla is a close synonym (also = ruler / period). 'por norma general' = as a rule.",
      collocations: ["seguir las normas", "una norma de seguridad"],
    },
  },
  {
    word: "multa", definition: "fine, penalty", category: "Law",
    example: "Me pusieron una multa por aparcar mal.",
    synonyms: ["sanción"],
    usage: {
      grammar: "f.",
      note: "A fine/penalty; 'poner una multa' = to give a fine; verb multar. sanción is a broader 'sanction/penalty'.",
      collocations: ["poner una multa", "una multa de tráfico"],
    },
  },
  {
    word: "ciudadano", definition: "citizen", category: "Politics",
    example: "Cada ciudadano tiene el deber de votar.",
    synonyms: ["habitante"],
    usage: {
      grammar: "m. (ciudadana f.)",
      note: "A citizen; 'ciudadano de a pie' = ordinary person. habitante = inhabitant/resident. Noun: ciudadanía.",
      collocations: ["un ciudadano responsable", "los derechos del ciudadano"],
    },
  },
  {
    word: "gobierno", definition: "government", category: "Politics",
    example: "El gobierno anunció nuevas medidas hoy.",
    usage: {
      grammar: "m.",
      note: "The government; verb gobernar (to govern). 'el Gobierno' (capitalised) for the specific administration.",
      collocations: ["el gobierno central", "formar gobierno"],
    },
  },
  {
    word: "votar", definition: "to vote", category: "Politics",
    example: "Es importante votar en las elecciones.",
    synonyms: ["elegir"],
    usage: {
      note: "To vote ('votar a alguien' / 'votar por'); noun: voto. Don't confuse with botar (to bounce / throw out).",
      examples: ["Votó por primera vez en las últimas elecciones."],
      collocations: ["votar en las elecciones", "votar a favor"],
    },
  },
  {
    word: "manifestación", definition: "demonstration, protest", category: "Politics",
    example: "Miles de personas asistieron a la manifestación.",
    synonyms: ["protesta"],
    usage: {
      grammar: "f.",
      note: "A public demonstration/protest (also 'a manifestation' of something); people who attend: manifestantes. Verb: manifestarse.",
      collocations: ["una manifestación pacífica", "convocar una manifestación"],
    },
  },
  {
    word: "obra", definition: "work (of art); construction; play", category: "Arts",
    example: "Esta obra de teatro es muy famosa.",
    synonyms: ["creación"],
    usage: {
      grammar: "f.",
      note: "A work (of art/literature: 'obra de arte'), a play ('obra de teatro'), or building works ('obras' = roadworks/a building site).",
      collocations: ["una obra de teatro", "una obra de arte", "estar en obras"],
    },
  },
  {
    word: "cuadro", definition: "painting, picture; table/chart", category: "Arts",
    example: "Compré un cuadro para el salón.",
    synonyms: ["pintura"],
    usage: {
      grammar: "m.",
      note: "A framed painting/picture; also a table/chart (un cuadro de datos) and 'a scene'. pintura = painting (the art) or paint.",
      collocations: ["un cuadro al óleo", "colgar un cuadro"],
    },
  },
  {
    word: "escenario", definition: "stage; scenario", category: "Arts",
    example: "El cantante salió al escenario entre aplausos.",
    synonyms: ["tablado"],
    usage: {
      grammar: "m.",
      note: "A theatre/concert stage, or a scenario/setting ('el peor escenario' = the worst-case scenario). Not 'scenery' (that's decorado/paisaje).",
      collocations: ["salir al escenario", "el peor escenario"],
    },
  },
  {
    word: "público", definition: "audience; public", category: "Arts",
    example: "El público aplaudió durante varios minutos.",
    synonyms: ["audiencia"],
    usage: {
      grammar: "m.",
      note: "The audience/spectators, or the general public; also adjective público/a (public). Opposite (adj.) of privado.",
      collocations: ["el gran público", "abierto al público"],
    },
  },
  {
    word: "experimento", definition: "experiment", category: "Science",
    example: "Hicimos un experimento sencillo en clase de ciencias.",
    synonyms: ["prueba"],
    usage: {
      grammar: "m.",
      note: "A scientific experiment; verb experimentar (also = to experience/undergo). 'hacer/realizar un experimento'.",
      collocations: ["hacer un experimento", "un experimento científico"],
    },
  },
  {
    word: "descubrimiento", definition: "discovery", category: "Science",
    example: "Fue un descubrimiento importante para la medicina.",
    synonyms: ["hallazgo"],
    usage: {
      grammar: "m.",
      note: "A discovery; verb descubrir. hallazgo = a find/finding. 'el descubrimiento de América'.",
      collocations: ["un descubrimiento científico", "un gran descubrimiento"],
    },
  },
  {
    word: "investigar", definition: "to research, to investigate", category: "Academic",
    example: "Los estudiantes deben investigar el tema a fondo.",
    synonyms: ["indagar"],
    usage: {
      note: "To research (academically) or investigate (a crime); noun: investigación; person: investigador. indagar is a formal synonym.",
      examples: ["La policía investigó el caso durante meses."],
      collocations: ["investigar un tema", "investigar un caso"],
    },
  },
  {
    word: "madrugar", definition: "to get up early", category: "Daily Life",
    example: "Mañana tengo que madrugar para coger el tren.",
    usage: {
      note: "To get up early (one word!). Noun: madrugada = the small hours; madrugador = early riser. Proverb: 'a quien madruga, Dios le ayuda'.",
      examples: ["Madrugó para no perder el vuelo."],
      collocations: ["tener que madrugar", "madrugar mucho"],
    },
  },
  {
    word: "regalar", definition: "to give as a gift", category: "Daily Life",
    example: "Le quiero regalar un libro por su cumpleaños.",
    synonyms: ["obsequiar"],
    usage: {
      note: "To give as a gift (not for money); noun: regalo. Also 'regalar' = to give away cheaply. obsequiar is more formal.",
      examples: ["Me regalaron una bicicleta por mi cumpleaños."],
      collocations: ["regalar algo a alguien", "regalar flores"],
    },
  },
  {
    word: "disfrutar", definition: "to enjoy", category: "Emotions",
    example: "Espero que disfrutes mucho de las vacaciones.",
    synonyms: ["gozar"],
    usage: {
      grammar: "+ de (or direct object)",
      note: "To enjoy — 'disfrutar de algo' or 'disfrutar algo'. gozar is a close synonym. '¡Disfruta!' = enjoy!",
      examples: ["Disfrutamos mucho de la fiesta."],
      collocations: ["disfrutar de la vida", "disfrutar del momento"],
    },
  },
  {
    word: "olvidar", definition: "to forget", category: "Daily Life",
    example: "No quiero olvidar nunca este viaje.",
    usage: {
      note: "To forget; also reflexive 'olvidarse de' = to forget (about) — 'se me olvidó' = I forgot (accidental). Noun: olvido.",
      examples: ["Olvidé las llaves dentro del coche."],
      collocations: ["olvidar algo", "olvidarse de algo"],
    },
  },
  {
    word: "pertenecer", definition: "to belong", category: "Daily Life",
    example: "Este cuaderno pertenece a mi compañera.",
    usage: {
      grammar: "+ a; irregular: pertenezco",
      note: "To belong to (an owner, a group); 'pertenecer a'. More formal than 'ser de'. Noun: pertenencia; 'pertenencias' = belongings.",
      examples: ["Aquellas tierras pertenecieron a su familia."],
      collocations: ["pertenecer a un grupo", "pertenecer a alguien"],
    },
  },
];
