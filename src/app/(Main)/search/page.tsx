// Components Imports
import ProductCard from '@/components/products/product-card'

// Orama Imports
import { orama } from '@/lib/orama'
import type { Results } from '@orama/orama'

// Types Imports
import type { OramaHit, WPProduct } from '@/types'
import type { Metadata } from 'next'

// Utils Imports
import { parseProductContent } from '@/lib/utils'

// Metadata for the page
export const metadata: Metadata = {
	title: 'Busqueda',
	description: 'Busqueda de productos en la tienda de Backswing.',
}

/**
 * Renders the search page, which allows users to search for products.
 *
 * @param {Object} props - The component props.
 * @param {Record<string, string | string[] | undefined>} props.searchParams - The search parameters.
 * @return {Promise<JSX.Element | null>} The search page with the search results or null if no products are found.
 */
const SearchPage = async ({
	searchParams,
}: {
	searchParams?: Record<string, string | string[] | undefined>
}): Promise<JSX.Element | null> => {
	// Extract search value from search parameters
	const { q: searchValue } = searchParams as Record<string, string>

	// Perform search using Orama API
	const products: Results<WPProduct> | null = await orama.search({
		term: searchValue,
		limit: 50,
		mode: 'fulltext',
	})

	// If no products found, return null
	if (products === undefined || products === null) {
		return null
	}

	// Determine result text (plural or singular)
	const resultsText = products.count > 1 ? 'results' : 'result'

	// Extract document data from search results
	const docs = products.hits.map((hit: OramaHit) => {
		return hit.document
	})

	// Render search page with results
	return (
		<main className='max-w-screen-3xl mx-auto p-5 md:p-10 space-y-5 md:space-y-10'>
			<div>
				<h1 className='text-2xl md:text-4xl font-semibold leading-9 text-gray-800 my-3 text-center md:text-left'>
					Pagina de Busqueda
				</h1>
				{searchValue.length > 0 ? (
					<p className='mb-4 text-center md:text-left'>
						{products?.count === 0
							? 'No hay productos que coincidan con '
							: `Mostrando ${products?.count} ${resultsText} para `}
						<span className='font-bold'>&quot;{searchValue}&quot;</span>
					</p>
				) : null}
			</div>
			{products.count > 0 ? (
				<section
					id='search products'
					className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
				>
					{docs?.map((item) => {
						const { gender, category } = parseProductContent(item)
						return (
							<ProductCard
								key={item.id}
								product={item}
								route={`${gender?.toLowerCase()}/${category?.toLowerCase()}`}
							/>
						)
					})}
				</section>
			) : null}
		</main>
	)
}

export default SearchPage
