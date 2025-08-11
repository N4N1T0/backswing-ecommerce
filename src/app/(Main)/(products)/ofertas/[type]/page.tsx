import { SearchParamsProductType } from '@/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ofertas - Camisetas',
  description: 'Diseños de camisetas en oferta'
}

export default async function OfertasCamisetasPage({
  params
}: {
  params: SearchParamsProductType
}) {
  const { type } = await params
  console.log('🚀 ~ type:', type)

  // const products: WPProduct[] = await getProductsByCategories(
  //   'camisetas',
  //   'ofertas'
  // )

  return (
    <section
      id='ofertas collection'
      className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10 bg-gray-50 p-3'
    >
      {/* {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          route='ofertas/camisetas'
          priority={index}
        />
      ))} */}
    </section>
  )
}
