import FeaturedBlogs from '@/components/home/featured-blogs'
import Hero3D from '@/components/home/hero-3d'
import SubHero from '@/components/home/sub-hero'
import Collection from '@/components/shared/collection'
import PreFooter from '@/components/shared/pre-footer'

export default function Home() {
  return (
    <main className='space-y-5 container'>
      <Hero3D />
      <SubHero />
      <Collection direction='right' collection='mujer' />
      <Collection direction='left' collection='hombre' />
      <Collection direction='right' collection='niño' />
      <PreFooter />
      <FeaturedBlogs />
    </main>
  )
}
