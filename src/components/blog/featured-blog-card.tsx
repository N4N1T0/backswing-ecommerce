import { SquarePlaceholder } from '@/assets/placeholder'
import { GET_ALL_BLOGResult } from '@/sanity/types'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedBlogCard = ({ post }: { post: GET_ALL_BLOGResult[number] }) => {
  const { title, slug, featuredMedia } = post

  return (
    <Link
      href={`/blog/${slug}`}
      className='relative flex items-center justify-center group overflow-hidden w-full h-[300px]'
    >
      <Image
        src={featuredMedia.url || SquarePlaceholder}
        alt={title}
        title={title}
        className='group-hover:scale-105 transition-transform duration-200 object-cover'
        fill
        quality={100}
        decoding='async'
        placeholder='blur'
        blurDataURL={featuredMedia.blur || SquarePlaceholder.blurDataURL}
      />
    </Link>
  )
}

export default FeaturedBlogCard
