'use client'

import ErrorPic from '@/assets/opollo-photography-vl5Cw1PmPQY-unsplash.webp'
import { Error } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export default function SiteError({ error }: { error: Error }) {
  return (
    <main className='flex items-center h-screen font-poppins overflow-hidden'>
      <div className=' max-w-(--breakpoint-2xl) px-1 mx-auto lg:px-6 '>
        <div className='flex flex-wrap items-center '>
          <div className='w-full px-2 lg:px-4 lg:w-2/4 lg:py-0 py-7'>
            <div className='text-center lg:text-left'>
              <h1 className='inline-block mb-8 font-semibold text-red-500 text-6xl lg:text-8xl'>
                Error del Servidor
              </h1>
              <p className='mb-8 text-xl text-gray-700'>
                {error.digest != null || error.message} <br />{' '}
                <span className='uppercase font-bold'>Sigue el Partido</span>
              </p>
              <div className='flex flex-wrap items-center justify-start'>
                <Link
                  href='/'
                  className='w-full px-8 py-4 mb-8 mr-0 text-base font-medium text-gray-100 uppercase bg-gray-950 lg:w-auto hover:bg-gray-700 lg:mb-0 lg:mr-4 md:w-full transition-colors duration-200'
                >
                  Pagina Principal
                </Link>
              </div>
            </div>
          </div>
          <div className='hidden w-full mb-12 lg:block lg:w-2/4 lg:mb-0'>
            <Image
              src={ErrorPic}
              alt='Pelota de Tenis esperando para un partido'
              title='Pelota esperando'
              className='relative inset-0 object-cover w-full h-2/4'
            />
          </div>
        </div>
      </div>
    </main>
  )
}
