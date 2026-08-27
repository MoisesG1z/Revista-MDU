export interface Author {
  name: string;
  avatar: string;
  role: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  coverImage: string;
  viewsCount: number;
  isBreaking?: boolean;
  isTrending?: boolean;
  tags?: string[];
  quote?: string;
}

export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const CATEGORIES = [
  "Todas",
  "Técnicas de Estudio",
  "Finanzas Estudiantiles",
  "Salud Mental",
  "Tecnología",
  "Carrera y Futuro",
  "Vida Campus",
] as const;

export const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "tecnicas-estudio-alto-rendimiento-metodo-feynman",
    title: "Técnicas de Estudio de Alto Rendimiento: El Método Feynman y Active Recall para Aprobar Finales",
    excerpt: "Descubre cómo descomponer temas complejos en conceptos simples, retener el 90% de la información y dominar tus exámenes sin pasarte la noche en vela.",
    category: "Técnicas de Estudio",
    author: {
      name: "Dra. Sofía Valenzuela",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
      role: "Investigadora en Ciencias Cognitivas & Docente MDU",
    },
    date: "26 de Agosto, 2026",
    readTime: "6 min de lectura",
    coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
    viewsCount: 18450,
    isBreaking: true,
    isTrending: true,
    tags: ["Estudio", "Productividad", "Exámenes", "Feynman"],
    quote: "Si no puedes explicárselo a un niño de 10 años de forma sencilla, significa que realmente no has comprendido el concepto.",
    content: `
<p class="lead text-xl text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed mb-6">
El periodo de exámenes finales suele convertirse en una maratón de privación de sueño, atracones de café y memorización mecánica de última hora. Sin embargo, la neurociencia del aprendizaje ha demostrado reiteradamente que la repetición pasiva —releer apuntes o subrayar textos en fosforescente— es la forma más ineficiente de estudiar.
</p>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">1. El Principio de la Evocación Activa (Active Recall)</h2>
<p class="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
En lugar de forzar a tu cerebro a recibir información (lectura pasiva), el <strong>Active Recall</strong> te obliga a recuperar información activamente desde tu memoria a largo plazo. Al responder preguntas sin mirar las notas, fortaleces las conexiones neuronales de forma exponencial.
</p>

<div class="my-8 p-6 bg-red-50 dark:bg-red-950/40 border-l-4 border-red-600 rounded-r-xl shadow-sm">
  <p class="text-red-900 dark:text-red-200 font-serif italic text-lg leading-relaxed">
    "La memoria no se construye cuando lees la información por primera vez, sino en el microsegundo exacto en el que te esfuerzas por recordarla sin ayuda."
  </p>
  <span class="block mt-2 text-sm font-semibold text-red-700 dark:text-red-400">— Manual del Universitario, Edición Cognitiva</span>
</div>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">2. Los 4 Pasos del Método Feynman</h2>
<p class="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
El físico ganador del Premio Nobel Richard Feynman era famoso por su capacidad para explicar conceptos de física cuántica a cualquier persona. Su método se resume en cuatro sencillos pasos:
</p>

<ul class="list-disc pl-6 space-y-3 text-neutral-800 dark:text-neutral-200 mb-6">
  <li><strong class="text-red-600 dark:text-red-400">Selecciona el tema:</strong> Escribe el título del tema en una hoja en blanco.</li>
  <li><strong class="text-red-600 dark:text-red-400">Explícalo a un principiante:</strong> Desarrolla la lección usando un lenguaje tan llano que un estudiante de primaria pueda entenderlo sin tecnicismos.</li>
  <li><strong class="text-red-600 dark:text-red-400">Identifica las lagunas:</strong> Cada vez que te trabes o recurras a jerga académica vacía, regresa al texto original y repasa.</li>
  <li><strong class="text-red-600 dark:text-red-400">Simplifica y conecta analogías:</strong> Refina tu explicación utilizando metáforas del mundo real.</li>
</ul>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">3. Repetición Espaciada (Spaced Repetition)</h2>
<p class="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
Combina el método Feynman con aplicaciones como Anki o RemNote para programar repasos justo en el momento en que tu curva del olvido empieza a decaer. Estudiar 25 minutos al día durante 5 días supera con creces una maratón angustiosa de 10 horas seguidas el día previo al examen.
</p>
    `,
  },
  {
    id: "2",
    slug: "finanzas-estudiantiles-presupuesto-universitario-2026",
    title: "Finanzas Estudiantiles: Cómo Gestionar Tu Primer Presupuesto Universitario y Ahorrar en 2026",
    excerpt: "Aprende la regla 50/30/20 adaptada a la vida universitaria, evita deudas absurdas de tarjetas y automatiza tus ahorros sin sacrificar tu vida social.",
    category: "Finanzas Estudiantiles",
    author: {
      name: "Mateo Benítez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
      role: "Analista Financiero & Egresado MDU",
    },
    date: "25 de Agosto, 2026",
    readTime: "5 min de lectura",
    coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    viewsCount: 14200,
    isBreaking: false,
    isTrending: true,
    tags: ["Finanzas", "Ahorro", "Presupuesto", "Independencia"],
    quote: "El control financiero en la universidad no se trata de privación, sino de asignación estratégica e intencional de tus recursos.",
    content: `
<p class="lead text-xl text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed mb-6">
Llegar a la universidad significa asumir un nuevo nivel de independencia, pero también enfrentarse al desafío de administrar un presupuesto ajustado. La falta de control en los pequeños gastos diarios —los famosísimos "gastos hormiga"— suele devorar el dinero del mes antes de tiempo.
</p>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">La Regla 50/30/20 Adaptada al Estudiante</h2>
<p class="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
Dividir tus ingresos mensuales (becas, mesadas o empleo a tiempo parcial) te brindará claridad instantánea:
</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div class="p-5 bg-neutral-100 dark:bg-neutral-800 rounded-xl border-t-4 border-red-600">
    <span class="text-2xl font-bold text-red-600 dark:text-red-500 block mb-1">50% Necesidades</span>
    <p class="text-sm text-neutral-700 dark:text-neutral-300">Alquiler, alimentación básica, transporte universitario y materiales indispensables.</p>
  </div>
  <div class="p-5 bg-neutral-100 dark:bg-neutral-800 rounded-xl border-t-4 border-neutral-700 dark:border-neutral-500">
    <span class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 block mb-1">30% Estilo de Vida</span>
    <p class="text-sm text-neutral-700 dark:text-neutral-300">Salidas con amigos, plataformas de streaming, eventos en el campus y hobbies.</p>
  </div>
  <div class="p-5 bg-neutral-100 dark:bg-neutral-800 rounded-xl border-t-4 border-emerald-600">
    <span class="text-2xl font-bold text-emerald-600 dark:text-emerald-500 block mb-1">20% Fondo de Reserva</span>
    <p class="text-sm text-neutral-700 dark:text-neutral-300">Fondo de emergencia para imprevistos médicos, reparaciones o inversión personal.</p>
  </div>
</div>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">Hacks Prácticos para Reducir Costos</h2>
<ul class="list-disc pl-6 space-y-3 text-neutral-800 dark:text-neutral-200 mb-6">
  <li><strong>Descuentos Estudiantiles:</strong> Utiliza siempre tu correo institucional (.edu) para licencias de software, Spotify, transporte público y entradas culturales.</li>
  <li><strong>Libros Digitales y Biblioteca:</strong> No compres libros de texto en formato físico el primer día. Explora la biblioteca de la universidad o recursos en abierto.</li>
  <li><strong>Meal Prep inteligente:</strong> Cocinar en lote el domingo te ahorrará hasta un 60% respecto a comer fuera entre clases.</li>
</ul>
    `,
  },
  {
    id: "3",
    slug: "salud-mental-cero-burnout-habitos-equilibrio-estudiantil",
    title: "Salud Mental y Cero Burnout: 7 Hábitos Validados para Mantener el Equilibrio en Semestre Crítico",
    excerpt: "La presión académica no debe costar tu bienestar. Estrategias psicológicas respaldadas para gestionar la ansiedad, fijar límites y dormir de verdad.",
    category: "Salud Mental",
    author: {
      name: "Lic. Camilo Rivas",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
      role: "Psicólogo Organizacional & Consultor Wellness",
    },
    date: "24 de Agosto, 2026",
    readTime: "7 min de lectura",
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
    viewsCount: 21900,
    isBreaking: false,
    isTrending: true,
    tags: ["SaludMental", "Bienestar", "Ansiedad", "Hábitos"],
    quote: "Tu salud mental vale más que cualquier promedio ponderado. Un cerebro fatigado no procesa información con lucidez.",
    content: `
<p class="lead text-xl text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed mb-6">
El síndrome de burnout universitario es una epidemia silenciosa. La combinación de exigencia académica, jornadas maratónicas y la comparación constante en redes sociales genera picos de cortisol insostenibles a largo plazo.
</p>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">1. La Regla del Apagado Digital Nocturno</h2>
<p class="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
Desconectar pantallas 45 minutos antes de dormir estimula la liberación de melatonina natural. La luz azul de notebooks y smartphones mantiene a tu cerebro en estado de alerta alfa, arruinando la fase de sueño profundo REM esencial para la consolidación de la memoria.
</p>

<div class="my-8 p-6 bg-red-900 text-white rounded-2xl shadow-lg relative overflow-hidden">
  <div class="absolute right-0 top-0 w-32 h-32 bg-red-600 rounded-full blur-2xl opacity-50"></div>
  <h3 class="text-xl font-bold mb-2">Señales de Alerta de Burnout Estudiantil:</h3>
  <ul class="space-y-2 text-red-100 text-sm">
    <li>• Agotamiento físico que no desaparece al dormir 8 horas.</li>
    <li>• Cinetismo o cinismo repentino hacia materias que antes disfrutabas.</li>
    <li>• Dificultad para mantener la concentración por más de 5 minutos.</li>
    <li>• Irritabilidad persistente o dolores de cabeza tensionales recurrentes.</li>
  </ul>
</div>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">2. Micropausas y Respiración Box (4x4)</h2>
<p class="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
Cuando sientas un pico de ansiedad antes de una exposición o examen, realiza 4 ciclos de respiración cuadrada: inhala en 4 segundos, mantén el aire 4 segundos, exhala en 4 segundos y mantén vacío 4 segundos. Esto activa el sistema nervioso parasimpático bajando el ritmo cardíaco en minutos.
</p>
    `,
  },
  {
    id: "4",
    slug: "herramientas-ia-investigacion-universitaria-2026",
    title: "Herramientas de Inteligencia Artificial para Investigar en 2026: Más Allá de ChatGPT",
    excerpt: "Potencia tus papers y proyectos académicos con IA especializada: análisis de literatura científica, síntesis de papers en PDF y generadores de citas rigurosas.",
    category: "Tecnología",
    author: {
      name: "Ing. Elena Morales",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250",
      role: "Directora del Laboratorio de Tech MDU",
    },
    date: "23 de Agosto, 2026",
    readTime: "8 min de lectura",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    viewsCount: 29400,
    isBreaking: true,
    isTrending: false,
    tags: ["IA", "Tecnología", "Investigación", "Herramientas"],
    quote: "La IA no reemplaza al investigador ético; potencia su velocidad de lectura sintética para enfocarse en la reflexión crítica.",
    content: `
<p class="lead text-xl text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed mb-6">
La inteligencia artificial ha madurado radicalmente de ser un mero chatbot conversacional a convertirse en una suite completa de asistentes científicos rigurosos. Aprender a utilizarlas con criterio ético te ahorrará decenas de horas en revisiones bibliográficas.
</p>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">Stack Esencial para la Investigación Académica</h2>
<div class="space-y-4 my-6">
  <div class="p-5 bg-neutral-100 dark:bg-neutral-800 rounded-xl border-l-4 border-red-600">
    <h3 class="font-bold text-lg text-neutral-900 dark:text-neutral-100">1. Elicit & Consensus</h3>
    <p class="text-neutral-700 dark:text-neutral-300 text-sm mt-1">Buscadores científicos impulsados por IA que analizan más de 200 millones de papers indexados, extrayendo metodologías, muestras y conclusiones con citas directas.</p>
  </div>
  <div class="p-5 bg-neutral-100 dark:bg-neutral-800 rounded-xl border-l-4 border-red-600">
    <h3 class="font-bold text-lg text-neutral-900 dark:text-neutral-100">2. SciSpace / ChatPDF</h3>
    <p class="text-neutral-700 dark:text-neutral-300 text-sm mt-1">Sube publicaciones densas en PDF y realiza preguntas específicas sobre sus tablas de resultados o expresiones matemáticas complejas.</p>
  </div>
  <div class="p-5 bg-neutral-100 dark:bg-neutral-800 rounded-xl border-l-4 border-red-600">
    <h3 class="font-bold text-lg text-neutral-900 dark:text-neutral-100">3. Zotero + Plugins IA</h3>
    <p class="text-neutral-700 dark:text-neutral-300 text-sm mt-1">Organización inteligente de referencias bibliográficas automatizando el formato APA 7, IEEE o Vancouver al instante.</p>
  </div>
</div>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">Ética e Integridad Académica</h2>
<p class="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
Utilizar IA para estructurar ideas, corregir estilo o buscar fuentes es excelente. Copiar directamente párrafos generados sin contrastar las fuentes originales incurre en alucinaciones y plagio involuntario. Siempre verifica la fuente primaria antes de citar un dato en tu tesis.
</p>
    `,
  },
  {
    id: "5",
    slug: "networking-efectivo-universidad-pasantias",
    title: "Networking Efectivo en la Universidad: Cómo Conseguir Tu Primera Pasantía Antes de Graduarte",
    excerpt: "Construye una red profesional auténtica desde el primer año. Estrategias para conectar con egresados, pulir tu LinkedIn y destacar en ferias laborales.",
    category: "Carrera y Futuro",
    author: {
      name: "Lic. Valeria Torres",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
      role: "Career Coach & Mentora Universitaria",
    },
    date: "22 de Agosto, 2026",
    readTime: "5 min de lectura",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    viewsCount: 11300,
    isBreaking: false,
    isTrending: false,
    tags: ["Networking", "Carrera", "Pasantías", "LinkedIn"],
    quote: "Tu promedio te abre la puerta a la entrevista, pero tus conexiones y tus habilidades blandas son las que te aseguran el puesto.",
    content: `
<p class="lead text-xl text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed mb-6">
El mercado laboral actual premia las relaciones profesionales genuinas por encima del currículum tradicional enviado en frío a portales masivos. La universidad es la incubadora perfecta para forjar estos vínculos.
</p>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">El Poder de la Entrevista Informativa</h2>
<p class="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
No contactes a profesionales pidiendo un trabajo de inmediato. En su lugar, envía un mensaje breve solicitando 15 minutos para una "entrevista informativa":
</p>

<div class="my-6 p-6 bg-neutral-900 text-neutral-100 rounded-xl font-mono text-sm border border-neutral-800">
  <p class="text-red-400 mb-2">// Asunto: Consulta breve sobre [Industria] de un estudiante de [Carrera]</p>
  <p>"Hola [Nombre], soy estudiante de 3er año en [Universidad]. He seguido tu trayectoria en [Empresa] y me fascina tu trabajo en [Proyecto/Área]. Me encantaría hacerte 3 preguntas rápidas sobre cómo fue tu transición del aula a la industria. ¿Tendrías 10 minutos para un café virtual esta semana?"</p>
</div>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">Proyectos Personales vs. Promedio</h2>
<p class="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
Crea un portafolio visible (sitio web, GitHub, canal de contenidos o publicaciones en LinkedIn) donde documentes proyectos prácticos reales. Demostrar lo que puedes construir vale más que cualquier certificado sin evidencia tangible.
</p>
    `,
  },
  {
    id: "6",
    slug: "guia-sobrevivencia-campus-nutricion-notas",
    title: "La Guía Definitiva de Sobrevivencia en el Campus: De Nutrición Rápida a Automatizar Tus Notas",
    excerpt: "Pequeños cambios logísticos que transforman tu rutina diaria: recetas saludables en 10 minutos, apps de organización y cómo aprovechar cada hora libre.",
    category: "Vida Campus",
    author: {
      name: "Tomás Alarcón",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
      role: "Editor de Estilo de Vida MDU",
    },
    date: "20 de Agosto, 2026",
    readTime: "4 min de lectura",
    coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
    viewsCount: 9800,
    isBreaking: false,
    isTrending: false,
    tags: ["Campus", "Nutrición", "Organización", "Estudiantes"],
    quote: "Optimizar tu logística diaria te libera entre 5 y 8 horas semanales para dedicarlas a lo que realmente te apasiona.",
    content: `
<p class="lead text-xl text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed mb-6">
La vida universitaria puede sentirse abrumadora cuando intentas malabarear clases, tareas, traslados y nutrición. Estos hacks logísticos te ayudarán a recuperar el control de tu día a día.
</p>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">1. La Regla del "Espacio Muerto"</h2>
<p class="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
Aprovecha las horas huecas entre clases para avanzar en lecturas breves, responder correos o repasar tarjetas de estudio. Evita perder esas 2 horas vagando en redes sociales para llegar a casa con la tarde completamente despejada.
</p>

<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-4">2. Alimentación de Alto Rendimiento para el Cerebro</h2>
<p class="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
Sustituye la comida chatarra hiperprocesada por snacks ricos en omega-3 y grasas saludables (nueces, frutos secos, chocolate negro >70%, frutas frescas). Evitarás los picos de glucosa que provocan la clásica somnolencia post-almuerzo en medio de la clase magistral.
</p>
    `,
  },
];
