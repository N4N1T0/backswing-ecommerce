// React Imports
import React from 'react'

// Data Imports
import { tallas } from '@/contants'

/**
 * Renders a fieldset with labels for different tallas options.
 *
 * @param {React.Dispatch<React.SetStateAction<string>>} setTalla - Function to set the selected talla.
 * @param {string} props.selectedTalla - The currently selected talla.
 * @return {JSX.Element} The fieldset with labels for tallas options.
 */
const ProductsTallas = ({
	setTalla,
	selectedTalla,
}: {
	setTalla: React.Dispatch<React.SetStateAction<string>>
	selectedTalla: string
}): JSX.Element => {
	// Function to handle the change of the selected talla
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTalla(e.target.value)
	}

	return (
		<fieldset className='flex flex-nowrap justify-start items-center gap-4 space-y-3'>
			<legend className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
				8 Tallas
			</legend>
			{/* Render a label for each talla */}
			{tallas.map((talla) => (
				<label
					key={talla}
					htmlFor={talla}
					className={`cursor-pointer text-lg hover:text-gray-500 transition-colors duration-200 px-1 ${
						selectedTalla === talla
							? 'bg-gray-900 text-gray-100 pointer-events-none'
							: 'text-gray-900'
					}`}
				>
					<input
						type='radio'
						id={talla}
						value={talla}
						aria-label={talla}
						onChange={handleChange}
						name='size-selection'
						className='sr-only'
						checked={selectedTalla === talla}
					/>
					{/* Display the talla name */}
					{talla}
				</label>
			))}
		</fieldset>
	)
}

export default React.memo(ProductsTallas)
