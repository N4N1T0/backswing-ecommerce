// UI Imports
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

// React Imports
import React from 'react'

// Data Imports
import { accordionProductsItems } from '@/contants/assets-const'

/**
 * Renders an accordion component with multiple items based on the items array.
 *
 * @return {JSX.Element} The rendered accordion component
 */
const AccordionProducts = (): JSX.Element => {
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
