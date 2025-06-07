import { SearchParamsProductType } from '@/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nuevo - Camisetas',
  description: 'Diseños de camisetas nuevos'
}

export default async function NuevoCamisetasPage({
  params
}: {
  params: SearchParamsProductType
}) {
  const { type } = await params
  console.log('🚀 ~ type:', type)

  // const products: WPProduct[] = await getProductsByCategories(
  //   'camisetas',
  //   'ninos'
  // )

  return (
    <section
      id='nuevo collection'
      className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
    >
      {/* {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          route='nuevo/camisetas'
          priority={index}
        />
      ))} */}
    </section>
  )
}
