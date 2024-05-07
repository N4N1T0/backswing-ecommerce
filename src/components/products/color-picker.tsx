'use client'

import { findColorIndex } from '@/lib/utils'
import { type WPProduct } from '@/types'

const ColorPicker = (
  { colors, setColor, variations, isProductCard = false }:
    {
      colors: string[]
      variations?: WPProduct['variations']
      setColor?: React.Dispatch<React.SetStateAction<number>>
      isProductCard?: boolean
    }
) => {
  const handelColorSelect = (color: string) => {
    if (variations !== undefined) {
      const index = findColorIndex(color, variations)
      if (setColor !== undefined) setColor(index)
    }
  }

  if (isProductCard) {
    return (
      <form className='mt-3 mb-5 space-y-5'>
        <fieldset className='flex flex-wrap justify-start items-center gap-1' disabled>
          {colors.map(color => (
            <label
              key={color}
              htmlFor={color}
              className='block size-4 cursor-event-none rounded-full border'
              style={{ backgroundColor: color }}
              title={color}
            >
              <input type='radio' id={color} value={color} aria-label={color} name='color-selection' className='sr-only' />
              <span className='sr-only'>{color}</span>
            </label>
          ))}

        </fieldset>
      </form>
    )
  } else {
    return (
      <form className='mt-3 mb-5 space-y-5'>
        <h5 className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
          {colors.length} Colores
        </h5>

        <fieldset className='flex flex-wrap justify-start items-center gap-4'>
          {colors.map(color => (
            <label
              key={color}
              htmlFor={color}
              className='block size-7 cursor-pointer rounded-full border-[2px] hover:border-gray-700 has-[:checked]:border-gray-900'
              style={{ backgroundColor: color }}
              title={color}
            >
              <input type='radio' id={color} defaultValue={color} aria-label={color} name='color-selection' className='sr-only' onClick={() => { handelColorSelect(color) }} />
              <span className='sr-only'>{color}</span>
            </label>
          ))}

        </fieldset>
      </form>
    )
  }
}

export default ColorPicker
