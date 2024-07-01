'use server'

// Next Imports
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// Queries Imports
import { getPersonalizedProducts } from '@/lib/queries'

/**
 * Retrieves personalized products based on the model and design selection.
 *
 * @param {FormData} formData - The form data containing model and design selection.
 * @return {Promise<void>} Promise that resolves when the personalized products are retrieved.
 */
export const getPersonalizationProduct = async (
	formData: FormData,
): Promise<void> => {
	// Extract model and gender from form data
	const modelSelection = formData.get('model-selection')?.toString()
	const design = formData.get('design-selection')?.toString()?.trim()

	// Check if model or design is undefined
	if (!modelSelection || !design) throw new Error('Model or design undefined')

	// Split model and gender into separate variables
	const [model, gender] = modelSelection.split('|')
	// Normalize gender and model names
	const genderCategory = gender === 'Unisex' ? 'Hombre' : gender
	const genderCategoryLower = genderCategory.toLowerCase().trim()
	const modelCategoryLower = model.toLowerCase().trim()

	// Fetch personalized products for each design
	const products = await Promise.all(
		design
			.split(',')
			.map((designName) =>
				getPersonalizedProducts(modelCategoryLower, genderCategoryLower),
			),
	)

	// Find the product that matches the design
	const filteredProducts = products
		.flat()
		.find((product) =>
			product.productCategories.nodes.some(
				(category) => category.name === design,
			),
		)

	// Redirect to the product page if found, else revalidate and alert user
	if (!filteredProducts) {
		revalidatePath('/personalizar')
		alert('No results, please try again')
	} else {
		redirect(
			`/${genderCategoryLower}/${modelCategoryLower}/${filteredProducts.id}#navbar`,
		)
	}
}
