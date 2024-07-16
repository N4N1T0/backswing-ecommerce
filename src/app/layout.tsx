// Next.js Imports
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

// Global CSS Imports
import './globals.css'

// Metadata Imports
import { BackswingMetatags } from '@/components/layout/metatags-seo'

// NextAuth Imports
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

// Font Performance Optimization
const inter = Inter({ subsets: ['latin'] })

// Metadata for the Whole Site
export const metadata: Metadata = BackswingMetatags

// Viewport Configuration
export const viewport: Viewport = {
	themeColor: '#000000',
}

/**
 * Renders the root layout component.
 *
 * @param {Object} props - The properties for the root layout.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @return {Promise<JSX.Element>} The rendered root layout.
 */
export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>): Promise<JSX.Element> {
	const session = await auth()
	return (
		<html lang='es'>
			<body className={`${inter.className}`}>
				<SessionProvider session={session}>{children}</SessionProvider>
			</body>
		</html>
	)
}
