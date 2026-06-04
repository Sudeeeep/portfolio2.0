export const personalInfo = {
  name: 'Sudeep Nair',
  role: 'Software Engineer',
  bio: 'I spent two years making enterprise systems talk to each other cleanly. Now I\'m building things closer to the product — microservices, event-driven backends, and LLM-powered tools. MSc Computing Science. Dublin-based.',
  location: 'Dublin, Ireland',
  email: 'sudeepn15@gmail.com',
  github: 'https://github.com/Sudeeeep',
  linkedin: 'https://www.linkedin.com/in/sudeep-nair-1295a8201/',
  cv: 'https://drive.google.com/file/d/1XBg7p4-lqT-9K97SToAH5YmmcTMiOB4j/view?usp=sharing',
}

export const typewriterRoles = [
  'build reliable backend systems.',
  'architect microservices.',
  'build LLM-powered tools.',
  'write clean, testable code.',
]

export const skills = {
  languages: [
    { name: 'Java' },
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'C/C++' },
  ],
  frameworks: [
    { name: 'Spring Boot' },
    { name: 'FastAPI' },
    { name: 'React' },
    { name: 'LangChain' },
    { name: 'JUnit' },
  ],
  tools: [
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'AWS' },
    { name: 'Kafka' },
    { name: 'PostgreSQL' },
    { name: 'MongoDB' },
    { name: 'Redis' },
    { name: 'Git' },
    { name: 'Jenkins' },
  ],
  competencies: [
    'REST APIs',
    'Microservices',
    'CI/CD',
    'RAG / LLMs',
    'Event-Driven Architecture',
    'TDD',
    'Agile / Scrum',
  ],
}

export const projects = [
  {
    name: 'DocTalk',
    desc: 'RAG-powered document assistant for natural language Q&A over uploaded PDFs. Semantic search with source citation highlighting; deployed on Render.',
    tags: ['python', 'fastapi', 'langchain', 'chromadb', 'openai', 'react', 'postgresql'],
    github: 'https://github.com/Sudeeeep/docTalk',
    link: 'https://doctalk-frontend-0eqm.onrender.com/'
  },
  {
    name: 'Dotify',
    desc: 'Full-featured Spotify clone with OAuth login, playback, and search across artists, albums, playlists, and tracks via the Spotify API.',
    tags: ['react', 'typescript', 'spotify-api', 'oauth'],
    github: 'https://github.com/Sudeeeep/Dotify',
    link: 'https://dotify-react.vercel.app/'
  },
  {
    name: 'Expense Tracker',
    desc: 'Microservices expense app with dedicated auth, tracking, and reporting services. JWT auth, event-driven alerts, Redis caching, cloud infra on AWS.',
    tags: ['java', 'spring-boot', 'kafka', 'postgresql', 'docker', 'kubernetes', 'aws-cdk', 'redis'],
    github: '#',
    link: '#'
  },

]

export const experience = [
  {
    period: '2021 – 2023',
    role: 'Software Engineer',
    company: 'LTIMindtree',
    location: 'Mumbai, India',
    bullets: [
      'Designed and maintained REST APIs and Spring Batch jobs for Coupa–SAP procurement middleware, processing ~2,000 transactions daily.',
      'Reduced failed sync incidents by ~40% over 6 months through error handling, retry logic, and idempotency checks.',
      'Maintained ~80% test coverage across bi-weekly Agile sprints via Jenkins CI/CD pipelines.',
    ],
  },
]

export const education = [
  {
    period: '2024 – 2025',
    degree: 'MSc Computing Science',
    institution: 'University College Cork',
    detail: '2:1 (Second Class Honours)',
  },
  {
    period: '2018 – 2021',
    degree: 'BSc Information Technology',
    institution: 'Thakur College of Science & Commerce',
    detail: 'CGPA 8.5/10',
  },
]
