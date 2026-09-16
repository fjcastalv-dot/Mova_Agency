import { ServiceItem, MethodologyStep, ValueItem, ProjectItem } from '../types';

export const MOVA_BRAND_BOOK = {
  tagline: 'ESTRATEGIAS QUE MUEVEN MARCAS',
  introduction: {
    title: 'Introducción',
    paragraph1: 'En MOVA creemos que una marca no solo debe verse bien, debe transmitir confianza, conectar con las personas y generar resultados.',
    paragraph2: 'Somos una agencia creativa y digital especializada en desarrollar estrategias visuales que fortalecen la identidad de negocios, emprendedores y empresas.',
    paragraph3: 'Cada fotografía, video, diseño o estrategia tiene un propósito: impulsar el crecimiento de las marcas.'
  },
  history: {
    title: 'Nuestra Historia',
    paragraph1: 'MOVA nace de la pasión por crear. Después de colaborar en proyectos de fotografía, video, branding y marketing digital para diferentes empresas, surgió la necesidad de reunir todos estos servicios bajo una misma visión.',
    paragraph2: 'Hoy ayudamos a negocios y emprendedores a comunicar su esencia mediante contenido visual y estrategias creativas que generan confianza y crecimiento.'
  },
  mission: 'Ayudar a empresas y emprendedores a fortalecer su imagen mediante soluciones creativas, contenido visual y estrategias digitales que generen confianza y resultados.',
  vision: 'Ser una agencia creativa referente por la calidad de nuestro trabajo, la innovación de nuestras soluciones y el impacto positivo que generamos en cada proyecto.',
  values: [
    { title: 'Creatividad', icon: 'lightbulb', description: 'Soluciones originales y expresivas para cada desafío.' },
    { title: 'Profesionalismo', icon: 'verified_user', description: 'Rigor y compromiso en la ejecución de cada proyecto.' },
    { title: 'Innovación', icon: 'bolt', description: 'Soluciones actualizadas ante la evolución digital.' },
    { title: 'Cercanía', icon: 'groups', description: 'Acompañamiento constante y comunicación directa.' },
    { title: 'Calidad', icon: 'workspace_premium', description: 'Estándares superiores en cada pieza producida.' },
    { title: 'Pasión', icon: 'favorite', description: 'Entusiasmo y dedicación en cada entrega.' }
  ],
  essence: {
    headline: 'NUESTRA ESENCIA',
    part1: 'NO CREAMOS CONTENIDO PARA LLENAR REDES SOCIALES.',
    part2: 'CREAMOS CONTENIDO QUE CONECTA, INSPIRA Y HACE CRECER MARCAS.'
  },
  contact: {
    email: 'contacto@movacreative.mx',
    website: 'movacreative.mx',
    phone: '+52 998 240 1868',
    locations: 'Cancún | Cdmx | Playa del Carmen',
    tagline: 'Hablemos de tu próximo proyecto.'
  }
};

export const MOVA_SERVICES: ServiceItem[] = [
  {
    id: 'fotografia',
    title: 'Fotografía comercial y corporativa',
    subtitle: 'Dirección Editorial & Retrato Corporativo',
    description: 'Narrativa visual de alta gama para productos, espacios arquitectónicos y equipos corporativos.',
    icon: 'photo_camera',
    category: 'Producción Visual',
    gridSpan: 'col-span-12 md:col-span-7',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABXcPrOUq6di-q93So3n5dW0D5FXjmxkmY63k2RzhenlTiVJw0FkdzpYmg3uZTVWxZckqgo4rBqEIYUejGo87n_FMlcKCQetNcRDjs_UKZW2HqWZwiaPg_cYYFWElIzkUm4fslwjhfpMf_24yKlF8DD7-bZP7f1vAwOAKqbRfhRnOeNxwR1Anm2clY8cPj4QZvRl5Mw8_EP2pehU9MDHBZ__03FNDQ-bw2r8_0LVXKYxXN53lxQF6x',
    tags: ['Comercial', 'Corporativa', 'Editorial', 'Lookbook']
  },
  {
    id: 'video',
    title: 'Producción y edición de video',
    subtitle: 'Film & Edición Cinematográfica',
    description: 'Producción audiovisual y edición cinematográfica optimizada para formatos digitales y comerciales.',
    icon: 'videocam',
    category: 'Producción Audiovisual',
    gridSpan: 'col-span-12 md:col-span-5',
    isDark: true,
    tags: ['Reels / Shorts', 'Edición 4K', 'Comerciales', 'Color Grading']
  },
  {
    id: 'dron',
    title: 'Fotografía y video con dron',
    subtitle: 'Tomas Aéreas Profesionales',
    description: 'Perspectivas 4K aéreas con pilotos certificados para proyectos inmobiliarios, corporativos y comerciales.',
    icon: 'air',
    category: 'Producción Visual',
    gridSpan: 'col-span-12 md:col-span-4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkVW-1hJJqDt7IbiZNOBvIFfT7yo70Pj8vcMjZnZThkmb6cF9mdeNcZ_ApYLut4W4h9sTZt3ztvFEFyu11Y_AWpj1UF7d3vdHJDwYLnYurgWHM85GhuwKRPmFbYgszCu876CLWouMSQnFQCqL7S5_9xZQ1tj3P9z2TWGw4xnuEL_NIlnnpZbrXpwmT8--leh7dUsUW0TdJk5ue4XTNpKbaEbogfZ4BbHKlF9DVwkd-5pyic5vjG105',
    tags: ['Drone 4K', 'Fotografía Aérea', 'Video Aéreo']
  },
  {
    id: 'redes-sociales',
    title: 'Gestión de redes sociales',
    subtitle: 'Social Media Management & Contenido',
    description: 'Estrategias integrales de contenido orgánico, dinamización de comunidad y planificación editorial.',
    icon: 'share',
    category: 'Estrategia Digital',
    gridSpan: 'col-span-12 md:col-span-4',
    tags: ['Gestión', 'Contenido', 'Comunidad', 'Analítica']
  },
  {
    id: 'branding',
    title: 'Branding e identidad de marca',
    subtitle: 'Sistemas de Diseño & Estrategia de Marca',
    description: 'Creación y renovación de sistemas de identidad visual, manuales de marca y estrategia de posicionamiento.',
    icon: 'palette',
    category: 'Diseño Estratégico',
    gridSpan: 'col-span-12 md:col-span-4',
    tags: ['Brand Book', 'Identidad Visual', 'Logotipos', 'Packaging']
  },
  {
    id: 'web',
    title: 'Diseño y desarrollo de páginas web',
    subtitle: 'Interfaces & Frontend de Alto Rendimiento',
    description: 'Desarrollo de sitios web a medida, optimizados para velocidad, experiencia de usuario (UI/UX) y conversión.',
    icon: 'devices',
    category: 'Desarrollo Web',
    gridSpan: 'col-span-12 md:col-span-8',
    tags: ['UI/UX', 'React', 'Tailwind CSS', 'Responsive', 'SEO']
  },
  {
    id: 'publicidad-digital',
    title: 'Publicidad digital',
    subtitle: 'Paid Media & Campañas High-ROI',
    description: 'Gestión y optimización de campañas de publicidad digital en Google Ads, Meta Ads y plataformas clave.',
    icon: 'ads_click',
    category: 'Marketing Digital',
    gridSpan: 'col-span-12 md:col-span-4',
    isTerracotta: true,
    tags: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Retargeting']
  }
];

export const MOVA_VALUES: ValueItem[] = [
  {
    icon: 'lightbulb',
    title: 'CREATIVIDAD',
    description: 'Soluciones originales y estratégicas que destacan la personalidad de cada marca.'
  },
  {
    icon: 'verified_user',
    title: 'PROFESIONALISMO',
    description: 'Rigor, puntualidad y estándares de excelencia en cada entrega.'
  },
  {
    icon: 'bolt',
    title: 'INNOVACIÓN',
    description: 'Soluciones a la vanguardia de las tendencias digitales y producción audiovisual.'
  },
  {
    icon: 'groups',
    title: 'CERCANÍA',
    description: 'Trabajo codo a codo con negocios y emprendedores para entender su esencia.'
  },
  {
    icon: 'workspace_premium',
    title: 'CALIDAD',
    description: 'Atención a cada detalle en fotografía, video, diseño y estrategia.'
  },
  {
    icon: 'favorite',
    title: 'PASIÓN',
    description: 'Entusiasmo genuino por crear y ver crecer los proyectos de nuestros clientes.'
  }
];

export const MOVA_METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    title: 'Descubrimos',
    description: 'Conocemos tu marca, objetivos y público.',
    icon: 'explore',
    tag: 'Fase 01',
    details: [
      'Entrevistas con stakeholders',
      'Análisis de la marca y competidores',
      'Identificación del público objetivo'
    ]
  },
  {
    number: '02',
    title: 'Planeamos',
    description: 'Definimos la estrategia visual y conceptual del proyecto.',
    icon: 'architecture',
    tag: 'Fase 02',
    details: [
      'Estrategia de comunicación',
      'Planificación de producción y entregables',
      'Arquitectura de marca y conceptos visuales'
    ]
  },
  {
    number: '03',
    title: 'Creamos',
    description: 'Desarrollamos contenido visual con altos estándares de calidad.',
    icon: 'draw',
    tag: 'Fase 03',
    details: [
      'Producción fotográfica y de video',
      'Diseño de identidad y páginas web',
      'Creación de contenido estratégico'
    ]
  },
  {
    number: '04',
    title: 'Optimizamos',
    description: 'Revisamos cada detalle antes de entregar.',
    icon: 'tune',
    tag: 'Fase 04',
    details: [
      'Edición y postproducción fina',
      'Control de calidad técnico y estético',
      'Ajustes de rendimiento y formato'
    ]
  },
  {
    number: '05',
    title: 'Impulsamos',
    description: 'Entregamos herramientas que ayudan a fortalecer tu marca y generar resultados.',
    icon: 'rocket_launch',
    tag: 'Fase 05',
    details: [
      'Entrega oficial de assets y herramientas',
      'Lanzamiento e implementación de campaña',
      'Seguimiento y fortalecimiento de marca'
    ]
  }
];

export const MOVA_PROJECTS: ProjectItem[] = [
  {
    id: 'kroma-architecture',
    title: 'KROMA Spaces',
    category: 'Arquitectura & Fotografía Editorial',
    client: 'Kroma Studio',
    year: '2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP9RYefEZs-f-g3FTHMTOwzRKxtG_oThhbdNxzNog8XgvetufQkkxJOL8vdrqhIHGHMBK-vxu1UIH_lH4Eb6KnLtmsQqd8dHcJMcU8oyHuXC3ze7zFjV2ob3QXbEhf9arFylNfQrok3iTLzHuTG33GdMm_ckxhexem8UQ24ZrUk4PrZ3Tkqw4dEWiRuNbLG-XFPgHRB_oTJKJyNUYDrJXu1GyhAkYvORGypp8eIKkDYuBsworoPJG1',
    description: 'Fotografía comercial y dirección de arte para estudio de arquitectura minimalista.',
    tags: ['Fotografía', 'Identidad Visual', 'Editorial']
  },
  {
    id: 'aura-fluid',
    title: 'AURA Digital',
    category: 'Branding & Experiencia Web',
    client: 'Aura Systems',
    year: '2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwOExBpsOVuCszJel2CaMWkXDY_933ve9KMIujq6MFNj3ookMLsM0MyaORXqGpDHhxL1iOEDFFEES5e5M2GprNY3n1nCcRVSgGQtqzNZuLcUp5Gf2zQlCN3H3jaxMLdFQyfINeEU4q471hEq7gU-xRuLyV4biICeK2d6qzA9UlHqapL80B4PGjpvo6INef_nHBAgigsaV7Plutw7GKnQDoljDS6pv5Q7TRuq5AFR76SZpZc4L7LLXv',
    description: 'Sistema de diseño fluido e identidad sonora interactiva.',
    tags: ['Web Experience', '3D Motion', 'Branding']
  },
  {
    id: 'solstice-aerial',
    title: 'Solstice Coast',
    category: 'Producción de Video & Drone',
    client: 'Solstice Luxury Resorts',
    year: '2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkVW-1hJJqDt7IbiZNOBvIFfT7yo70Pj8vcMjZnZThkmb6cF9mdeNcZ_ApYLut4W4h9sTZt3ztvFEFyu11Y_AWpj1UF7d3vdHJDwYLnYurgWHM85GhuwKRPmFbYgszCu876CLWouMSQnFQCqL7S5_9xZQ1tj3P9z2TWGw4xnuEL_NIlnnpZbrXpwmT8--leh7dUsUW0TdJk5ue4XTNpKbaEbogfZ4BbHKlF9DVwkd-5pyic5vjG105',
    description: 'Campaña audiovisual con tomas cinematográficas aéreas en 4K.',
    tags: ['Video', 'Vistas Aéreas', 'Paid Media']
  },
  {
    id: 'lumiere-brand',
    title: 'Lumière Atelier',
    category: 'Identidad Visual & Ecommerce',
    client: 'Lumière Paris',
    year: '2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKEPxhcGgk7LxiiVqRqqvNybP-HOkn7hre2BX1NNvcz3oS3FQfsLqKGmZ4rdIohoIs0YtU2AnHdTua8i37k5tohyGSRvsmOLIbpXzg3oyw-7SGLZeuRM33i38QSQktzO4hj_U_3kMJo614yHIqrCGn6a3DdYHnmHtTsBsXcx-meTy5jP9VdbO2J0DtJusm6ks4EnFGSW53BGPIeuHPGJr92zflnJpsFs6t8Jpoqe1fusk9ZaK_t3Ia',
    description: 'Estrategia de marca integral y packaging sostenible.',
    tags: ['Identidad Visual', 'Packaging', 'Social Media']
  }
];
