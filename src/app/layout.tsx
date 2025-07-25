import { BackswingMetatags } from '@/components/layout/metatags-seo'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = BackswingMetatags

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
