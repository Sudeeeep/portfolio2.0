// TODO: replace with the real deployed URL — used for OG tags, sitemap, robots, and JSON-LD
export const siteUrl = 'https://sudeep-nair.vercel.app'

export const personalInfo = {
  name: 'Sudeep Nair',
  role: 'Software Engineer',
  location: 'Dublin, Ireland',
  email: 'sudeepn15@gmail.com',
  github: 'https://github.com/Sudeeeep',
  linkedin: 'https://www.linkedin.com/in/sudeep-nair-1295a8201/',
  cv: 'https://drive.google.com/file/d/1XBg7p4-lqT-9K97SToAH5YmmcTMiOB4j/view?usp=sharing',
  sourceRepo: 'https://github.com/Sudeeeep/portfolio2.0',
}

export const hero = {
  headline: 'Software Engineer',
  intro:
    'I started out in enterprise integration, building the middleware that kept Coupa and SAP procurement systems talking to each other at around 2,000 transactions a day. These days I build closer to the product: event-driven backends, APIs, and LLM-powered tools.',
  now: 'MSc Computing Science (UCC) graduate · open to backend & full-stack roles, Dublin or remote',
}

export const projects = [
  {
    name: 'DocTalk',
    tagline: 'ask questions of your PDFs',
    paragraphs: [
      'A RAG document assistant. You upload PDFs, ask questions in plain English, and get answers grounded in the text. Documents are chunked and embedded into ChromaDB, and every answer cites the exact passages it came from, highlighted in the source document, so you can check the model is not making things up.',
      'FastAPI backend with a LangChain pipeline, React front end, PostgreSQL for documents and sessions. Deployed on Render.',
    ],
    stack: ['python', 'fastapi', 'langchain', 'chromadb', 'openai', 'react', 'postgresql'],
    github: 'https://github.com/Sudeeeep/docTalk',
    link: 'https://doctalk-frontend-0eqm.onrender.com/',
  },
  {
    name: 'Expense Tracker',
    tagline: 'event-driven microservices, end to end',
    paragraphs: [
      'An expense platform built the way a real production system would be, with separate auth, tracking, and reporting services. Spending events flow through Kafka to drive budget alerts, Redis caches hot reads, and JWTs carry identity between services.',
      'The infrastructure was as much the point as the features. Everything runs in Docker containers on Kubernetes, and the cloud resources are defined in code with AWS CDK.',
    ],
    stack: ['java', 'spring-boot', 'kafka', 'postgresql', 'redis', 'docker', 'kubernetes', 'aws-cdk'],
    github: null,
    link: null,
  },
  {
    name: 'Dotify',
    tagline: 'a Spotify client from scratch',
    paragraphs: [
      'A full-featured Spotify clone built against the real Spotify Web API, with OAuth login, playback, and search across artists, albums, playlists, and tracks. Most of the work was in integrating a large third-party API properly: getting the OAuth flow right and modelling Spotify’s response shapes in TypeScript instead of scattering any’s.',
    ],
    stack: ['react', 'typescript', 'spotify-api', 'oauth'],
    github: 'https://github.com/Sudeeeep/Dotify',
    link: 'https://dotify-react.vercel.app/',
  },
]

export const skills = [
  { label: 'languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'C/C++'] },
  { label: 'frameworks', items: ['Spring Boot', 'FastAPI', 'React', 'LangChain', 'JUnit'] },
  { label: 'infra', items: ['Docker', 'Kubernetes', 'AWS', 'Kafka', 'PostgreSQL', 'MongoDB', 'Redis', 'Jenkins'] },
  { label: 'practices', items: ['REST APIs', 'Microservices', 'Event-Driven Architecture', 'CI/CD', 'TDD', 'RAG / LLMs'] },
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
