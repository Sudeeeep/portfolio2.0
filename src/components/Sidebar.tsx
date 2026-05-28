'use client'

import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'intro', label: 'Intro' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Sudeeeep' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sudeep-nair-1295a8201/' },
  { label: 'CV', href: '#' },
]

export default function Sidebar() {
  const [activeId, setActiveId] = useState('intro')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-10% 0px -55% 0px', threshold: 0 }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth' })
    el.setAttribute('tabindex', '-1')
    el.focus({ preventScroll: true })
  }

  return (
    <aside className="
      w-full border-b border-black/10 px-6 py-5 flex flex-col gap-0 bg-bg overflow-y-visible
      md:w-[320px] md:shrink-0 md:fixed md:top-0 md:left-0 md:bottom-0
      md:border-b-0 md:border-r md:border-black/10
      md:px-9 md:py-10 md:flex-col md:overflow-y-auto
    ">
      {/* Identity */}
      <div className="mb-5 md:mb-0">
        <div
          className="w-[46px] h-[46px] rounded-full bg-fg mb-6 flex items-center justify-center
                     text-bg font-mono text-[0.75rem] select-none"
          aria-hidden="true"
        >
          SN
        </div>
        <p className="font-mono text-[1.05rem] tracking-[-0.01em] mb-1">Sudeep Nair</p>
        <p className="font-mono text-[0.875rem] text-muted mb-0 md:mb-7">Software engineer</p>
      </div>

      {/* Stack — hidden on mobile */}
      <div className="hidden md:block mb-9">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted/50 mb-2">
          stack
        </p>
        <p className="font-mono text-[0.85rem] text-muted leading-[1.8]">
          Java · Spring Boot<br />
          Python · FastAPI<br />
          Docker · K8s · AWS<br />
          PostgreSQL · Kafka
        </p>
      </div>

      {/* Nav */}
      <nav aria-label="Main navigation" className="mt-4 md:mt-0 md:mb-9">
        <ul className="flex flex-row flex-wrap gap-x-1 md:flex-col md:gap-0">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`
                    group inline-flex md:flex items-center
                    px-2 md:px-0 py-[0.45rem]
                    font-mono text-[0.9rem] tracking-[0.02em] no-underline
                    rounded-sm transition-colors duration-150
                    focus-visible:outline-2 focus-visible:outline-fg focus-visible:outline-offset-2
                    ${isActive ? 'text-fg' : 'text-muted hover:text-fg'}
                  `}
                >
                  <span
                    className={`
                      hidden md:inline-block mr-0 transition-[opacity,margin] duration-150
                      ${isActive
                        ? 'opacity-100 mr-1'
                        : 'opacity-0 mr-0 group-hover:opacity-100 group-hover:mr-1'}
                    `}
                  >
                    →
                  </span>
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Divider — desktop only */}
      <div className="hidden md:block h-px bg-black/10 mb-9" role="separator" />

      {/* Status */}
      <p className="hidden md:block font-mono text-[0.8rem] text-muted leading-[1.7] mb-9">
        <span
          className="inline-block w-[7px] h-[7px] rounded-full bg-green-500 mr-[0.4rem]
                     align-middle shadow-[0_0_0_2px_rgba(76,175,80,0.2)]"
          aria-hidden="true"
        />
        Open to work<br />
        Looking for backend or<br />
        full-stack roles
      </p>

      {/* Socials */}
      <div className="flex gap-4 mt-3 md:mt-0">
        {SOCIALS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.8rem] text-muted no-underline
                       transition-colors duration-150 hover:text-fg
                       rounded-sm focus-visible:outline-2 focus-visible:outline-fg focus-visible:outline-offset-2"
          >
            {label}
          </a>
        ))}
      </div>
    </aside>
  )
}
