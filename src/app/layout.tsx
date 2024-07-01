// Next.js Imports
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

// Global CSS Imports
import './globals.css'

// Metadata Imports
import { BackswingMetatags } from '@/components/layout/metatags-seo'

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
 * @return {JSX.Element} The rendered root layout.
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>): JSX.Element {
	return (
		<html lang='es'>
			<body className={`${inter.className}`}>{children}</body>
		</html>
	)
}
