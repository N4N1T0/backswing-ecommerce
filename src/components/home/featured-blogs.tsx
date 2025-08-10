import FeaturedBlogCard from '@/components/blog/featured-blog-card'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_ALL_BLOG } from '@/sanity/queries'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

const FeaturedBlogs = async () => {
  const blogs = await sanityClientRead.fetch(GET_ALL_BLOG)

  const featuredBlogs = blogs.slice(0, 3)

  if (!featuredBlogs.length) {
    return null
  }

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Blog Destacado
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Descubre las últimas tendencias, consejos de estilo y novedades en
            el mundo de la moda deportiva
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {featuredBlogs.map((post) => (
            <FeaturedBlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link
            href='/blog'
            className={buttonVariants({
              size: 'lg'
            })}
          >
            Ver todos los artículos
            <ArrowRightIcon className='ml-2 size-5' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBlogs
