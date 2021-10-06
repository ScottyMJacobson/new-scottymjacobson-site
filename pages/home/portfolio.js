const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/home',
  title: 'SJ.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Scotty Jacobson',
  role: 'Full Stack Engineer',
  description:
    "I build things with an eye for detail and a love for test coverage. Give me your business needs and I'll deliver you a spec and then some working, maintainable software. It's been 6 years and counting on JS stacks, and I never shy away from learning the newest technologies.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/scottymjacobson',
    github: 'https://github.com/scottymjacobson',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Eko Core Team Service Testing Utils',
    description:
      "As leader of the service testing core team, I led the development of Eko's internal testing libraries, set internal standards and best practice, and helped bring many of the company's microservices from 0% to ~70% coverage.",
    stack: ['Node.js', 'Jest', 'AWS', 'Kubernetes', 'CircleCI'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  // {
  //   name: 'Project 2',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'Node.js',
  'React',
  'TypeScript',
  'Next.js',
  'Jamstack',
  'AWS',
  'TDD',
  'HTML',
  'CSS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Python',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'scottymjacobson@mail.com',
}

export { header, about, projects, skills, contact }
