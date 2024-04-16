'use client'

import ModelPicker from './model-picker'
import ColorPicker from './color-picker'
import ProductsTallas from './products-tallas'
import Quantity from './quantity'
import AccordionProducts from './acordion-products'
import { type StaticProductsTypes } from '@/types'
import Link from 'next/link'
import { useEuros } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

const ProductPageClient = ({ productInfo }: { productInfo: StaticProductsTypes }) => {
  const { name, description, material, offer, image, price, new: isNew, gender } = productInfo
  const [model, setModel] = useState(image)

  return (
    <section className='relative' id={name}>
      <div className='flex flex-wrap w-full p-2 h-fit'>
        <div className='w-full px-4 md:w-1/2 space-y-5'>
          <Image src={model} alt={name} height={1000} width={1000} priority title={name}
            className='object-cover aspect-square h-auto w-auto' />
          <Image src={model} alt={name} height={1000} width={1000} priority title={name}
            className='object-cover aspect-square h-auto w-auto' />
        </div>
        <div className='w-full px-4 md:w-1/2 sticky top-4 h-fit'>
          <div className='mb-8 border-b'>
            <h2 className='flex justify-between items-center w-fullmt-1 mb-1 text-2xl font-bold md:text-4xl uppercase'>
              {name} {!isNew && <Link href='/nuevo' className='text-xs tracking-wide bg-gray-900 py-1 px-3 text-gray-100 hover:bg-gray-700 duration-200 transition-colors hidden md:block'>nuevo</Link>}</h2>
            <h3 className='font-light uppercase'>{description}</h3>
            <h3 className='font-bold uppercase'>{material}</h3>
            <p className='inline-block my-3 text-4xl font-bold text-accent space-x-5'>
              {offer.onOffer
                ? <>{useEuros.format(offer.price)}{' '}<span className='text-base font-normal text-gray-500 line-through'>{useEuros.format(price)}</span></>
                : useEuros.format(price)
              }
            </p>
            <ModelPicker image={model} name={name} setModel={setModel} />
            <ColorPicker gender={gender} product='camisetas' />
            <ProductsTallas name={name} />
            <Quantity product={{ quantity: 0, ...productInfo }} />
          </div>
          <AccordionProducts />
        </div>
      </div>
    </section>
  )
}

export default ProductPageClient
