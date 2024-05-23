'use client'

import { calculateTotal, useEuros } from '@/lib/utils'
import useShoppingCart from '@/stores/shopping-cart-store'
import { Lock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Checkout = () => {
	const [count] = useShoppingCart()
	const shipping = count.length === 0 ? 0 : 20
	const total = calculateTotal(count)

	return (
		<div className='w-full pl-4 mb-4 lg:w-1/2 '>
			<div className='p-6 border bg-gray-100 border-gray-300 md:p-8'>
				<h2 className='mb-8 text-3xl font-bold text-gray-700'>
					Resumen de Orden
				</h2>
				<div className='flex items-center justify-between pb-4 mb-4 border-b border-gray-300 '>
					<span className='text-gray-700'>Subtotal</span>
					<span className='text-xl font-bold text-gray-700 '>
						{useEuros.format(total)}
					</span>
				</div>
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
				<div className='flex items-center justify-between pb-4 mb-4 '>
					<span className='text-gray-700 font-semibold'>Total</span>
					<span className='text-xl font-bold text-gray-700'>
						{useEuros.format(total + shipping)}
					</span>
				</div>
				<h2 className='text-lg text-gray-500'>Ofrecemos pagos en:</h2>
				<div className='flex items-center gap-2 mb-4 '>
					<Image
						src='https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png'
						alt='Visa'
						title='Visa Credit Card'
						height={56}
						width={64}
						className='object-cover w-auto h-auto'
					/>
					<Image
						src='https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png'
						alt='Mastercard'
						title='Mastercard Credit Card'
						height={56}
						width={84}
						className='object-cover w-auto h-auto'
					/>
					<Image
						src='https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png'
						alt='Paypal'
						title='Paypal Credit Card'
						height={56}
						width={84}
						className='object-cover w-auto h-auto'
					/>
				</div>
				<div className='flex items-center justify-center w-full py-4 font-bold text-center text-gray-100 uppercase bg-gray-950 hover:bg-gray-700 transition-colors duration-200'>
					<span>Checkout</span>
					<Lock className='inline-block ml-2' size={18} />
				</div>
			</div>
		</div>
	)
}

export default Checkout
