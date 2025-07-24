import About from '@/components/nosotros/about'
import Contacto from '@/components/nosotros/contacto'
import MissionAndVision from '@/components/nosotros/mission-and-vision'
import Quote from '@/components/nosotros/quote'
import Timeline from '@/components/nosotros/timeline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros'
}

export default function NosotrosPage() {
  return (
    <main className='max-w-screen-2xl mx-auto p-5 space-y-1 md:space-y-5'>
      <About />
      <Quote />
      <MissionAndVision />
      <Timeline />
      <Contacto />
    </main>
  )
}
