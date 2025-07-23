import LogoMobile from '@/assets/e9094108-15ea-477b-900e-7ef4183ac717.png'
import Gateway from '@/assets/payment-getways.png'
import { footerItems } from '@/contants'
import Image from 'next/image'
import Link from 'next/link'
import SocialMedia from './social-media'

const Footer = () => {
  return (
    <footer className='bg-gray-200'>
      <div className='relative mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8 lg:pt-12 container'>
        <div className='absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8'>
          <Link
            className='inline-block rounded-full bg-gray-900 p-2 text-white hover:bg-gray-700 sm:p-3 lg:p-4 transition-colors ease-out duration-200'
            href='#navbar'
            title='Volver al inicio de pagina'
          >
            <span className='sr-only'>Back to top</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <title>Volver</title>
              <path
                fillRule='evenodd'
                d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </div>

        <div className='w-fit'>
          <Image
            src={LogoMobile}
            alt='Mobile Logo'
            title='Mobile Logo'
            width={200}
            height={10}
            loading='lazy'
          />
          <p className='mx-auto text-sm md:text-base max-w-md text-center leading-relaxed text-gray-600 lg:text-left'>
            Agencia de diseño y creación de productos para pádel, somos
            deportistas dedicados a deportistas.
          </p>
        </div>

        <div className='lg:flex lg:items-end lg:justify-between border-b py-3 border-gray-300'>
          <SocialMedia />
          <ul className='mt-6 md:mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12'>
            {footerItems.map((items) => (
              <li key={items.label}>
                <Link
                  className='text-gray-950 text-sm md:text-base transition-colors duration-200 hover:text-gray-500'
                  href={items.route}
                  title={items.label}
                >
                  {items.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className='flex justify-between items-center flex-wrap border-b border-gray-300 py-3 text-sm text-gray-600'>
          <li>NIF Presentador: X3092435Q</li>
          <li>Apellidos y Nombre / Razón social: FURIO MARTIN CRUZ</li>
          <li>Nombre comercial: Backswing</li>
          <li>Dirección Comercial: Marbella, España</li>
        </ul>
        <div className='flex flex-col-reverse gap-1 md:gap-0 md:flex-row justify-between items-center w-full mt-5 text-xs text-gray-500'>
          <p>
            Desarrollado con{' '}
            <Link
              href='https://nextjs.org/es'
              target='_blank'
              rel='noreferrer noopener nofollow'
              className='text-gray-950 hover:text-gray-700 duration-200 transition-colors ease-out underline'
            >
              Next.js
            </Link>{' '}
            y creado por{' '}
            <Link
              href='https://www.adrian-alvarez.dev/es/'
              target='_blank'
              rel='noreferrer noopener nofollow'
              className='text-gray-950 hover:text-gray-700 duration-200 transition-colors ease-out underline'
            >
              Adrian Alvarez Alonso
            </Link>{' '}
            y{' '}
            <Link
              href='https://www.doctortecnologico.com'
              target='_blank'
              rel='noreferrer noopener nofollow'
              className='text-gray-950 hover:text-gray-700 duration-200 transition-colors ease-out underline '
            >
              Doctec World
            </Link>
          </p>
          <Image src={Gateway} alt='métodos de pago' />
          <p>Copyright &copy; 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
