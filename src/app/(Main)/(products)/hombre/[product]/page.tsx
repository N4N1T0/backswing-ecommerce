import AccordionProducts from '@/components/products/acordion-products'
import ColorPicker from '@/components/products/color-picker'
import ProductSlider from '@/components/products/product-slider'
import Quantity from '@/components/products/quantity'
import { tallas } from '@/contants'
import { staticsProducts } from '@/contants/static-products'
import { getSingleProduct, useEuros } from '@/lib/utils'
import Link from 'next/link'

const ProductPage = ({ params }: { params: { product: string } }) => {
  const productInfo = getSingleProduct(staticsProducts, Number(params.product))
  const { name, description, material, offer, image, price } = productInfo

  return (
    <section className='overflow-hidden'>
      <div className='w-full p-2'>
        <div className='flex flex-wrap'>
          <ProductSlider image={image} name={name} />
          <div className='w-full px-4 md:w-1/2'>
            <div className='mb-8 '>
              <h2 className='max-w-xl mt-1 mb-1 text-2xl font-bold md:text-4xl uppercase'>
                {name}</h2>
              <h3 className='font-light uppercase'>{description}</h3>
              <h3 className='font-bold uppercase'>{material}</h3>
              <p className='inline-block my-3 text-4xl font-bold text-accent space-x-5'>
                {offer.onOffer
                  ? <>{useEuros.format(offer.price)}{' '}<span className='text-base font-normal text-gray-500 line-through'>{useEuros.format(price)}</span></>
                  : useEuros.format(price)
                }
              </p>
              <div className='mt-3 mb-5 space-y-5'>
                <h2 className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
                  6 Colores</h2>
                <ColorPicker />
              </div>
              <div className='my-5 space-y-5'>
                <div className='w-full flex justify-between items-center'>
                  <h5 className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
                    8 tallas</h5>
                  <Link href='/tallas' className='underline hover:text-gray-bg-gray-900 transition-colors duration-200'>Guia de Tallas</Link>
                </div>
                <ul className='flex flex-wrap divide-x-2 w-full justify-between items-center'>
                  {tallas.map(talla => (
                    <li key={`${name}-${talla}`} className='font-medium px-1 text-lg cursor-pointer hover:text-gray-600 transition-colors duration-200'>{talla}</li>
                  ))}
                </ul>
              </div>
            </div>
            <AccordionProducts />
            <Quantity product={productInfo} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
