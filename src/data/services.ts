import { Code2, Layers, ShieldCheck, TrendingUp, type LucideIcon } from 'lucide-react';

export interface ServiceType {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  technologies: string[];
  featured?: boolean;
}

export const services: ServiceType[] = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Building modern, responsive websites and web apps with Next.js, React, TypeScript, Vue.js, and Tailwind CSS — deployed on Vercel and Netlify.',
    icon: Code2,
    features: [
      'Pixel-perfect responsive UI',
      'Performance & SEO friendly',
      'Vercel & Netlify deployment'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vue.js']
  },
  {
    num: '02',
    title: 'Full-Stack Applications',
    description: 'Developing complete systems with dashboards, role-based access, data import, and maps — powered by Supabase/PostgreSQL and modern React stacks.',
    icon: Layers,
    features: [
      'Dashboards & role-based access',
      'Supabase / PostgreSQL data layer',
      'Maps, Excel import & reporting'
    ],
    technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'TanStack', 'Leaflet']
  },
  {
    num: '03',
    title: 'Smart Contract Security',
    description: 'Auditing smart contracts with VYPER — a local-first pipeline combining Slither, Mythril, Echidna, Halmos, and Foundry for scan, analysis, and reporting.',
    icon: ShieldCheck,
    features: [
      'Automated scan & analysis pipeline',
      'Slither, Mythril, Echidna, Halmos',
      'Actionable audit reports'
    ],
    technologies: ['Python', 'FastAPI', 'Docker', 'Foundry', 'Solidity'],
    featured: true
  },
  {
    num: '04',
    title: 'SEO Optimization',
    description: 'Implementing effective SEO strategies — technical audits, structured data, and content optimization — to grow organic traffic for your business.',
    icon: TrendingUp,
    features: [
      'Technical audits & structured data',
      'On-page content optimization',
      'Organic traffic growth'
    ],
    technologies: ['SEO', 'Analytics', 'Search Console', 'Schema']
  }
];
