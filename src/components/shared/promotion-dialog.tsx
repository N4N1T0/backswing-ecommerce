// UI Imports
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

// Assets Imports
import PromotionPic from '@/assets/artur-kornakov-ArI-foyWnfA-unsplash.webp'

// Next.js Imports
import Image from 'next/image'

/**
 * Renders a promotion dialog component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements of the component.
 * @return {React.ReactElement} The rendered promotion dialog component.
 */
const PromotionDialog = ({
	children,
}: { children: React.ReactNode }): React.ReactElement => {
	return (
		<Dialog>
			{/* The trigger for the dialog */}
			<DialogTrigger asChild>{children}</DialogTrigger>
			{/* The content of the dialog */}
			<DialogContent className='flex bg-white text-center'>
				{/* The image on the left side of the dialog */}
				<div className='w-full px-4 mb-10 md:w-1/2 md:mb-0 relative text-center hidden md:block'>
					<Image
						src={PromotionPic}
						alt='Un niño jugando padel'
						title='Llevate un descuento para tu camiseta o la de tu hijo'
						fill
						className='w-auto h-auto'
					/>
				</div>
				{/* The form on the right side of the dialog */}
				<form className='w-full px-4 md:w-1/2 '>
					{/* The title of the promotion */}
					<h2 className='mb-4 text-3xl font-bold text-gray-950'>
						20% Descuento
					</h2>
					{/* The description of the promotion */}
					<p className='mb-4 text-sm text-gray-700'>
						Descuento esclusivo para los subscritos a nuestro newsletter, donde
						encontraras informacion actual sobre el padel y mucho mas!
					</p>
					{/* The input for the email and the submit button */}
					<span className='block shadow-xs '>
						<input
							type='email'
							className='w-full px-4 py-4 mb-4 border border-gray-400 '
							name='promotion-email'
							placeholder='Tu Email@...'
							required
						/>
						<button
							className='inline-flex justify-center w-full px-4 py-4 text-white bg-black focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-gray-600 transition-colors duration-200'
							type='submit'
						>
							Enviar
						</button>
					</span>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default PromotionDialog
