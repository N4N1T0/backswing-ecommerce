// Data Import
import { timeline } from '@/contants/assets-const'
import Image from 'next/image'

/**
 * Renders the timeline section with detailed steps of the process.
 *
 * @return {JSX.Element} The rendered timeline section.
 */
const Timeline = (): JSX.Element => {
	return (
		<section className='py-10 bg-gray-100 lg:py-20' id='timeline'>
			{/* Section heading */}
			<div className='max-w-xl mx-auto'>
				<div className='text-center '>
					<div className='flex flex-col items-center '>
						<h1 className='text-5xl font-bold leading-tight'>
							{' '}
							Nuestro <span className='text-gray-600'>Proceso</span>{' '}
						</h1>
						<div className='flex w-24 mt-1 mb-6 overflow-hidden rounded'>
							<div className='flex-1 h-2 bg-gray-300' />
							<div className='flex-1 h-2 bg-gray-500' />
							<div className='flex-1 h-2 bg-gray-700' />
						</div>
					</div>
					<p className='mb-16 text-base text-center text-gray-500'>
						En nuestras tiendas, nos enorgullece ofrecerte camisetas de alta
						calidad con los mejores diseños. Nuestro proceso comienza contigo,
						inspirando cada creación.
					</p>
				</div>
			</div>
			{/* Timeline sections */}
			<div className='w-full px-4 mx-auto lg:max-w-7xl '>
				{/* Timeline section */}
				<ol className='items-center sm:flex'>
					{timeline.map((item) => (
						<li className='relative mb-6 sm:mb-0' key={item.title}>
							<div className='flex items-center'>
								<div className='z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0'>
									{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
									<div dangerouslySetInnerHTML={{ __html: item.image }} />
								</div>
								<div className='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700' />
							</div>
							<div className='mt-3 sm:pe-8'>
								<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
									{item.title}
								</h3>
								<time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
									{item.time}
								</time>
								<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
									{item.description}
								</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}

export default Timeline
