import ColorPicker from '@/components/products/color-picker'
import WishlistHeart from '@/components/products/wishlist-heart'
import { parseProductContent } from '@/lib/utils'
import type { WPProduct } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = React.memo(
  ({
    product,
    route,
    priority
  }: {
    product: WPProduct
    route: string
    priority: number
  }) => {
    const { parsedName, isNew, parsedPrice, colors, image, id, onSale } =
      parseProductContent(product)

    return (
      <div className='block'>
        <Link
          href={`/${route}/${id}`}
          className='relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden block group'
        >
          <Image
            src={image.sourceUrl}
            alt={parsedName}
            title={parsedName}
            fill
            priority={priority <= 8}
            loading={priority <= 8 ? 'eager' : 'lazy'}
            sizes='(max-width: 768px) 200px (max-width: 1200px) 400px'
            className={`aspect-square object-center transition-transform ease-out duration-300 group-hover:scale-110 h-auto w-auto ${
              isNew ? 'relative' : ''
            }`}
          />
          {isNew && (
            <p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100 absolute right-3 top-3 z-50'>
              Nuevo
            </p>
          )}
        </Link>

        <div className='relative pt-3'>
          <div className='w-full flex justify-between items-center'>
            <h3 className='text-gray-950 font-medium uppercase text-sm md:text-base'>
              {parsedName}
            </h3>
            <WishlistHeart product={product} />
          </div>

          <ColorPicker colors={colors} isProductCard />

          <div className='mt-1.5 flex items-center justify-between text-gray-900'>
            <p className='tracking-wide font-medium'>{parsedPrice}</p>

            {onSale && (
              <p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100'>
                Oferta
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }
)

ProductCard.displayName = 'ProductCard'
export default ProductCard
