import ProductCard from '@/components/products/product-card'
import { getRandomProductsFeatured } from '@/lib/utils'
import { type Metadata } from 'next'

export async function generateMetadata ({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `Ofertas - ${params.category}`
  }
}

const OfertasPage = ({ params }: { params: { category: string } }) => {
  const products = getRandomProductsFeatured(12)

  return (
    <section id={`ofertas ${params.category} colection`} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} route={`ofertas/${params.category}`} />
      ))}
    </section>
  )
}

export default OfertasPage
