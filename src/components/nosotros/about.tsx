import AboutPic from '@/assets/pexels-the-coach-space-2977565.webp'
import Image from 'next/image'

const About = () => {
  return (
    <section className='max-w-8xl py-4 mx-auto lg:py-6 md:px-6' id='about'>
      <div className='flex flex-wrap '>
        <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0 '>
          <div className='lg:max-w-md space-y-6'>
            <div className='pl-4 border-l-4 border-gray-900'>
              <span className='text-sm text-gray-600 uppercase'>
                Quienes somos?
              </span>
              <h1 className='mt-2 text-3xl font-black md:text-5xl'>
                Backswing
              </h1>
              <p className='text-xs text-gray-500'>
                &quot;Pasión, Diseño y Rendimiento Deportivo&quot;
              </p>
            </div>
            <div className='prose'>
              <p>
                En Backswing somos mucho más que una tienda online: somos una
                agencia especializada en el{' '}
                <strong>
                  diseño, producción y comercialización de productos para pádel
                </strong>
                . Nacimos de la pasión por el deporte y la necesidad de crear
                prendas y artículos que realmente entiendan al jugador moderno.
              </p>
              <p>
                Nuestro equipo está conformado por{' '}
                <strong>deportistas, diseñadores y creativos</strong>, todos
                comprometidos con un mismo propósito:{' '}
                <strong>revolucionar la ropa y los accesorios de pádel</strong>{' '}
                a través de la innovación, el estilo y la funcionalidad. Cada
                colección que desarrollamos está pensada para mejorar el
                rendimiento, brindar comodidad y acompañar el estilo de vida
                deportivo, dentro y fuera de la cancha.
              </p>
              <p>
                Gracias a nuestra{' '}
                <strong>experiencia directa en el juego</strong>, entendemos de
                primera mano las exigencias físicas y estéticas del deporte, lo
                que nos permite diseñar productos a medida que combinan{' '}
                <strong>
                  tecnología textil, diseño de vanguardia y autenticidad
                  deportiva.
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0 relative aspect-square'>
          <Image
            src={AboutPic}
            alt='Una reunion del equipo de backswing'
            title='Una reunion del equipo de backswing'
            className='size-full object-cover'
            fill
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default About
