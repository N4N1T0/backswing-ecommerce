'use client'

// Utils Imports
import { findColorIndex } from '@/lib/utils'

// Types Imports
import type { WPProduct } from '@/types'

// React Imports
import type React from 'react'

/**
 * React component for rendering a color picker.
 *
 * @param {string[]} colors - Array of colors to display in the color picker.
 * @param {WPProduct['variations']} props.variations - Variations of the product.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setColor - Function to set the color.
 * @param {boolean} props.[isProductCard=false] - Flag indicating if the color picker is for a product card.
 */
const ColorPicker = ({
	colors,
	setColor,
	variations,
	isProductCard = false,
}: {
	colors: string[]
	variations?: WPProduct['variations']
	setColor?: React.Dispatch<React.SetStateAction<number>>
	isProductCard?: boolean
}) => {
	// Handles the color selection
	const handleColorSelect = (color: string) => {
		if (!variations) return
		const index = findColorIndex(color, variations)
		if (index !== -1 && setColor) {
			setColor(index)
		}
	}

	// Returns the color picker component
	return (
		<div className='mt-3 mb-5 space-y-5'>
			{/* Color picker title */}
			{!isProductCard && (
				<h5 className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
					{colors.length} Colores
				</h5>
			)}

			{/* Color picker fieldset */}
			<fieldset className='flex flex-wrap justify-start items-center gap-4'>
				{/* Renders each color option */}
				{colors.map((color) => (
					<label
						key={color}
						htmlFor={color}
						className='block size-7 cursor-pointer rounded-full border-[2px] hover:border-gray-700 has-[:checked]:border-gray-900'
						style={{ backgroundColor: color }}
						title={color}
					>
						<input
							type='radio'
							id={color}
							value={color}
							aria-label={color}
							name='color-selection'
							className='sr-only'
							// Handles the color select event
							onChange={() => {
								handleColorSelect(color)
							}}
						/>
						<span className='sr-only'>{color}</span>
					</label>
				))}
			</fieldset>
		</div>
	)
}

export default ColorPicker
