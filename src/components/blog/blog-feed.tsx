import { sanityClientRead } from '@/sanity/lib/client'
import { GET_ALL_BLOG } from '@/sanity/queries'
import BlogCard from './blog-card'

export default async function BlogFeed() {
  const blogs = await sanityClientRead.fetch(
    GET_ALL_BLOG,
    {},
    {
      cache: 'force-cache',
      next: {
        revalidate: 3600
      }
    }
  )

  return (
    <div className='2xl:mx-auto w-full xl:px-12 sm:px-6 px-3 py-10'>
      <h1 className='lg:text-4xl text-3xl font-semibold leading-9 text-gray-800'>
        Artículos Recientes
      </h1>
      <p className='mt-4 text-gray-700 text-center'>
        Si estás buscando párrafos aleatorios, has llegado al lugar correcto.
      </p>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 mt-12'>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <BlogCard post={blog} />
          </li>
        ))}
      </ul>
    </div>
  )
}
