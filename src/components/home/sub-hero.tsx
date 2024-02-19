import Link from 'next/link'
import React from 'react'

const SubHero = () => {
  return (
    <section id='sub-hero'>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <ul className='mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <li>
            <Link href='#' className='group relative block'>
              <img
                src='https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                alt=''
                className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-70'
              />
              <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                <h3 className='text-xl font-medium text-white'>Casual Trainers</h3>
                <span
                  className='mt-1.5 inline-block bg-primary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'
                >
                  Shop Now
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link href='#' className='group relative block'>
              <img
                src='https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                alt=''
                className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-70'
              />
              <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                <h3 className='text-xl font-medium text-white'>Winter Jumpers</h3>
                <span
                  className='mt-1.5 inline-block bg-primary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'
                >
                  Shop Now
                </span>
              </div>
            </Link>
          </li>
          <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
            <Link href='#' className='group relative block'>
              <img
                src='https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
                alt=''
                className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-70'
              />
              <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                <h3 className='text-xl font-medium text-white'>Skinny Jeans Blue</h3>
                <span
                  className='mt-1.5 inline-block bg-primary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'
                >
                  Shop Now
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default SubHero
