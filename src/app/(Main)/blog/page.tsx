import BlogFeed from '@/components/blog/blog-feed'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog'
}

export default function BlogPage() {
  return (
    <main className='max-w-screen-2xl mx-auto p-10 space-y-10 text-center mt-20 pt-10 md:pt-20'>
      <BlogFeed />
    </main>
  )
}
