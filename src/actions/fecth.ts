'use server'

import { getPersonalizedProducts } from '@/lib/queries'
import type { WPProduct } from '@/types'
import { redirect } from 'next/navigation'

export const getPersonalizationProduct = async (formData: FormData) => {
	let filteredProducts: WPProduct | Record<string, never> = {}
	const modelSelection = formData.get('model-selection')?.toString()
	const model = modelSelection != null ? modelSelection.split('|') : []
	const design = formData.get('design-selection')?.toString()

	if (design == null) {
		console.error('Design selection is undefined')
		return
	}

	const genderCategory = model[1] === 'Unisex' ? 'Hombre' : model[1]

	const products = await getPersonalizedProducts(
		model[0].trim(),
		genderCategory,
	)
	filteredProducts = products.filter((product) =>
		product.productCategories.nodes.some(
			(category) => category.name === design.trim(),
		),
	)[0]

	redirect(
		`/${model[1].trim().toLowerCase()}/${genderCategory.trim().toLowerCase()}/${
			filteredProducts.id
		}#navbar`,
	)
}
