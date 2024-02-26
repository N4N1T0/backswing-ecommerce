import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BackswingMetatags } from '@/components/layout/metatags-seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = BackswingMetatags

export const viewport: Viewport = {
  themeColor: '#000000'
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
