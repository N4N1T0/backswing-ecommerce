'use client'

import ModelPicker from '@/components/products/model-picker'
import ColorPicker from '@/components/products/color-picker'
import ProductsTallas from '@/components/products/products-tallas'
import Quantity from '@/components/products/quantity'
import AccordionProducts from '@/components/products/acordion-products'

import { type WPProduct } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { parseProductContent } from '@/lib/utils'

const ProductPageClient = ({ productInfo }: { productInfo: WPProduct }) => {
  const {
    description,
    material,
    parsedName,
    variations,
    isNew,
    parsedPrice,
    colors,
    related
  } = parseProductContent(productInfo)

  console.log(related)

  const [talla, seTalla] = useState('m')
  const [model, setModel] = useState(variations.nodes)
  const [index, setIndex] = useState(0)

  const cartItem = {
    id: productInfo.id,
    talla,
    model: model[index + 1],
    parsedPrice,
    parsedName,
    quantity: 1
  }

  return (
    <section className='relative' id={parsedName}>
      <div className='flex flex-wrap w-full p-2 h-fit'>
        <div className='w-full px-4 md:w-1/2 space-y-5'>
          <Image src={model[index + 1].image.sourceUrl} alt={model[index + 1].name} height={1000} width={1000} priority title={model[index + 1].name}
            className='object-cover aspect-square h-auto w-auto' />
          <Image src={model[index].image.sourceUrl} alt={model[index].name} height={1000} width={1000} priority title={model[index].name}
            className='object-cover aspect-square h-auto w-auto' />
        </div>
        <div className='w-full px-4 md:w-1/2 sticky top-4 h-fit'>
          <div className='mb-8 border-b'>
            <h2 className='flex justify-between items-center w-fullmt-1 mb-1 text-2xl font-bold md:text-4xl uppercase'>
              {parsedName} {!isNew && <Link href='/nuevo' className='text-xs tracking-wide bg-gray-900 py-1 px-3 text-gray-100 hover:bg-gray-700 duration-200 transition-colors hidden md:block'>nuevo</Link>}</h2>
            <h3 className='font-light uppercase'>{description}</h3>
            <h3 className='font-bold uppercase'>{material}</h3>
            <p className='inline-block my-3 text-4xl font-bold text-accent space-x-5'>
              {parsedPrice}
            </p>
            <ModelPicker related={related} setModel={setModel} />
            <ColorPicker colors={colors} setColor={setIndex} variations={variations} />
            <ProductsTallas setTalla={seTalla} selectedTalla={talla} />
            <Quantity product={cartItem} />
          </div>
          <AccordionProducts />
        </div>
      </div>
    </section>
  )
}

export default ProductPageClient
