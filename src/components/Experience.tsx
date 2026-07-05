'use client'

import { motion } from 'framer-motion'
import { experience, education } from '@/data/portfolio'

function renderBullet(text: string) {
  return text.split(/(~[\d,]+%?)/g).map((part, i) =>
    /^~[\d,]+%?$/.test(part) ? (
      <strong key={i} className="font-mono text-text-primary">{part}</strong>
    ) : (
      part
    )
  )
}

function TimelineItem({
  period,
  title,
  subtitle,
  detail,
  bullets,
  delay,
}: {
  period: string
  title: string
  subtitle: string
  detail?: string
  bullets?: string[]
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="relative pl-8 border-l border-accent-1/20"
    >
      {/* Dot */}
      <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-1 shadow-[0_0_8px_rgba(0,245,195,0.6)]" />

      <p className="font-mono text-accent-2 text-xs mb-1">{period}</p>
      <h3 className="text-text-primary font-semibold text-base mb-0.5">{title}</h3>
      <p className="text-text-secondary text-sm mb-1">{subtitle}{detail ? ` · ${detail}` : ''}</p>

      {bullets && (
        <ul className="mt-3 flex flex-col gap-2">
          {bullets.map((b, i) => (
            <li key={i} className="text-text-secondary text-sm leading-relaxed flex gap-2">
              <span className="text-accent-1 mt-1 shrink-0">▹</span>
              <span>{renderBullet(b)}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-primary-bg">
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-accent-1 text-sm uppercase tracking-[0.15em] mb-3"
        >
          {'// experience'}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary mb-16"
        >
          Where I&apos;ve Worked
        </motion.h2>

        <div className="flex flex-col gap-10">
          {experience.map((e, i) => (
            <TimelineItem
              key={e.company}
              period={e.period}
              title={e.role}
              subtitle={`${e.company} · ${e.location}`}
              bullets={e.bullets}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Education */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-accent-1 text-sm uppercase tracking-[0.15em] mb-3 mt-20"
        >
          {'// education'}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary mb-16"
        >
          Where I Studied
        </motion.h2>

        <div className="flex flex-col gap-10">
          {education.map((e, i) => (
            <TimelineItem
              key={e.degree}
              period={e.period}
              title={e.degree}
              subtitle={e.institution}
              detail={e.detail}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
