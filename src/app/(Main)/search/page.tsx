import ProductCard from '@/components/products/product-card'
import { orama } from '@/lib/orama'
import { type StaticProductsTypes } from '@/types'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Busqueda',
  description: 'Busqueda de productos en la tienda de Backswing.'
}

const SearchPage = async ({
  searchParams
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) => {
  const { q: searchValue } = searchParams as Record<string, string>

  const products = await orama.search({
    term: searchValue,
    limit: 50,
    mode: 'fulltext'
  })

  if (products === undefined || products === null) {
    return null
  }

  const resultsText = products.count > 1 ? 'results' : 'result'
  const docs = products.hits.map((hit: any) => hit.document) as StaticProductsTypes[]

  return (
    <main className='max-w-screen-3xl mx-auto p-5 md:p-10 space-y-5 md:space-y-10'>
      <div>
        <h1 className='text-2xl md:text-4xl font-semibold leading-9 text-gray-800 my-3 text-center md:text-left'>Pagina de Busqueda</h1>
        {(searchValue.length > 0)
          ? (
            <p className='mb-4 text-center md:text-left'>
              {products?.count === 0
                ? 'No hay productos que coincidan con '
                : `Mostrando ${products?.count} ${resultsText} para `}
              <span className='font-bold'>&quot;{searchValue}&quot;</span>
            </p>
          )
          : null}
      </div>
      {products.count > 0
        ? (
          <section id='search products' className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
            {docs?.map(item => (
              <ProductCard key={item.id} product={item} route={item.gender} />
            ))}
          </section>
        )
        : null}
    </main>
  )
}

export default SearchPage
