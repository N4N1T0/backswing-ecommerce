'use client'

import { colorList } from '@/contants'
import { cn } from '@/lib/utils'
import type { Colors } from '@/types'

const ColorPicker = ({
  colors,
  setColor,
  isProductCard = false,
  slug
}: {
  colors: Colors
  setColor?: React.Dispatch<React.SetStateAction<Colors[number]>>
  isProductCard?: boolean
  slug?: string | null
}) => {
  if (!colors || colors.length === 0) return null

  const handleColorSelect = (color: Colors[number]) => {
    setColor?.(color)
  }

  return (
    <form className='mt-3 mb-5 space-y-5 w-fit'>
      {!isProductCard && (
        <h5 className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
          {colors.length} Colores
        </h5>
      )}

      <fieldset
        className={cn(
          'flex flex-wrap justify-start items-center',
          isProductCard ? 'gap-2' : 'gap-4'
        )}
      >
        {colors.map((color, index) => {
          const colorName = color.title?.toLowerCase() || 'color'
          const uniqueId = `${slug || 'product'}-color-${index}`

          return (
            <label
              key={uniqueId}
              htmlFor={uniqueId}
              className={cn(
                'size-7 hover:border-gray-700 border-2 rounded-full block cursor-pointer',
                isProductCard && 'size-5'
              )}
              style={{
                backgroundColor: colorList[colorName as keyof typeof colorList]
              }}
              title={colorName}
            >
              <input
                type='radio'
                id={uniqueId}
                value={colorName}
                aria-label={colorName}
                name={`color-${slug || 'product'}`}
                className='sr-only peer'
                onChange={() => handleColorSelect(color)}
              />
              <span className='sr-only'>{colorName}</span>
            </label>
          )
        })}
      </fieldset>
    </form>
  )
}

export default ColorPicker
