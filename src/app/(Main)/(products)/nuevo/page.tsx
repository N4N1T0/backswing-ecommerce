import ProductCard from '@/components/products/product-card'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_DESIGNS_BY_NEW } from '@/sanity/queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nuevos Productos',
  description: 'Diseños de productos nuevos'
}

export default async function NuevoCamisetasPage() {
  const products = await sanityClientRead.fetch(
    GET_DESIGNS_BY_NEW,
    {},
    {
      next: {
        revalidate: 60 * 5
      },
      cache: 'force-cache'
    }
  )

  if (!products) {
    return (
      <section className='flex items-center justify-center min-h-[50vh]'>
        <p>Productos No encontrados</p>
      </section>
    )
  }

  return (
    <section
      id='nuevo collection'
      className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          route='nuevo'
          priority={index}
        />
      ))}
    </section>
  )
}
