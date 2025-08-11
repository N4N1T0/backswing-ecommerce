import { SquarePlaceholder } from '@/assets/placeholder'
import SocialShareButton from '@/components/blog/social-links'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_BLOG_ARTICLE_BY_SLUG } from '@/sanity/queries'
import { SearchParamsPostType } from '@/types'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

export default async function BlogPostPage({
  params
}: {
  params: SearchParamsPostType
}) {
  const { post: postSlug } = await params
  console.log(postSlug)

  const post = await sanityClientRead.fetch(GET_BLOG_ARTICLE_BY_SLUG, {
    slug: postSlug
  })

  const { title, excerpt, content, featuredMedia } = post

  return (
    <main className='mt-24 p-5 md:px-10 max-w-5xl mx-auto md:pt-20'>
      <div className='mb-4 md:mb-0'>
        <div className='px-4 lg:px-0 animate-fade-in-up animate-delay-500'>
          <h2 className='text-4xl font-semibold text-gray-900 leading-tight'>
            {title}
          </h2>
          <div className='py-2 text-gray-700 inline-flex items-center justify-center my-2'>
            {excerpt}
          </div>
        </div>

        <Image
          src={featuredMedia.url || SquarePlaceholder}
          alt={title}
          title={title}
          className='w-full object-cover lg:rounded-sm animate-fade-in-up animate-delay-700'
          width={1200}
          height={1000}
          placeholder='blur'
          blurDataURL={featuredMedia.blur || SquarePlaceholder.blurDataURL}
        />
      </div>

      <div className='prose max-w-none mt-6 animate-fade-in-up animate-delay-900'>
        <PortableText value={content} />
        <div className='w-full lg:w-1/4 m-auto mt-12 max-w-(--breakpoint-sm) space-y-10 divide-y-2'>
          <SocialShareButton title={title} />
        </div>
      </div>
    </main>
  )
}
