import Link from 'next/link'
import FeaturedBlogCardPic from '@/assets/mika-baumeister-PtabTe6iJ_8-unsplash.webp'
import Image from 'next/image'

const FeaturedBlogCard = () => {
  return (
    <Link href='/blog/12345' className='relative flex items-center justify-center group overflow-hidden'>
      <Image src={FeaturedBlogCardPic} alt='chair' title='chair' className='group-hover:scale-105 transition-transform duration-200' />
      <div className='absolute inset-0 bg-gray-900/50' />
      <div className='absolute top-0 flex flex-col h-full items-center justify-between py-10 z-50 gap-3'>
        <div className='flex items-center justify-center flex-col h-full'>
          <h2 className='md:px-5 md:text-2xl text-lg font-bold leading-normal text-center text-gray-100 uppercase'>The history of wood</h2>
          <p className='md:px-5 text-sm md:text-base leading-normal text-center text-gray-100 mt-4 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <div className='focus:ring-2 focus:ring-offset-2 w-fit group-hover:bg-gray-950 group-hover:text-gray-100 transition-colors focus:ring-gray-500 duration-200 font-medium text-center text-gray-900 py-4 px-12 bg-white focus:outline-none hidden md:block'>Read more</div>
      </div>
    </Link>
  )
}

export default FeaturedBlogCard
