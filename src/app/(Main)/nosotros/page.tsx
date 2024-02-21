import About from '@/components/nosotros/abou'
import Timeline from './timeline'
import Contacto from './contacto'

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
