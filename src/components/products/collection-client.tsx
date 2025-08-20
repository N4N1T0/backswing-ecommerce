'use client'

import ProductCard from '@/components/products/product-card'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_PRODUCTS_BY_CATEGORY } from '@/sanity/queries'
import { GET_PRODUCTS_BY_CATEGORYResult } from '@/sanity/types'
import { useEffect, useState } from 'react'

interface CollectionClientProps {
  collection: 'hombre' | 'mujer' | 'niño'
}

const CollectionClient = ({ collection }: CollectionClientProps) => {
  const [products, setProducts] =
    useState<GET_PRODUCTS_BY_CATEGORYResult['designs']>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const type = ['camisetas', collection]
        const data = await sanityClientRead.fetch(GET_PRODUCTS_BY_CATEGORY, {
          type: type
        })

        const sortedProducts = {
          designs: data.designs.sort((a, b) => {
            if (a.commingSoon === b.commingSoon) return 0
            return a.commingSoon ? 1 : -1
          })
        }

        const formattedProducts = sortedProducts.designs
          .filter((design) => design.format)
          .slice(0, 4)

        setProducts(formattedProducts)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [collection])

  if (loading) {
    return (
      <section id={`${collection}-collection`}>
        <div>
          <div className='mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4'>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className='animate-pulse'>
                <div className='bg-gray-200 aspect-square rounded-lg mb-4'></div>
                <div className='bg-gray-200 h-4 rounded mb-2'></div>
                <div className='bg-gray-200 h-4 rounded w-3/4'></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (products && !products.length) {
    return null
  }

  return (
    <section id={`${collection}-collection`}>
      <div>
        <header className='w-full flex flex-col justify-center items-start'>
          <h2 className='text-gray-900 text-4xl lg:text-5xl font-medium uppercase tracking-wide'>
            También te podría gustar
          </h2>
        </header>
        <ul className='mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4'>
          {products?.map((product, index) => (
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

export default CollectionClient
