import Image from 'next/image'
import Link from 'next/link'
import BlogCardPic from '@/assets/emarts-emarts-ZCTh4f4mv18-unsplash.webp'

const BlogCard = () => {
  return (
    <article>
      <div className='relative'>
        <Image src={BlogCardPic} alt='stairs' title='stairs' />
        <div className='bg-white absolute top-0 left-0'>
          <p className='text-base leading-4 py-3 px-5 text-gray-800'>News</p>
        </div>
      </div>
      <p className='text-sm md:text-base font-light leading-4 text-gray-800 mt-6'>Michael Jackson</p>
      <h1 className='text-xl md:text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800'>Moving up the corporate ladder?</h1>
      <p className='text-sm md:text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <Link href='/blog/12345' className='focus:outline-none flex items-center justify-between w-full md:w-60 mt-6 transition-colors duration-200 bg-gray-900 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700'>
        <p className='text-sm md:text-base font-medium leading-2 md:leading-4 text-white'>Read more</p>
        <svg width='20' height='20' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
          <path d='M3.33203 8H12.6654' stroke='#FFFFFF' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 10.6667L12.6667 8' stroke='#FFFFFF' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 5.3335L12.6667 8.00016' stroke='#FFFFFF' strokeLinecap='round' strokeLinejoin='round' />
        </svg>

      </Link>
    </article>
  )
}

export default BlogCard
