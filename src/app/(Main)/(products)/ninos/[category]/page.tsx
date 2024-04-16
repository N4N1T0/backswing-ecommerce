import ProductCard from '@/components/products/product-card'
import { getRandomProductsCollection } from '@/lib/utils'
import { type Metadata } from 'next'

export async function generateMetadata ({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `Niños - ${params.category}`
  }
}

const NinoPage = ({ params }: { params: { category: string } }) => {
  const products = getRandomProductsCollection('ninos', 12)
  return (
    <section id={`niños ${params.category} colection`} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} route={`ninos/${params.category}`} />
      ))}
    </section>
  )
}

export default NinoPage
