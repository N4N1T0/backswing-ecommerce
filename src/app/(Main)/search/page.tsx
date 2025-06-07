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
  // const { q: searchValue } = await searchParams
  // const products: Results<WPProduct> | null = await orama.search({
  // 	term: searchValue,
  // 	limit: 50,
  // 	mode: 'fulltext',
  // })

  // if (products === undefined || products === null) {
  // 	return null
  // }

  //	const resultsText = products.count > 1 ? 'results' : 'result'

  // const docs = products.hits.map((hit: OramaHit) => {
  // 	return hit.document
  // })

  return (
    <main className='max-w-screen-3xl mx-auto p-5 md:p-10 space-y-5 md:space-y-10'>
      {/* <div>
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
          {docs?.map((item, index) => {
            const { gender, category } = parseProductContent(item)
            return (
              <ProductCard
                key={item.id}
                product={item}
                route={`${gender?.toLowerCase()}/${category?.toLowerCase()}`}
                priority={index}
              />
            )
          })}
        </section>
      ) : null} */}
    </main>
  )
}
