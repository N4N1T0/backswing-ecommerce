import ProductCard from '@/components/products/product-card'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_DESIGNS_BY_SEARCH } from '@/sanity/queries'
import type { SearchParamsSearchType } from '@/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Búsqueda',
  description: 'Búsqueda de productos en la tienda de Backswing.'
}

export default async function SearchPage({
  searchParams
}: {
  searchParams: SearchParamsSearchType
}) {
  const { q: searchValue } = await searchParams

  const products = await sanityClientRead.fetch(GET_DESIGNS_BY_SEARCH, {
    search: searchValue
  })

  const resultsText = products.length === 1 ? 'resultado' : 'resultados'

  if (!products || products.length === 0) {
    return (
      <main className='max-w-screen-2xl mx-auto p-5 md:p-10 space-y-5 md:space-y-10 md:pt-20 pt-10 mt-20'>
        <div>
          <h1 className='text-2xl md:text-4xl font-semibold leading-9 text-gray-800 my-3 text-center md:text-left'>
            Página de Búsqueda
          </h1>
          {searchValue && (
            <p className='mb-4 text-center md:text-left'>
              {products?.length === 0
                ? 'No hay productos que coincidan con '
                : `Mostrando ${products?.length} ${resultsText} para `}
              <span className='font-bold'>&quot;{searchValue}&quot;</span>
            </p>
          )}
        </div>
      </main>
    )
  }

  return (
    <section
      id='search-products'
      className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
    >
      {products.map((product, index) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            route='hombre/camisetas'
            priority={index}
          />
        )
      })}
    </section>
  )
}
