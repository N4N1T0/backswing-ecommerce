import Checkout from '@/components/checkout/checkout'
import CheckoutTable from '@/components/checkout/checkout-table'
import LastChance from '@/components/checkout/last-chance'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Checkout',
}

const CheckoutPage = () => {
	return (
		<section className='py-24'>
			<div className='px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6'>
				<h1 className='mb-8 text-4xl font-bold'>Checkout</h1>
				<CheckoutTable />
				<div className='flex flex-wrap justify-between'>
					<div className='w-full pr-4 mb-4 lg:w-1/2 space-y-5 '>
						{/* Coupon */}
						<div className='flex flex-wrap items-center gap-4'>
							<span className='text-gray-700'>Applicar Cupon</span>
							<input
								type='text'
								className='w-full px-8 py-4 font-normal placeholder-gray-400 border lg:flex-1'
								placeholder='x304k45'
								required
							/>
							<button
								type='button'
								className='inline-block w-full px-8 py-4 font-bold text-center text-gray-100 bg-gray-950 lg:w-32 hover:bg-gray-700 transition-colors duration-200'
							>
								Aplicar
							</button>
						</div>
						<LastChance />
					</div>
					{/* Checkout */}
					<Checkout />
				</div>
			</div>
		</section>
	)
}

export default CheckoutPage
