import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Check } from 'lucide-react'

const OrdersSummary = () => {
  return (
    <section id='ordenes' className='space-y-5 md:space-y-10'>
      <h2 className='text-4xl font-semibold leading-9 text-gray-800 my-5 md:text-left text-center'>
        Lista de Compras
      </h2>
      <Accordion
        type='multiple'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'
      >
        <AccordionItem value='orden-1'>
          <AccordionTrigger className='flex justify-between items-center w-full'>
            <h3>Orden No. 15018</h3>
            <span>4 Articulos</span>
            <span>Fecha: {new Date().toLocaleDateString()}</span>
          </AccordionTrigger>
          <AccordionContent className='space-y-3'>
            <p className='flex justify-between items-center font-semibold'>
              Subtotal <span>$500</span>
            </p>
            <h4 className='text-lg font-semibold text-gray-800 my-5 md:text-left text-center'>
              Articulos
            </h4>
            <ul>
              <li className='flex justify-between items-center'>
                <p>Articulo 1</p>
                <p>$100</p>
              </li>
              <li className='flex justify-between items-center'>
                <p>Articulo 2</p>
                <p>$200</p>
              </li>
            </ul>
            <div className='flex justify-start items-center gap-3 text-lg text-green-500'>
              Orden Entregada <Check />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='orden-2'>
          <AccordionTrigger className='flex justify-between items-center w-full'>
            <h3>Orden No. 1509</h3>
            <span>2 Articulos</span>
            <span>Fecha: {new Date().toLocaleDateString()}</span>
          </AccordionTrigger>
          <AccordionContent className='space-y-3'>
            <p className='flex justify-between items-center font-semibold'>
              Subtotal <span>$500</span>
            </p>
            <h4 className='text-lg font-semibold text-gray-800 my-5 md:text-left text-center'>
              Articulos
            </h4>
            <ul>
              <li className='flex justify-between items-center'>
                <p>Articulo 1</p>
                <p>$100</p>
              </li>
              <li className='flex justify-between items-center'>
                <p>Articulo 2</p>
                <p>$200</p>
              </li>
            </ul>
            <button
              type='button'
              className='w-fit bg-gray-900 text-gray-50 hover:bg-gray-700 duration-200 transition-colors px-3 py-2'
            >
              Localizar el Pedido
            </button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default OrdersSummary
