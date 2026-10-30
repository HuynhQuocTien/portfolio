const header = {
  homepage: 'https://github.com/HuynhQuocTien',
  title: 'HQT.',
}

const about = {
  name: 'Huynh Quoc Tien',
  role: 'Software Engineer | Full-Stack Developer',
  description:
    'Software Engineer with a solid foundation in computer science and hands-on experience developing high-performance, real-time web systems and automated enterprise workflows. Proficient in Node.js, NestJS, TypeScript, PostgreSQL, MongoDB, Redis, and Next.js/React, with a proven track record in resolving concurrency/race-condition challenges, designing clean Hexagonal Architecture, optimizing database operations, and automating CI/CD deployments with Docker. Strong advocate for clean architecture, automated testing, and scalable product delivery.',
  resume: 'My_Resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/huynhquoctienn',
    github: 'https://github.com/HuynhQuocTien',
    gitlab: 'https://gitlab.com/HuynhQuocTien',
    email: 'quoctien01062003@gmail.com',
  },
}

const experience = [
  {
    title: 'Freelance Full-Stack Developer',
    company: 'Chip-equipped Driving Test Booking System (Client Project)',
    location: 'Ho Chi Minh City, Vietnam',
    date: 'Dec 2025 – May 2026',
    details: [
      'Engineered a full-stack booking platform for chip-equipped driving test simulations using NestJS, Next.js 15 (App Router), Prisma, and PostgreSQL.',
      'Eliminated double-booking and race conditions by implementing a real-time slot-locking mechanism with Redis and Socket.io, broadcasting slot status with sub-100ms latency.',
      'Designed automated cron workers using @nestjs/schedule to auto-release expired pending reservations (15-min TTL), improving vehicle utilization and reducing slot holding idle time.',
      'Built an intuitive time-slot grid UI with Next.js 15 and Tailwind CSS, enabling real-time slot state reflection and seamless multi-vehicle schedule tracking.',
      'Integrated automated VietQR dynamic payment payload generation and secured role-based access control (RBAC) via JWT and custom Guards.',
    ],
  },
  {
    title: 'Backend Developer Intern',
    company: 'VNA International Technology JSC',
    location: 'Ho Chi Minh City, Vietnam',
    date: 'May 2025 – Nov 2025',
    details: [
      'Developed core enterprise modules for a labor safety reporting system, reducing manual reporting time by 30% using NestJS, TypeORM, and PostgreSQL.',
      'Architected modular RESTful APIs with DTO/Service patterns and secured endpoints using JWT and custom Guards.',
      'Automated file processing by integrating Multer-S3 with MinIO, implementing an auto-cleanup service for outdated files.',
      'Engineered management modules for user-roles, report configuration, and enterprise approval workflows.',
      'Integrated Nodemailer for automated email notifications, improving user communication efficiency.',
      'Documented API endpoints using Swagger/OpenAPI, facilitating a 20% faster frontend integration.',
    ],
  },
]

const projects = [
  {
    name: 'Ecommerce Affiliate & Cashback System',
    description:
      'Architected and delivered an automated affiliate and cashback system; currently responsible for end-to-end system maintenance, performance optimization, and feature expansions. Engineered clean Hexagonal Architecture (Ports & Adapters) with Awilix IoC container, decoupling core domain logic from messaging and e-commerce platforms. Developed multi-channel chatbot integration for Telegram and Zalo Web, building a custom Chrome Extension (MV3) to hook WebSockets, decrypt AES-GCM payloads, and bypass bot detection. Implemented automated cashback pipeline with anti-fraud cart-mismatch validation, commission splitting calculation, Jimp/jsQR VietQR decoding, dynamic payout generation, and Docker + GitLab CI/CD (99.9% uptime).',
    stack: [
      'Node.js',
      'MongoDB',
      'Awilix (IoC)',
      'Hexagonal Architecture',
      'Socket.io',
      'Chrome Extension MV3',
      'Telegram Bot',
      'Docker',
      'GitLab CI/CD',
    ],
    telegram: 'https://t.me/san_xu_bot',
    livePreview: 'https://t.me/san_xu_bot',
    sourceCode: '',
  },
  {
    name: 'Swarm.io - Multiplayer .io Game',
    description:
      'Developed an endless real-time multiplayer .io game, achieving 60 FPS performance for 50+ concurrent players in a dynamic shared map. Engineered server-authoritative game state loops in Node.js at 60 ticks/s, eliminating client-side desync and preventing cheating. Implemented 2D spatial grid partitioning collision detection, optimizing damage calculations from O(N^2) to O(N). Scaled real-time communication by integrating Redis Pub/Sub, cutting message latency by 50% (sub-50ms) for active users, with a responsive ReactJS UI and Linear Interpolation (LERP) for seamless rendering.',
    stack: [
      'ReactJS',
      'Node.js',
      'Socket.io',
      'Redis Pub/Sub',
      'Canvas',
      'WebSockets',
    ],
    sourceCode: 'https://gitlab.com/HuynhQuocTien/swarm.io',
    livePreview: '',
  },
  {
    name: 'Esports Tournament Management Platform',
    description:
      'Architected a comprehensive esports platform, supporting 100+ concurrent tournaments with multi-role access control. Automated bracket generation for Single and Double Elimination formats, reducing manual administrative setup time by 80%. Implemented real-time match synchronization using Redis Pub/Sub and WebSockets, ensuring sub-100ms latency for bracket updates. Optimized PostgreSQL performance for hierarchical tournament data by applying recursive Common Table Expressions (CTEs) and indexing. Containerized the stack with Docker and deployed an automated CI/CD pipeline using GitHub Actions, cutting deployment time by 50%.',
    stack: [
      'NestJS',
      'ReactJS',
      'PostgreSQL',
      'Redis Pub/Sub',
      'WebSockets',
      'Docker',
      'GitHub Actions',
      'CI/CD',
    ],
    sourceCode: 'https://github.com/HuynhQuocTien/esports-tournament-platform',
    livePreview: '',
  },
  {
    name: 'Multiplayer Real-Time Tetris Game',
    description:
      'Developed a real-time multiplayer Tetris game, supporting 10+ simultaneous players per room with sub-50ms synchronization latency. Implemented server-side 7-Bag PRNG piece sequence generator, ensuring 100% state consistency across all clients. Managed server-side game state with dynamically increasing difficulty levels, knockout logic, and real-time garbage line attack system. Applied Clean Code and HOCs in ReactJS to improve component reusability by 25%, and configured automated CI/CD pipelines.',
    stack: [
      'ReactJS',
      'Node.js',
      'Socket.io',
      'WebSockets',
      'Clean Code',
      'CI/CD',
    ],
    sourceCode: 'https://gitlab.com/HuynhQuocTien/tetris-game',
    livePreview: '',
  },
  {
    name: 'Ecommerce Website',
    description:
      'Built a full-featured e-commerce platform with product cataloging, shopping cart, and order processing, supporting 500+ daily requests. Designed a secure user authentication system with RBAC, ensuring 100% protection of user data access. Integrated MSSQL database with composite indexing, achieving sub-200ms product search times. Optimized server performance by implementing asynchronous operations in ASP.NET, reducing average page load time by 30%.',
    stack: ['ReactJS', 'ASP.NET', 'C#', 'MSSQL', 'Socket.io', 'RESTful API'],
    sourceCode: 'https://github.com/HuynhQuocTien/e-commerce-website.git',
    livePreview: '',
  },
]

const skills = [
  {
    category: 'Backend & Architecture',
    items: [
      'NestJS',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Socket.io',
      'RESTful API',
      'Hexagonal Architecture',
      'Awilix (IoC)',
      'JWT',
      'RBAC',
    ],
  },
  {
    category: 'Frontend Development',
    items: [
      'ReactJS',
      'Next.js 15 (App Router)',
      'Tailwind CSS',
      'HTML5 / CSS3',
      'Ant Design',
      'Responsive Web Design',
    ],
  },
  {
    category: 'Databases & Caching',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Redis (Pub/Sub & Caching)',
      'MySQL',
      'MSSQL',
      'Prisma ORM',
      'TypeORM',
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      'Docker',
      'CI/CD (GitLab / GitHub Actions)',
      'Git',
      'Swagger / OpenAPI',
      'Postman',
      'Linux',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor of Engineering in Software Engineering',
    school: 'Sai Gon University',
    location: 'Ho Chi Minh City, Vietnam',
    date: '2021 – 2026',
    gpa: '2.89 / 4.0',
    details: [
      'Focused on Computer Science fundamentals, Software Architecture, Distributed Systems, and Advanced Database Management.',
      'Key Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Systems, Web Engineering, Software Quality Assurance & Testing.',
    ],
  },
]

const contact = {
  email: 'quoctien01062003@gmail.com',
  phone: '(+84) 974 975 649',
}

export { header, about, projects, skills, experience, education, contact }
