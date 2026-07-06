import Section from '@/components/Section'
import { personalInfo } from '@/data/portfolio'

const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

const CONTACT_ROWS = [
  { label: 'email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { label: 'github', value: displayUrl(personalInfo.github), href: personalInfo.github },
  { label: 'linkedin', value: displayUrl(personalInfo.linkedin), href: personalInfo.linkedin },
  { label: 'location', value: personalInfo.location, href: null },
]

export default function Contact() {
  return (
    <Section id="contact" label="contact" title="Get in touch">
      <p className="text-muted text-sm leading-relaxed max-w-prose mb-8">
        I’m currently looking for backend and full-stack roles. If you think I’d be a good fit
        for your team, or you just want to talk shop, my inbox is open.
      </p>
      <div className="flex flex-col gap-3 font-mono text-sm">
        {CONTACT_ROWS.map(({ label, value, href }) => (
          <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
            <span className="text-accent sm:min-w-[110px] shrink-0">{label}</span>
            {href ? (
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="text-ink border-b border-edge hover:border-accent hover:text-accent transition-colors w-fit break-all"
              >
                {value}
              </a>
            ) : (
              <span className="text-muted">{value}</span>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
