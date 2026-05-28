import Sidebar from '@/components/Sidebar'

const PROJECTS = [
  {
    name: 'Expense Tracker',
    desc: 'Microservices expense app with dedicated auth, tracking, and reporting services. JWT auth, event-driven alerts, Redis caching, cloud infra on AWS.',
    tags: ['java', 'spring-boot', 'kafka', 'postgresql', 'docker', 'kubernetes', 'aws-cdk', 'redis'],
  },
  {
    name: 'DocTalk',
    desc: 'RAG-powered document assistant for natural language Q&A over uploaded PDFs. Semantic search with source citation highlighting; deployed on Render.',
    tags: ['python', 'fastapi', 'langchain', 'chromadb', 'openai', 'react', 'postgresql'],
  },
  {
    name: 'Dotify',
    desc: 'Full-featured Spotify clone with OAuth login, playback, and search across artists, albums, playlists, and tracks via the Spotify API.',
    tags: ['react', 'typescript', 'spotify-api', 'oauth'],
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="ml-0 md:ml-[260px] flex-1 px-6 py-16 md:px-16 md:py-20 max-w-[780px]">

        {/* Intro */}
        <section id="intro" className="mb-24">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted mb-8">
            // intro
          </p>
          <p className="text-[1.4rem] leading-[1.65] tracking-[-0.01em] max-w-[42ch] font-light">
            I spent two years making enterprise systems talk to each other
            cleanly. Now I&apos;m building things closer to the product —{' '}
            <strong className="font-normal">
              microservices, event-driven backends, and LLM-powered tools
            </strong>
            . MSc Computing Science. Dublin-based. Open to backend and
            full-stack roles.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-24">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted mb-8">
            // projects
          </p>
          <div>
            {PROJECTS.map((p) => (
              <article
                key={p.name}
                className="py-7 border-b border-black/10 first:border-t
                           transition-[padding] duration-200 hover:pl-2 cursor-pointer"
              >
                <p className="text-[1.05rem] font-normal mb-[0.35rem] tracking-[-0.01em]">
                  {p.name}
                </p>
                <p className="text-[0.82rem] text-muted max-w-[46ch] leading-[1.55]">
                  {p.desc}
                </p>
                {p.tags.length > 0 && (
                  <div className="flex flex-wrap gap-[0.35rem] mt-[0.65rem]">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.62rem] text-muted
                                   bg-black/4 border border-black/10
                                   px-[0.4rem] py-[0.1rem] rounded-xs tracking-[0.02em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-24">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted mb-8">
            // experience
          </p>
          <div className="flex flex-col gap-8">
            <article className="grid grid-cols-1 gap-1 md:grid-cols-[120px_1fr] md:gap-6">
              <p className="font-mono text-[0.7rem] text-muted pt-[0.2rem] leading-[1.5]">
                2021 →<br className="hidden md:block" /> 2023
              </p>
              <div>
                <p className="text-[0.9rem] font-normal mb-[0.2rem]">Software Engineer</p>
                <p className="text-[0.8rem] text-muted mb-2">LTIMindtree · Mumbai, India</p>
                <p className="text-[0.8rem] text-muted leading-[1.6]">
                  REST APIs and Spring Batch jobs for Coupa–SAP procurement
                  middleware, processing{' '}
                  <strong className="font-mono font-normal text-fg">~2,000 transactions daily</strong>.
                  Reduced failed sync incidents by{' '}
                  <strong className="font-mono font-normal text-fg">~40%</strong> over
                  6 months through error handling, retry logic, and idempotency
                  checks. Maintained{' '}
                  <strong className="font-mono font-normal text-fg">~80% test coverage</strong>{' '}
                  across bi-weekly Agile sprints via Jenkins CI/CD.
                </p>
              </div>
            </article>
          </div>

          {/* Education */}
          <div className="mt-14">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted mb-8">
              // education
            </p>
            <div className="flex flex-col gap-8">
              {[
                {
                  period: '2024 → 2025',
                  role: 'MSc Computing Science',
                  place: 'University College Cork · 2:1',
                },
                {
                  period: '2018 → 2021',
                  role: 'BSc Information Technology',
                  place: 'Thakur College of Science & Commerce · CGPA 8.5/10',
                },
              ].map((e) => (
                <article
                  key={e.role}
                  className="grid grid-cols-1 gap-1 md:grid-cols-[120px_1fr] md:gap-6"
                >
                  <p className="font-mono text-[0.7rem] text-muted pt-[0.2rem] leading-[1.5]">
                    {e.period}
                  </p>
                  <div>
                    <p className="text-[0.9rem] font-normal mb-[0.2rem]">{e.role}</p>
                    <p className="text-[0.8rem] text-muted">{e.place}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-24">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted mb-8">
            // contact
          </p>
          <div className="flex flex-col gap-2">
            {[
              { label: 'email', value: 'sudeepn15@gmail.com', href: 'mailto:sudeepn15@gmail.com' },
              { label: 'github', value: 'github.com/Sudeeeep', href: 'https://github.com/Sudeeeep' },
              { label: 'linkedin', value: 'linkedin.com/in/sudeep-nair', href: 'https://www.linkedin.com/in/sudeep-nair-1295a8201/' },
              { label: 'location', value: 'Dublin, Ireland', href: null },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex items-center gap-4 font-mono text-[0.8rem]">
                <span className="text-muted min-w-[70px]">{label}</span>
                {href ? (
                  <a
                    href={href}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="text-fg no-underline border-b border-transparent
                               hover:border-fg transition-[border-color] duration-150
                               focus-visible:outline-2 focus-visible:outline-fg
                               focus-visible:outline-offset-2 rounded-sm"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-fg">{value}</span>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}
