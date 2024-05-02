import Image from 'next/image'
import FeaturedBlogCard from '@/components/blog/featured-blog-card'
import { type Metadata } from 'next'
import { getPostById, getRelatedPost } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Blog Post Mockup'
}

const BlogPost = async ({ params }: { params: { post: string } }) => {
  const post = await getPostById(params.post)
  const relatedPosts = await getRelatedPost(params.post)
  const { title, content, excerpt, featuredImage: { node: { mediaItemUrl, altText } } } = post

  return (
    <main className='mt-10 max-w-screen-2xl mx-auto p-5 md:p-10'>

      <div className='mb-4 md:mb-0 w-full mx-auto'>
        <div className='px-4 lg:px-0'>
          <h2 className='text-4xl font-semibold text-gray-900 leading-tight'>
            {title}
          </h2>
          <div
            className='py-2 text-gray-700 inline-flex items-center justify-center mb-2'
            dangerouslySetInnerHTML={{ __html: excerpt }}
          >
          </div>
        </div>

        <Image src={mediaItemUrl} alt={altText} title={altText} className='w-full object-cover lg:rounded' width={1200} height={1000} />
      </div>

      <div className='flex flex-col lg:flex-row lg:space-x-12'>
        <div className='px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4 space-y-6' dangerouslySetInnerHTML={{ __html: content }}>
        </div>

        <div className='w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm space-y-10'>
          {relatedPosts.map((post) => (
            <FeaturedBlogCard post={post} key={post.id} />
          ))}
        </div>

      </div>
    </main>
  )
}

export default BlogPost
