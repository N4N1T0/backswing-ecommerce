import ProductCard from '@/components/products/product-card'
import { type Metadata } from 'next'
import { getRandomProductsCollection } from '@/lib/utils'

export async function generateMetadata ({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `Hombre - ${params.category}`
  }
}

const HombrePage = ({ params }: { params: { category: string } }) => {
  const products = getRandomProductsCollection('hombre', 12)

  return (
    <section id={`hombre ${params.category} colection`} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} route={`hombre/${params.category}`} />
      ))}
    </section>
  )
}

export default HombrePage
