'use client'

import { SquarePlaceholder } from '@/assets/placeholder'
import { cn, eurilize, getRandomNumber } from '@/lib/utils'
import useWishlist from '@/stores/wishlist-store'
import type { Colors, ProductCard } from '@/types'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ColorPicker from './color-picker'

interface WishlistCardProps {
  product: ProductCard
  route: string
  priority?: number
}

const WishlistCard = React.memo(
  ({ product, route, priority = 1 }: WishlistCardProps) => {
    // CONST
    const { colors, offer, price, title, slug, commingSoon, id } = product
    const hasOffer = !!offer
    const pseudoIndex = getRandomNumber()
    const isCommingSoon = !!commingSoon
    const isInStock = !isCommingSoon

    // STORES
    const [wishlistItems, setWishlistItems] = useWishlist()

    // STATE
    const [images, setImages] = useState<Colors[number]>(
      colors && colors[pseudoIndex]
    )

    // HANDLERS
    const removeFromWishlist = () => {
      const updatedItems = wishlistItems.filter(
        (item: ProductCard) => item.id !== id
      )
      setWishlistItems(updatedItems)
    }

    return (
      <div className='block relative border border-gray-200 bg-white'>
        <button
          className='absolute top-3 right-3 z-50 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm transition-colors'
          onClick={removeFromWishlist}
          aria-label='Eliminar de la lista de deseos'
        >
          <X className='h-4 w-4 text-gray-600 hover:text-black' />
        </button>

        {isCommingSoon && (
          <>
            <div className='absolute size-full inset-0 z-40 bg-gray-100 opacity-50'></div>
            <p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100 absolute left-3 top-3 z-50'>
              Próximamente
            </p>
          </>
        )}

        {hasOffer && !isCommingSoon && (
          <p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100 absolute left-3 top-3 z-50'>
            Oferta
          </p>
        )}

        <Link
          href={`/${route}/${slug}`}
          className='relative h-[200px] sm:h-[200px] md:h-[250px] overflow-hidden block group'
        >
          <div className='relative w-full h-full aspect-square'>
            <Image
              src={
                images?.images[1]?.url ||
                images?.images[0]?.url ||
                SquarePlaceholder
              }
              blurDataURL={
                images?.images[1]?.blur ||
                images?.images[0]?.blur ||
                SquarePlaceholder.blurDataURL
              }
              placeholder='blur'
              fill
              alt={title || 'Diseño de camiseta'}
              title={title || 'Diseño de camiseta'}
              priority={priority <= 8}
              loading={priority <= 8 ? 'eager' : 'lazy'}
              sizes='(max-width: 768px) 200px (max-width: 1200px) 400px'
              className={cn(
                'aspect-square object-center transition-transform duration-500 ease-in-out group-hover:scale-110 h-auto w-auto',
                isCommingSoon && 'cursor-not-allowed'
              )}
            />
          </div>
        </Link>

        <div className='relative p-4 space-y-3'>
          <h3 className='text-gray-950 font-medium uppercase text-sm line-clamp-2'>
            {title}
          </h3>

          <ColorPicker
            colors={colors}
            setColor={setImages}
            isProductCard
            key={title}
          />

          <div className='flex items-center justify-between text-gray-900'>
            {hasOffer ? (
              <div className='flex items-center space-x-2'>
                <p className='tracking-wide font-regular line-through text-gray-500 text-sm'>
                  {eurilize(price)}
                </p>
                <p className='tracking-wide font-medium'>{eurilize(offer)}</p>
              </div>
            ) : (
              <p className='tracking-wide font-medium'>{eurilize(price)}</p>
            )}
          </div>

          <div className='flex items-center justify-between pt-2'>
            <span
              className={`text-sm font-medium ${
                isInStock ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {isInStock ? 'En Stock' : 'Próximamente'}
            </span>
          </div>
        </div>
      </div>
    )
  }
)

WishlistCard.displayName = 'WishlistCard'
export default WishlistCard
