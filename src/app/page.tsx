import { education, personalInfo, siteUrl } from '@/data/portfolio'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
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
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
