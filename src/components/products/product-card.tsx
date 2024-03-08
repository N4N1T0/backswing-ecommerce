import { urlizeNames, useEuros } from '@/lib/utils'
import { type StaticProductsTypes } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import WishlistHeart from './wishlist-heart'

const ProductCard = ({ product, route }: { product: StaticProductsTypes, route: string }) => {
  const { name, id, image, price, offer, new: isNew } = product

  return (
    <div className='block'>
      <Link href={`/${route}/${urlizeNames(name)}`} className='relative h-[300px] sm:h-[400px] overflow-hidden block group'>
        <Image src={image} alt={name} title={name} fill className='aspect-square object-cover transition-transform ease-out duration-300 group-hover:scale-110 h-auto w-auto' />
        {isNew && <p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100 absolute right-3 top-3 z-50'> Nuevo </p>}
      </Link>

      <div className='relative pt-3'>
        <div className='w-full flex justify-between items-center'>
          <h3 className='text-gray-950 font-medium uppercase text-sm md:text-base'>
            {name}
          </h3>
          <WishlistHeart product={product} />
        </div>

        {/* Colors */}
        <div className='mt-1.5 flex gap-1'>
          <form>
            <fieldset>
              <legend className='sr-only'>Color</legend>
            </fieldset>
            <div className='flex flex-wrap justify-center gap-2'>
              <div>
                <input type='checkbox' id='ColorSg' className='sr-only' />
                <label
                  htmlFor='ColorSg'
                  className='block w-4 h-4 cursor-pointer rounded-full bg-[#595759]'
                >
                  <span className='sr-only'> Space Gray </span>
                </label>
              </div>
              <div>
                <input type='checkbox' id='ColorS' className='sr-only' />
                <label
                  htmlFor='ColorS'
                  className='block h-4 w-4 cursor-pointer rounded-full bg-[#d2d3d4]'
                >
                  <span className='sr-only'> Silver </span>
                </label>
              </div>
              <div>
                <input type='checkbox' id='ColorP' className='sr-only' />
                <label
                  htmlFor='ColorP'
                  className='block h-4 w-4 cursor-pointer rounded-full bg-[#d89f97]'
                >
                  <span className='sr-only'> Pink </span>
                </label>
              </div>
              <div>
                <input type='checkbox' id='ColorG' className='sr-only' />
                <label
                  htmlFor='ColorG'
                  className='block h-4 w-4 cursor-pointer rounded-full bg-[#afbfab]'
                >
                  <span className='sr-only'> Pink </span>
                </label>
              </div>
              <div>
                <input type='checkbox' id='ColorSb' className='sr-only' />
                <label
                  htmlFor='ColorSb'
                  className='block h-4 w-4 cursor-pointer rounded-full bg-[#91a5bb]'
                >
                  <span className='sr-only'> Pink </span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className='mt-1.5 flex items-center justify-between text-gray-900'>
          <p className='tracking-wide font-medium'>
            {offer.onOffer
              ? <><span className='line-through text-xs uppercase tracking-wide font-normal'>{useEuros.format(price)}</span>{' '}{useEuros.format(offer.price)}</>
              : useEuros.format(price)
            }
          </p>

          {offer.onOffer && <p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100'>Oferta</p>}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
