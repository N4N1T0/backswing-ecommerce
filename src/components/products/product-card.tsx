import Link from 'next/link'
import React from 'react'
import ColorPicker from './color-picker'

const ProductCard = () => {
  return (
    <Link href='#' className='group block overflow-hidden'>
      <div className='relative h-[300px] sm:h-[400px]'>
        <img
          src='https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80'
          alt=''
          className='absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0'
        />

        <img
          src='https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80'
          alt=''
          className='absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
        />
      </div>

      <div className='relative bg-white pt-3'>
        <h3 className='text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4'>
          Limited Edition Sports Trainer
        </h3>

        <ColorPicker />

        <div className='mt-1.5 flex items-center justify-between text-gray-900'>
          <p className='tracking-wide'>$189.99</p>

          <p className='text-xs uppercase tracking-wide'>6 Colors</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
