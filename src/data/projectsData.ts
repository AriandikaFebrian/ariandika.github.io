// Project data for the portfolio
// Ari Andika Febrian - Mobile & Fullstack Developer

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription?: string;
  image: string;
  images?: string[];
  techStack: string[];
  category: 'Mobile' | 'Frontend' | 'FullStack' | 'Desktop';
  liveDemo?: string;
  github?: string;
  documentation?: string;
  featured?: boolean;
  orientation?: 'portrait' | 'landscape';
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'PPDB Daily Activity System - Demo',
    description:
      'Internal demo build for PPDB (Student Registration) and Daily Activity tracking system. A comprehensive mobile application for managing and tracking daily student activities in schools. Features role-based access control with 5 user types (headmaster, admin, teacher, parent, student), activity management with approval workflow, photo uploads, threaded comments, and push notifications. Built with React Native (Expo) and Node.js/Express backend. Delivered for client testing; production rollout planned mid-2026 (targeting ~500 users based on school data).',
    image: './Mobile.jpeg',
    techStack: [
      'React Native',
      'Expo',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'JWT',
      'TanStack Query',
      'Push Notifications',
      'AsyncStorage',
      'Multer',
    ],
    category: 'Mobile',
    featured: true,
    orientation: 'portrait',
  },
  {
    id: 2,
    title: 'BugNest - Issue Tracking & Source Code Platform - Ongoing',
    description:
      'A comprehensive issue tracking and source code visualization platform for development teams. Features include issue tracking with priority levels, Kanban-style boards, source code upload and viewing, team collaboration, and administrative oversight. Built with ASP.NET Core 8, React 19, and PostgreSQL.',
    image: './Bugnest.png',
    techStack: [
      'ASP.NET Core 8',
      'C# 12',
      'React 19',
      'TypeScript',
      'PostgreSQL',
      'Entity Framework Core',
      'MediatR',
      'JWT',
      'MUI 7',
      'TanStack Query',
      'Tailwind CSS 4',
      '@hello-pangea/dnd',
    ],
    category: 'FullStack',
    featured: true,
  },
  {
    id: 3,
    title: 'Helpdesk Mobile Web Dashboard & Backend',
    description:
      'A comprehensive helpdesk ticketing system that integrates with OTRS to synchronize ticket data, analyze helpdesk performance, and provide business intelligence through Power BI dashboards. Built with ASP.NET Core 8 Clean Architecture, PostgreSQL, Redis caching, and Quartz background jobs.',
    image: './PowerBI.png',
    techStack: [
      'ASP.NET Core 8',
      'C# 12',
      'PostgreSQL',
      'Redis',
      'Entity Framework Core',
      'Clean Architecture',
      'DDD',
      'CQRS',
      'Quartz.NET',
      'Docker',
      'Power BI',
      'OTRS Integration',
    ],
    category: 'FullStack',
    documentation: './Helpdesk-Mobile-Web-Documentation.pdf',
    featured: true,
  },
  {
    id: 4,
    title: 'Chess Coach - Smart Human-Like Mode v4.0',
    description:
      'A Python-based chess training application that provides a human-like playing experience against Stockfish engine with Win Intent Awareness. Features include Smart Decision Layer, Win Intent Detection v1.1, Conversion Stability Analysis, Human-Like Behavior v3.3, Pattern Prevention System, and HumanTiming with realistic move timing. Built with python-chess library and Stockfish engine integration.',
    image: './Catur.png',
    techStack: [
      'Python 3.8+',
      'python-chess',
      'Stockfish Engine',
      'Tkinter',
      'Pillow',
      'reportlab',
      'Connection Pooling',
      'Threading',
      'Pattern Detection',
      'Win Intent Awareness',
    ],
    category: 'FullStack',
    featured: false,
  },
  {
    id: 5,
    title: 'PyQtVirtualPet - Desktop Virtual Pet Widget',
    description:
      'A desktop virtual pet widget application built with PyQt5 that displays an animated cat floating on your screen. Features include transparent frameless window always on top, 12-frame idle animation, draggable physics-based interactions with gravity and velocity tracking, spacebar toggle for idle/walking states, screen boundary detection with bounce physics, and Windows API integration using pywin32.',
    image: './Virtual.png',
    techStack: [
      'Python 3.x',
      'PyQt5',
      'pywin32',
      'QTimer',
      'QLabel/QPixmap',
      'Windows API',
      'Sprite Animation',
      'Physics Engine',
      'Event Handling',
    ],
    category: 'Desktop',
    featured: false,
  },
  {
    id: 6,
    title: 'DicTech Interactive - Corporate Website - Ongoing',
    description:
      'A modern, responsive corporate website built for a web-based startup delivering innovative digital solutions. Features include animated hero carousel with multiple slides, services showcase grid, project portfolio with case studies, multi-language support (English & Indonesian), integrated contact form with spam protection and reCAPTCHA, animated statistics counters, and SEO-friendly architecture. Built with Next.js 15, React 19, Tailwind CSS 4, and Framer Motion.',
    image: './Dictech.png',
    techStack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Framer Motion',
      'MUI',
      'Radix UI',
      'Lucide React',
      'i18next',
      'React Google ReCAPTCHA',
      'Resend',
      'Swiper',
      'React CountUp',
    ],
    category: 'Frontend',
    liveDemo: 'https://dic-tech-interactive-comp.vercel.app/',
    featured: false,
  },
]

