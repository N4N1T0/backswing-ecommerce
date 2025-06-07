'use client'

import type { PersonalizationProducts } from '@/types'
import Image from 'next/image'
import { useFormStatus } from 'react-dom'

const PersonalizationCard = ({
  product,
  isDesign = false
}: {
  product: PersonalizationProducts
  isDesign?: boolean
}) => {
  // Retrieve the form status
  const { pending } = useFormStatus()

  // Render the personalization card
  return (
    <div className='space-y-3'>
      {/* Render the personalization card label */}
      <label
        className={`border hover:border-gray-500 has-checked:border-gray-900 h-auto block ${
          pending ? 'opacity-50 pointer-events-none' : ''
        }`}
      >
        <Image
          src={product.image}
          alt={product.value}
          title={product.value}
          width={500}
          height={500}
          className={
            isDesign
              ? 'object-center w-full h-full aspect-square'
              : 'object-cover w-full h-full'
          }
          priority
        />
        {/* Render the personalization card radio input */}
        <input
          type='radio'
          id={product.value}
          defaultValue={
            isDesign
              ? product.value
              : product.value === 'Sudaderas | Unisex'
                ? 'Sudaderas | Hombre'
                : product.value
          }
          aria-label={product.value}
          name={isDesign ? 'design-selection' : 'model-selection'}
          className='sr-only'
          required
          disabled={pending}
        />
      </label>
      {/* Render the personalization card title */}
      <h3 className='text-gray-950 font-medium uppercase text-sm md:text-base'>
        {product.value}
      </h3>
      {/* Render the personalization card colors */}
      {isDesign || (
        <div className='flex gap-1'>
          {product.colors?.map((color) => (
            <span
              key={color}
              className='block size-4 pointer-events-none rounded-full border-2'
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default PersonalizationCard
