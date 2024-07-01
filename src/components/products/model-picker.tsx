'use client'

// Utils Imports
import { getImageForModel } from '@/lib/utils'

// Types Imports
import type { Variations, Related } from '@/types'

// Next.js Imports
import Image from 'next/image'

// React Imports
import React from 'react'

/**
 * React component for rendering a model picker.
 *
 * @param {Related | null} related - Array of Related products.
 * @param {React.Dispatch<React.SetStateAction<Variations['nodes']>>} setModel - Function to set the model.
 */
const ModelPicker = React.memo(
	({
		related,
		setModel,
	}: {
		related: Related | null
		setModel: React.Dispatch<React.SetStateAction<Variations['nodes']>>
	}) => {
		return (
			<div className='mt-3 mb-5 space-y-5'>
				{/* Heading for the model picker */}
				<h5 className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
					4 Modelos
				</h5>
				{/* Container for the model options */}
				<div className='flex-nowrap flex mt-1 gap-3'>
					{/* Loop through the first 4 related products */}
					{related?.nodes.slice(0, 4).map((product) => {
						const image = getImageForModel(product.name)
						return (
							<React.Fragment key={product.id}>
								{/* Model option component */}
								<label className='block border hover:border-gray-500 w-1/4 h-auto has-[:checked]:border-gray-900'>
									{/* Image for the model */}
									<Image
										src={image}
										alt={product.name}
										title={product.name}
										width={200}
										height={200}
										className='object-cover w-full h-full'
										priority
									/>
									{/* Hidden radio button for the model */}
									<input
										type='radio'
										id={product.id}
										defaultValue={product.id}
										aria-label={product.id}
										name='model-selection'
										className='sr-only'
										onClick={() => {
											setModel(product.variations.nodes)
										}}
									/>
									{/* Label for the model */}
									<span className='sr-only'>{product.name}</span>
								</label>
							</React.Fragment>
						)
					})}
				</div>
			</div>
		)
	},
)

export default ModelPicker
