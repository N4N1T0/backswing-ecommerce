'use client'

import { SquarePlaceholder } from '@/assets/placeholder'
import { cn, eurilize, getRandomNumber } from '@/lib/utils'
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
    const { colors, offer, price, title, slug, commingSoon } = product
    const hasOffer = !!offer
    const isCommingSoon = !!commingSoon

    // STATE
    const [pseudoIndex] = useState(() => getRandomNumber())
    const [images, setImages] = useState<Colors[number]>(
      colors && colors[pseudoIndex]
    )

    return (
      <div className='block relative'>
        {isCommingSoon && (
          <>
            <div className='absolute size-full inset-0 z-50 bg-gray-100 opacity-50 border border-gray-400'></div>
            <p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100 absolute right-3 top-3 z-50'>
              Próximamente
            </p>
          </>
        )}
        {hasOffer && !isCommingSoon && (
          <p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100 absolute right-3 top-3 z-50'>
            Oferta
          </p>
        )}
        <Link
          href={`/${route}/${slug}`}
          className='relative h-[200px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] overflow-hidden block group'
        >
          <div className='relative size-full object-cover aspect-[9/10] shadow-md shadow-gray-200 border border-gray-100'>
            <Image
              src={images?.images[1].url || SquarePlaceholder}
              blurDataURL={
                images?.images[1].blur || SquarePlaceholder.blurDataURL
              }
              placeholder='blur'
              alt={title || 'Diseño de camiseta'}
              title={title || 'Diseño de camiseta'}
              priority={priority <= 8}
              fill
              className={cn(
                'object-cover aspect-[9/10] transition-transform duration-500 ease-in-out group-hover:scale-125 size-auto z-4o',
                isCommingSoon && 'cursor-not-allowed'
              )}
            />
          </div>
        </Link>

        <div className='relative pt-3 px-1.5 pb-1'>
          <div className='w-full flex justify-between items-center'>
            <h3 className='text-gray-950 font-medium uppercase text-sm md:text-base'>
              {title}
            </h3>
            <WishlistHeart product={product} />
          </div>
          <ColorPicker
            colors={colors}
            setColor={setImages}
            isProductCard
            key={title}
          />
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
