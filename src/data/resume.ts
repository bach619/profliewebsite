import type { IconType } from 'react-icons';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGit,
  FaDocker,
  FaAws,
  FaSearchengin,
  FaGoogle,
  FaChartLine,
  FaLink,
  FaPython,
  FaPhp,
  FaJava,
  FaFacebookF
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiFirebase,
  SiPrisma,
  SiVercel,
  SiJest,
  SiGithubactions,
  SiWebpack,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSemrush,
  SiKotlin,
  SiVuedotjs,
  SiSupabase,
  SiFastapi
} from 'react-icons/si';

export interface PersonalInfoItem {
  label: string;
  value: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  details: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  details: string;
}

export interface SkillItem {
  name: string;
  level: number;
  icon: IconType;
  color: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const aboutParagraph =
  "I'm Boby Harinto Mihing, a full-stack developer from Palangka Raya, Indonesia. Since 2020 I've built and shipped web applications across 26 public repositories on GitHub and 16 live sites on Netlify — from production platforms for forestry and cooperatives to VYPER, a smart contract security auditing tool. I specialize in modern web technologies: Next.js, React, TypeScript, Supabase, and Tailwind CSS.";

export const educationQuote = {
  text: 'College is supposed to provide a pathway to financial security and career success. That promise is true for fewer and fewer graduates.',
  author: 'Charlie Kirk',
  context:
    "This is why I didn't finish my Accounting studies at Universitas Sanata Dharma, Yogyakarta."
};

export const approach: string[] = [
  'Speed of delivery to client',
  'Focus on clean, maintainable code',
  'User-centered design philosophy',
  'Agile development methodology',
  'Continuous learning and improvement',
  'Strong problem-solving skills',
  'Excellent team collaboration'
];

export const personalInfo: PersonalInfoItem[] = [
  { label: 'Name', value: 'Boby Harinto Mihing' },
  { label: 'Phone', value: '(+62) 823 5173 2449' },
  { label: 'Experience', value: '6+ Years' },
  { label: 'Email', value: 'bach619@gmail.com' },
  { label: 'Location', value: 'Palangka Raya, Indonesia' },
  { label: 'GitHub', value: 'bach619 · 26 repos' },
  { label: 'Live Sites', value: '16 on Netlify' },
  { label: 'Nationality', value: 'Indonesian' },
  { label: 'Languages', value: 'English, Indonesian' },
  { label: 'Freelance', value: 'Available' }
];

export const experienceData: ExperienceItem[] = [
  {
    year: '2025 - Present',
    title: 'Full-Stack Developer',
    company: 'Freelance / Yayasan Antangpatahu Mahaga Lewu',
    details:
      'Building Sistem Informasi Perhutanan Sosial & PKS — Next.js 16, React 19, TypeScript, and Supabase.\nDeveloping carbon project management, budget approval workflows, and role-based dashboards.\nMaintaining client platforms for KPHL Kapuas Kahayan, Divisi Perencanaan, and PUFC Palangka Raya United.'
  },
  {
    year: '2025',
    title: 'Frontend Developer',
    company: 'Freelance Projects',
    details:
      'Built koperasikamapa, yayasanamal, instapure, hoodagoods, converter-app, and freeimg2convert.\nImplemented modern UI with React, Vite, Tailwind CSS, and Shadcn/ui.\nIntegrated WhatsApp, payment, and affiliate workflows for client websites.'
  },
  {
    year: '2024 - 2025',
    title: 'Web Developer',
    company: 'Project-Based',
    details:
      'Developed and deployed client websites for organizations in Central Kalimantan.\nUsed React, TypeScript, Vue.js, and Tailwind CSS across projects.\nManaged deployment on Netlify and Vercel with custom domains.'
  },
  {
    year: '2020 - 2024',
    title: 'Self-Taught Developer',
    company: 'GitHub @bach619',
    details:
      'Started the development journey in January 2020 with HTML, CSS, and JavaScript.\nBuilt a series of portfolio websites (myportfolio_V01, myporfoliov2, portfolioV.final).\nLearned version control, responsive design, and modern frontend tooling through real projects.'
  }
];

export const educationData: EducationItem[] = [
  {
    year: '2020',
    degree: 'The Beginning - Self-Taught',
    institution: 'GitHub @bach619',
    details: 'Started programming journey; foundations of HTML, CSS, and JavaScript through hands-on projects'
  },
  {
    year: '2021 - 2023',
    degree: 'Frontend Engineering',
    institution: 'Project-Based Learning',
    details: 'React, TypeScript, Tailwind CSS, Vue.js — applied across portfolio and client websites'
  },
  {
    year: '2024 - 2025',
    degree: 'Full-Stack Development',
    institution: 'Project-Based Learning',
    details: 'Next.js, Node.js, Supabase/PostgreSQL, REST APIs — used to ship production applications'
  },
  {
    year: '2026',
    degree: 'Smart Contract Security',
    institution: 'VYPER Project',
    details: 'Python, FastAPI, Docker Compose, and the Slither/Mythril/Echidna/Halmos/Foundry toolchain'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 95, icon: FaHtml5, color: 'text-orange-500', description: 'Expert in HTML5 semantic markup and best practices' },
      { name: 'CSS3', level: 90, icon: FaCss3, color: 'text-blue-500', description: 'Advanced styling including animations and responsive design' },
      { name: 'JavaScript', level: 92, icon: FaJs, color: 'text-yellow-400', description: 'ES6+ features, DOM manipulation, and modern patterns' },
      { name: 'React', level: 88, icon: FaReact, color: 'text-blue-400', description: 'Component architecture, hooks, context API, and Redux' },
      { name: 'TypeScript', level: 85, icon: SiTypescript, color: 'text-blue-600', description: 'Type systems, interfaces, and advanced TypeScript patterns' },
      { name: 'Next.js', level: 80, icon: SiNextdotjs, color: 'text-white', description: 'Server-side rendering, static generation, and API routes' },
      { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss, color: 'text-cyan-400', description: 'Utility-first CSS framework for rapid UI development' },
      { name: 'Framer Motion', level: 75, icon: SiFramer, color: 'text-white', description: 'Animation library for React components and transitions' },
      { name: 'Python', level: 82, icon: FaPython, color: 'text-blue-400', description: 'Web development with Django and Flask frameworks' },
      { name: 'PHP', level: 78, icon: FaPhp, color: 'text-purple-500', description: 'Backend development with PHP and Laravel framework' },
      { name: 'Kotlin', level: 75, icon: SiKotlin, color: 'text-orange-500', description: 'Modern Android application development' },
      { name: 'Java', level: 80, icon: FaJava, color: 'text-red-500', description: 'Cross-platform application development with Spring framework' },
      { name: 'Vue.js', level: 78, icon: SiVuedotjs, color: 'text-green-500', description: 'Progressive JavaScript framework for interactive UIs' }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85, icon: FaNodeJs, color: 'text-green-500', description: 'Server-side JavaScript runtime environment' },
      { name: 'Express.js', level: 82, icon: SiExpress, color: 'text-white', description: 'Web application framework for Node.js' },
      { name: 'MongoDB', level: 78, icon: SiMongodb, color: 'text-green-600', description: 'NoSQL database for modern applications' },
      { name: 'PostgreSQL', level: 75, icon: SiPostgresql, color: 'text-blue-700', description: 'Advanced open source relational database' },
      { name: 'GraphQL', level: 70, icon: SiGraphql, color: 'text-pink-600', description: 'API query language and runtime' },
      { name: 'Firebase', level: 80, icon: SiFirebase, color: 'text-yellow-500', description: 'Backend-as-a-service platform with real-time database' },
      { name: 'REST API', level: 88, icon: FaNodeJs, color: 'text-gray-400', description: 'Design and implementation of RESTful services' },
      { name: 'Prisma', level: 72, icon: SiPrisma, color: 'text-teal-500', description: 'Next-generation ORM for Node.js and TypeScript' },
      { name: 'Supabase', level: 85, icon: SiSupabase, color: 'text-emerald-500', description: 'PostgreSQL backend with auth, storage, and row-level security' },
      { name: 'FastAPI', level: 75, icon: SiFastapi, color: 'text-teal-500', description: 'High-performance Python API framework with async support' }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90, icon: FaGit, color: 'text-red-500', description: 'Version control and collaboration workflows' },
      { name: 'Docker', level: 75, icon: FaDocker, color: 'text-blue-500', description: 'Containerization for application deployment' },
      { name: 'AWS', level: 70, icon: FaAws, color: 'text-yellow-500', description: 'Cloud services and infrastructure management' },
      { name: 'Vercel', level: 85, icon: SiVercel, color: 'text-white', description: 'Deployment and hosting platform for web applications' },
      { name: 'Figma', level: 80, icon: FaFigma, color: 'text-purple-500', description: 'Design and prototyping tool for collaborative interfaces' },
      { name: 'Jest', level: 78, icon: SiJest, color: 'text-red-600', description: 'JavaScript testing framework for React applications' },
      { name: 'GitHub Actions', level: 72, icon: SiGithubactions, color: 'text-blue-500', description: 'CI/CD automation and workflow management' },
      { name: 'Webpack', level: 75, icon: SiWebpack, color: 'text-blue-400', description: 'Module bundler for JavaScript applications' }
    ]
  },
  {
    title: 'SEO & Digital Marketing',
    skills: [
      { name: 'SEO', level: 88, icon: FaSearchengin, color: 'text-green-500', description: 'On-page and technical SEO optimization for websites' },
      { name: 'Google Analytics', level: 85, icon: SiGoogleanalytics, color: 'text-yellow-600', description: 'Web traffic analysis and conversion tracking' },
      { name: 'Search Console', level: 82, icon: SiGooglesearchconsole, color: 'text-blue-500', description: 'Website performance monitoring in search results' },
      { name: 'Keyword Research', level: 90, icon: FaGoogle, color: 'text-blue-600', description: 'Strategic keyword analysis and implementation' },
      { name: 'Link Building', level: 78, icon: FaLink, color: 'text-indigo-400', description: 'Building quality backlinks and outreach strategies' },
      { name: 'Meta Ads', level: 84, icon: FaFacebookF, color: 'text-blue-500', description: 'Campaign management for Facebook & Instagram advertising' },
      { name: 'SEO Auditing', level: 85, icon: FaChartLine, color: 'text-red-400', description: 'Comprehensive site audits and opportunity identification' },
      { name: 'Semrush', level: 75, icon: SiSemrush, color: 'text-orange-600', description: 'Keyword tracking and SEO campaign management' }
    ]
  }
];
