export interface Experience {
  period: string;
  company: string;
  location: string;
  type: 'stage' | 'formation' | 'ingenieur';
  typeLabel: string;
  title: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    period: 'Nov 2025 – Avr 2026',
    company: 'Need4Viz',
    location: 'Paris',
    type: 'stage',
    typeLabel: 'Expérience · Stage',
    title: 'Data Engineer & ML Engineer',
    bullets: [
      'Conception de solutions de prévision de séries temporelles et de systèmes RAG en Python.',
      'Forecasting sur 2000+ séries temporelles — R²=0.70, DA=80%.',
      'Mise en place de pipelines RAG (retrieval-augmented generation).',
    ],
  },
  {
    period: 'Août – Déc 2024',
    company: 'Concordia',
    location: 'Montréal',
    type: 'formation',
    typeLabel: 'Formation · Mobilité',
    title: 'Échange universitaire international',
    bullets: [
      'Bases du machine learning et développement web dynamique (Vue.js).',
      'Fondements avancés de l\'ingénierie numérique.',
    ],
  },
  {
    period: '2022 – Aujourd\'hui',
    company: 'EFREI Paris',
    location: 'Paris',
    type: 'ingenieur',
    typeLabel: 'Formation · Ingénieur',
    title: 'Cycle ingénieur — majeure Big Data & Machine Learning',
    bullets: [
      'Titre d\'ingénieur EFREI (RNCP niveau 7, partenariat Université Paris-Panthéon-Assas).',
      'Data engineering (ETL/ELT, stockage distribué, Spark, cloud AWS/Azure/GCP), ML, deep learning, IA générative.',
    ],
  },
];

export interface SkillCategory {
  label: string;
  skills: { abbr: string; label: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Développement Web',
    skills: [
      { abbr: 'HTML', label: 'HTML' },
      { abbr: 'CSS', label: 'CSS' },
      { abbr: 'JS', label: 'JavaScript' },
      { abbr: 'Vue', label: 'Vue.js' },
      { abbr: 'Ast', label: 'Astro' },
      { abbr: 'No', label: 'Node.js' },
    ],
  },
  {
    label: 'Langages',
    skills: [
      { abbr: 'Py', label: 'Python' },
      { abbr: 'Rs', label: 'Rust' },
      { abbr: 'C', label: 'C' },
      { abbr: 'Ta', label: 'Tauri' },
    ],
  },
  {
    label: 'DevOps & Outils',
    skills: [
      { abbr: 'Git', label: 'Git' },
      { abbr: 'Dk', label: 'Docker' },
      { abbr: 'Sh', label: 'Bash' },
      { abbr: 'GH', label: 'GitHub' },
      { abbr: 'CL', label: 'AWS / GCP' },
      { abbr: 'GA', label: 'GitHub Actions' },
    ],
  },
  {
    label: 'Base de données',
    skills: [
      { abbr: 'SQL', label: 'SQL' },
      { abbr: 'Pg', label: 'PostgreSQL' },
      { abbr: 'Rd', label: 'Redis' },
      { abbr: 'Cs', label: 'Cassandra' },
      { abbr: 'Mg', label: 'MongoDB' },
    ],
  },
  {
    label: 'Data',
    skills: [
      { abbr: 'Pl', label: 'Polars' },
      { abbr: 'Sp', label: 'Spark' },
    ],
  },
  {
    label: 'Machine Learning',
    skills: [
      { abbr: 'PT', label: 'PyTorch' },
      { abbr: 'FC', label: 'Forecasting' },
    ],
  },
];
