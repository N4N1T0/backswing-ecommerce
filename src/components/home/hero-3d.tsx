'use client'

import CanvasModel from '@/components/canvas/index'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { Suspense } from 'react'

interface Hero3DProps {
  heroSubtitle?: string
  heroDescription?: string
}

const Hero3D = ({ heroSubtitle, heroDescription }: Hero3DProps) => {
  return (
    <section id='hero' className='w-full min-h-[85vh] pt-10'>
      <div className='w-full px-4 pt-24 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center justify-between min-h-[80vh]'>
          {/* 3D MODEL */}
          <div className='w-full lg:w-1/2 h-[50vh] lg:h-[80vh] hidden lg:block'>
            <Suspense
              fallback={
                <div className='w-full h-full flex items-center justify-center bg-gray-100'>
                  <div className='text-gray-500'>Loading 3D Model...</div>
                </div>
              }
            >
              <CanvasModel />
            </Suspense>
          </div>

          <div className='w-full lg:w-1/2 lg:pl-12 order-1 lg:order-2'>
            <header className='text-center lg:text-left pb-6 pt-8 space-y-4 md:space-y-6'>
              <h1 className='text-5xl font-bold text-gray-950 sm:text-7xl lg:text-8xl xl:text-9xl animate-fade-in-down'>
                Backswing
              </h1>
              <h2 className='text-xl font-bold text-gray-700 sm:text-2xl lg:text-3xl animate-fade-in-down animate-delay-200'>
                {heroSubtitle || 'Diseños de camisetas para padel'}
              </h2>
              <p className='mx-auto lg:mx-0 mt-4 max-w-md text-gray-500 animate-fade-in-down animate-delay-500'>
                {heroDescription ||
                  'Somos una agencia de diseño y creación de productos para pádel, somos deportistas dedicados a deportistas. Con nuestra experiencia en el juego, entendemos la calidad y visión necesarias para cada producto.'}
              </p>
              <div className='pt-6 animate-fade-in-down animate-delay-700 flex gap-4 flex-wrap justify-center md:justify-start'>
                <Link
                  href='/hombre/camisetas'
                  className={buttonVariants({
                    size: 'xl'
                  })}
                >
                  Explorar Colección
                </Link>
                <Link
                  href='/personalizar'
                  className={buttonVariants({
                    size: 'xl',
                    variant: 'outline'
                  })}
                >
                  Crea tu diseño ahora
                </Link>
              </div>
            </header>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero3D
