'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { personalInfo } from '@/data/portfolio'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-5xl rounded-lg transition-all duration-300 ${
        scrolled
          ? 'bg-secondary-bg/30 backdrop-blur-lg border border-white/10 shadow-lg'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          &lt;Sudeep /&gt;
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => { e.preventDefault(); scrollTo(href) }}
              className="relative text-sm text-text-secondary hover:text-accent-1 transition-colors group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-1 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={personalInfo.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-xs font-bold text-accent-1 border border-accent-1 rounded
                       hover:bg-accent-1 hover:text-primary-bg transition-all duration-300"
          >
            RESUME
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-primary focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary-bg/95 backdrop-blur-xl border-t border-white/10 overflow-hidden rounded-b-lg"
          >
            <div className="flex flex-col items-center py-6 gap-5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); setOpen(false) }}
                  className="text-text-primary hover:text-accent-1 transition-colors font-medium"
                >
                  {label}
                </a>
              ))}
              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-bold text-accent-1 border border-accent-1 rounded
                           hover:bg-accent-1 hover:text-primary-bg transition-all duration-300"
                onClick={() => setOpen(false)}
              >
                RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
