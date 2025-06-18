'use client'

import { SquarePlaceholder } from '@/assets/placeholder'
import { cn, eurilize } from '@/lib/utils'
import type { Colors, ProductCard } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ColorPicker from './color-picker'
import WishlistHeart from './wishlist-heart'

const ProductCard = React.memo(
  ({
    product,
    route,
    priority
  }: {
    product: ProductCard
    route: string
    priority: number
  }) => {
    // CONST
    const { colors, offer, price, title, slug } = product
    const hasOffer = !!offer

    // STATE
    const [images, setImages] = useState<Colors[number]>(colors && colors[0])

    return (
      <div className='block'>
        <Link
          href={`/${route}/${slug}`}
          className='relative h-[200px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] overflow-hidden block group'
        >
          <div className='relative w-full h-full aspect-square'>
            <Image
              src={images?.images[0].url || SquarePlaceholder}
              blurDataURL={
                images?.images[0].blur || SquarePlaceholder.blurDataURL
              }
              placeholder='blur'
              fill
              alt={title || 'Diseño de camiseta'}
              title={title || 'Diseño de camiseta'}
              priority={priority <= 8}
              loading={priority <= 8 ? 'eager' : 'lazy'}
              sizes='(max-width: 768px) 200px (max-width: 1200px) 400px'
              className={cn(
                'aspect-square object-center transition-transform duration-500 ease-in-out group-hover:scale-125 h-auto w-auto z-40',
                hasOffer && 'relative'
              )}
            />
          </div>
          {hasOffer && (
            <p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100 absolute right-3 top-3 z-50'>
              Oferta
            </p>
          )}
        </Link>

        <div className='relative pt-3'>
          <div className='w-full flex justify-between items-center'>
            <h3 className='text-gray-950 font-medium uppercase text-sm md:text-base'>
              {title}
            </h3>
            <WishlistHeart product={product} />
          </div>
          <ColorPicker colors={colors} setColor={setImages} isProductCard />
          <div className='mt-1.5 flex items-center justify-between text-gray-900'>
            {hasOffer ? (
              <>
                <p className='tracking-wide font-regular line-through text-gray-500'>
                  {eurilize(price)}
                </p>
                <p className='tracking-wide font-medium'>{eurilize(offer)}</p>
              </>
            ) : (
              <p className='tracking-wide font-medium'>{eurilize(price)}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
)

ProductCard.displayName = 'ProductCard'
export default ProductCard
