const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://huynhquoctien.github.io/portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Huynh Quoc Tien',
  role: 'Software Engineer',
  description:
    'I am a dedicated Software Engineer with a keen focus on delivering innovative solutions. Known for tackling complex challenges with ease, I thrives in dynamic environments, leveraging strong problem-solving skills and attention to detail. With a passion for creating efficient and scalable systems, I consistently drives projects forward while ensuring seamless user experiences',
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
      'Built a full-featured e-commerce platform with product browsing, cart management, order processing, and real-time notifications. Includes secure authentication, MSSQL integration, and an admin dashboard for inventory and orders.',
    stack: ['C#', 'ASP.NET', 'MSSQL', 'Socket.io'],
    sourceCode: 'https://github.com/HuynhQuocTien/e-commerce-website.git',
    livePreview: '#',
  },
  {
    name: 'Diary Medical Website',
    description:
      'Developed a web-based medical diary system for families to track health records, view medical history, and get automated appointment reminders. Supports secure data handling and role-based access control.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Hibernate'],
    sourceCode: 'https://github.com/HuynhQuocTien/J2EE_DiaryMedical.git',
    livePreview: '#',
  },
  {
    name: 'Car Rental Website',
    description:
      'Created a responsive car rental website with multi-car booking, detailed vehicle info, reservation deposits, and return inspection with damage penalties. Includes an admin dashboard for managing cars and bookings.',
    stack: ['PHP', 'MySQL', 'Bootstrap 5', 'Dashmix'],
    sourceCode: 'https://github.com/HuynhQuocTien/Car-Rental-Website.git',
    livePreview: '#',
  },
  {
    name: 'Real-Time Chat Application',
    description:
      'Built a Zalo-inspired real-time messaging app supporting one-on-one, group chats, and media sharing. Features include user authentication, presence indicators, notifications, and performance optimization.',
    stack: ['Django', 'Python', 'MongoDB', 'Socket.io'],
    sourceCode: 'https://github.com/HuynhQuocTien/e-commerce-website.git',
    livePreview: '#',
  },
];


const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'ReactJS',
  'MySQL',
  'SQL Server',
  'C#',
  'Django',
  'Firebase',
  'Material UI',
  'Git',
  'Docker',
  'Python',
  'Java',
  'Bootstrap',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'quoctien01062003@mail.com',
}

export { header, about, projects, skills, contact }
