import { KidImage, ManImage, WomanImage } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'

const SubHero = () => {
  return (
    <section id='sub-hero' className='animate-fade-in-up animate-delay-1000'>
      <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='grid grid-rows-2 gap-8'>
            {/* WOMAN */}
            <div className='relative group overflow-hidden'>
              <Link href='/mujer/camisetas'>
                <div className='relative w-full aspect-[3/2] bg-gray-700'>
                  <Image
                    src={WomanImage}
                    alt='Woman T-shirt Collection'
                    className='object-contain transition-transform duration-300 ease-out group-hover:scale-105 absolute -right-20'
                    priority
                  />
                  <h2 className='absolute bottom-8 left-6 text-gray-100 text-4xl lg:text-5xl font-medium uppercase tracking-wide'>
                    MUJERES
                  </h2>
                </div>
              </Link>
            </div>

            {/* MAN */}
            <div className='relative group overflow-hidden'>
              <Link href='/hombre/camisetas'>
                <div className='relative w-full aspect-[3/2] bg-gray-400'>
                  <Image
                    src={ManImage}
                    alt='Man T-shirt Collection'
                    className='object-contain transition-transform duration-300 ease-out group-hover:scale-105 absolute -left-24'
                    priority
                  />
                  <h2 className='absolute bottom-8 right-6 text-gray-900 text-4xl lg:text-5xl font-medium uppercase tracking-wide'>
                    HOMBRES
                  </h2>
                </div>
              </Link>
            </div>
          </div>

          {/* Right column: KIDS */}
          <div className='relative group overflow-hidden'>
            <Link href='/ninos/camisetas'>
              <div className='relative w-full h-full min-h-[100%] bg-gray-100 aspect-[3/2] md:aspect-[3/4] lg:aspect-auto lg:min-h-full'>
                <Image
                  src={KidImage}
                  alt='Kids T-shirt Collection'
                  className='object-contain transition-transform scale-110 duration-300 ease-out group-hover:scale-115 absolute -right-20 lg:bottom-0'
                  priority
                />
                <h2 className='absolute bottom-8 left-6 text-gray-900 text-4xl lg:text-5xl font-medium uppercase tracking-wide'>
                  NIÑOS
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubHero
