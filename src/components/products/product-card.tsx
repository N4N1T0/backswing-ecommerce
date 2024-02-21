import Link from 'next/link'
import React from 'react'

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

        <div className='mt-1.5 flex gap-1'>
          <form>
            <fieldset>
              <legend className='sr-only'>Color</legend>
            </fieldset>

            <div className='flex flex-wrap justify-center gap-1'>
              <div>
                <input type='checkbox' id='ColorSg' className='sr-only' />

                <label
                  htmlFor='ColorSg'
                  className='block size-4 cursor-pointer rounded-full bg-[#595759]'
                >
                  <span className='sr-only'> Space Gray </span>
                </label>
              </div>

              <div>
                <input type='checkbox' id='ColorS' className='sr-only' />

                <label
                  htmlFor='ColorS'
                  className='block size-4 cursor-pointer rounded-full bg-[#d2d3d4]'
                >
                  <span className='sr-only'> Silver </span>
                </label>
              </div>

              <div>
                <input type='checkbox' id='ColorP' className='sr-only' />

                <label
                  htmlFor='ColorP'
                  className='block size-4 cursor-pointer rounded-full bg-[#d89f97]'
                >
                  <span className='sr-only'> Pink </span>
                </label>
              </div>

              <div>
                <input type='checkbox' id='ColorG' className='sr-only' />

                <label
                  htmlFor='ColorG'
                  className='block size-4 cursor-pointer rounded-full bg-[#afbfab]'
                >
                  <span className='sr-only'> Pink </span>
                </label>
              </div>

              <div>
                <input type='checkbox' id='ColorSb' className='sr-only' />

                <label
                  htmlFor='ColorSb'
                  className='block size-4 cursor-pointer rounded-full bg-[#91a5bb]'
                >
                  <span className='sr-only'> Pink </span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className='mt-1.5 flex items-center justify-between text-gray-900'>
          <p className='tracking-wide'>$189.99</p>

          <p className='text-xs uppercase tracking-wide'>6 Colors</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
