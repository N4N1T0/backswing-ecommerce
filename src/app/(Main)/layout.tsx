// Components Imports
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

/**
 * Renders the layout component with a Navbar, the provided children, and a Footer.
 *
 * @param {Object} props - The properties for the Layout component.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @return {JSX.Element} The rendered Layout component.
 */
export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>): JSX.Element {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}
