'use server'

import { getPersonalizedProducts } from '@/lib/queries'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const getPersonalizationProduct = async (formData: FormData) => {
	const modelSelection = formData.get('model-selection')?.toString()
	const design = formData.get('design-selection')?.toString()?.trim()

	if (!modelSelection || !design) {
		throw new Error('Model selection or design selection is undefined')
	}

	const [model, gender] = modelSelection.split('|')
	const genderCategory = gender === 'Unisex' ? 'Hombre' : gender
	const genderCategoryLower = genderCategory.toLowerCase().trim()
	const modelCategoryLower = model.toLowerCase().trim()

	const products = await Promise.all(
		design
			.split(',')
			.map((designName) =>
				getPersonalizedProducts(modelCategoryLower, genderCategoryLower),
			),
	)

	const filteredProducts = products
		.flat()
		.find((product) =>
			product.productCategories.nodes.some(
				(category) => category.name === design,
			),
		)

	if (!filteredProducts) {
		revalidatePath('/personalizar')
		alert('No hay resultados, por favor selecciona Pruebe otra vez')
	} else {
		redirect(
			`/${genderCategoryLower}/${modelCategoryLower}/${filteredProducts.id}#navbar`,
		)
	}
}
