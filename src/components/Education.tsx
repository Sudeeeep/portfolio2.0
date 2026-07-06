import Section from '@/components/Section'
import { education } from '@/data/portfolio'

export default function Education() {
  return (
    <Section id="education" label="education" title="Where I studied">
      <div className="flex flex-col gap-6">
        {education.map((e) => (
          <div key={e.degree} className="flex flex-wrap items-baseline justify-between gap-x-4">
            <div>
              <h3 className="font-semibold text-sm">{e.degree}</h3>
              <p className="text-muted text-sm">
                {e.institution} · {e.detail}
              </p>
            </div>
            <p className="font-mono text-muted text-xs">{e.period}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
