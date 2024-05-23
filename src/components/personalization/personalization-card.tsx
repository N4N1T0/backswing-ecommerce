'use client'

import { useFormStatus } from 'react-dom'
import type { PersonalizationProducts } from '@/types'
import Image from 'next/image'
import React from 'react'

const PersonalizationCard = ({
	product,
	isDesign = false,
}: { product: PersonalizationProducts; isDesign?: boolean }) => {
	const { pending } = useFormStatus()

	if (isDesign) {
		return (
			<div className='space-y-3'>
				<label
					className={`border hover:border-gray-500 has-[:checked]:border-gray-900 h-auto block ${
						pending ? 'opacity-50 pointer-events-none' : ''
					}`}
				>
					<Image
						src={product.image}
						alt={product.value}
						title={product.value}
						width={500}
						height={500}
						className='object-center w-full h-full aspect-square'
						priority
					/>
					<input
						type='radio'
						id={product.value}
						defaultValue={product.value}
						aria-label={product.value}
						name='design-selection'
						className='sr-only'
						required
						disabled={pending}
					/>
				</label>
				<h3 className='text-gray-950 font-medium uppercase text-sm md:text-base'>
					{product.value}
				</h3>
			</div>
		)
	}

	return (
		<div className='space-y-3'>
			<label
				className={`border hover:border-gray-500 has-[:checked]:border-gray-900 h-auto block ${
					pending ? 'opacity-50 pointer-events-none' : ''
				}`}
			>
				<Image
					src={product.image}
					alt={product.value}
					title={product.value}
					width={500}
					height={500}
					className='object-cover w-full h-full'
					priority
				/>
				<input
					type='radio'
					id={product.value}
					defaultValue={
						product.value === 'Sudaderas | Unisex'
							? 'Sudaderas | Hombre'
							: product.value
					}
					aria-label={product.value}
					name='model-selection'
					className='sr-only'
					required
					disabled={pending}
				/>
			</label>
			<h3 className='text-gray-950 font-medium uppercase text-sm md:text-base'>
				{product.value}
			</h3>
			<div className='flex gap-1'>
				{product.colors?.map((color) => (
					<span
						key={color}
						className='block size-4 pointer-events-none rounded-full border-[2px]'
						style={{ backgroundColor: color }}
					/>
				))}
			</div>
		</div>
	)
}

export default PersonalizationCard
