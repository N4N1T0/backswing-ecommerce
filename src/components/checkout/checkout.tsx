'use client'

// Next.js Imports
import Image from 'next/image'

// Utils Imports
import { calculateTotal, useEuros } from '@/lib/utils'

// Stores Imports
import useShoppingCart from '@/stores/shopping-cart-store'

// Assets Imports
import { Lock } from 'lucide-react'

/**
 * Renders a checkout component that displays the summary of the order, the total amount, and the available payment methods.
 *
 * @return {JSX.Element} The checkout component.
 */
const Checkout = (): JSX.Element => {
	// Get the shopping cart items and the shipping cost
	const [count] = useShoppingCart()
	const shipping = count.length === 0 ? 0 : 20

	// Calculate the total amount
	const total = calculateTotal(count)

	return (
		<div className='w-full pl-4 mb-4 lg:w-1/2 '>
			{/* Checkout summary container */}
			<div className='p-6 border bg-gray-100 border-gray-300 md:p-8'>
				<h2 className='mb-8 text-3xl font-bold text-gray-700'>
					Resumen de Orden
				</h2>
				{/* Subtotal */}
				<div className='flex items-center justify-between pb-4 mb-4 border-b border-gray-300 '>
					<span className='text-gray-700'>Subtotal</span>
					<span className='text-xl font-bold text-gray-700 '>
						{useEuros.format(total)}
					</span>
				</div>
				{/* Shipping */}
				<div className='flex items-center justify-between pb-4 mb-4 '>
					<span className='text-gray-700 '>Envio</span>
					{count.length === 0 ? (
						<span className='text-xl font-bold text-gray-700 '>
							{useEuros.format(total)}
						</span>
					) : (
						<span className='text-xl font-bold text-gray-700 '>
							{useEuros.format(shipping)}
						</span>
					)}
				</div>
				{/* Total */}
				<div className='flex items-center justify-between pb-4 mb-4 '>
					<span className='text-gray-700 font-semibold'>Total</span>
					<span className='text-xl font-bold text-gray-700'>
						{useEuros.format(total + shipping)}
					</span>
				</div>
				<h2 className='text-lg text-gray-500'>Ofrecemos pagos en:</h2>
				{/* Payment methods */}
				<div className='flex items-center gap-2 mb-4 '>
					{/* Visa */}
					<Image
						src='https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png'
						alt='Visa'
						title='Visa Credit Card'
						height={56}
						width={64}
						className='object-cover w-auto h-auto'
					/>
					{/* Mastercard */}
					<Image
						src='https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png'
						alt='Mastercard'
						title='Mastercard Credit Card'
						height={56}
						width={84}
						className='object-cover w-auto h-auto'
					/>
					{/* Paypal */}
					<Image
						src='https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png'
						alt='Paypal'
						title='Paypal Credit Card'
						height={56}
						width={84}
						className='object-cover w-auto h-auto'
					/>
				</div>
				{/* Checkout button */}
				<div className='flex items-center justify-center w-full py-4 font-bold text-center text-gray-100 uppercase bg-gray-950 hover:bg-gray-700 transition-colors duration-200'>
					<span>Checkout</span>
					<Lock className='inline-block ml-2' size={18} />
				</div>
			</div>
		</div>
	)
}

export default Checkout
