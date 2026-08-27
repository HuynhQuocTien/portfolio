const header = {
  homepage: 'https://github.com/HuynhQuocTien',
  title: 'HQT.',
}

const about = {
  name: 'Huynh Quoc Tien',
  role: 'Full-Stack JavaScript / TypeScript Developer',
  description:
    'Results-driven Software Engineer with a solid foundation in computer science and extensive hands-on experience architecting high-performance, real-time web applications and scalable backend systems. Specialized in NestJS, Next.js 15, ReactJS, TypeScript, PostgreSQL, and Redis, with a proven track record of eliminating concurrency race conditions, optimizing complex database queries using recursive CTEs, and streamlining CI/CD pipelines with Docker. Passionate about clean architecture, sub-100ms real-time experiences, and delivering high-impact, enterprise-grade software.',
  resume: 'My_Resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/huynhquoctienn',
    github: 'https://github.com/HuynhQuocTien',
    gitlab: 'https://gitlab.com/HuynhQuocTien',
  },
}

const experience = [
  {
    title: 'Freelance Full-Stack Developer',
    company: 'Client Project (Chip-equipped Driving Test Booking System)',
    location: 'Ho Chi Minh City, Vietnam',
    date: 'Dec 2025 – May 2026',
    details: [
      'Architected and delivered an end-to-end booking platform for chip-equipped driving test simulations using NestJS, Next.js 15 (App Router), Prisma, and PostgreSQL.',
      'Eliminated double-booking and race conditions by engineering a distributed real-time slot-locking mechanism with Redis and Socket.io, broadcasting slot state changes with sub-100ms latency.',
      'Designed automated cron workers using @nestjs/schedule to auto-release expired pending reservations (15-min TTL), maximizing vehicle utilization and eliminating idle lock holding time.',
      'Built a high-performance, mobile-responsive time-slot matrix UI using Next.js 15 and Tailwind CSS, enabling real-time slot state reflection and seamless multi-vehicle schedule tracking.',
      'Integrated automated VietQR dynamic payment generation and enforced robust Role-Based Access Control (RBAC) via JWT and custom NestJS Guard interceptors.',
    ],
  },
  {
    title: 'Backend Developer Intern',
    company: 'VNA International Technology JSC',
    location: 'Thu Duc City, Ho Chi Minh City, Vietnam',
    date: 'May 2025 – Nov 2025',
    details: [
      'Developed core enterprise backend modules for a labor safety reporting platform using NestJS, TypeORM, and PostgreSQL, reducing manual reporting turnaround time by 30%.',
      'Architected modular, scalable RESTful APIs adhering to clean Service/DTO patterns and secured endpoints with JWT authentication and custom security Guards.',
      'Automated cloud asset workflows by integrating Multer-S3 with MinIO object storage, implementing scheduled cron tasks for automated asset retention and lifecycle cleanup.',
      'Engineered management modules for user-roles, report configurations, and enterprise approval workflows.',
      'Integrated Nodemailer for automated transactional email notification dispatch and generated interactive Swagger/OpenAPI documentation, accelerating frontend integration velocity by 20%.',
    ],
  },
]

const projects = [
  {
    name: 'Swarm.io - Real-Time Multiplayer .io Game',
    description:
      'High-throughput real-time multiplayer .io game achieving consistent 60 FPS performance and seamless synchronization for 50+ concurrent players. Engineered server-authoritative state management and spatial collision detection in Node.js & Socket.io ensuring 100% deterministic state consistency, scaled communication with Redis Pub/Sub cutting peak message latency by 50%, and built an ultra-responsive ReactJS UI.',
    stack: [
      'ReactJS',
      'Node.js',
      'Socket.io',
      'Redis Pub/Sub',
      'Tailwind CSS',
      'WebSockets',
    ],
    sourceCode: 'https://gitlab.com/HuynhQuocTien/swarm.io',
    livePreview: '',
  },
  {
    name: 'Esports Tournament Management Platform',
    description:
      'High-performance full-stack platform managing 100+ concurrent tournaments with multi-tier RBAC. Automated bracket generation for Single and Double Elimination formats (slashing administrative overhead by 80%), integrated real-time match and score synchronization via Redis Pub/Sub & WebSockets (<100ms latency), optimized complex PostgreSQL hierarchical queries using recursive CTEs and indexing strategies, and automated CI/CD with Docker & GitHub Actions (cutting deployment time by 50%).',
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
    name: 'Multiplayer Tetris Game',
    description:
      'Real-time competitive multiplayer Tetris game supporting 10+ simultaneous players per room with sub-50ms synchronization latency. Implemented server-side deterministic piece sequence synchronization for 100% state consistency across clients, dynamic difficulty progression, Clean Code & HOC architecture improving component reusability by 25%, and automated CI/CD pipeline cutting deployment time by 40%.',
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
    name: 'Driving Test Simulation Booking Platform',
    description:
      'Production-ready client booking platform featuring a concurrency-safe slot-locking engine powered by Redis & Socket.io (sub-100ms live updates) preventing race conditions, 15-minute reservation TTL cron workers, automated dynamic VietQR instant payment reconciliation, and granular Role-Based Access Control.',
    stack: [
      'NestJS',
      'Next.js 15',
      'Prisma ORM',
      'PostgreSQL',
      'Redis',
      'Socket.io',
      'Tailwind CSS',
      'VietQR',
    ],
    sourceCode: 'https://github.com/HuynhQuocTien',
    livePreview: '',
  },
  {
    name: 'Enterprise E-Commerce Platform',
    description:
      'Robust e-commerce platform supporting 500+ daily requests with 99.9% uptime. Built with ASP.NET Core and ReactJS, featuring secure RBAC authentication (100% data security), MSSQL data management with sub-200ms product search times, asynchronous server optimization reducing average page load by 30%, and an admin dashboard cutting order processing time by 20%.',
    stack: [
      'ReactJS',
      'ASP.NET Core',
      'C#',
      'MSSQL',
      'Socket.io',
      'RESTful API',
    ],
    sourceCode: 'https://github.com/HuynhQuocTien/e-commerce-website.git',
    livePreview: '',
  },
  {
    name: 'Spotify Clone & AI Streaming Platform',
    description:
      'Full-stack audio & video streaming web application featuring playlist management, RESTful APIs, offline media downloads, real-time sync with WebSockets, and natural-language AI music recommendation powered by Google Gemini LLM.',
    stack: [
      'ReactJS',
      'Django',
      'Python',
      'MongoDB',
      'Socket.io',
      'Google Gemini AI',
      'Ant Design',
    ],
    sourceCode: 'https://github.com/HuynhQuocTien/Spotify',
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
      'RESTful API',
      'WebSockets (Socket.io)',
      'Prisma ORM',
      'TypeORM',
      'JWT & RBAC',
      'Microservices / Event-Driven',
    ],
  },
  {
    category: 'Frontend Development',
    items: [
      'ReactJS',
      'Next.js 15 (App Router)',
      'TypeScript / JavaScript (ES6+)',
      'Tailwind CSS',
      'Ant Design',
      'HTML5 / CSS3',
      'Responsive & Mobile-First UI',
    ],
  },
  {
    category: 'Databases & Caching',
    items: [
      'PostgreSQL (Recursive CTEs, Indexing)',
      'Redis (Pub/Sub & Distributed Caching)',
      'MySQL',
      'MSSQL',
      'MongoDB',
      'Supabase',
    ],
  },
  {
    category: 'DevOps, Cloud & Tools',
    items: [
      'Docker & Containerization',
      'CI/CD (GitHub Actions)',
      'AWS S3 / MinIO Object Storage',
      'Git / GitHub / GitLab',
      'Swagger / OpenAPI',
      'Postman',
      'Linux',
    ],
  },
]

const education = [
  {
    degree: "Engineer's Degree in Software Engineering",
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
  phone: '0974975649',
}

export { header, about, projects, skills, experience, education, contact }
