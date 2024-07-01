// Components Imports
import OrdersSummary from '@/components/profile/orders-summary'
import Wishlist from '@/components/profile/wishlist'

// Types Imports
import type { Metadata } from 'next'

// Metadata for the page
export const metadata: Metadata = {
	title: 'Perfil de Usuario',
}

/**
 * Renders the ProfilePage component with Wishlist and OrdersSummary components.
 *
 * @param {Object} params - An object containing the ID of the user.
 * @return {JSX.Element} The rendered ProfilePage component.
 */
const ProfilePage = ({
	params: { id },
}: { params: { id: string } }): JSX.Element => {
	return (
		<main className='max-w-screen-3xl mx-auto p-5 md:p-10 space-y-5 md:space-y-10 text-center'>
			<Wishlist />
			<OrdersSummary />
		</main>
	)
}

export default ProfilePage
