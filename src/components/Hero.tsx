'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa'
import { personalInfo, typewriterRoles } from '@/data/portfolio'

function Typewriter({ texts, speed = 100, pause = 1800 }: { texts: string[]; speed?: number; pause?: number }) {
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const current = texts[index]

  useEffect(() => {
    if (!deleting && charIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }
    if (deleting && charIndex === 0) {
      const timeout = setTimeout(() => {
        setDeleting(false)
        setIndex((i) => (i + 1) % texts.length)
      }, speed)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(
      () => setCharIndex((c) => c + (deleting ? -1 : 1)),
      deleting ? speed / 2 : speed
    )
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, current, texts.length, speed, pause])

  return (
    <span className="text-accent-2">
      {current.substring(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary-bg"
    >
      {/* Animated blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-16 w-72 h-72 bg-accent-1/15 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.4, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-24 right-16 w-96 h-96 bg-accent-2/15 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent-1 font-mono text-lg mb-4 tracking-wide"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight
                     text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-text-secondary"
        >
          {personalInfo.name}.
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="h-16 sm:h-20 mb-6"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-text-secondary">
            I <Typewriter texts={typewriterRoles} />
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-text-secondary text-base sm:text-lg leading-relaxed mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-8"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-white transition-colors hover:scale-110 transform"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-1 transition-colors hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary/50"
      >
        <FaChevronDown size={22} />
      </motion.div>
    </section>
  )
}
