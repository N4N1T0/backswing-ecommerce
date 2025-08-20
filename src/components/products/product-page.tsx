'use client'

import { SquarePlaceholder } from '@/assets/placeholder'
import CollectionClient from '@/components/products/collection-client'
import { Separator } from '@/components/ui/separator'
import { eurilize, slugify } from '@/lib/utils'
import { Colors, type Product, type Sizes } from '@/types'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import AccordionProducts from './accordion-products'

// LAZY LOADING
const ColorPicker = dynamic(
  () => import('@/components/products/color-picker'),
  {
    ssr: false,
    loading: () => (
      <div className='mt-3 mb-5 space-y-5 animate-pulse'>
        <div className='w-28 h-6 border bg-neutral-200' />
        <div className='flex flex-wrap justify-start items-center gap-5'>
          {Array(11)
            .fill(0)
            .map((_, index) => (
              <div
                className='size-7 rounded-full border bg-neutral-200'
                key={`ColorPicker-Skeleton-${index + 1}`}
              />
            ))}
        </div>
      </div>
    )
  }
)
const ModelPicker = dynamic(
  () => import('@/components/products/model-picker'),
  {
    ssr: false,
    loading: () => (
      <div className='mt-3 mb-5 space-y-5 animate-pulse'>
        <div className='w-28 h-6 border bg-neutral-200' />
        <div className='flex flex-nowrap justify-start items-center gap-5'>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                className='aspect-square w-1/4 h-auto border bg-neutral-200'
                key={`ModelPicker-Skeleton-${index + 1}`}
              />
            ))}
        </div>
      </div>
    )
  }
)
const ProductsTallas = dynamic(
  () => import('@/components/products/products-tallas'),
  {
    ssr: false,
    loading: () => (
      <div className='mt-3 mb-5 space-y-5 animate-pulse'>
        <div className='w-28 h-6 border bg-neutral-200' />
        <div className='flex flex-nowrap justify-start items-center gap-5'>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                className='size-7 rounded-md border bg-neutral-200'
                key={`ProductsTallas-Skeleton-${index + 1}`}
              />
            ))}
        </div>
      </div>
    )
  }
)
const Quantity = dynamic(() => import('@/components/products/quantity'), {
  ssr: false,
  loading: () => (
    <div className='mt-3 mb-5 space-y-5 animate-pulse'>
      <div className='w-28 h-6 border bg-neutral-200' />
      <div className='flex justify-between items-center'>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              className='w-40 h-12 rounded-md border bg-neutral-200'
              key={`QuantityTallas-Skeleton-${index + 1}`}
            />
          ))}
      </div>
    </div>
  )
})
const ReviewForm = dynamic(() => import('@/components/products/review-form'), {
  ssr: false,
  loading: () => (
    <div className='mt-8 p-6 bg-white border-2 border-gray-300 animate-pulse'>
      <div className='space-y-4'>
        <div className='h-8 bg-gray-200 rounded w-1/3 mx-auto' />
        <div className='h-4 bg-gray-200 rounded w-2/3 mx-auto' />
        <div className='h-32 bg-gray-200 rounded' />
      </div>
    </div>
  )
})
const ReviewsDisplay = dynamic(() => import('./reviews-display'), {
  loading: () => <div className='animate-pulse h-64 bg-gray-200 rounded' />
})

const ProductPageClient = ({ productInfo }: { productInfo: Product }) => {
  // CONST
  const { format, excerpt, offer, price, sizes, title } = productInfo
  const hasOffer = !!offer
  const collection = productInfo.category.find(
    (c) =>
      c.name.toLowerCase() === 'hombre' ||
      c.name.toLowerCase() === 'mujer' ||
      c.name.toLowerCase() === 'niño'
  )

  // STATE
  const [talla, setTalla] = useState<Sizes>(sizes ? sizes[0] : 'm')
  const [designFormat, setDesignFormat] = useState(format[0])
  const [colors, setColors] = useState<Colors[number]>(format[0].colors[0])
  const [mainImage, setMainImage] = useState(Number(colors.mainImage) || 0)

  // CONST
  const cartItem = useMemo(
    () => ({
      id: productInfo.id,
      talla,
      format: {
        title: designFormat.title,
        color: colors
      },
      price,
      offer,
      title,
      excerpt,
      quantity: 1
    }),
    [
      productInfo.id,
      talla,
      designFormat.title,
      colors,
      price,
      offer,
      title,
      excerpt
    ]
  )

  // EFFECT
  useEffect(() => {
    const colorsIndex = designFormat.colors.findIndex(
      (c) => c.title === colors.title
    )
    setColors(designFormat.colors[colorsIndex])
    setMainImage(Number(colors.mainImage) || 0)
  }, [colors.mainImage, colors.title, designFormat])

  return (
    <section className='relative' id={slugify(title)}>
      <div className='flex flex-wrap w-full p-2 h-fit'>
        <div className='w-full px-4 md:w-1/2 space-y-5'>
          <Image
            src={colors.images[mainImage].url || SquarePlaceholder}
            alt={`${designFormat.title}-${colors.title}-front`}
            blurDataURL={
              colors.images[mainImage].blur || SquarePlaceholder.blurDataURL
            }
            placeholder='blur'
            height={700}
            width={700}
            priority
            title={`${designFormat.title}-${colors.title}-front`}
            className='object-cover aspect-[9/10] size-auto border shadow-md shadow-gray-100'
          />
          <Image
            src={
              colors.images[mainImage === 0 ? 1 : 0].url || SquarePlaceholder
            }
            alt={`${designFormat.title}-${colors.title}-back`}
            blurDataURL={
              colors.images[mainImage === 0 ? 1 : 0].blur ||
              SquarePlaceholder.blurDataURL
            }
            placeholder='blur'
            height={700}
            width={700}
            priority
            title={`${designFormat.title}-${colors.title}-back`}
            className='object-cover aspect-[9/10] size-auto border shadow-md shadow-gray-100'
          />
        </div>
        <div className='w-full px-4 md:w-1/2 sticky top-4 h-fit mt-3 md:mt-0'>
          <div className='mb-8 border-b'>
            <h2 className='flex justify-between items-start w-full mt-1 mb-1 text-2xl font-bold md:text-4xl uppercase'>
              {title}
            </h2>
            <h3 className='font-light uppercase'>{excerpt}</h3>
            {hasOffer ? (
              <>
                <p className='inline-block my-3 text-4xl font-bold text-accent space-x-5 line-through text-xm text-gray-500'>
                  {eurilize(price)}
                </p>
                <p className='inline-block my-3 text-4xl font-bold text-accent space-x-5'>
                  {eurilize(offer)}{' '}
                  <span className='text-xs font-normal block md:inline'>
                    (IVA y gastos de envíos incl.)
                  </span>
                </p>
              </>
            ) : (
              <p className='inline-block my-3 text-4xl font-bold text-accent space-x-5'>
                {eurilize(price)}{' '}
                <span className='text-xs font-normal block md:inline'>
                  (IVA y gastos de envíos incl.)
                </span>
              </p>
            )}
            <ModelPicker formats={format} setModel={setDesignFormat} />
            <ColorPicker colors={designFormat.colors} setColor={setColors} />
            <ProductsTallas
              tallas={sizes}
              setTalla={setTalla}
              selectedTalla={talla}
            />
            <Quantity product={cartItem} />
          </div>
          <AccordionProducts />
        </div>
      </div>

      {collection && (
        <>
          <Separator className='my-8 bg-gray-400' />
          <div className='w-full mt-8 space-y-4'>
            <CollectionClient
              collection={collection?.slug as 'hombre' | 'mujer' | 'niño'}
            />
          </div>
        </>
      )}

      <Separator className='my-8 bg-gray-400' />

      <div className='w-full mt-8 space-y-4'>
        <ReviewsDisplay productDesignId={productInfo.id} />
        <ReviewForm productDesignId={productInfo.id} />
      </div>
    </section>
  )
}

export default React.memo(ProductPageClient)
