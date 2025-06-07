// export async function generateMetadata(
// 	{ params }: { params: { post: string } },
// 	parent: ResolvingMetadata,
// ): Promise<Metadata> {
// 	const blogInfo = await getPostById(params.post)
// 	const previousImages = (await parent).openGraph?.images || []

import { BlogPost } from '@/types'

// 	return {
// 		title: blogInfo.title,
// 		description: blogInfo.excerpt,
// 		openGraph: {
// 			images: [blogInfo.featuredImage.node.mediaItemUrl, ...previousImages],
// 		},
// 	}
// }

export default async function BlogPostPage({ params }: { params: BlogPost }) {
  const { post } = await params
  console.log(post)

  // const post = await getPostById(params.post)
  // const relatedPosts = await getRelatedPost(params.post)
  // const {
  // 	title,
  // 	content,
  // 	excerpt,
  // 	featuredImage: {
  // 		node: { mediaItemUrl, altText },
  // 	},
  // } = post

  return (
    <main className='mt-10 max-w-(--breakpoint-2xl) mx-auto p-5 md:p-10'>
      {/* <div className='mb-4 md:mb-0 w-full mx-auto'>
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
					className='w-full object-cover lg:rounded-sm'
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

				<div className='w-full lg:w-1/4 m-auto mt-12 max-w-(--breakpoint-sm) space-y-10 divide-y-2'>
					{relatedPosts.map((post) => (
						<FeaturedBlogCard post={post} key={post.title} />
					))}
					<div>
						<SocialShareButton title={title} />
					</div>
				</div>
			</div> */}
    </main>
  )
}
