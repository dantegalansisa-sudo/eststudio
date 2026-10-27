export const BRAND = 'Stephanie Romacho';
export const PHONE = '17874080851';
export const PHONE_LABEL = '787-408-0851';
export const EMAIL = 'fastudiopr@gmail.com';
export const LOCATION = 'Arecibo, Puerto Rico';
export const OLD_SITE = 'https://portfoliosrf.com';

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/stephanie-romacho-/',
  instagram: 'https://www.instagram.com/fastudiopr/',
  facebook: 'https://www.facebook.com/fastudiopr',
};

export const wa = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
export const WA_DEFAULT = wa('Hola Stephanie, vi tu portafolio y me gustaría conversar sobre un proyecto.');
export const MAILTO = (subject = 'Proyecto desde tu portafolio', body = '') =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;

export const NAV = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

export type ServiceKey = 'ideas' | 'brand' | 'identity';

export interface Service {
  key: ServiceKey;
  n: string;
  en: string;
  title: string;
  accent: string;
  lead: string;
  includes: string[];
  idealFor: string[];
  theme: 'ivory' | 'blush' | 'ink' | 'champagne' | 'wine';
}

export const SERVICES: Service[] = [
  {
    key: 'ideas',
    n: '01',
    en: 'Ideas & Projects',
    title: 'Desarrollo de',
    accent: 'ideas y proyectos',
    lead:
      'Ayudo a transformar ideas en proyectos estructurados mediante planificación estratégica, definición de objetivos y desarrollo de planes de acción.',
    includes: [
      'Estructuración de ideas de negocio',
      'Planificación de proyectos',
      'Definición de propuesta de valor',
      'Desarrollo de planes iniciales',
    ],
    idealFor: ['Emprendedores', 'Nuevos negocios', 'Organizaciones'],
    theme: 'ivory',
  },
  {
    key: 'brand',
    n: '02',
    en: 'Brand & Marketing',
    title: 'Estrategia de',
    accent: 'marca y marketing',
    lead:
      'Desarrollo estrategias que ayudan a marcas y proyectos a comunicar su propuesta de valor y conectar con su audiencia.',
    includes: [
      'Estrategia de comunicación',
      'Posicionamiento de marca',
      'Planificación de contenido',
      'Estrategias de marketing',
    ],
    idealFor: ['Marcas', 'Negocios locales', 'Instituciones'],
    theme: 'ink',
  },
  {
    key: 'identity',
    n: '03',
    en: 'Visual Identity',
    title: 'Identidad visual',
    accent: 'y comunicación',
    lead:
      'Diseño identidades visuales y materiales de comunicación que reflejen la esencia de cada proyecto, para que tu marca se reconozca a primera vista.',
    includes: ['Branding', 'Diseño gráfico', 'Contenido visual', 'Comunicación de marca'],
    idealFor: ['Marcas nuevas', 'Rediseños', 'Emprendedores'],
    theme: 'champagne',
  },
];

const canva = (id: string) => `https://www.canva.com/design/${id}/view`;

export const PROJECTS = [
  {
    n: '01',
    client: "Marullo's Café",
    sub: 'Rediseño de marca local',
    d: 'Desarrollo de identidad visual para negocio local incluyendo diseño de logotipo, elementos gráficos y materiales promocionales orientados a fortalecer la presencia de marca.',
    tags: ['Branding', 'Diseño Gráfico', 'Identidad Visual'],
    url: canva('DAGQYgnoGTM'),
    cover: 'cafe',
  },
  {
    n: '02',
    client: 'Jerry Whitez',
    sub: 'Estrategia de redes sociales',
    d: 'Planificación y desarrollo de estrategia de contenido para fortalecer la presencia digital de una marca y mejorar la interacción con su audiencia.',
    tags: ['Redes Sociales', 'Estrategia', 'Marketing Digital'],
    url: canva('DAGmPamk_SU'),
    cover: 'social',
  },
  {
    n: '03',
    client: 'Proyecto educativo',
    sub: 'Plataforma educativa digital',
    d: 'Diseño de experiencia educativa digital y desarrollo de contenidos interactivos para mejorar procesos de aprendizaje en entornos virtuales.',
    tags: ['Ed-Tech', 'Diseño UX', 'Contenido Digital'],
    url: canva('DAGIopVvkyk'),
    cover: 'edtech',
  },
  {
    n: '04',
    client: 'Proyecto educativo',
    sub: 'Contenido educativo interactivo',
    d: 'Diseño de materiales educativos digitales enfocados en mejorar la experiencia de aprendizaje mediante herramientas tecnológicas.',
    tags: ['Educación', 'Tecnología', 'Diseño'],
    url: canva('DAGH97QwkAk'),
    cover: 'edu',
  },
] as const;

export const EXPERIENCE = [
  {
    n: '01',
    title: 'Ejecutiva',
    em: 'de cuentas',
    org: 'Expressway Eco – Printing Solutions · Arecibo',
    date: 'Ago 2025 – Presente',
    text: 'Gestión de cuentas comerciales y coordinación de proyectos de impresión. Desarrollo de soluciones de punto de venta y materiales promocionales alineados con objetivos de marketing.',
  },
  {
    n: '02',
    title: 'Maestra de',
    em: 'tecnología educativa',
    org: 'Departamento de Educación · Arecibo',
    date: 'Ago 2022 – Jun 2024',
    text: 'Organizó ferias empresariales donde los estudiantes crearon y gestionaron sus propios negocios, integrando tecnología y estrategias de mercadeo en el currículo.',
  },
  {
    n: '03',
    title: 'Técnica de',
    em: 'promoción y mercadeo',
    org: 'Camuy Health Services · Camuy',
    date: 'Mar 2021 – Ago 2022',
    text: 'Fortaleció la identidad digital de la organización, aumentó su presencia en redes sociales y desarrolló campañas de mercadeo comunitario.',
  },
  {
    n: '04',
    title: 'Representante',
    em: 'de servicio',
    org: 'Menonita Vital, Telemedik · Guaynabo y Mayagüez',
    date: 'Sep 2020 – Mar 2021',
    text: 'Gestión de relaciones con clientes y coordinación de servicios de salud en varias localidades.',
  },
  {
    n: '05',
    title: 'Guía',
    em: 'educativa',
    org: 'Observatorio de Arecibo',
    date: 'Feb 2017 – Feb 2020',
    text: 'Diseñó experiencias educativas interactivas para visitantes, combinando ciencia y comunicación visual.',
  },
];

const pdf = (file: string) => `${OLD_SITE}/${encodeURI(file)}`;

export const EDUCATION = [
  {
    kind: 'Maestría',
    t: 'Artes Gráficas, concentración en Diseño Gráfico',
    d: 'Atlantic University College · 2021',
    url: pdf('Diploma Maestría.pdf'),
  },
  {
    kind: 'Bachillerato',
    t: 'Administración de Empresas, concentración en Mercadeo',
    d: 'Universidad de Puerto Rico en Arecibo · 2020',
    url: pdf('Diploma Bachillerato .pdf'),
  },
  {
    kind: 'Certificación',
    t: 'Tecnología Educativa',
    d: 'Caribbean University · 2025',
    url: pdf('Resultados PCMAS.pdf'),
  },
  {
    kind: 'Certificado',
    t: 'Comercio Electrónico y Mercadeo Digital con IA',
    d: 'Estrategias digitales, ventas online y herramientas de IA aplicadas al marketing · 2025',
    url: pdf('EcommerreceMercadeoDigitalConIA-SRF.pdf'),
  },
  {
    kind: 'Certificado',
    t: 'Servicio al Cliente',
    d: 'Experiencia del cliente, comunicación efectiva y manejo de relaciones · 2025',
    url: pdf('Certificados-Taller Servico al cliente_Pathstone-SRF.pdf'),
  },
];

export const SKILLS = [
  'Identidad Visual',
  'Marketing Digital',
  'Redes Sociales',
  'Branding',
  'Diseño Gráfico',
  'Comunicación de Marca',
  'Emprendimiento',
  'Tecnología Educativa',
];

export const TOOLS = ['Canva', 'Adobe Creative Suite', 'Google Workspace', 'Meta Business Suite', 'E-commerce'];

export const FAQ = [
  {
    q: '¿Con quién trabajas?',
    a: 'Con personas, marcas y organizaciones que tienen una idea inicial y necesitan claridad para convertirla en un proyecto real: emprendedores, negocios locales, corporaciones e instituciones educativas.',
  },
  {
    q: '¿Qué necesito para empezar?',
    a: 'Solo tu idea. En una primera conversación entendemos qué quieres lograr, a quién te diriges y qué necesitas: estrategia, identidad visual, contenido o todo junto.',
  },
  {
    q: '¿Trabajas de forma remota?',
    a: 'Sí. Estoy en Arecibo, Puerto Rico, y trabajo tanto de forma presencial como remota con clientes de otras ciudades y países.',
  },
  {
    q: '¿Qué herramientas utilizas?',
    a: 'Canva, Adobe Creative Suite, Google Workspace y Meta Business Suite, además de herramientas de inteligencia artificial para agilizar el contenido y los procesos digitales.',
  },
];
