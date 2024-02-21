import AccordionProducts from '@/components/products/acordion-products'
import ColorPicker from '@/components/products/color-picker'
import ProductSlider from '@/components/products/product-slider'
import Quantity from '@/components/products/quantity'
import { tallas } from '@/contants'
import Link from 'next/link'

const ProductPage = ({ params }: { params: { product: string } }) => {
  return (
    <section className='overflow-hidden'>
      <div className='w-full p-2'>
        <div className='flex flex-wrap'>
          <ProductSlider />
          <div className='w-full px-4 md:w-1/2'>
            <div className='mb-8 '>
              <h2 className='max-w-xl mt-1 mb-1 text-2xl font-bold md:text-4xl uppercase'>
                RTP APPAREL VISION</h2>
              <h3 className='font-light'>CAMISETA UNISEX 100% PRETRATADA</h3>
              <h3 className='font-bold'>PUNTO LISO 150</h3>
              <p className='inline-block my-3 text-4xl font-bold text-accent space-x-5'>
                <span>$1000.99</span>
                <span
                  className='text-base font-normal text-gray-500 line-through'>$1500.99</span>
              </p>
              <div className='mt-3 mb-5 space-y-5'>
                <h2 className='bg-primary text-white px-3 py-1 text-xs uppercase w-fit'>
                  5 Colores</h2>
                <ColorPicker />
              </div>
              <div className='my-5 space-y-5'>
                <div className='w-full flex justify-between items-center'>
                  <h5 className='bg-primary text-white px-3 py-1 text-xs uppercase w-fit'>
                    8 tallas</h5>
                  <Link href='/tallas' className='underline hover:text-primary transition-colors duration-200'>Guia de Tallas</Link>
                </div>
                <ul className='flex flex-wrap divide-x-2 w-full justify-between items-center'>
                  {tallas.map(talla => (
                    <li key={talla} className='font-medium px-1 text-lg cursor-pointer hover:text-secondary transition-colors duration-200'>{talla}</li>
                  ))}
                </ul>
              </div>
            </div>
            <AccordionProducts />
            <Quantity />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
