import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Fourth Sealing Hub - Professional Learning Platform',
  description: 'Professional practical intensive learning platform offering courses in informatics, data science, research management, and systems security.',
  keywords: 'e-learning, data science, health informatics, research management, systems security, professional training',
  authors: [{ name: 'The Fourth Sealing Hub' }],
  openGraph: {
    title: 'The Fourth Sealing Hub - Professional Learning Platform',
    description: 'Transform your career with our intensive professional courses',
    url: 'https://www.thefourthsealing.com',
    siteName: 'The Fourth Sealing Hub',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
