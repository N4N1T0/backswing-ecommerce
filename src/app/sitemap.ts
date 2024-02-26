import { type MetadataRoute } from 'next'
import { staticsProducts } from '@/contants/static-products'

export default function sitemap(): MetadataRoute.Sitemap {
  const productsPage = staticsProducts.map(product => (
    {
      url: `${process.env.SITE_URL}/${product.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ))

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${process.env.SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${process.env.SITE_URL}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    },
    {
      url: `${process.env.SITE_URL}/checkout`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    },
     {
      url: `${process.env.SITE_URL}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    },
     {
      url: `${process.env.SITE_URL}/politica-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    },
    {
      url: `${process.env.SITE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    },
    {
      url: `${process.env.SITE_URL}/tallas`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    },
    {
      url: `${process.env.SITE_URL}/terminos-condiciones`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    },
     {
      url: `${process.env.SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ]

  // const blogPages: MetadataRoute.Sitemap = []

  return [...productsPage, ...staticPages] as MetadataRoute.Sitemap
}
