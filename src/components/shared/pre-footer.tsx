import { medioAmbiente } from '@/contants'
import Image from 'next/image'

const PreFooter = (): JSX.Element => {
  return (
    <section id='pre-footer'>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-4'>
          <div className='bg-gray-950 p-5 space-y-5 flex justify-center items-center flex-col text-center'>
            <h2 className='text-xl font-bold text-white 2xl:text-3xl'>
              Compromiso con el medio Ambiente
            </h2>

            <ul className='text-gray-100 space-y-3'>
              {medioAmbiente.map((item) => (
                <li key={item.label} className='space-y-2'>
                  <h3 className='font-bold text-base 2xl:text-lg'>
                    {item.label}
                  </h3>
                  <p className='text-xs text-gray-300'>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          {medioAmbiente.map((item) => (
            <Image
              key={`image-${item.label}`}
              src={item.image}
              alt={item.label}
              title={item.label}
              loading='lazy'
              className='w-full h-auto'
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PreFooter
