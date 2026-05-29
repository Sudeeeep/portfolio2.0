'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'

const CONTACT_ROWS = [
  { label: 'email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { label: 'github', value: 'github.com/Sudeeeep', href: personalInfo.github },
  { label: 'linkedin', value: 'linkedin.com/in/sudeep-nair', href: personalInfo.linkedin },
  { label: 'location', value: personalInfo.location, href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-secondary-bg/30">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-accent-1 text-sm uppercase tracking-[0.15em] mb-3"
        >
          // contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary mb-6"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-base leading-relaxed mb-14"
        >
          Open to backend and full-stack roles. Feel free to reach out — I&apos;ll get back to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-4 text-left"
        >
          {CONTACT_ROWS.map(({ label, value, href }) => (
            <div key={label} className="flex items-center gap-5 font-mono text-sm">
              <span className="text-accent-2 min-w-[70px]">{label}</span>
              {href ? (
                <a
                  href={href}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  className="text-text-primary border-b border-transparent hover:border-accent-1
                             hover:text-accent-1 transition-all duration-150"
                >
                  {value}
                </a>
              ) : (
                <span className="text-text-primary">{value}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
