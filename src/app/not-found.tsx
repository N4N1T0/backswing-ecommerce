import { type Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import NotFoundPic from '@/assets/todd-trapani-sI-p_NLBNr0-unsplash.webp'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'No Encontrado'
}

const NotFound = () => {
  return (
    <main className='flex items-center h-screen font-poppins overflow-hidden'>
      <div className=' max-w-screen-2xl px-1 mx-auto lg:px-6 '>
        <div className='flex flex-wrap items-center '>
          <div className='w-full px-2 lg:px-4 lg:w-2/4 lg:py-0 py-7'>
            <div className='text-center lg:text-left'>
              <h1
                className='inline-block mb-8 font-semibold text-gray-800 text-6xl lg:text-8xl'>
                Lo Sentimos</h1>
              <h2 className='mb-8 text-2xl font-semibold text-gray-700 lg:text-4xl'>No pudimos encontrar la Pagina Solicitada</h2>
              <p className='mb-8 text-xl text-gray-700'>
                Sorry! we are unable to find the page that you are looking for...
              </p>
              <div className='flex flex-wrap items-center justify-start'>
                <Link href='/'
                  className='w-full px-8 py-4 mb-8 mr-0 text-base font-medium text-gray-100 uppercase bg-gray-950 lg:w-auto hover:bg-gray-700 lg:mb-0 lg:mr-4 md:w-full transition-colors duration-200'>
                  Pagina Principal
                </Link>
              </div>
            </div>
          </div>
          <div className='hidden w-full mb-12 lg:block lg:w-2/4 lg:mb-0'>
            <Image src={NotFoundPic} alt='Pelota de Tenis esperando para un partido' title='Pelota esperando por que vuelvas a la pagina principal'
              className='relative inset-0 object-cover w-full h-2/4' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound
