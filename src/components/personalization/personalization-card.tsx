'use client'

// React Imports
import { useFormStatus } from 'react-dom'

// Types Imports
import type { PersonalizationProducts } from '@/types'

// Next.js Imports
import Image from 'next/image'

/**
 * Renders a personalization card component.
 *
 * @param {Object} props - The component props.
 * @param {PersonalizationProducts} props.product - The personalization product.
 * @param {boolean} [props.isDesign=false] - Indicates if the card is for a design.
 * @return {JSX.Element} The rendered personalization card.
 */
const PersonalizationCard = ({
	product,
	isDesign = false,
}: { product: PersonalizationProducts; isDesign?: boolean }): JSX.Element => {
	// Retrieve the form status
	const { pending } = useFormStatus()

	// Render the personalization card
	return (
		<div className='space-y-3'>
			{/* Render the personalization card label */}
			<label
				className={`border hover:border-gray-500 has-checked:border-gray-900 h-auto block ${
					pending ? 'opacity-50 pointer-events-none' : ''
				}`}
			>
				<Image
					src={product.image}
					alt={product.value}
					title={product.value}
					width={500}
					height={500}
					className={
						isDesign
							? 'object-center w-full h-full aspect-square'
							: 'object-cover w-full h-full'
					}
					priority
				/>
				{/* Render the personalization card radio input */}
				<input
					type='radio'
					id={product.value}
					defaultValue={
						isDesign
							? product.value
							: product.value === 'Sudaderas | Unisex'
								? 'Sudaderas | Hombre'
								: product.value
					}
					aria-label={product.value}
					name={isDesign ? 'design-selection' : 'model-selection'}
					className='sr-only'
					required
					disabled={pending}
				/>
			</label>
			{/* Render the personalization card title */}
			<h3 className='text-gray-950 font-medium uppercase text-sm md:text-base'>
				{product.value}
			</h3>
			{/* Render the personalization card colors */}
			{isDesign || (
				<div className='flex gap-1'>
					{product.colors?.map((color) => (
						<span
							key={color}
							className='block size-4 pointer-events-none rounded-full border-2'
							style={{ backgroundColor: color }}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default PersonalizationCard
