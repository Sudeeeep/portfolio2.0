import { personalInfo } from '@/data/portfolio'

const NAV_LINKS = [
  { label: 'experience', href: '#experience' },
  { label: 'work', href: '#work' },
  { label: 'ask', href: '#ask' },
  { label: 'contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-y-3 pt-10 pb-4 font-mono text-sm">
      <a href="#top" className="text-accent hover:opacity-80 transition-opacity">
        ~/sudeep
      </a>
      <nav className="flex items-center gap-6">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="text-muted hover:text-accent transition-colors">
            {label}
          </a>
        ))}
        <a
          href={personalInfo.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink border-b border-accent/60 hover:text-accent transition-colors"
        >
          resume ↗
        </a>
      </nav>
    </header>
  )
}
