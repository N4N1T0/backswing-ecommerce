import { tallas } from '@/contants'
import Link from 'next/link'
import React from 'react'

const ProductsTallas = ({ name }: { name: string }) => {
  return (
    <form className='mt-3 mb-5 space-y-5'>
      <div className='w-full flex justify-between items-center'>
        <h5 className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
          8 tallas</h5>
        <Link href='/tallas' className='underline hover:text-gray-600 text-gray-900 transition-colors duration-200'>Guia de Tallas</Link>
      </div>

      <fieldset className='flex flex-wrap justify-start items-center gap-4'>
        {tallas.map(talla => (
          <label
            key={talla}
            htmlFor={talla}
            className='cursor-pointer text-lg hover:text-gray-600 transition-colors duration-200 has-[:checked]:bg-gray-900 has-[:checked]:text-gray-100 px-1'
          >
            {talla}
            <input type='radio' id={talla} value={talla} aria-label={talla} name='size-selection' className='sr-only' />
          </label>
        ))}

      </fieldset>
    </form>
  )
}

export default ProductsTallas
