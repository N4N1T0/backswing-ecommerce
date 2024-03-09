'use client'

import { hombre, mujer, nino } from '@/contants/colors'
import { type ColorPickerTypes } from '@/types'

const ColorPicker = ({ gender, product, isProductCard = false }: ColorPickerTypes) => {
  const colors = gender === 'hombre' ? hombre : gender === 'mujer' ? mujer : nino

  if (isProductCard) {
    return (
      <form className='mt-3 mb-5 space-y-5'>
        <fieldset className='flex flex-wrap justify-start items-center gap-1' disabled>
          {colors[product as keyof typeof colors].map(color => (
            <label
              key={color}
              htmlFor={color}
              className='block size-4 cursor-event-none rounded-full'
              style={{ backgroundColor: color }}
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
          {colors.camisetas.length} Colores
        </h5>

        <fieldset className='flex flex-wrap justify-start items-center gap-4'>
          {colors[product as keyof typeof colors].map(color => (
            <label
              key={color}
              htmlFor={color}
              className='block size-7 cursor-pointer rounded-full border-[2px] hover:border-gray-700 has-[:checked]:border-gray-900'
              style={{ backgroundColor: color }}
            >
              <input type='radio' id={color} value={color} aria-label={color} name='color-selection' className='sr-only' />
              <span className='sr-only'>{color}</span>
            </label>
          ))}

        </fieldset>
      </form>
    )
  }
}

export default ColorPicker
