import Image from 'next/image'
import BagPic from '@/assets/arno-senoner-oCXVxwTFwqE-unsplash.jpg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

const WishlistCard = () => {
  return (
    <div className='w-52'>
      <div className='relative w-full h-52'>
        <Image src={BagPic} alt='bag' fill className='z-0' />
        <button aria-label='close' className='top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400'>
          <svg className='fil-current' width={14} height={14} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M13 1L1 13' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M1 1L13 13' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </button>
      </div>
      <Accordion type='single' collapsible className='w-full space-y-3'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Detalles</AccordionTrigger>
          <AccordionContent className='w-full'>
            <ul className='w-full space-y-2 text-left'>
              <li>Red Bag</li>
              <li>$1000</li>
              <li>
                <button className='w-full py-2 bg-gray-950 text-gray-100 hover:bg-gray-700 transition-colors duration-200'>Agregar al Carrito</button>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}

export default WishlistCard
