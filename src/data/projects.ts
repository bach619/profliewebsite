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
    title: 'AppHave - Platform Aplikasi Modern',
    description: 'Platform inovatif untuk berbagi dan menemukan aplikasi menarik dengan antarmuka yang futuristik dan user-friendly.',
    image: '/assets/projects/apphave-screenshot.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://apphave.fun/',
    categories: ['web', 'ui']
  },
  {
    id: 2,
    title: 'InstaPure - Aplikasi Konten Visual',
    description: 'Aplikasi web untuk menciptakan dan berbagi konten visual dengan filter modern dan tools editing yang lengkap.',
    image: '/assets/projects/instapure-screenshot.jpg',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Cloudinary'],
    demoUrl: 'https://instapure.fun/',
    categories: ['web', 'ui']
  },
  {
    id: 3,
    title: 'Kamapa - Portal Informasi Digital',
    description: 'Website portal informasi dengan sistem manajemen konten yang powerful dan desain responsif untuk semua perangkat.',
    image: '/assets/projects/kamapa-screenshot.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: 'https://kamapa.online/',
    categories: ['web']
  },
  {
    id: 4,
    title: 'Yayasan Amal - Platform Donasi Online',
    description: 'Website organisasi amal dengan sistem donasi online yang aman, transparan, dan mudah digunakan oleh donatur.',
    image: '/assets/projects/yayasanamal-screenshot.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    demoUrl: 'https://yayasanamal.netlify.app/',
    categories: ['web']
  },
  {
    id: 5,
    title: 'HoodaGoods - E-commerce Modern',
    description: 'Platform e-commerce dengan fitur lengkap mulai dari katalog produk, keranjang belanja, hingga checkout yang aman.',
    image: '/assets/projects/hoodagoods-screenshot.jpg',
    technologies: ['React', 'Redux', 'Firebase', 'Stripe'],
    demoUrl: 'https://hoodagoods.netlify.app/',
    categories: ['web']
  },
  {
    id: 6,
    title: 'Terrapurun - Website Bisnis Profesional',
    description: 'Website perusahaan dengan portofolio, layanan, dan sistem kontak yang elegan untuk meningkatkan kredibilitas bisnis.',
    image: '/assets/projects/terrapurun-screenshot.jpg',
    technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Netlify'],
    demoUrl: 'https://terrapurun.online/',
    categories: ['web', 'ui']
  },
  {
    id: 7,
    title: 'KPHL Kapuas Kahayan - Website Organisasi',
    description: 'Website resmi organisasi dengan informasi lengkap, galeri kegiatan, dan sistem publikasi berita terbaru.',
    image: '/assets/projects/kphlkapuaskahayan-screenshot.jpg',
    technologies: ['React', 'TypeScript', 'Contentful', 'Vercel'],
    demoUrl: 'https://kphlkapuaskahayan.netlify.app/',
    categories: ['web']
  }
];
