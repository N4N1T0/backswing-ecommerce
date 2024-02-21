import About from '@/components/nosotros/about'
import Timeline from '@/components/nosotros/timeline'
import Contacto from '@/components/nosotros/contacto'

const NosotrosPage = () => {
  return (
    <main className='max-w-screen-3xl mx-auto p-10 space-y-5'>
      <About />
      <Timeline />
      <Contacto />
    </main>
  )
}

export default NosotrosPage
