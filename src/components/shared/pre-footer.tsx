import { medioAmbiente } from '@/contants'
import Image from 'next/image'
import Link from 'next/link'

const PreFooter = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
          <div className='bg-gray-950 p-6 2xl:p-14 mx-auto max-w-xl space-y-5 flex justify-center items-center flex-col text-center'>
            <h2 className='text-2xl font-bold text-white 2xl:text-3xl'>
              Compromiso con el medio Ambiente
            </h2>

            <ul className='text-gray-100 space-y-3'>
              {medioAmbiente.map(item => (
                <li key={item.label} className='space-y-2'>
                  <h3 className='font-bold text-base 2xl:text-lg'>{item.label}</h3>
                  <p className='text-xs 2xl:text-sm text-gray-300'>{item.description}</p>
                </li>
              ))}
            </ul>

            <div className='mt-4 md:mt-8'>
              <Link
                href='/hombre/camisetas'
                className='mt-8 inline-block bg-gray-100 px-12 py-3 text-sm font-medium text-gray-950 transition-colors duration-200 hover:bg-gray-400'
              >
                Comprar ahora
              </Link>
            </div>
          </div>
          {medioAmbiente.map(item => (
            <Image key={`image-${item.label}`} src={item.image} alt={item.label} title={item.label} className='w-auto h-auto' />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PreFooter
