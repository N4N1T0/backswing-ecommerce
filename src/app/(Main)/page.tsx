import FeaturedBlogs from '@/components/home/featured-blogs'
import Hero3D from '@/components/home/hero-3d'
import SubHero from '@/components/home/sub-hero'
import Collection from '@/components/shared/collection'
import PreFooter from '@/components/shared/pre-footer'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_HOME_PAGE_DATA } from '@/sanity/queries'

export default async function Home() {
  const homePageData = await sanityClientRead.fetch(
    GET_HOME_PAGE_DATA,
    {},
    {
      cache: 'no-store'
    }
  )

  return (
    <main className='space-y-5 container'>
      <Hero3D
        heroSubtitle={homePageData?.heroSubtitle}
        heroDescription={homePageData?.heroDescription}
      />
      <SubHero />
      <Collection
        direction='right'
        collection='mujer'
        description={homePageData?.collectionDescriptions?.mujer}
      />
      <Collection
        direction='left'
        collection='hombre'
        description={homePageData?.collectionDescriptions?.hombre}
      />
      <Collection
        direction='right'
        collection='niño'
        description={homePageData?.collectionDescriptions?.niño}
      />
      <PreFooter />
      <FeaturedBlogs />
    </main>
  )
}
