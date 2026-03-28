/**
 * Configuración central del sitio. Importa `siteContent` y `siteMetadata` en los componentes.
 * ACTUALIZA TU INFO AQUÍ — cambia textos y enlaces solo en este archivo.
 */

export const siteContent = {
  brandName: "KTU.CORP",
  personalName: "Juan",

  objective:
    "Servicios de tecnologías de inteligencia artificial para acelerar procesos, mejorar la experiencia del cliente y generar ventaja competitiva medible.",
  audience:
    "negocios locales e internacionales que buscan adoptar IA con claridad, acompañamiento y resultados concretos.",

  primaryCta: "Hablemos por WhatsApp",
  secondaryCta: "Ver servicios",

  nav: {
    about: "Acerca de",
    services: "Servicios",
    process: "Proceso",
    portfolio: "Portafolio",
    testimonials: "Clientes",
    faq: "FAQ",
    contact: "Contacto",
  },

  anchors: {
    about: "acerca",
    services: "servicios",
    process: "proceso",
    portfolio: "portafolio",
    testimonials: "testimonios",
    faq: "preguntas",
    cta: "siguiente-paso",
    contact: "contacto",
  },

  links: {
    email: "djdakrosmix95@gmail.com",
    emailHref: "mailto:djdakrosmix95@gmail.com",
    whatsappDisplay: "0981374275",
    whatsappHref: "https://wa.me/593981374275",
    instagramLabel: "Instagram",
    instagramHref: "https://www.instagram.com/pato_JC/",
  },

  hero: {
    eyebrow: "KTU.CORP · IA aplicada al negocio",
    titleBefore: "Menos ruido. Más ",
    titleHighlight: "impacto medible",
    titleAfter: " con IA.",
    subtitle:
      "Te ayudo a elegir qué automatizar primero, implementarlo sin fricción y medir si realmente te ahorra tiempo o vende más.",
    imageAlt:
      "Equipo revisando datos y prioridades en una mesa de trabajo, luz natural.",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=85",
  },

  about: {
    sectionLabel: "Acerca de",
    heading: "De la idea a la operación, sin perder el norte",
    lead:
      "Soy Juan. Acompaño a equipos que ya probaron herramientas sueltas y quieren orden: prioridades claras, entregables útiles y comunicación directa.",
    body:
      "Combino criterio de producto con ejecución técnica. No vendo promesas vacías: trabajamos por hitos, con métricas que importan a ventas, soporte o back office.",
    statLine: "Ecuador y proyectos remotos · respuesta en horario laboral",
  },

  process: {
    sectionLabel: "Cómo funciona",
    heading: "Un proceso claro, de principio a fin",
    intro:
      "Tres fases para reducir riesgo: entender, construir, afinar. En cada una sabes qué recibes y qué sigue.",
    steps: [
      {
        id: "discover",
        title: "Diagnóstico y priorización",
        description:
          "Sesión enfocada en tu operación: dónde duele, qué datos tienes y qué resultado buscas en 30–60 días. Sales con un plan priorizado, no con una lista infinita.",
      },
      {
        id: "build",
        title: "Implementación guiada",
        description:
          "Construimos el flujo o integración acordada, con entregables revisables en corto plazo. Menos sorpresas: checkpoints y documentación mínima para que tu equipo no dependa de mí para siempre.",
      },
      {
        id: "refine",
        title: "Medición y mejora",
        description:
          "Ajustamos según uso real: tiempos ahorrados, calidad de respuesta o conversión. Si no mejora un indicador acordado, replanteamos el alcance antes de escalar.",
      },
    ],
  },

  services: {
    sectionLabel: "Servicios",
    heading: "Qué puedo hacer por tu negocio",
    intro:
      "Todo gira en torno a un objetivo de negocio: tiempo, coste o ingresos. Elige un punto de entrada; el resto lo ordenamos juntos.",
    items: [
      {
        id: "strategy",
        icon: "Brain" as const,
        title: "Estrategia y casos de uso",
        description:
          "Identificamos dónde la IA compensa el esfuerzo: procesos, datos y riesgos. Entregas un roadmap con quick wins y apuestas de mayor impacto.",
      },
      {
        id: "implementation",
        icon: "Workflow" as const,
        title: "Implementación y automatización",
        description:
          "Flujos asistidos, integraciones y herramientas que quitan trabajo repetitivo. Prioridad en control, trazabilidad y que el equipo adopte sin fricción.",
      },
      {
        id: "international",
        icon: "Globe" as const,
        title: "Alcance local e internacional",
        description:
          "Procesos y comunicación listos para equipos en distintos husos. Español claro, documentación útil y entregas alineadas a tu calendario.",
      },
    ],
  },

  portfolio: {
    sectionLabel: "Portafolio",
    heading: "Ejemplos del tipo de trabajo que entrego",
    intro:
      "Proyectos representativos (nombres genéricos para ilustrar alcance). Sustituye por casos reales cuando puedas compartirlos.",
    items: [
      {
        id: "p1",
        title: "Asistente de primer contacto para retail",
        summary:
          "Respuestas coherentes en horario extendido, derivación a humano cuando hace falta y registro de motivos de consulta para marketing.",
        imageSrc:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Mostrador de tienda con cliente y asesor, ambiente luminoso.",
        tag: "Atención y datos",
      },
      {
        id: "p2",
        title: "Pipeline de documentos para operaciones",
        summary:
          "Clasificación y extracción de campos clave de PDFs y correos, con revisión humana solo en excepciones. Menos carga administrativa en back office.",
        imageSrc:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Documentos y laptop en escritorio de oficina.",
        tag: "Operaciones",
      },
      {
        id: "p3",
        title: "Panel de seguimiento para decisiones rápidas",
        summary:
          "Vista unificada de KPIs acordados, alertas cuando algo se desvía y contexto para reuniones semanales sin depender de hojas sueltas.",
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Pantalla con gráficos y análisis en oficina.",
        tag: "Visibilidad",
      },
    ],
  },

  testimonials: {
    sectionLabel: "Prueba social",
    heading: "Lo que valoran quienes ya trabajaron conmigo",
    intro: "Referencias reales sustituyen mejor cualquier slogan.",
    items: [
      {
        id: "t1",
        quote:
          "Pasamos de pruebas aisladas a un flujo que el equipo usa todos los días. Juan explicó trade-offs sin jerga y nos dio hitos claros.",
        name: "María Elena V.",
        role: "Directora de operaciones · servicios B2B",
      },
      {
        id: "t2",
        quote:
          "Necesitábamos orden antes de invertir más en herramientas. El diagnóstico nos ahorró semanas de pruebas en la dirección equivocada.",
        name: "Andrés M.",
        role: "Fundador · ecommerce regional",
      },
    ],
  },

  faq: {
    sectionLabel: "FAQ",
    heading: "Preguntas frecuentes",
    intro: "Respuestas directas. Si no ves tu caso, escríbeme.",
    items: [
      {
        id: "f1",
        question: "¿Trabajas solo con empresas grandes?",
        answer:
          "No. Lo importante es tener un problema acotado y disposición para medir resultados. He acompañado desde equipos pequeños hasta áreas dentro de organizaciones mayores.",
      },
      {
        id: "f2",
        question: "¿Necesito ya tener un proveedor de IA o software?",
        answer:
          "No es obligatorio. Partimos de tu proceso y presupuesto; puedo proponer opciones o integrarme con lo que ya usan. La decisión es siempre tuya, con trade-offs explícitos.",
      },
      {
        id: "f3",
        question: "¿Cómo se define el precio?",
        answer:
          "Por alcance e hitos: un diagnóstico cerrado, un piloto con entregables o acompañamiento por sprint. Tras la primera conversación te envío una propuesta con entregables y fechas.",
      },
      {
        id: "f4",
        question: "¿Ofreces soporte después del lanzamiento?",
        answer:
          "Sí. Puedes contratar bloques de horas o un retainer ligero para ajustes, formación breve al equipo y revisión de métricas. No dejo proyectos “colgados” sin plan de cierre.",
      },
    ],
  },

  cta: {
    heading: "¿Tienes un proceso que te está comiendo el día?",
    sub: "Cuéntame en dos líneas qué quieres lograr. Te respondo con un siguiente paso concreto, sin compromiso.",
    button: "Escribir por WhatsApp",
    secondaryLinkLabel: "Ver preguntas frecuentes",
  },

  contact: {
    sectionLabel: "Contacto",
    heading: "Hablemos de tu proyecto",
    intro:
      "Elige el canal que te resulte más cómodo. Si es urgente, prioriza WhatsApp; para briefs con adjuntos, correo.",
    methods: [
      {
        id: "wa",
        label: "WhatsApp",
        value: "0981374275",
        href: "https://wa.me/593981374275",
        external: true,
      },
      {
        id: "mail",
        label: "Correo",
        value: "djdakrosmix95@gmail.com",
        href: "mailto:djdakrosmix95@gmail.com",
        external: false,
      },
      {
        id: "ig",
        label: "Instagram",
        value: "@pato_JC",
        href: "https://www.instagram.com/pato_JC/",
        external: true,
      },
    ],
  },

  footer: {
    rights: "Todos los derechos reservados.",
    note: "Estrategia e implementación de IA para equipos que buscan resultados medibles.",
    tagline: "IA con criterio de negocio.",
  },
} as const;

export const siteMetadata = {
  title: "KTU.CORP · IA para negocios",
  description:
    "Estrategia e implementación de inteligencia artificial para negocios en Ecuador y remotos. Proceso claro, entregables útiles y acompañamiento con Juan.",
} as const;

export type ServiceIconName =
  (typeof siteContent.services.items)[number]["icon"];
