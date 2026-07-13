export const profile =  {
  name: 'AWOKE GUADIE',
  tagline: 'I build things for the web.',
  bio: "I'm a full-stack developer specializing in building (and occasionally designing) exceptional web applications with Laravel and modern JavaScript frameworks. Currently focused on crafting fast, accessible, and maintainable products.",
  photo: '/images/me.jpg',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://www.linkedin.com/in/awoke-guadie/',
    twitter: 'https://twitter.com/awoke',
    telegram: 'https://t.me/Awguadie21',
  },
};

export const about = {
  paragraphs: [
    "I'm a full-stack developer with a passion for building clean, efficient, and user-friendly web applications. My journey started with a curiosity for how websites work, which evolved into a career building products used by real people.",
    "I specialize in the Laravel ecosystem alongside modern JavaScript frameworks like React and Next.js — from robust backend architecture and REST APIs to reactive, fast frontends. I care deeply about writing maintainable code and creating experiences that feel intuitive.",
    "When I'm not coding, you'll find me contributing to open source, writing about what I learn, or exploring new technologies over coffee.",
  ],
  highlights: ['PHP', 'Laravel', 'JavaScript', 'React.js', 'Next.js', 'C# / .NET', 'Flutter / Dart', 'MySQL / PostgreSQL'],
};

export const skills = {
  Programming: ['PHP', 'JavaScript', 'C#', 'Dart', 'HTML5', 'CSS3'],
  Frameworks: ['Laravel', 'React.js', 'Next.js', 'Flutter', '.NET'],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'],
  Tools: ['Git', 'GitHub', 'Docker', 'RESTful APIs'],
  Practices: ['MVC Architecture', 'API Development', 'CI/CD', 'Responsive Design'],
};

export const projects = [
  {
    title: 'E-Commerce System',
    description: 'Developed an online shopping platform with secure payments and order management.',
    image: '/images/projects/ecomerce.png',
    tags: ['Laravel', 'MySQL', 'Payments'],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    title: 'Car Rental System',
    description: 'Created a complete rental platform with booking, customer, and payment features.',
    image: '/images/projects/car-rental.png',
    tags: ['Laravel', 'MySQL'],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    title: 'Vehicle Inspection System',
    description: 'Designed a system for managing vehicle inspections and maintenance records.',
    image: '/images/projects/car-rental.png',
    tags: ['VB.NET', 'Crystal Reports'],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
  {
    title: 'ERP System',
    description: 'Developed modules for inventory, sales, employee, and business operations.',
    image: '/images/projects/erp.png',
    tags: ['Laravel', 'MySQL'],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
];

export const experience = [
  {
    role: 'Junior Software Developer',
    company: 'Tewos Technology Solution',
    period: '2023 — 2024',
    description:
      'Assisted in developing and maintaining business web applications using Laravel and MySQL. Fixed bugs, implemented new features, wrote clean and maintainable code, and collaborated with the development team to deliver reliable software solutions.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Tewos Technology Solution',
    period: '2024 — 2025',
    description:
      'Developed end-to-end web applications using Laravel, PHP, JavaScript, Bootstrap, and MySQL. Built responsive user interfaces, designed RESTful APIs, optimized application performance, and integrated third-party services to improve system functionality.',
  },
  {
    role: 'Senior Full-Stack Developer',
    company: 'Tewos Technology Solution',
    period: '2025 — Present',
    description:
      'Architecting and leading the development of scalable enterprise applications while mentoring developers and ensuring code quality. Driving system optimization, database design, API development, security implementation, and agile project delivery to meet business objectives.',
  },
];
