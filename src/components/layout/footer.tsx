import { footerItems } from '@/contants'
import Link from 'next/link'
import LogoMobile from '@/assets/e9094108-15ea-477b-900e-7ef4183ac717.png'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='bg-gray-200'>
			<div className='relative mx-auto max-w-screen-3xl px-4 py-10 sm:px-6 lg:px-8 lg:pt-12'>
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

				<div className='lg:flex lg:items-end lg:justify-between border-b py-3 border-gray-300'>
					<div>
						<Image
							src={LogoMobile}
							alt='Mobile Logo'
							title='Mobile Logo'
							width={200}
							height={10}
							className='aspect-video object-fill'
						/>
						<p className='mx-auto text-sm md:text-base max-w-md text-center leading-relaxed text-gray-600 lg:text-left'>
							agencia de diseño y creación de productos para pádel, somos
							deportistas dedicados a deportistas.
						</p>
					</div>

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
				<div className='flex flex-col-reverse gap-1 md:gap-0 md:flex-row justify-between items-center w-full mt-5 text-sm text-gray-700'>
					<p>
						Desarrollado con{' '}
						<span className='animate-pulse text-red-600 text-base'>
							&hearts;
						</span>{' '}
						y creado por{' '}
						<a
							href='https://doctortecnologico.com/'
							target='_blank'
							rel='noreferrer noopener nofollow'
							className='text-gray-950 hover:text-gray-700 duration-200 transition-colors ease-out underline '
						>
							Doctect World
						</a>
					</p>
					<p>Copyright &copy; 2022. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
