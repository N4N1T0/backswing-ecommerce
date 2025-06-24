import ProductCard from '@/components/products/product-card'
import { capitalize } from '@/lib/utils'
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

  if (!products) {
    return null
  }

  const formattedProducts = products.designs
    .filter((design) => design.colors)
    .slice(0, 4)

  return (
    <section id={`${collection}-collection`}>
      <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <header
          className={`w-full flex flex-col ${
            direction === 'right' ? 'items-end' : 'items-start'
          }`}
        >
          <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
            {capitalize(collection)}
          </h2>
          <p
            className={`${
              direction === 'right' ? 'text-right' : 'text-left'
            } mt-4 max-w-md text-gray-500`}
          >
            Descubre nuestra nueva colección de camisetas para {collection}
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
