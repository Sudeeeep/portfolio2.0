import { personalInfo } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="py-10 mt-6 border-t border-edge font-mono text-xs text-muted/60 flex flex-wrap items-center justify-between gap-y-2">
      <span>© {new Date().getFullYear()} {personalInfo.name}</span>
      <a
        href={personalInfo.sourceRepo}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors"
      >
        view source ↗
      </a>
    </footer>
  )
}
