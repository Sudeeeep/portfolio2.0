// Knowledge base for the "ask me" chat. Single source of truth for what the
// bot is allowed to say about Sudeep. Facts only; the persona and rules live
// in the route handler's system prompt. Keep in sync with the CV.
export const knowledge = `
## About
- Name: Sudeep Nair
- Role: Software Engineer
- Location: Dublin, Ireland
- Status: MSc Computing Science graduate (University College Cork), open to backend and full-stack roles in Dublin or remote.
- Summary: Software Engineer with an MSc in Computing Science and 2+ years of professional experience designing, building, and shipping high-quality software end-to-end. Strong backend and API design experience in Java and Spring Boot. Experienced with AI-assisted development tooling, with hands-on experience building and shipping LLM-powered applications with strong validation and testing discipline. Curious, collaborative, and passionate about delivering high-quality experiences with real customer impact.
- Contact: email sudeepn15@gmail.com · GitHub github.com/Sudeeeep · LinkedIn linkedin.com/in/sudeep-nair-1295a8201

## Technical skills
- Languages: Java, Python, TypeScript, JavaScript, C++
- Frontend & UI: React, HTML, CSS, Tailwind CSS
- Backend & APIs: Spring, Spring Boot, FastAPI, RESTful APIs, WebSockets, API design, JUnit
- AI & GenAI: LangChain, LangGraph, RAG, MCP (Model Context Protocol), agentic AI, LLM integration
- Cloud & DevOps: AWS, Docker, Kubernetes, Jenkins, GitHub Actions, Git, Linux
- Databases: SQL, PostgreSQL, MongoDB, Redis
- CS fundamentals: data structures, algorithms, OOP, design patterns
- Practices: microservices, event-driven architecture, CI/CD, TDD

## Work experience

### LTIMindtree — Software Engineer (Consultant, Package Implementation), Mumbai, India, 2021–2023
- Designed and built REST APIs in Java and Spring Boot, breaking product requirements into clear technical tasks to automate data exchange between enterprise systems (Coupa and SAP), processing ~2,000 transactions daily.
- Developed data transformation and field mapping logic across 5+ document types (purchase requisitions, purchase orders, invoices, goods receipts, vendor master data), ensuring consistent data integrity.
- Built and scheduled Spring Batch jobs to automate master and transactional data sync between Coupa and SAP, saving ~3 hours of manual analyst work per run.
- Hardened REST and SOAP API integrations with error handling, retry logic, and idempotency checks, reducing failed sync incidents by ~40% and improving overall system reliability.
- Applied a scientific approach to diagnosing production issues across API, data, and configuration layers, using logs and structured root cause analysis to cut mean resolution time from ~4 hours to under 1 hour.
- Defined and implemented a strong testing strategy with JUnit unit and integration tests, maintaining ~80% code coverage across bi-weekly Agile sprints, with builds automated through Jenkins CI/CD pipelines.

### Marks & Spencer — Customer Assistant (part-time), Cork, Ireland, 2024–present
- Part-time role alongside/after the MSc: high-volume customer interactions, teamwork, and operational reliability in a fast-paced environment.

## Projects

### DocTalk (RAG-powered document assistant) — github.com/Sudeeeep/docTalk · live at doctalk-frontend-0eqm.onrender.com
- Full-stack LLM-powered application built end-to-end: LangChain for orchestration, ChromaDB for vector retrieval, and the OpenAI API, shipped with strong validation, testing, and error handling.
- FastAPI backend with document ingestion, text chunking, and vector embedding pipelines; prompt engineering for grounded, reliable responses with source citations, so answers can be verified against the source passage.
- React front end with Tailwind CSS supporting multi-PDF upload, conversational Q&A, and display of the source passages used for each answer.
- Containerised with Docker, deployed with an automated GitHub Actions CI/CD pipeline; built with active use of AI-assisted development tooling.

### Expense Tracker (event-driven microservices)
- Microservices application in Java and Spring Boot with dedicated services for authentication, user management, expense tracking, and reporting, orchestrated via a Kong API Gateway.
- JWT-based authentication and tokenization across services, with a centralised auth service for secure session management backed by PostgreSQL.
- Apache Kafka for event-driven inter-service communication and a real-time notification pipeline, improving fault tolerance through asynchronous service decoupling.
- Containerised with Docker, deployed and managed on Kubernetes clusters on AWS for scalability and high availability, infrastructure provisioned with CDK, and Redis caching to reduce database load on high-frequency reads.
- No public repo at the moment.

### Dotify (Spotify clone) — github.com/Sudeeeep/Dotify · live at dotify-react.vercel.app
- Full-featured Spotify clone built against the real Spotify Web API: OAuth login, playback, and search across artists, albums, playlists, and tracks.
- Built with React and TypeScript; the main work was the OAuth flow and typing Spotify's API response shapes properly.

## Education
- MSc Computing Science, University College Cork, 2024–2025, 2:1 (Second Class Honours)
- BSc Information Technology, Thakur College of Science & Commerce, Mumbai, 2018–2021, CGPA 8.5/10

## About this chat / this website
- The portfolio site is built with Next.js and Tailwind CSS, fully server-rendered with almost no client-side JavaScript (this chat is the only client component).
- This chat reuses the design of Sudeep's DocTalk project (context-grounded answers with an honesty rule) but deliberately skips retrieval: a resume fits in a single prompt, so RAG would add latency and infrastructure for no benefit. For question answering over large document sets, see DocTalk.
`
