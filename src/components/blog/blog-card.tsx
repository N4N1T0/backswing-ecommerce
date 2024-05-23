import Image from 'next/image'
import Link from 'next/link'
import type { WPPost } from '@/types'

const BlogCard = ({ post }: { post: WPPost }) => {
	const {
		title,
		excerpt,
		date,
		id,
		featuredImage: {
			node: { mediaItemUrl, altText },
		},
	} = post

	return (
		<article>
			<div className='relative h-[300px] w-full'>
				<Image src={mediaItemUrl} alt={altText} title={altText} fill />
				<div className='bg-white absolute top-0 left-0'>
					<p className='text-base leading-4 py-3 px-5 text-gray-800'>
						{Intl.DateTimeFormat('es-ES', { dateStyle: 'short' }).format(
							new Date(date),
						)}
					</p>
				</div>
			</div>
			<h1 className='text-xl md:text-2xl font-semibold leading-7 mt-5 text-gray-800 text-center w-full'>
				{title}
			</h1>
			<p className='text-sm md:text-base leading-normal mt-4 text-gray-600'>
				{excerpt.replace(/(<([^>]+)>)/gi, '')}
			</p>
			<Link
				href={`/blog/${id}`}
				className='focus:outline-none flex items-center justify-between w-full md:w-60 mt-6 transition-colors duration-200 bg-gray-900 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700'
			>
				<p className='text-sm md:text-base font-medium leading-2 md:leading-4 text-white'>
					Leer Mas
				</p>
				<svg
					width='20'
					height='20'
					viewBox='0 0 16 16'
					xmlns='http://www.w3.org/2000/svg'
				>
					<title>Leer Mas</title>
					<path
						d='M3.33203 8H12.6654'
						stroke='#FFFFFF'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M10 10.6667L12.6667 8'
						stroke='#FFFFFF'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M10 5.3335L12.6667 8.00016'
						stroke='#FFFFFF'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</Link>
		</article>
	)
}

export default BlogCard
