import { BackswingMetatags } from '@/components/layout/metatags-seo'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Antonio, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const AntonioFont = Antonio({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = BackswingMetatags

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          AntonioFont.className,
          'overflow-x-hidden'
        )}
      >
        {children}
      </body>
    </html>
  )
}
