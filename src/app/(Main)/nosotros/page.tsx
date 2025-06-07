import About from '@/components/nosotros/about'
import Contacto from '@/components/nosotros/contacto'
import Timeline from '@/components/nosotros/timeline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros'
}

export default function NosotrosPage() {
  return (
    <main className='max-w-screen-3xl mx-auto p-10 space-y-5'>
      <About />
      <Timeline />
      <Contacto />
    </main>
  )
}
