// Component Imports
import PromotionDialog from '@/components/shared/promotion-dialog'

/**
 * Renders the Announcement component with a discount message and a PromotionDialog for subscribing to the newsletter.
 *
 * @return {JSX.Element} The rendered Announcement component.
 */
const Announcement = (): JSX.Element => {
	return (
		<div className='bg-gray-950 px-4 py-3 text-white'>
			<p className='text-center text-sm font-medium'>
				Llevate 20% de descuento por subsicribirte a nuestro{' '}
				<PromotionDialog>
					<span className='inline-block underline uppercase cursor-pointer hover:text-gray-300 transition-colors duration-200'>
						Newsletter
					</span>
				</PromotionDialog>
			</p>
		</div>
	)
}

export default Announcement
