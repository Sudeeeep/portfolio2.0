'use client'

import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'
import { skills } from '@/data/portfolio'
import { TECH_ICONS } from '@/data/icons'

const CATEGORIES = [
  { title: 'Languages', items: skills.languages },
  { title: 'Frameworks & Libraries', items: skills.frameworks },
  { title: 'Tools & Platforms', items: skills.tools },
]

function SkillCard({ name, delay }: { name: string; delay: number }) {
  const Icon = TECH_ICONS[name] ?? FaCode
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="flex items-center gap-3 bg-secondary-bg px-5 py-3 rounded border border-white/5
                 hover:border-accent-2/50 hover:shadow-[0_4px_20px_rgba(233,69,96,0.12)]
                 transition-all duration-300 cursor-default"
    >
      {Icon && <Icon className="text-accent-1 shrink-0" size={20} />}
      <span className="text-text-primary text-sm font-medium">{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-primary-bg relative">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-accent-1 text-sm uppercase tracking-[0.15em] mb-3"
        >
          // skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary mb-16"
        >
          Technologies I Work With
        </motion.h2>

        <div className="flex flex-col gap-14">
          {CATEGORIES.map(({ title, items }, catIdx) => (
            <div key={title}>
              <h3 className="text-lg font-semibold text-accent-1 mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-1/40 inline-block" />
                {title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item, i) => (
                  <SkillCard key={item.name} name={item.name} delay={catIdx * 0.1 + i * 0.05} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core competencies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="font-mono text-accent-2 text-xs uppercase tracking-[0.15em] mb-6">
            Core Competencies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.competencies.map((c) => (
              <span
                key={c}
                className="text-text-secondary text-sm border border-text-secondary/20 px-4 py-1.5 rounded-full
                           hover:text-white hover:border-accent-1 transition-colors duration-300"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
