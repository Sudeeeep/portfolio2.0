import { education, personalInfo, siteUrl } from '@/data/portfolio'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import AskMe from '@/components/AskMe'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.name,
  jobTitle: personalInfo.role,
  email: `mailto:${personalInfo.email}`,
  url: siteUrl,
  sameAs: [personalInfo.github, personalInfo.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dublin',
    addressCountry: 'IE',
  },
  alumniOf: education.map((e) => ({
    '@type': 'CollegeOrUniversity',
    name: e.institution,
  })),
}

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <AskMe />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <a
        href="#ask"
        className="fixed bottom-6 right-6 font-mono text-xs text-accent bg-surface border border-edge
                   rounded-full px-4 py-2 shadow-lg hover:border-accent/50 transition-colors"
      >
        ask ai ↗
      </a>
    </div>
  )
}
