import Section from '@/components/Section'
import { experience } from '@/data/portfolio'

function renderBullet(text: string) {
  return text.split(/(~[\d,]+%?)/g).map((part, i) =>
    /^~[\d,]+%?$/.test(part) ? (
      <strong key={i} className="font-mono text-ink font-medium">{part}</strong>
    ) : (
      part
    )
  )
}

export default function Experience() {
  return (
    <Section id="experience" label="experience" title="Where I’ve worked">
      <div className="flex flex-col gap-10">
        {experience.map((e) => (
          <div key={e.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-1">
              <h3 className="font-semibold">
                {e.role} · <span className="text-accent">{e.company}</span>
              </h3>
              <p className="font-mono text-muted text-xs">{e.period}</p>
            </div>
            <p className="text-muted text-sm mb-4">{e.location}</p>
            <ul className="flex flex-col gap-2.5">
              {e.bullets.map((b, i) => (
                <li key={i} className="text-muted text-sm leading-relaxed flex gap-3">
                  <span className="text-accent shrink-0">▹</span>
                  <span>{renderBullet(b)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
