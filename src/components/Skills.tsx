import Section from '@/components/Section'
import { skills } from '@/data/portfolio'

export default function Skills() {
  return (
    <Section id="toolbox" label="toolbox" title="What I work with">
      <div className="flex flex-col gap-3 font-mono text-sm">
        {skills.map(({ label, items }) => (
          <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
            <span className="text-accent sm:min-w-[110px] shrink-0">{label}</span>
            <span className="text-muted leading-relaxed">{items.join(' · ')}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
