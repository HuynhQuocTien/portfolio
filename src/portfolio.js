const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://huynhquoctien.github.io/portfolio',
  title: 'JS.',
}

const about = {
  name: 'Huynh Quoc Tien',
  role: 'Software Engineer',
  description:
    'I’m a passionate Software Engineer currently in my final year at Sai Gon University. I specialize in full-stack web development with a strong backend orientation. I enjoy turning complex problems into scalable solutions, and I’m always excited to explore new technologies. My approach combines clean architecture, security best practices, and a focus on performance and user experience.',
  resume: 'My_Resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/huynhquoctienn/',
    github: 'https://github.com/huynhquoctien',
  },
}

const projects = [
  {
    name: 'Ecommerce Website',
    description:
      'Built a full-featured e-commerce platform with product browsing, cart management, order processing, and real-time notifications. Implemented secure authentication, MSSQL integration, and a powerful admin dashboard.',
    stack: ['C#', 'ASP.NET', 'ReactJS', 'MSSQL', 'Socket.io'],
    sourceCode: 'https://github.com/HuynhQuocTien/e-commerce-website.git',
    livePreview: '#',
  },
  {
    name: 'Diary Medical Website',
    description:
      'Developed a web-based medical diary system for families to manage health records, view history, and receive appointment reminders. Includes secure role-based access and responsive design.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Hibernate'],
    sourceCode: 'https://github.com/HuynhQuocTien/J2EE_DiaryMedical.git',
    livePreview: '#',
  },
  {
    name: 'Car Rental Website',
    description:
      'Created a responsive car rental platform with vehicle management, real-time availability, deposits, damage reports, and a complete admin dashboard.',
    stack: ['PHP', 'MySQL', 'Bootstrap 5', 'Dashmix'],
    sourceCode: 'https://github.com/HuynhQuocTien/Car-Rental-Website.git',
    livePreview: '#',
  },
  {
    name: 'Real-Time Chat Application',
    description:
      'Built a Zalo-inspired messaging app supporting 1-1 and group chat, media sharing, notifications, and presence status using WebSocket and MongoDB.',
    stack: ['Django', 'Python', 'MongoDB', 'Socket.io'],
    sourceCode: 'https://github.com/HuynhQuocTien/e-commerce-website.git', 
    livePreview: '#',
  },
  {
    name: 'Spotify Clone Web App',
    description:
      'Built a full-stack Spotify-like app for music and video streaming with REST APIs, download support, playlists, and AI-powered search using Google Gemini.',
    stack: ['Django', 'ReactJS', 'MongoDB', 'Ant Design', 'Socket.io'],
    sourceCode: 'https://github.com/HuynhQuocTien/Spotify',
    livePreview: '#',
  },
];



const skills = [
  // Frontend
  'HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Bootstrap', 'Material UI',

  // Backend
  'PHP', 'C#', 'Java', 'Python', 'Django', 'Spring Boot', 'Node.js',

  // Database
  'MySQL', 'MongoDB', 'PostgreSQL', 'SQL Server',

  // Tools
  'Git', 'Docker', 'Postman', 'VS Code', 'Visual Studio', 'PyCharm',

  // Others
  'Socket.io', 'RESTful API', 'Ant Design', 'MinIO',
]

const experience = [
  {
    title: 'Backend Developer Intern',
    company: 'VNA International Technology JSC',
    location: 'Thu Duc City, Ho Chi Minh City',
    date: 'May 2025 – Jul 2025',
    details: [
      'Developed a labor safety reporting system using NestJS, PostgreSQL, and MinIO.',
      'Built modular RESTful APIs secured with JWT, decorators, and Guards.',
      'Integrated file upload with Multer-S3 and MinIO, including auto-deletion logic.',
      'Implemented enterprise, role, report, and approval modules with email notifications.',
      'Documented APIs with Swagger and collaborated with frontend team for smooth integration.',
    ],
  },
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'quoctien01062003@mail.com',
}

export { header, about, projects, skills, contact,experience }
