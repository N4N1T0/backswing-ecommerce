// Assets Imports
import AboutPic from '@/assets/pexels-the-coach-space-2977565.webp'

// Data Imports
import { aboutStats } from '@/contants/assets-const'

// Next.js Imports
import Image from 'next/image'

/**
 * Renders the About section of the component.
 *
 * @return {JSX.Element} The JSX element representing the About section.
 */
const About = (): JSX.Element => {
	return (
		<section className='py-10 lg:py-20' id='about'>
			<div className='max-w-8xl py-4 mx-auto lg:py-6 md:px-6'>
				<div className='flex flex-wrap '>
					<div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0 '>
						<div className='lg:max-w-md'>
							<div className='px-4 pl-4 mb-6 border-l-4 border-gray-600'>
								<span className='text-sm text-gray-600 uppercase'>
									Quienes son?
								</span>
								<h1 className='mt-2 text-3xl font-black text-gray-700 md:text-5xl'>
									Backswing
								</h1>
							</div>
							<p className='px-4 mb-10 text-base leading-7 text-gray-500'>
								Nosotros, como agencia de diseño y creación de productos para
								pádel, somos deportistas dedicados a deportistas. Con nuestra
								experiencia en el juego, entendemos la calidad y visión
								necesarias para cada producto.
							</p>
							<div className='flex flex-wrap items-center'>
								{aboutStats.map((stat) => (
									<div
										className='w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6'
										key={stat.title}
									>
										<div className='p-6'>
											<span className='text-gray-500'>
												{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
												<div dangerouslySetInnerHTML={{ __html: stat.svg }} />
											</span>
											<p className='mt-4 mb-2 text-3xl font-bold text-gray-700'>
												{stat.subTitle}
											</p>
											<h2 className='text-sm text-gray-700'>{stat.title}</h2>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0 relative'>
						<Image
							src={AboutPic}
							alt='Una reunion del equipo de backswing'
							title='Una reunion del equipo de backswing'
							fill
							className='h-auto w-auto'
							sizes='(100vw - 2rem)'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
