import Featured from '@/components/home/featured'
import Hero from '@/components/home/hero'
import SubHero from '@/components/home/sub-hero'
import Collection from '@/components/shared/collection'
import PreFooter from '@/components/shared/pre-footer'

export default function Home() {
  return (
    <main className='space-y-5 container'>
      <Hero />
      <SubHero />
      <Collection direction='right' collection='mujer' />
      <Featured />
      <Collection direction='left' collection='hombre' />
      <PreFooter />
    </main>
  )
}
