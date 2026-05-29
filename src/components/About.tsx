'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-28 bg-secondary-bg/30">
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-accent-1 text-sm uppercase tracking-[0.15em] mb-3"
        >
          // about
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary mb-10"
        >
          A Bit About Me
        </motion.h2>

        <div className="flex flex-col gap-5 text-text-secondary text-base leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {personalInfo.bio}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            My background is in enterprise integration — building the middleware that keeps large-scale
            procurement systems in sync. Since then I&apos;ve moved toward product-facing work:
            microservices, event-driven architectures, and LLM-powered applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            I hold an{' '}
            <span className="text-accent-1">MSc in Computing Science</span> from University College Cork
            and am currently{' '}
            <span className="text-accent-1">open to backend and full-stack roles</span> in Dublin or remote.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
