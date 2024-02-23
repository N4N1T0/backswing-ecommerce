import FeaturedBlogCard from './featured-blog-card'

const FeaturedBlogs = () => {
  return (
    <section className='2xl:mx-auto px-3 py-3 md:py-10 md:px-10 w-full' id='articulos destacados'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-4xl font-semibold leading-9 text-gray-800'>Articulos Destacados</h2>
        <p className='text-base leading-6 text-center text-gray-600 sm:w-96 md:w-9/12 lg:w-5/12 mt-4'>If you&apos;re looking for random paragraphs, you&apos;ve come to the right place. When a random word or a random sentence isn&apos;t quite enough</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6'>
        {Array.from({ length: 4 }).map((_, index) => (
          <FeaturedBlogCard key={`Featured-Blog-${index}`} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedBlogs
