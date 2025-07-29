import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DisclaimerProvider } from '../components/DisclaimerProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyWhatsAppButton from '../components/StickyWhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chambers of L&V - Premier Corporate & Commercial Law Firm',
  description: 'Chambers of L&V is a premier Corporate, Commercial & Litigation law firm based in Gurugram, India. We provide comprehensive legal services across corporate law, consumer law, intellectual property, and more.',
  keywords: 'law firm, corporate law, commercial law, litigation, Gurugram, India, legal services',
  authors: [{ name: 'Chambers of L&V' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisclaimerProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </DisclaimerProvider>
        {/* Sticky WhatsApp Button */}
        <StickyWhatsAppButton />
      </body>
    </html>
  )
} 