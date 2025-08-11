'use client'

import { SquarePlaceholder } from '@/assets/placeholder'
import { cn, eurilize } from '@/lib/utils'
import type { Colors, ProductCard } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import BuyNow from './buy-now'
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
    const { format, offer, price, title, slug, commingSoon } = product

    const hasOffer = !!offer
    const isCommingSoon = !!commingSoon

    // STATE
    const [designFormat, _setDesignFormat] = useState(format[0])
    const [colors, setColors] = useState<Colors[number]>(format[0].colors[0])
    const [mainImage, _setMainImage] = useState(Number(colors.mainImage) || 0)

    return (
      <div className='block relative border shadow-xs'>
        {/* BADGES */}
        {isCommingSoon && (
          <>
            <div className='absolute size-full inset-0 z-40 bg-gray-100 opacity-50 border border-gray-400'></div>
            <p className='text-xs uppercase tracking-wide bg-red-500 py-1 px-3 text-gray-100 absolute right-3 top-3 z-40'>
              Próximamente
            </p>
          </>
        )}
        {hasOffer && !isCommingSoon && (
          <p className='text-xs uppercase tracking-wide bg-green-500 py-1 px-3 text-gray-100 absolute right-3 top-3 z-50'>
            Oferta
          </p>
        )}

        <Link
          href={`/${route}/${slug}`}
          className='relative h-[200px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] overflow-hidden block group'
        >
          <div className='relative size-full object-cover aspect-[9/10] shadow-md shadow-gray-200 border border-gray-100'>
            <Image
              src={colors.images[mainImage].url || SquarePlaceholder}
              blurDataURL={
                colors.images[mainImage].blur || SquarePlaceholder.blurDataURL
              }
              placeholder='blur'
              alt={title || 'Diseño de camiseta'}
              title={title || 'Diseño de camiseta'}
              priority={priority <= 8}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className={cn(
                'object-cover aspect-[9/10] transition-transform duration-500 ease-in-out group-hover:scale-125 size-auto z-4o',
                isCommingSoon && 'cursor-not-allowed'
              )}
            />
          </div>
        </Link>

        <div className='relative p-3'>
          <div className='w-full flex justify-between items-center'>
            <Link href={`/${route}/${slug}`}>
              <h3 className='text-gray-950 font-medium uppercase text-sm md:text-base hover:text-gray-700 transition-colors duration-200'>
                {title}
              </h3>
            </Link>
            <WishlistHeart product={product} />
          </div>
          <div className='flex justify-between items-center mt-1'>
            <ColorPicker
              colors={designFormat.colors}
              setColor={setColors}
              isProductCard
              slug={slug}
            />
            <div className='flex items-center justify-between text-gray-900 text-lg mb-3'>
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

          {/* Fast Buy Button */}
          <BuyNow product={product} />
        </div>
      </div>
    )
  }
)

ProductCard.displayName = 'ProductCard'
export default ProductCard
