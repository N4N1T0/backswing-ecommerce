// Next.js Imports
import type { MetadataRoute } from 'next'

// Queries Imports
import { getProductsIds, getAllPosts } from '@/lib/queries'

/**
 * Generates the sitemap for the website including products, blogs, and static pages.
 *
 * @return {Promise<MetadataRoute.Sitemap>} The generated sitemap for the website.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// fetch data
	const products = await getProductsIds()
	const blogs = await getAllPosts()

	// Dynamic Products Pages
	const productsPage = products.map((product) => {
		const category = product.productCategories.nodes.find(
			(node) => node.name === 'Sudaderas' || node.name === 'Camisetas',
		)?.name
		const gender = product.productCategories.nodes.find(
			(node) =>
				node.name === 'Mujer' ||
				node.name === 'Hombre' ||
				node.name === 'Ninos',
		)?.name
		return {
			url: `${
				process.env.SITE_URL
			}/${gender?.toLocaleLowerCase()}/${category?.toLocaleLowerCase()}/${
				product.id
			}`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		}
	})

	// Blog Pages
	const blogPage = blogs.map((post) => {
		return {
			url: `${process.env.SITE_URL}/blog/${post.id}`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		}
	})

	// Static Pages
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: `${process.env.SITE_URL}/`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `${process.env.SITE_URL}/aviso-legal`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${process.env.SITE_URL}/checkout`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${process.env.SITE_URL}/nosotros`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${process.env.SITE_URL}/politica-privacidad`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${process.env.SITE_URL}/search`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${process.env.SITE_URL}/tallas`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${process.env.SITE_URL}/terminos-condiciones`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${process.env.SITE_URL}/blog`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
	]

	// const blogPages: MetadataRoute.Sitemap = []
	return [...productsPage, ...staticPages, ...blogPage] as MetadataRoute.Sitemap
}
