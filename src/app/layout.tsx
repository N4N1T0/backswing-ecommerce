import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BackswingMetatags } from '@/components/layout/metatags-seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = BackswingMetatags

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
