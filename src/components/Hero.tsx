import { hero, personalInfo } from '@/data/portfolio'

const SOCIAL_LINKS = [
  { label: 'github', href: personalInfo.github },
  { label: 'linkedin', href: personalInfo.linkedin },
  { label: 'email', href: `mailto:${personalInfo.email}` },
]

export default function Hero() {
  return (
    <section id="top" className="pt-20 pb-16">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
        {personalInfo.name}
      </h1>
      <p className="text-xl text-accent mb-8">{hero.headline}</p>

      <p className="text-muted leading-relaxed max-w-prose mb-8">{hero.intro}</p>

      <p className="font-mono text-sm leading-relaxed mb-10">
        <span className="text-accent">now →</span>{' '}
        <span className="text-muted">{hero.now}</span>
      </p>

      <div className="flex items-center gap-6 font-mono text-sm">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="text-ink border-b border-edge hover:border-accent hover:text-accent transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
