'use client'

import AccordionProducts from '@/components/products/acordion-products'
import type { WPProduct } from '@/types'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import { parseProductContent } from '@/lib/utils'

const ColorPicker = dynamic(
	() => import('@/components/products/color-picker'),
	{
		ssr: false,
		loading: () => (
			<div className='mt-3 mb-5 space-y-5 animate-pulse'>
				<div className='w-28 h-6 border bg-neutral-200' />
				<div className='flex flex-wrap justify-start items-center gap-5'>
					{Array(11)
						.fill(0)
						.map((_, index) => (
							<div
								className='size-7 rounded-full border bg-neutral-200'
								key={`ColorPicker-Skeleton-${index + 1}`}
							/>
						))}
				</div>
			</div>
		),
	},
)

const ModelPicker = dynamic(
	() => import('@/components/products/model-picker'),
	{
		ssr: false,
		loading: () => (
			<div className='mt-3 mb-5 space-y-5 animate-pulse'>
				<div className='w-28 h-6 border bg-neutral-200' />
				<div className='flex flex-nowrap justify-start items-center gap-5'>
					{Array(4)
						.fill(0)
						.map((_, index) => (
							<div
								className='aspect-square w-1/4 h-auto border bg-neutral-200'
								key={`ModelPicker-Skeleton-${index + 1}`}
							/>
						))}
				</div>
			</div>
		),
	},
)

const ProductsTallas = dynamic(
	() => import('@/components/products/products-tallas'),
	{
		ssr: false,
		loading: () => (
			<div className='mt-3 mb-5 space-y-5 animate-pulse'>
				<div className='w-28 h-6 border bg-neutral-200' />
				<div className='flex flex-nowrap justify-start items-center gap-5'>
					{Array(8)
						.fill(0)
						.map((_, index) => (
							<div
								className='size-7 rounded-md border bg-neutral-200'
								key={`ProductsTallas-Skeleton-${index + 1}`}
							/>
						))}
				</div>
			</div>
		),
	},
)

const Quantity = dynamic(() => import('@/components/products/quantity'), {
	ssr: false,
	loading: () => (
		<div className='mt-3 mb-5 space-y-5 animate-pulse'>
			<div className='w-28 h-6 border bg-neutral-200' />
			<div className='flex justify-between items-center'>
				{Array(2)
					.fill(0)
					.map((_, index) => (
						<div
							className='w-40 h-12 rounded-md border bg-neutral-200'
							key={`QuantityTallas-Skeleton-${index + 1}`}
						/>
					))}
			</div>
		</div>
	),
})

const ProductPageClient = ({ productInfo }: { productInfo: WPProduct }) => {
	const {
		description,
		material,
		parsedName,
		variations,
		isNew,
		parsedPrice,
		colors,
		related,
	} = useMemo(() => parseProductContent(productInfo), [productInfo])

	const [talla, seTalla] = useState('m')
	const [model, setModel] = useState(variations.nodes)
	const [index, setIndex] = useState(0)

	const cartItem = useMemo(
		() => ({
			id: productInfo.id,
			talla,
			model: model[index + 1],
			parsedPrice,
			parsedName,
			description,
			quantity: 1,
		}),
		[talla, model, index, parsedPrice, parsedName, description, productInfo.id],
	)

	return (
		<section className='relative' id={parsedName}>
			<div className='flex flex-wrap w-full p-2 h-fit'>
				<div className='w-full px-4 md:w-1/2 space-y-5'>
					<Image
						src={model[index + 1].image.sourceUrl}
						alt={model[index + 1].name}
						height={700}
						width={700}
						priority
						title={model[index + 1].name}
						className='object-center aspect-square h-auto w-auto'
					/>
					<Image
						src={model[index].image.sourceUrl}
						alt={model[index].name}
						height={700}
						width={700}
						priority
						title={model[index].name}
						className='object-center aspect-square h-auto w-auto'
					/>
				</div>
				<div className='w-full px-4 md:w-1/2 sticky top-4 h-fit mt-3 md:mt-0'>
					<div className='mb-8 border-b'>
						<h2 className='flex justify-between items-start w-fullmt-1 mb-1 text-2xl font-bold md:text-4xl uppercase'>
							{parsedName}{' '}
							{!isNew && (
								<Link
									href='/nuevo'
									className='text-xs tracking-wide bg-gray-900 py-1 px-3 text-gray-100 hover:bg-gray-700 duration-200 transition-colors hidden md:block'
								>
									nuevo
								</Link>
							)}
						</h2>
						<h3 className='font-light uppercase'>{description}</h3>
						<h3 className='font-bold uppercase'>{material}</h3>
						<p className='inline-block my-3 text-4xl font-bold text-accent space-x-5'>
							{parsedPrice}
						</p>
						<ModelPicker related={related} setModel={setModel} />
						<ColorPicker
							colors={colors}
							setColor={setIndex}
							variations={variations}
						/>
						<ProductsTallas setTalla={seTalla} selectedTalla={talla} />
						<Quantity product={cartItem} />
					</div>
					<AccordionProducts />
				</div>
			</div>
		</section>
	)
}

export default React.memo(ProductPageClient)
