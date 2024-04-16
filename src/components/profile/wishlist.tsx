'use client'

import Image from 'next/image'
import { AccordionContent, Accordion, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { removeFromCart, useEuros } from '@/lib/utils'
import { X } from 'lucide-react'
import useWishlist from '@/stores/wishlist-store'
import useShoppingCart from '@/stores/shopping-cart-store'
import { type CartItem } from '@/types'

const Wishlist = () => {
  const [count, setCount] = useWishlist()
  const [, setShopping] = useShoppingCart()

  const addToCart = (product: CartItem) => {
    setShopping(prev => [...prev, product])
    setCount(prev => removeFromCart(prev, product.id))
  }

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
                  <Image src={item.image} alt={item.name} title={item.name} fill className='z-0 w-auto h-auto object-cover aspect-square' />
                  <button aria-label='remove from wishlist' onClick={() => { setCount(prev => removeFromCart(prev, item.id)) }} className='top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400'>
                    <X />
                  </button>
                </div>
                <Accordion type='single' collapsible className='w-full space-y-3'>
                  <AccordionItem value='item-1'>
                    <AccordionTrigger>Detalles</AccordionTrigger>
                    <AccordionContent className='w-full'>
                      <ul className='w-full space-y-2 text-left'>
                        <li>{item.name}</li>
                        <li>
                          {item.offer.onOffer
                            ? <><span className='line-through text-xs uppercase tracking-wide font-normal'>{useEuros.format(item.price)}</span>{' '}{useEuros.format(item.offer.price)}</>
                            : useEuros.format(item.price)
                          }
                        </li>
                        <li>
                          <button onClick={() => { addToCart(item) }} className='w-full py-2 bg-gray-950 text-gray-100 hover:bg-gray-700 transition-colors duration-200'>Agregar al Carrito</button>
                        </li>
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
