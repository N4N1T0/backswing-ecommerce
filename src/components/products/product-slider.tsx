'use client'

import { useState } from 'react'

const ProductSlider = () => {
  const [slide, setSlide] = useState('')

  return (
    <div className='w-full px-4 md:w-1/2 '>
      <div className='sticky top-0 z-50 overflow-hidden '>
        <div className='relative mb-6 lg:mb-10 lg:h-2/4 '>
          <img src='https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg' alt=''
            className='object-cover w-full lg:h-full' />
        </div>
        <div className='flex-wrap hidden md:flex '>
          <div className='w-1/2 p-2 sm:w-1/4'>
            <a href='#'
              className='block border border-blue-300 hover:border-blue-300'>
              <img src='https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg' alt=''
                className='object-cover w-full lg:h-20' />
            </a>
          </div>
          <div className='w-1/2 p-2 sm:w-1/4'>
            <a href='#'
              className='block border border-transparent hover:border-blue-300'>
              <img src='https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg' alt=''
                className='object-cover w-full lg:h-20' />
            </a>
          </div>
          <div className='w-1/2 p-2 sm:w-1/4'>
            <a href='#'
              className='block border border-transparent hover:border-blue-300'>
              <img src='https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg' alt=''
                className='object-cover w-full lg:h-20' />
            </a>
          </div>
          <div className='w-1/2 p-2 sm:w-1/4'>
            <a href='#'
              className='block border border-transparent hover:border-blue-300'>
              <img src='https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg' alt=''
                className='object-cover w-full lg:h-20' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSlider
