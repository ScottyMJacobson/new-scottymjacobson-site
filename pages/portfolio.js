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
    `I build things with an eye for detail and a love for test coverage.
    Give me your business needs and I'll deliver you a spec and then some working, maintainable software.
    With 7 years and counting on JS stacks, I'm no stranger to picking up a new technology or framework to get the job done.`,
  resume: 'https://drive.google.com/uc?export=download&id=1RDzCsOznhQ85I5YstadwrAXXK0Y84mQQ',
  social: {
    linkedin: 'https://linkedin.com/in/scottymjacobson',
    github: 'https://github.com/scottymjacobson',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'TASL; TASL Listening Sessions',
    description:
      'For my album "TASL; TASL", I set up a live listening room where fans could RSVP for specific sessions, and then log in from across the world to listen to the album in sync.',
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Vercel', 'Strapi', 'MongoDB', 'Magic.link'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Eko Core Team',
    description:
      "As project lead, I led the development of Eko's cli tooling for bootstrapping and test-covering microservices; the task force brought many of the company's services from 0% to ~70% coverage, and the new create-service cli reduced the speed of shipping a new test-covered service from days to minutes.",
    stack: ['Node.js', 'Jest', 'AWS', 'Kubernetes', 'CircleCI', 'MongoDB', 'Kafka', 'TDD'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Sublime Light',
    description:
      "At Sublime Light, I've managed and mentored a rotating team of volunteer junior developers to develop the MVP for a multimedia React app. The app leads users through an authentic kabbalistic audiovisual meditative experience by syncing ancient glyphs with audiovisual cues.",
    stack: ['React', 'Node.js', 'Webpack'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'TypeScript',
  'ES6',
  'Node.js',
  'Express',
  'React',
  'Next.js',
  'Jamstack',
  'AWS',
  'TDD',
  'HTML',
  'CSS',
  'Git',
  'CI/CD',
  'Jest',
  'Serverless',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'scottymjacobson@gmail.com',
}

export { header, about, projects, skills, contact }
