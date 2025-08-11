import PersonalizationCard from '@/components/personalization/personalization-card'
import SubmitButton from '@/components/personalization/submit-button'
import { personalizationProducts } from '@/contants/static-products'
import { Palette, Shirt } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Personalizar',
    description: 'Diseños para los amantes del Pádel'
  }
}

export default function PersonalizationPage() {
  return (
    <section id='personalizar' className='min-h-screen bg-gray-50 py-8'>
      <div className='container mx-auto px-4'>
        {/* Hero Section */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-gray-900 mb-6'>
            <Palette className='w-8 h-8 text-white' />
          </div>
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-4'>
            Personaliza tu Producto
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Crea diseños únicos para los amantes del Pádel. Elige tu modelo
            favorito y el diseño perfecto.
          </p>
        </div>

        {/* Personalization Form */}
        <form className='w-full space-y-12'>
          {/* Product Types Section */}
          <div className='bg-white border border-gray-200 p-8 md:p-12'>
            <fieldset>
              <legend className='flex items-center gap-3 mb-8 text-3xl font-bold text-gray-900'>
                <Shirt className='w-8 h-8 text-gray-700' />
                Escoge un Modelo de Camiseta
              </legend>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
                {personalizationProducts.categories.map((product) => (
                  <PersonalizationCard key={product.value} product={product} />
                ))}
              </div>
            </fieldset>
          </div>

          {/* Designs Section */}
          <div className='bg-white border border-gray-200 p-8 md:p-12'>
            <fieldset>
              <legend className='flex items-center gap-3 mb-8 text-3xl font-bold text-gray-900'>
                <Palette className='w-8 h-8 text-gray-700' />
                Escoge un Diseño
              </legend>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
                {personalizationProducts.diseños.map((product) => (
                  <PersonalizationCard
                    key={product.value}
                    product={product}
                    isDesign
                  />
                ))}
              </div>
            </fieldset>
          </div>

          {/* Action Section */}
          <div className='bg-gray-100 border border-gray-200 p-8 md:p-12'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
              {/* Explanation */}
              <div className='text-center lg:text-left max-w-2xl'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  ¡Ya casi está listo!
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Una vez que hayas elegido el{' '}
                  <span className='font-bold text-gray-900'>modelo</span> y el{' '}
                  <span className='font-bold text-gray-900'>diseño</span>, serás
                  redirigido a la página del producto para finalizar tu
                  personalización.
                </p>
              </div>
              {/* Submit Button */}
              <div className='flex-shrink-0'>
                <SubmitButton />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
