import Section from '@/components/Section'
import { projects } from '@/data/portfolio'

export default function Projects() {
  return (
    <Section id="work" label="selected work" title="Things I’ve built">
      <div className="flex flex-col gap-12">
        {projects.map((p) => (
          <article key={p.name}>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
              <h3 className="font-semibold">
                {p.name}<span className="text-muted font-normal">: {p.tagline}</span>
              </h3>
              <span className="flex items-center gap-4 font-mono text-xs">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline underline-offset-4"
                  >
                    code ↗
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline underline-offset-4"
                  >
                    live ↗
                  </a>
                )}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {p.paragraphs.map((para, i) => (
                <p key={i} className="text-muted text-sm leading-relaxed max-w-prose">
                  {para}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
