export type ProjectCategory = 'web' | 'mobile' | 'ui';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  categories: ProjectCategory[];
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Social Forestry Information System & PKS',
    description: 'Internal application for Yayasan Antangpatahu Mahaga Lewu to centrally manage, monitor, and evaluate Social Forestry data across 4 regencies in real time — featuring a national dashboard, 3-level RBAC, Excel import, and carbon project management.',
    image: '/assets/projects/sisinfops-screenshot.png',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Tailwind CSS 4'],
    demoUrl: 'https://sisinfops.vercel.app',
    githubUrl: 'https://github.com/bach619/sisinfops',
    categories: ['web']
  },
  {
    id: 2,
    title: 'KPHL Kapuas Kahayan - Organization Website',
    description: 'Official website of KPHL Kapuas Kahayan — protected forest information, geospatial data, activity gallery, and public complaint services for Central Kalimantan.',
    image: '/assets/projects/kphlkapuaskahayan-screenshot.jpg',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://kphlkapuaskahayan.netlify.app/',
    githubUrl: 'https://github.com/bach619/KPHLKAPUAS_KAHAYAN',
    categories: ['web']
  },
  {
    id: 3,
    title: 'PUFC - Palangka Raya United FC Academy',
    description: 'Information & online registration platform for the Palangka Raya United FC youth football academy at Sanaman Mantikei Stadium — WhatsApp-integrated registration and an interactive training location map.',
    image: '/assets/projects/pufc.png',
    technologies: ['React 19', 'Vite 6', 'Tailwind CSS 4'],
    githubUrl: 'https://github.com/bach619/pufc',
    categories: ['web']
  },
  {
    id: 4,
    title: 'Planning Division - Office Coordination App',
    description: 'Coordination app for the Head Office and Branch Offices — data management with interactive tables, drag & drop, Leaflet maps, and Supabase authentication.',
    image: '/assets/projects/divisi_perencanaan-screenshot.png',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Supabase', 'TanStack Table'],
    demoUrl: 'https://kantorantangpatahu.netlify.app',
    githubUrl: 'https://github.com/bach619/divisi_perencanaan',
    categories: ['web']
  },
  {
    id: 5,
    title: 'IKA ULM Kalteng - Digital Invitation & RSVP',
    description: 'Event website for the 2026–2030 IKA ULM Central Kalimantan Board Inauguration & Alumni Gathering — a digital invitation with attendance confirmation (RSVP) and location directions.',
    image: '/assets/projects/ika-ulm-kalteng-screenshot.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Netlify'],
    demoUrl: 'https://ika-ulm-kalteng.online',
    categories: ['web']
  },
  {
    id: 6,
    title: 'I Have Tools - Free Online Tools',
    description: 'Free online tools platform for instant conversions & calculations — Wheel of Names, Currency Converter, Unit Converter, Time Zone Converter, Calculator, and Data Storage Converter. The successor to AppHave built on Next.js.',
    image: '/assets/projects/apphave-screenshot.png',
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://vermillion-puffpuff-0e7fb4.netlify.app',
    githubUrl: 'https://github.com/bach619/apptool.fun',
    categories: ['web', 'ui']
  },
  {
    id: 7,
    title: 'InstaPure - Instagram Video Downloader',
    description: 'Instagram video downloader built as a modern web development exploration — Next.js App Router, Shadcn/ui, form validation with React Hook Form + Zod, and caching with TanStack Query.',
    image: '/assets/projects/instapure-screenshot.png',
    technologies: ['Next.js 15', 'TypeScript', 'Shadcn/ui', 'Tailwind CSS 4', 'TanStack Query'],
    demoUrl: 'https://instapure.netlify.app',
    githubUrl: 'https://github.com/bach619/instapure',
    categories: ['web', 'ui']
  },
  {
    id: 8,
    title: 'Kamapa - Digital Information Portal',
    description: 'Digital information portal for Koperasi Kamapa with a responsive design and user-friendly navigation on all devices.',
    image: '/assets/projects/kamapa-screenshot.png',
    technologies: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'React Router'],
    demoUrl: 'https://kamapa.netlify.app',
    githubUrl: 'https://github.com/bach619/koperasikamapa',
    categories: ['web']
  },
  {
    id: 9,
    title: 'Yayasan Amal - Online Donation Platform',
    description: 'Charity organization website with a secure, transparent, and easy-to-use online donation system for donors.',
    image: '/assets/projects/yayasanamal-screenshot.jpg',
    technologies: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
    demoUrl: 'https://yayasanamal.netlify.app/',
    githubUrl: 'https://github.com/bach619/yayasanamal',
    categories: ['web']
  },
  {
    id: 10,
    title: 'HoodaGoods - Affiliate & Review Website',
    description: 'Content-driven affiliate website reviewing ClickBank digital products honestly, SEO-optimized and user-first — with automatic affiliate links and product ratings.',
    image: '/assets/projects/hoodagoods-screenshot.jpg',
    technologies: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://hoodagoods.netlify.app/',
    githubUrl: 'https://github.com/bach619/hoodagoods',
    categories: ['web']
  },
  {
    id: 11,
    title: 'ContentGeniusAI - Marketing Operations Platform',
    description: 'AI-powered marketing operations platform — a campaign dashboard with AI insights, performance predictions, content creation, audience management, analytics, and AI chat.',
    image: '/assets/projects/contentgeniusai-screenshot.png',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'AI'],
    demoUrl: 'https://contentgeniusai.netlify.app',
    categories: ['web', 'ui']
  },
  {
    id: 12,
    title: 'ArbifyAI - Cross-Chain Arbitrage Dashboard',
    description: 'AI/ML-powered cross-chain arbitrage dashboard — real-time opportunity monitoring across Ethereum, Polygon, Solana, Binance, and Arbitrum with automated execution.',
    image: '/assets/projects/arbifyai-screenshot.png',
    technologies: ['React', 'Vite', 'Web3', 'Tailwind CSS'],
    demoUrl: 'https://arbifyai.netlify.app',
    categories: ['web', 'ui']
  },
  {
    id: 13,
    title: 'Cagliari - AI Merchandising Engine',
    description: 'AI Merchandising Engine with VideoGen — product optimization, AI content & video generation, A/B testing, and automation for Shopify stores.',
    image: '/assets/projects/cagliari-screenshot.png',
    technologies: ['React', 'Vite', 'Shopify', 'Tailwind CSS'],
    demoUrl: 'https://cagliari-aimerchandisingengine.netlify.app',
    categories: ['web', 'ui']
  },
  {
    id: 14,
    title: 'VYPER - Smart Contract Bug Hunter',
    description: 'Microservice-based smart contract security auditing platform that runs locally via Docker Compose — an automated scan, analysis, exploit, and report pipeline using Slither, Mythril, Echidna, Halmos, and Foundry.',
    image: '/assets/projects/sc_auditor.png',
    technologies: ['Python 3.11', 'FastAPI', 'Docker Compose', 'React', 'Foundry'],
    githubUrl: 'https://github.com/bach619/sc_auditor',
    categories: ['web']
  },
  {
    id: 15,
    title: 'Terrapurun - Professional Business Website',
    description: 'Corporate website with a portfolio, services, and an elegant contact system to boost business credibility.',
    image: '/assets/projects/terrapurun-screenshot.png',
    technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Netlify'],
    demoUrl: 'https://terrapurun.netlify.app',
    categories: ['web', 'ui']
  },
  {
    id: 16,
    title: 'Converter App - File & Document Conversion',
    description: 'Web app for converting files and documents with a modern interface built on Next.js and Express.',
    image: '/assets/projects/converter-app.png',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Express'],
    githubUrl: 'https://github.com/bach619/converter-app',
    categories: ['web']
  },
  {
    id: 17,
    title: 'FreeImg2Convert - Free Image Conversion',
    description: 'Free tool to convert images to various formats quickly and without limits.',
    image: '/assets/projects/freeimg2convert-screenshot.png',
    technologies: ['Next.js 13', 'React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://freeimg2convert.netlify.app',
    githubUrl: 'https://github.com/bach619/freeimg2convert',
    categories: ['web', 'ui']
  },
  {
    id: 18,
    title: 'Murineo Landing Page',
    description: 'Modern landing page for the Murineo platform with a clean, responsive look.',
    image: '/assets/projects/murineo-landing.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/bach619/murineo-landing',
    categories: ['web', 'ui']
  },
  {
    id: 19,
    title: 'Agape Church - Community Website',
    description: 'Community website for Agape Church with information about services and activities.',
    image: '/assets/projects/agapechurch.png',
    technologies: ['HTML', 'JavaScript'],
    githubUrl: 'https://github.com/bach619/agapechurch',
    categories: ['web']
  },
  {
    id: 20,
    title: 'Christina Natalia - Artisanal Cake Designer',
    description: 'Portfolio & ordering website for Christina Natalia, artisanal cake designer — gallery, blog, testimonials, and online ordering.',
    image: '/assets/projects/my_christinanatalia-screenshot.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://christinanatalia-cake.netlify.app',
    githubUrl: 'https://github.com/bach619/my_christinanatalia',
    categories: ['web', 'ui']
  },
  {
    id: 21,
    title: 'Portfolio Website - This Project',
    description: "The personal portfolio website you're viewing right now — React, Vite, Tailwind CSS, GSAP, and Framer Motion with particle animations and 3D effects.",
    image: '/assets/projects/profliewebsite-screenshot.png',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://portfolio-bobymihing.netlify.app',
    githubUrl: 'https://github.com/bach619/profliewebsite',
    categories: ['web', 'ui']
  },
  {
    id: 22,
    title: 'Portfolio V.Final',
    description: 'The final version of the portfolio website with a modern design and smooth animations.',
    image: '/assets/projects/portfolioV.final.png',
    technologies: ['TypeScript', 'Web'],
    githubUrl: 'https://github.com/bach619/portfolioV.final',
    categories: ['web', 'ui']
  },
  {
    id: 23,
    title: 'MyPortfolio v2',
    description: 'Second version of the portfolio website with an experimental layout.',
    image: '/assets/projects/myporfoliov2.png',
    technologies: ['TypeScript'],
    githubUrl: 'https://github.com/bach619/myporfoliov2',
    categories: ['web', 'ui']
  },
  {
    id: 24,
    title: 'MyPortfolio V01',
    description: 'The first portfolio website — the beginning of the frontend development journey.',
    image: '/assets/projects/myportfolio_V01.png',
    technologies: ['JavaScript'],
    githubUrl: 'https://github.com/bach619/myportfolio_V01',
    categories: ['web', 'ui']
  },
  {
    id: 25,
    title: 'Vanilla Sky - Web Project',
    description: 'Experimental web project with modern animations and interactions.',
    image: '/assets/projects/vanillasky-screenshot.png',
    technologies: ['TypeScript'],
    demoUrl: 'https://vanilla-sky2025.netlify.app',
    githubUrl: 'https://github.com/bach619/vanillasky',
    categories: ['web', 'ui']
  },
  {
    id: 26,
    title: 'Freelancer Site v0.1',
    description: 'First version of the freelancer website with a service catalog and portfolio.',
    image: '/assets/projects/freelancer-sit.version.01.png',
    technologies: ['TypeScript'],
    githubUrl: 'https://github.com/bach619/freelancer-sit.version.01',
    categories: ['web', 'ui']
  }
];
