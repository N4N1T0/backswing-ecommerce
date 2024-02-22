import BlogFeed from '@/components/blog/blog-feed'
import FeaturedBlogs from '@/components/blog/featured-blog'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog'
}

const BlogPage = () => {
  return (
    <main className='max-w-screen-3xl mx-auto p-10 space-y-10 text-center'>
      <FeaturedBlogs />
      <BlogFeed />
    </main>
  )
}

export default BlogPage
