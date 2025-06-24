'use client'

import { colorList } from '@/contants'
import { cn } from '@/lib/utils'
import type { Colors } from '@/types'
import type React from 'react'

const ColorPicker = ({
  colors,
  setColor,
  isProductCard = false
}: {
  colors: Colors
  setColor?: React.Dispatch<React.SetStateAction<Colors[number]>>
  isProductCard?: boolean
}) => {
  if (!colors) return null

  const handleColorSelect = (color: Colors[number]) => {
    setColor?.(color)
  }

  return (
    <div className='mt-3 mb-5 space-y-5'>
      {!isProductCard && (
        <h5 className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
          {colors.length} Colores
        </h5>
      )}

      <fieldset
        className={`${isProductCard ? 'gap-2' : 'gap-4'} flex flex-wrap justify-start items-center`}
      >
        {colors.map((color) => {
          const colorName = color.title ? color.title.toLowerCase() : 'color'

          return (
            <label
              key={colorName}
              htmlFor={colorName}
              className={cn(
                'size-7 hover:border-gray-700 has-checked:border-gray-900 border-2 rounded-full block',
                isProductCard && 'size-5'
              )}
              style={{
                backgroundColor: colorList[colorName as keyof typeof colorList]
              }}
              title={colorName}
            >
              <input
                type='radio'
                id={colorName}
                value={colorName}
                aria-label={colorName}
                name='color-selection'
                className='sr-only'
                onChange={() => {
                  handleColorSelect(color)
                }}
              />
              <span className='sr-only'>{colorName}</span>
            </label>
          )
        })}
      </fieldset>
    </div>
  )
}

export default ColorPicker
