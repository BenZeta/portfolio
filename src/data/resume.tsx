import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Ben Adelio Alvaro Pardede',
  initials: 'BAP',
  url: 'https://benpardede.vercel.app/',
  location: 'Jakarta, Indonesia',
  locationLink: 'https://www.google.com/maps/place/jakarta',
  description:
    'Full-Stack JavaScript Developer with a background in business education. I love building web applications and solving problems.',
  summary:
    "Outstanding graduate of Hacktiv8's Full-Stack JavaScript Immersive Program (98/100) with a background in business education and a strong passion for software engineering. Adept at building full-stack web applications using modern technologies. Known for fast learning, teamwork, and delivering scalable, real-world projects with clean architecture and intuitive UX.",
  avatarUrl: '/me.jpg',
  skills: [
    'ReactJS',
    'Vite',
    'TypeScript',
    'Tailwind CSS',
    'Redux',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Prisma',
    'Socket.io',
    'REST API',
    'Go',
    'Docker',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'benpardede3@gmail.com',
    tel: '+62 822-4901-3283',
    social: {
      GitHub: {
        name: 'GitHub',
        url: '#',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ben-adelio-alvaro-pardede-81b384352/',
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: 'X',
        url: '#',
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: 'Youtube',
        url: '#',
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Aspiring Developer',
      href: '#',
      badges: [],
      location: 'Jakarta, Indonesia',
      title: 'New to Tech Industry',
      start: '2024',
      end: 'Present',
      description:
        "Currently transitioning into the tech industry with a strong foundation from Hacktiv8's Full-Stack JavaScript Immersive Program. Focusing on building projects to develop practical experience while applying my business education background to bring a unique perspective to software development.",
      workUrl: 'https://aspiringdeveloper.vercel.app/',
    },
  ],
  education: [
    {
      school: 'Hacktiv8',
      href: 'https://hacktiv8.com',
      degree: 'Full Stack JavaScript Immersive Program (Score: 98/100)',
      start: 'Nov 2024',
      end: 'Feb 2025',
    },
    {
      school: 'Institut Teknologi Bandung',
      href: 'https://www.itb.ac.id',
      degree: 'SBM ITB International Undergraduate Program',
      start: 'Aug 2021',
      end: 'Aug 2026',
    },
  ],
  projects: [
    {
      title: 'SamaKita',
      href: 'https://next-ai-samakita.vercel.app/',
      dates: '2024',
      active: true,
      description:
        'A comprehensive Content Management System (CMS) designed specifically for managing share houses in Indonesia. Empowers property owners to efficiently oversee their properties, track financial expenses, and manage tenant-related activities. Serves both B2B and B2C markets by offering robust features for property owners and seamless service tracking for tenants.',
      technologies: [
        'Vite',
        'ReactJS',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'ChartJS',
        'Google Gemini AI',
        'Midtrans',
        'REST API',
        'Express',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://next-ai-samakita.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/samakita.png',
      video: '',
    },
    {
      title: 'Guessionary',
      href: 'https://guessionary-p1xi.vercel.app/',
      dates: '2024',
      active: true,
      description:
        'A web based draw and guessing game application to play with friends together',
      technologies: [
        'Prisma',
        'TypeScript',
        'Tailwind',
        'ReactJS',
        'Vite',
        'Redux',
        'Socket.io',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://guessionary-p1xi.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/guessionary.png',
      video: '',
    },
    {
      title: 'Movie Recommendation',
      href: 'https://deploy-gc02-pub.vercel.app/',
      dates: '2024',
      active: true,
      description:
        'A movie recommendation application for discovering and exploring films.',
      technologies: ['Vite', 'ReactJS', 'TypeScript', 'Tailwind CSS'],
      links: [
        {
          type: 'Website',
          href: 'https://deploy-gc02-pub.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/movieworld.png',
      video: '',
    },
    {
      title: 'Portfolio Website',
      href: 'https://benpardede.vercel.app/',
      dates: '2024',
      active: true,
      description:
        'A personal portfolio website showcasing my development skills, projects, and achievements.',
      technologies: ['Vite', 'ReactJS', 'TypeScript', 'Tailwind CSS'],
      links: [
        {
          type: 'Website',
          href: 'https://benpardede.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/my-portfolio.png',
      video: '',
    },
  ],
  hackathons: [],
} as const;
