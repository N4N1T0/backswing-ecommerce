import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { accordionProductsItems } from '@/contants/assets-const'
import React from 'react'

const AccordionProducts = () => {
  return (
    <Accordion type='multiple' defaultValue={['descripcion']}>
      {accordionProductsItems.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className='border-secondary/50'
        >
          <AccordionTrigger className='font-bold text-lg uppercase'>
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default React.memo(AccordionProducts)
