import Link from 'next/link'
import Image from 'next/image'
import { type Post } from '@/types'

const FeaturedBlogCard = ({ post }: { post: Post }) => {
  const { title, excerpt, featuredImage: { node: { mediaItemUrl, altText } } } = post
  return (
    <Link href='/blog/12345' className='relative flex items-center justify-center group overflow-hidden w-full h-[300px]'>
      <Image src={mediaItemUrl} alt={altText} title={altText} className='group-hover:scale-105 transition-transform duration-200 object-cover' fill />
      <div className='absolute inset-0 bg-gray-900/50' />
      <div className='absolute top-0 flex flex-col h-full items-center justify-between py-10 z-50 gap-3'>
        <div className='flex items-center justify-center flex-col h-full'>
          <h2 className='md:px-5 text-lg font-bold leading-normal text-center text-gray-100 uppercase'>{title}</h2>
          <p className='md:px-5 text-sm leading-normal text-center text-gray-100 mt-4 font-medium'>{excerpt.replace(/(<([^>]+)>)/gi, '')}</p>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedBlogCard
