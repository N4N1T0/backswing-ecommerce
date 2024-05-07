import ProductCard from '@/components/products/product-card'
import { type Metadata } from 'next'
import { getRandomProductsNew } from '@/lib/utils'

export async function generateMetadata ({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `Nuevos - ${params.category}`,
    description: `Diseños nuevos de ${params.category} para los amantes del Padel`
  }
}

const NuevoPage = ({ params }: { params: { category: string } }) => {
  const products = getRandomProductsNew(12)

  return (
    <section id={`nuevo ${params.category} colection`} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} route={`nuevo/${params.category}`} />
      ))}
    </section>
  )
}

export default NuevoPage
