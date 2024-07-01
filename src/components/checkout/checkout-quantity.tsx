'use client'

// React Imports
import { useState } from 'react'

// Stores Imports
import useShoppingCart from '@/stores/shopping-cart-store'

// Types Imports
import type { CartItem } from '@/types'

/**
 * Renders a quantity input component for a product in the checkout page.
 *
 * @param {Object} props - The component props.
 * @param {CartItem} props.product - The product to update the quantity for.
 * @return {JSX.Element} The rendered quantity input component.
 */
const CheckoutQuantity = ({ product }: { product: CartItem }): JSX.Element => {
	// State to hold the current quantity of the product
	const [, setCount] = useShoppingCart()
	const [quantity, setQuantity] = useState(product.quantity)

	// Function to increase the quantity of the product
	const plusQuantity = () => {
		// Update the count state by mapping over the items and updating the quantity if the item id matches the current product id
		setCount((prev) =>
			prev.map((item) =>
				item.id === product.id ? { ...item, quantity: quantity + 1 } : item,
			),
		)
		// Update the quantity state by increasing it by 1
		setQuantity((prev) => prev + 1)
	}

	// Function to decrease the quantity of the product
	const minusQuantity = () => {
		// If the quantity is already 1, do nothing
		if (quantity === 1) return
		// Update the count state by mapping over the items and updating the quantity if the item id matches the current product id
		setCount((prev) =>
			prev.map((item) =>
				item.id === product.id ? { ...item, quantity: quantity - 1 } : item,
			),
		)
		// Update the quantity state by decreasing it by 1
		setQuantity((prev) => prev - 1)
	}

	return (
		<div className='w-full my-8 flex justify-between items-center h-10'>
			<div>
				<label htmlFor='Quantity' className='sr-only'>
					{' '}
					Quantity{' '}
				</label>

				<div className='flex items-center gap-1'>
					<button
						type='button'
						className='size-10 leading-10 text-secondary transition hover:opacity-75 text-3xl'
						onClick={minusQuantity}
					>
						-
					</button>

					<input
						type='number'
						id='Quantity'
						min={1}
						value={quantity}
						className='h-10 w-16 rounded border-secondary/50 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
					/>

					<button
						type='button'
						className='size-10 leading-10 text-secondary transition hover:opacity-75 text-3xl'
						onClick={plusQuantity}
					>
						+
					</button>
				</div>
			</div>
		</div>
	)
}

export default CheckoutQuantity
