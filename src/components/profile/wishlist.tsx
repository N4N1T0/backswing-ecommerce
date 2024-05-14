'use client'

import Image from 'next/image'
import { AccordionContent, Accordion, AccordionItem, AccordionTrigger } from '../ui/accordion'
import useWishlist from '@/stores/wishlist-store'
import WishlistHeart from '../products/wishlist-heart'

const Wishlist = () => {
  const [count] = useWishlist()

  return (
    <section id='wishlist' className='space-y-5 md:space-y-10'>
      <h2 className='text-4xl font-semibold leading-9 text-gray-800 my-5 md:text-left text-center'>Lista de Deseos</h2>
      <ul className='flex flex-col md:flex-row justify-start items-center gap-5 flex-wrap'>
        {count.length === 0
          ? <div className='space-y-3'>
            <p className='text-center uppercase'>No hay productos en tu lista de deseos</p>
          </div>
          : count.map((item) => (
            <li key={item.id}>
              <div className='w-52'>
                <div className='relative w-full h-52'>
                  <Image src={item.image.sourceUrl} alt={item.name} title={item.name} fill className='z-0 w-auto h-auto object-cover aspect-square' />
                  <WishlistHeart product={item} />
                </div>
                <Accordion type='single' collapsible className='w-full space-y-3'>
                  <AccordionItem value='item-1'>
                    <AccordionTrigger>Detalles</AccordionTrigger>
                    <AccordionContent className='w-full'>
                      <ul className='w-full space-y-2 text-left'>
                        <li>{item.name}</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default Wishlist
