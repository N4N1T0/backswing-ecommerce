import { SearchParamsProductType } from '@/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mujer - Camisetas',
  description: 'Diseños de camisetas para mujeres amantes del Padel'
}

export default async function MujerCamisetasPage({
  params
}: {
  params: SearchParamsProductType
}) {
  const { type } = await params
  console.log('🚀 ~ type:', type)

  // const products: WPProduct[] = await getProductsByCategories(
  //   'camisetas',
  //   'mujer'
  // )

  return (
    <section
      id='mujer camisetas collection'
      className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
    >
      {/* {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          route='mujer/camisetas'
          priority={index}
        />
      ))} */}
    </section>
  )
}
