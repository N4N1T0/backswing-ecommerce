// Components Imports
import About from '@/components/nosotros/about'
import Timeline from '@/components/nosotros/timeline'
import Contacto from '@/components/nosotros/contacto'

// Types Imports
import type { Metadata } from 'next'

// Metadata for the page
export const metadata: Metadata = {
	title: 'Nosotros',
}

/**
 * Renders the NosotrosPage component with About, Timeline, and Contacto components.
 *
 * @return {JSX.Element} The rendered NosotrosPage component.
 */
const NosotrosPage = (): JSX.Element => {
	return (
		<main className='max-w-screen-3xl mx-auto p-10 space-y-5'>
			<About />
			<Timeline />
			<Contacto />
		</main>
	)
}

export default NosotrosPage
