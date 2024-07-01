// Assets Imports
import { MailCheck, PackageCheck, ShieldCheck, Shirt } from 'lucide-react'

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
			<div className='flex flex-col justify-center '>
				<div className='w-full px-4 mx-auto lg:max-w-5xl '>
					{/* Timeline container */}
					<div className='relative'>
						<div className='absolute hidden w-1 h-full transform -translate-x-1/2 bg-gray-400 lg:block left-1/2' />
						<div className='space-y-2 lg:space-y-4'>
							{/* Timeline section */}
							<div>
								{/* Left section */}
								{/* Repeat for each section */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Timeline
