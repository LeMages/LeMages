export interface Project {
  id: string;
  slug: string;
  pageUrl: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  githubUrl?: string;
  caseStudyUrl?: string;
  hasCaseStudy: boolean;
  image?: string;
  imageAlt: string;
  visualLabel: string;
}

export const projects: Project[] = [
  {
    id: 'augur',
    slug: 'augur',
    pageUrl: '/projets/augur',
    number: '01',
    category: 'Time-series forecasting',
    title: 'Augur',
    description:
      "Framework de prévision de séries temporelles (retail / demand forecasting), avec orchestration distribuée Python + Rust : ingestion, entraînement, orchestration et monitoring.",
    tags: ['R² 0.80', 'SMAPE 8%', '2000+ séries'],
    techStack: ['Python', 'Rust', 'PyTorch (TFT)', 'Polars'],
    hasCaseStudy: true,
    caseStudyUrl: '/projects/augur',
    imageAlt: 'Dashboard de prévision Augur',
    image: undefined,
    visualLabel: '[ visuel — Augur ]',
  },
  {
    id: 'blackjack',
    slug: 'blackjack',
    pageUrl: '/projets/blackjack-monte-carlo',
    number: '02',
    category: 'Simulation haute performance',
    title: 'Blackjack Monte Carlo',
    description:
      "Moteur de simulation Monte Carlo en Rust comparant 6 systèmes de comptage de cartes. 50 millions de mains simulées, parallélisées avec rayon, dashboard React/Vite.",
    tags: ['50M mains', '+0.560% (Zen Count)', 'EV +1.058 u./100'],
    techStack: ['Rust', 'rayon', 'React', 'Vite'],
    githubUrl: '#',
    hasCaseStudy: false,
    image: '/images/projets/projet_black_jack.png',
    imageAlt: 'Scatter rendement/risque Blackjack',
    visualLabel: '[ visuel — scatter rendement/risque ]',
  },
  {
    id: 'wild-dump',
    slug: 'wild-dump',
    pageUrl: '/projets/wild-dump-prevention',
    number: '03',
    category: 'Computer vision',
    title: 'Wild Dump Prevention',
    description:
      "Pipeline de détection de dépôts sauvages par vision par ordinateur. Téléversement de photos/vidéos, règles visuelles de détection, et dashboard de statistiques et zones à risque.",
    tags: ['90% précision', '3000 images'],
    techStack: ['Flask', 'PostgreSQL', 'OpenCV', 'Pillow'],
    githubUrl: 'https://github.com/benjidsv/wild-dump-prevention',
    hasCaseStudy: false,
    image: '/images/projets/wild-dump-prevention.jpg',
    imageAlt: 'Dashboard détection Wild Dump',
    visualLabel: '[ visuel — dashboard détection ]',
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
