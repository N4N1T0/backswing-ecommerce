// Components Imports
import Featured from '@/components/home/featured'
import Hero from '@/components/home/hero'
import SubHero from '@/components/home/sub-hero'
import Collection from '@/components/shared/collection'
import PreFooter from '@/components/shared/pre-footer'

/**
 * Renders the Home component with various child components.
 *
 * @return {JSX.Element} The main section with Hero, SubHero, Collection, Featured, and PreFooter components.
 */
export default function Home(): JSX.Element {
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
