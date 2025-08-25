import ProductCard from '@/components/products/product-card'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_DESIGNS_BY_IDS } from '@/sanity/queries'

interface CollectionProps {
  title: string | null
  subtitle?: string | null
  designIds: string[]
  direction?: 'right' | 'left'
}

const Collection = async ({
  title,
  subtitle,
  designIds,
  direction = 'left'
}: CollectionProps) => {
  if (!designIds || designIds.length === 0) {
    return null
  }

  const products = await sanityClientRead
    .fetch(GET_DESIGNS_BY_IDS, {
      designIds: designIds
    })
    .then((data) => {
      return data.sort((a, b) => {
        if (a.commingSoon === b.commingSoon) return 0
        return a.commingSoon ? 1 : -1
      })
    })

  if (!products || products.length === 0) {
    return null
  }

  const formattedProducts = products
    .filter((design) => design.format && design.format.length > 0)
    .slice(0, 8)

  return (
    <section id={`${title?.toLowerCase().replace(/\s+/g, '-')}-collection`}>
      <div className='mx-auto max-w-screen-2xl py-8 sm:px-6 sm:py-12 lg:px-8'>
        <header
          className={`w-full flex flex-col ${
            direction === 'right' ? 'items-end' : 'items-start'
          }`}
        >
          <h2 className='text-gray-900 text-4xl lg:text-5xl font-medium uppercase tracking-wide'>
            {title}
          </h2>
          {subtitle && (
            <p
              className={`${
                direction === 'right' ? 'text-right' : 'text-left'
              } mt-4 max-w-2xl text-pretty text-gray-500`}
            >
              {subtitle}
            </p>
          )}
        </header>

        <ul className='mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4'>
          {formattedProducts.map((product, index) => (
            <li key={product.id} className='relative'>
              <ProductCard
                product={product}
                route={`productos/camisetas`}
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
