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
  resume: '#',
  social: {
    linkedin: 'https://linkedin.com/in/huynhquoctienn/',
    github: 'https://github.com/huynhquoctien',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Test Management Application',
    description:
      'Test Management Application is a tool for organizing and tracking software test cases. It simplifies test case creation, execution, and reporting with seamless integration into development workflows. Designed to improve collaboration and streamline QA processes, it ensures efficient test management.',
    stack: ['C#', 'Winform', 'SQL Server'],
    sourceCode: 'https://github.com/app-test-management',
    livePreview: 'https://github.com',
  },
  {
    name: 'Website Hotel Management',
    description:
      'Hotel Management is a web-based system for managing hotel operations, including room bookings, guest management, and billing. Built using Laravel, Docker, and MySQL, this project offers a scalable and flexible solution for streamlining hotel services. The system provides a user-friendly interface for staff and administrators, enhancing efficiency and guest satisfaction.',
    stack: ['Laravel', 'Docker', 'MySQL'],
    sourceCode: 'https://github.com/Hotel-House',
    livePreview: 'https://github.com',
  },
  {
    name: 'Website Chat Fun',
    description:
      'Website Chat Fun is an interactive chat platform designed for real-time communication on websites. Built with Python, Firebase, and React, this project enables seamless user interaction with features like instant messaging, chat rooms, and notifications. It offers a responsive and engaging experience for users, with robust backend support for scalability and real-time updates.',
    stack: ['Python', 'Firebase', 'React'],
    sourceCode: 'https://github.com/app-chat-fun',
    livePreview: 'https://github.com',
  },
]

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
