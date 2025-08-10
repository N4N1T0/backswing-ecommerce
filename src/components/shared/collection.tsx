import ProductCard from '@/components/products/product-card'
import { collectionSubtitle } from '@/contants/ui-data'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_PRODUCTS_BY_CATEGORY } from '@/sanity/queries'

const Collection = async ({
  direction,
  collection
}: {
  direction: 'right' | 'left'
  collection: 'hombre' | 'mujer' | 'niño'
}) => {
  const type = ['camisetas', collection]
  const products = await sanityClientRead.fetch(GET_PRODUCTS_BY_CATEGORY, {
    type: type
  })
  console.log('🚀 ~ Collection ~ products:', products)

  if (!products) {
    return null
  }

  const formattedProducts = products.designs
    .filter((design) => design.format)
    .slice(0, 4)

  return (
    <section id={`${collection}-collection`}>
      <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <header
          className={`w-full flex flex-col ${
            direction === 'right' ? 'items-end' : 'items-start'
          }`}
        >
          <h2 className='text-gray-900 text-4xl lg:text-5xl font-medium uppercase tracking-wide'>
            {collection}
          </h2>
          <p
            className={`${
              direction === 'right' ? 'text-right' : 'text-left'
            } mt-4 max-w-2xl text-pretty text-gray-500`}
          >
            {collectionSubtitle[collection]}
          </p>
        </header>

        <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {formattedProducts.map((product, index) => (
            <li key={product.id} className='relative'>
              <ProductCard
                product={product}
                route={`${collection}/camisetas`}
                priority={index}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Collection
