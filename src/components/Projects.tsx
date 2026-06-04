'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaCode, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '@/data/portfolio'
import { TECH_ICONS } from '@/data/icons'

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-secondary-bg/30 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-accent-1 text-sm uppercase tracking-[0.15em] mb-3"
        >
          // projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary mb-16"
        >
          Things I&apos;ve Built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-secondary-bg rounded-lg p-6 border border-white/5
                         hover:border-accent-1/30 hover:shadow-[0_8px_30px_rgba(0,245,195,0.08)]
                         transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-text-primary">{p.name}</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-1 transition-colors"
                    aria-label={`${p.name} GitHub`}
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-1 transition-colors"
                    aria-label={`${p.name} live demo`}
                  >
                    <FaExternalLinkAlt size={15} />
                  </a>
                </div>

              </div>

              <p className="text-text-secondary text-sm leading-relaxed flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {p.tags.map((tag) => {
                  const Icon = TECH_ICONS[tag] ?? FaCode
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] text-accent-1/70
                                 bg-accent-1/5 border border-accent-1/20 px-2 py-0.5 rounded"
                    >
                      {Icon && <Icon size={11} />}
                      {tag}
                    </span>
                  )
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
