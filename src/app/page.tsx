import Featured from '@/components/home/featured'
import Hero from '@/components/home/hero'
import SubHero from '@/components/home/sub-hero'
import Collection from '@/components/shared/collection'

export default function Home() {
  return (
    <main>
      <Hero />
      <SubHero />
      <Collection direction='right' />
      <Featured />
      <Collection direction='left' />
    </main>
  )
}
