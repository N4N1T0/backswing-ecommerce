import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
    <html lang='es'>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
