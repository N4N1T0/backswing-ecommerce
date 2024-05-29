'use server'

import { getPersonalizedProducts } from '@/lib/queries'
import { redirect } from 'next/navigation'

export const getPersonalizationProduct = async (formData: FormData) => {
	const modelSelection = formData.get('model-selection')?.toString()
	const design = formData.get('design-selection')?.toString()?.trim()

	if (!modelSelection || !design) {
		console.error('Model selection or design selection is undefined')
		return
	}

	const [model, gender] = modelSelection.split('|')
	const genderCategory = gender === 'Unisex' ? 'Hombre' : gender
	const genderCategoryLower = genderCategory.toLowerCase().trim()
	const modelCategoryLower = model.toLowerCase().trim()

	const products = await getPersonalizedProducts(
		modelCategoryLower,
		genderCategoryLower,
	)

	const filteredProducts = products.filter((product) =>
		product.productCategories.nodes.some(
			(category) => category.name === design.trim(),
		),
	)[0]

	redirect(
		`/${genderCategoryLower}/${modelCategoryLower}/${filteredProducts.id}#navbar`,
	)
}
