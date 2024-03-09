import AccordionProducts from '@/components/products/acordion-products'
import ColorPicker from '@/components/products/color-picker'
import ProductSlider from '@/components/products/product-slider'
import ProductsTallas from '@/components/products/products-tallas'
import Quantity from '@/components/products/quantity'
import { getSingleProduct, useEuros } from '@/lib/utils'
import { type Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata ({ params }: { params: { product: string } }): Promise<Metadata> {
  const productInfo = getSingleProduct(params.product)

  return {
    title: productInfo.name,
    description: productInfo.description
  }
}

const ProductPage = ({ params }: { params: { product: string } }) => {
  const productInfo = getSingleProduct(params.product)
  const { name, description, material, offer, image, price, new: isNew, gender } = productInfo

  return (
    <section className='overflow-hidden'>
      <div className='flex flex-wrap w-full p-2'>
        <ProductSlider image={image} name={name} />
        <div className='w-full px-4 md:w-1/2'>
          <div className='mb-8 border-b'>
            <h2 className='flex justify-between items-center w-fullmt-1 mb-1 text-2xl font-bold md:text-4xl uppercase'>
              {name} {!isNew && <Link href='/nuevo' className='text-xs tracking-wide bg-gray-900 py-1 px-3 text-gray-100 hover:bg-gray-700 duration-200 transition-colors hidden md:block'>nuevo</Link>}</h2>
            <h3 className='font-light uppercase'>{description}</h3>
            <h3 className='font-bold uppercase'>{material}</h3>
            <p className='inline-block my-3 text-4xl font-bold text-accent space-x-5'>
              {offer.onOffer
                ? <>{useEuros.format(offer.price)}{' '}<span className='text-base font-normal text-gray-500 line-through'>{useEuros.format(price)}</span></>
                : useEuros.format(price)
              }
            </p>
            <ColorPicker gender={gender} product='camisetas' />
            <ProductsTallas name={name} />
            <Quantity product={{ quantity: 0, ...productInfo }} />
          </div>
          <AccordionProducts />
        </div>
      </div>
    </section>
  )
}

export default ProductPage
