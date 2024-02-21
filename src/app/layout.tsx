import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s  |  Backswing - Camisetas de Padel',
    default: 'Backswing - Camisetas de Padel'
  },
  description: 'Diseños exclusivos de camisetas para los amantes del Padel'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} space-y-5`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
