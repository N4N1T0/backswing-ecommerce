// Components Imports
import ProductPageClient from '@/components/products/product-page'

// Queries Imports
import { getProductsByCategories, getSingleProductById } from '@/lib/queries'

// Types Imports
import type { WPProduct } from '@/types'

// Next.js Imports
import type { Metadata, ResolvingMetadata } from 'next'

// Force Static Page
export const dynamic = 'force-static'

/**
 * Retrieves the static parameters for the generateStaticParams function.
 *
 * @return {Promise<{ product: string }[]>} An array of objects containing the product IDs.
 */
export async function generateStaticParams(): Promise<{ product: string }[]> {
	const products: WPProduct[] = await getProductsByCategories(
		'camisetas',
		'mujer',
	)

	return products.map((product) => ({ product: product.id }))
}

/**
 * Generates the metadata for a specific product.
 *
 * @param {Object} params - The parameters for generating the metadata.
 * @param {string} params.product - The ID of the product.
 * @param {ResolvingMetadata} parent - The parent metadata object.
 * @return {Promise<Metadata>} The generated metadata object.
 */
export async function generateMetadata(
	{ params }: { params: { product: string } },
	parent: ResolvingMetadata,
): Promise<Metadata> {
	// fetch data
	const productInfo = await getSingleProductById(params.product)
	const previousImages = (await parent).openGraph?.images || []

	return {
		title: productInfo.name,
		description: productInfo.content,
		openGraph: {
			images: [
				productInfo.variations.nodes[0].image.sourceUrl,
				...previousImages,
			],
		},
	}
}

/**
 * Asynchronously fetches a single product by its ID and renders the `ProductPageClient`
 * component with the fetched product info.
 *
 * @param {Object} params - An object containing the `product` parameter.
 * @param {string} params.product - The ID of the product to fetch.
 * @return {Promise<JSX.Element>} A Promise that resolves to the rendered `ProductPageClient`
 * component.
 */
const ProductPage = async ({
	params,
}: { params: { product: string } }): Promise<JSX.Element> => {
	const productInfo = await getSingleProductById(params.product)

	return <ProductPageClient productInfo={productInfo} />
}

export default ProductPage
