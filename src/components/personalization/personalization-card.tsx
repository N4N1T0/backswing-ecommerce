'use client'

import { cn } from '@/lib/utils'
import type { PersonalizationProducts } from '@/types'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { useFormStatus } from 'react-dom'

interface PersonalizationCardProps {
  product: PersonalizationProducts
  isDesign?: boolean
}

const PersonalizationCard = ({
  product,
  isDesign = false
}: PersonalizationCardProps) => {
  // STATUS
  const { pending } = useFormStatus()

  return (
    <label className='group cursor-pointer block relative'>
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
        className='sr-only peer'
        required
        disabled={pending}
      />
      {/* INDICATOR */}
      <div className='absolute top-3 right-3 z-10 w-6 h-6 bg-white border border-gray-200 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity duration-200'>
        <Check className='size-4 text-gray-900' />
      </div>

      <div
        className={cn(
          'relative bg-white border border-gray-200 hover:border-gray-400 transition-colors duration-200 peer-checked:border-gray-900 peer-checked:bg-gray-50 overflow-hidden',
          pending && 'opacity-50 pointer-events-none'
        )}
      >
        {/* IMAGE */}
        <div className='relative aspect-square overflow-hidden'>
          <Image
            src={product.image}
            alt={product.value}
            title={product.value}
            fill
            className='object-fit border-b'
            priority
          />
        </div>

        {/* CONTENT */}
        <div className='p-4'>
          <h3 className='text-lg font-bold text-gray-900 mb-3 uppercase'>
            {product.value}
          </h3>

          {/* COLOR */}
          {!isDesign && product.colors && (
            <div className='space-y-2'>
              <p className='text-sm font-medium text-gray-600'>
                Colores disponibles:
              </p>
              <div className='flex flex-wrap gap-2'>
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className='relative size-4 rounded-full border border-gray-200'
                    style={{ backgroundColor: color }}
                    title={`Color ${color}`}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </label>
  )
}

export default PersonalizationCard
