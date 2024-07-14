// Components Imports
import BlogFeed from '@/components/blog/blog-feed'

// Types Imports
import type { Metadata } from 'next'

// Metadata for the page
export const metadata: Metadata = {
	title: 'Blog',
}

/**
 * Renders the BlogPage component, which displays a list of blog posts.
 *
 * @return {JSX.Element} The rendered BlogPage component.
 */
const BlogPage = (): JSX.Element => {
	return (
		<main className='max-w-screen-3xl mx-auto p-10 space-y-10 text-center'>
			<BlogFeed />
		</main>
	)
}

export default BlogPage
