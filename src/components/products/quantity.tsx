'use client'

// Stores Imports
import useShoppingCart from '@/stores/shopping-cart-store'

// Types Imports
import type { CartItem } from '@/types'

// React Imports
import { useState } from 'react'

/**
 * Renders the Quantity component with the ability to add items to the shopping cart.
 *
 * @param {CartItem} product - The product to be added to the cart.
 * @return {JSX.Element} The Quantity component JSX element.
 */
const Quantity = ({ product }: { product: CartItem }): JSX.Element => {
	// State hooks
	const [, setCount] = useShoppingCart()
	const [adding, setAdding] = useState(false)
	const [quantity, setQuantity] = useState(1)

	// Function to add product to cart
	const addToCart = () => {
		// Show adding message
		setAdding(true)

		// Add product to cart after 1.5 seconds
		setTimeout(() => {
			setAdding(false)
			setCount((prev) => [...prev, { ...product, quantity }])
		}, 1500)
	}

	// Function to handle quantity change
	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const qty = Number(e.target.value)
		setQuantity(qty)
	}

	return (
		<div className='w-full my-8 flex justify-between items-center h-10'>
			{/* Quantity input */}
			<div>
				<label htmlFor='Quantity' className='sr-only'>
					{' '}
					Quantity{' '}
				</label>
				<div className='flex items-center gap-1'>
					<button
						type='button'
						className='size-10 leading-10 text-secondary transition hover:opacity-75 text-3xl'
						onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
					>
						-
					</button>

					<input
						type='number'
						id='Quantity'
						min={1}
						value={quantity}
						onChange={handleQuantityChange}
						className='h-10 w-16 rounded border-secondary/50 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
					/>

					<button
						type='button'
						className='size-10 leading-10 text-secondary transition hover:opacity-75 text-3xl'
						onClick={() => setQuantity((prev) => prev + 1)}
					>
						+
					</button>
				</div>
			</div>
			{/* Add to cart button */}
			<button
				type='button'
				onClick={addToCart}
				className='w-fit flex items-center justify-center px-4 py-2 bg-gray-950 text-white hover:bg-gray-700 transition-colors duration-200'
			>
				{/* Show adding message if adding is true */}
				{adding ? 'Agregando...' : 'Agregar al Carrito'}
			</button>
		</div>
	)
}

export default Quantity
