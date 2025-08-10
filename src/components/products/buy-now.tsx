'use client'

import { SquarePlaceholder } from '@/assets/placeholder'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { eurilize } from '@/lib/utils'
import type { Colors, ProductCard, Sizes } from '@/types'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import ColorPicker from './color-picker'
import ModelPicker from './model-picker'
import ProductsTallas from './products-tallas'
import Quantity from './quantity'

interface BuyNowProps {
  product: ProductCard
}

const BuyNow: React.FC<BuyNowProps> = ({ product }) => {
  const { format, offer, price, title, slug, commingSoon, sizes, excerpt } =
    product
  const hasOffer = !!offer
  const isCommingSoon = !!commingSoon

  // STATE
  const [dialogOpen, setDialogOpen] = useState(false)
  const [talla, setTalla] = useState<Sizes>(sizes ? sizes[0] : 'm')
  const [designFormat, setDesignFormat] = useState(format[0])
  const [colors, setColors] = useState<Colors[number]>(format[0].colors[0])
  const [mainImage, setMainImage] = useState(Number(colors.mainImage) || 0)

  // CONST
  const cartItem = useMemo(
    () => ({
      id: product.id,
      talla,
      format: {
        title: designFormat.title,
        color: colors
      },
      price,
      offer,
      title,
      excerpt,
      quantity: 1
    }),
    [colors, price, offer, title, excerpt]
  )

  if (isCommingSoon) {
    return null
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button className='w-full'>
          <ShoppingCart className='size-4 mr-2' />
          Comprar ahora
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-lg bg-gray-100 shadow-2xl border-0 p-0 px-6'>
        <DialogHeader className='sr-only'>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{excerpt}</DialogDescription>
        </DialogHeader>

        <div className='space-y-6 py-4 px-1'>
          {/* Main Image */}
          <div className='flex justify-center'>
            <div className='relative overflow-hidden border-2 border-gray-200'>
              <Image
                src={colors.images[0]?.url || SquarePlaceholder}
                alt={title || 'Producto'}
                width={200}
                height={200}
                className='object-cover aspect-square'
              />
            </div>
            <div className='relative overflow-hidden border-2 border-gray-200'>
              <Image
                src={colors.images[1]?.url || SquarePlaceholder}
                alt={title || 'Producto'}
                width={200}
                height={200}
                className='object-cover aspect-square'
              />
            </div>
          </div>

          <ScrollArea className='h-[400px] md:h-[500px] w-full'>
            {/* PRICE */}
            <div>
              <h5 className='text-sm font-semibold text-gray-900 uppercase tracking-wide'>
                Precio
              </h5>
              {hasOffer ? (
                <div className='space-y-1'>
                  <span className='text-lg line-through text-gray-400'>
                    {eurilize(price)}
                  </span>
                  <span className='text-2xl font-bold text-green-600'>
                    {eurilize(offer)}
                  </span>
                </div>
              ) : (
                <div className='space-y-1'>
                  <span className='text-2xl font-bold text-gray-900'>
                    {eurilize(price)}
                  </span>
                </div>
              )}
            </div>
            <ModelPicker formats={format} setModel={setDesignFormat} />
            <ColorPicker colors={designFormat.colors} setColor={setColors} />
            <ProductsTallas
              tallas={sizes}
              setTalla={setTalla}
              selectedTalla={talla}
            />
            <Quantity product={cartItem} className='my-5' />
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BuyNow
