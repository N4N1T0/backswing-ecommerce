import PersonalizationCard from '@/components/personalization/personalization-card'
import SubmitButton from '@/components/personalization/submit-button'
import { personalizationProducts } from '@/contants/static-products'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Personalizar',
    description: 'Diseños para los amantes del Pádel'
  }
}

export default function PersonalizationPage() {
  return (
    <section id='personalizar'>
      {/* Page Title */}
      <h1 className='text-4xl font-bold my-3'>
        Personaliza tu Producto de Pádel
      </h1>
      {/* Personalization Form */}
      <form
        // action={getPersonalizationProduct}
        className='w-full h-full space-y-10'
      >
        {/* Product Types */}
        <fieldset className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
          <legend className='mb-3 text-2xl border-b border-gray-400'>
            Escoge un Modelo de Camiseta
          </legend>
          {personalizationProducts.categories.map((product) => (
            <PersonalizationCard key={product.value} product={product} />
          ))}
        </fieldset>
        <hr />
        {/* Designs */}
        <fieldset className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
          <legend className='mb-3 text-2xl border-b border-gray-400'>
            Escoge un Diseño
          </legend>
          {personalizationProducts.diseños.map((product) => (
            <PersonalizationCard
              key={product.value}
              product={product}
              isDesign
            />
          ))}
        </fieldset>
        <hr />
        <div className='flex justify-between items-center flex-col md:flex-row text-center gap-y-5'>
          {/* Explanation */}
          <p>
            Una vez que hayas elegido el{' '}
            <span className='font-bold'>modelo</span>y el{' '}
            <span className='font-bold'>diseño</span>, serás redirigido a la
            página del producto.
          </p>
          {/* Submit Button */}
          <SubmitButton />
        </div>
      </form>
    </section>
  )
}
