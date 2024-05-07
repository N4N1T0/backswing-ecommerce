import { getImageForModel } from '@/lib/utils'
import { type Variations, type Related } from '@/types'
import Image from 'next/image'
import React from 'react'

const ModelPicker = ({ related, setModel }: { related: Related | null, setModel: React.Dispatch<React.SetStateAction<Variations['nodes']>> }) => {
  return (
    <div>
      <h5 className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
        4 Modelos
      </h5>
      <div className='flex-wrap md:flex-nowrap flex mt-3 gap-3'>
        {related?.nodes.map((product) => {
          const image = getImageForModel(product.name)
          return (
            <label
              key={product.id}
              className='block border hover:border-gray-500 w-1/2 sm:w-1/4 h-40 has-[:checked]:border-gray-900'>
              <Image
                src={image!}
                alt={product.name}
                title={product.name}
                width={1000}
                height={1000}
                className='object-cover w-full h-full'
                priority
              />
              <input type='radio' id={product.id} defaultValue={product.id} aria-label={product.id} name='model-selection' className='sr-only' onClick={() => { setModel(product.variations.nodes) }} />
              <span className='sr-only'>{product.name}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default ModelPicker
