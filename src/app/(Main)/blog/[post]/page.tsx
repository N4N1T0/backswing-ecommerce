// Next.js Imports
import Image from 'next/image'
import type { Metadata, ResolvingMetadata } from 'next'

// Components Imports
import FeaturedBlogCard from '@/components/blog/featured-blog-card'
import SocialShareButton from '@/components/blog/social-links'

// Queries Imports
import { getAllPosts, getPostById, getRelatedPost } from '@/lib/queries'

// Types Imports
import type { WPPost } from '@/types'

// Force Static Page
export const dynamic = 'force-static'

/**
 * Asynchronously generates static parameters for all posts.
 *
 * @return {Promise<{post: string}[]>} An array of objects containing the post ID.
 */
export async function generateStaticParams(): Promise<{ post: string }[]> {
	const allPosts: WPPost[] = await getAllPosts()

	return allPosts.map((post) => ({ post: post.id }))
}

/**
 * Asynchronously generates metadata for a post based on the provided parameters.
 *
 * @param {{ post: string }} params - The parameters containing the post ID.
 * @param {ResolvingMetadata} parent - The parent metadata for resolving.
 * @return {Promise<Metadata>} The metadata object containing title, description, and openGraph images.
 */
export async function generateMetadata(
	{ params }: { params: { post: string } },
	parent: ResolvingMetadata,
): Promise<Metadata> {
	// fetch data
	const blogInfo = await getPostById(params.post)
	const previousImages = (await parent).openGraph?.images || []

	return {
		title: blogInfo.title,
		description: blogInfo.excerpt,
		openGraph: {
			images: [blogInfo.featuredImage.node.mediaItemUrl, ...previousImages],
		},
	}
}

/**
 * Renders a blog post with its related posts and social share buttons.
 *
 * @param {Object} params - An object containing the post ID.
 * @param {string} params.post - The ID of the blog post to render.
 * @return {Promise<JSX.Element>} The rendered blog post with related posts and social share buttons.
 */
const BlogPost = async ({
	params,
}: { params: { post: string } }): Promise<JSX.Element> => {
	const post = await getPostById(params.post)
	const relatedPosts = await getRelatedPost(params.post)
	const {
		title,
		content,
		excerpt,
		featuredImage: {
			node: { mediaItemUrl, altText },
		},
	} = post

	return (
		<main className='mt-10 max-w-screen-2xl mx-auto p-5 md:p-10'>
			<div className='mb-4 md:mb-0 w-full mx-auto'>
				<div className='px-4 lg:px-0'>
					<h2 className='text-4xl font-semibold text-gray-900 leading-tight'>
						{title}
					</h2>
					<div
						className='py-2 text-gray-700 inline-flex items-center justify-center mb-2'
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: excerpt }}
					/>
				</div>

				<Image
					src={mediaItemUrl}
					alt={altText}
					title={altText}
					className='w-full object-cover lg:rounded'
					width={1200}
					height={1000}
				/>
			</div>

			<div className='flex flex-col lg:flex-row lg:space-x-12'>
				<div
					className='px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4 space-y-6'
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={{ __html: content }}
				/>

				<div className='w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm space-y-10 divide-y-2'>
					{relatedPosts.map((post) => (
						<FeaturedBlogCard post={post} key={post.title} />
					))}
					<div>
						<SocialShareButton title={title} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default BlogPost
