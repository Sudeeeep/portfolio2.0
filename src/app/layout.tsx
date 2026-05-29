import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Sudeep Nair — Software Engineer',
  description:
    'Software engineer based in Dublin. Backend systems, APIs, and the occasional full-stack project.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-primary-bg text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
