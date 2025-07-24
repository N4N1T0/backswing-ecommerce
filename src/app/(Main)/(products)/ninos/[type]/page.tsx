import ProductCard from '@/components/products/product-card'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_PRODUCTS_BY_CATEGORY } from '@/sanity/queries'
import { SearchParamsProductType } from '@/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Niños - Camisetas',
  description: 'Diseños de camisetas para niños amantes del Padel'
}

export default async function NinosCamisetasPage({
  params
}: {
  params: SearchParamsProductType
}) {
  const { type } = await params

  const products = await sanityClientRead.fetch(GET_PRODUCTS_BY_CATEGORY, {
    type: [type, 'ninos']
  })

  if (!products || !products.designs) {
    return (
      <section className='flex items-center justify-center min-h-[50vh]'>
        <p>Productos No encontrados</p>
      </section>
    )
  }

  return (
    <section
      id='ninos collection'
      className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
    >
      {products.designs.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          route='hombre/camisetas'
          priority={index}
        />
      ))}
    </section>
  )
}
