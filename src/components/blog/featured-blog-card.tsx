// Next.js Imports
import Link from 'next/link'
import Image from 'next/image'

// Type Imports
import type { WPPost } from '@/types'

/**
 * Renders a featured blog card component with a title, excerpt, and featured image.
 *
 * @param {Object} props - The component props.
 * @param {WPPost} props.post - The post object containing the title, excerpt, and featured image details.
 * @return {JSX.Element} The JSX element representing the featured blog card.
 */
const FeaturedBlogCard = ({ post }: { post: WPPost }): JSX.Element => {
	const {
		title,
		excerpt,
		featuredImage: {
			node: { mediaItemUrl, altText },
		},
	} = post
	return (
		<Link
			href='/blog/12345'
			className='relative flex items-center justify-center group overflow-hidden w-full h-[300px]'
		>
			<Image
				src={mediaItemUrl}
				alt={altText}
				title={altText}
				className='group-hover:scale-105 transition-transform duration-200 object-cover'
				fill
			/>
			<div className='absolute inset-0 bg-gray-900/50' />
			<div className='absolute top-0 flex flex-col h-full items-center justify-between py-10 z-50 gap-3'>
				<div className='flex items-center justify-center flex-col h-full'>
					<h2 className='md:px-5 text-lg font-bold leading-normal text-center text-gray-100 uppercase'>
						{title}
					</h2>
					<p className='md:px-5 text-sm leading-normal text-center text-gray-100 mt-4 font-medium'>
						{excerpt.replace(/(<([^>]+)>)/gi, '')}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default FeaturedBlogCard
