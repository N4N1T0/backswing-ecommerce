import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'

const AccordionProducts = () => {
	const items = [
		{
			id: 'descripcion',
			title: 'descripcion',
			content:
				'a 1a camiseta del mercado 100% pretratada para facilitar la impresión digital Algodón semipeinado para una excelente relación calidad/precio Ningún residuo de pretratamiento visible',
		},
		{
			id: 'composition',
			title: 'Composicion',
			content:
				'100% algodón (85% algodón - 15% algodón biológico) - Enteramente pretratada para una impresión digital completa',
		},
		{
			id: 'estilo',
			title: 'Estilo',
			content: (
				<ul className='list-none'>
					<li>Tubular</li>
					<li>Cuello redondo acanalado con tapacosturas en el interior</li>
					<li>Corte moderno</li>
				</ul>
			),
		},
		{
			id: 'cuidado',
			title: 'Cuidado',
			content: (
				<ul className='flex items-center gap-5'>
					<li>
						<Image
							src='https://s7g3.scene7.com/is/image/soloinvest/WASH_AT_40?fmt=png-alpha&amp;hei=44'
							alt='Agua caliente 40º'
							title='Agua caliente 40º'
							width={50}
							height={50}
						/>
					</li>
					<li>
						<Image
							src='https://s7g3.scene7.com/is/image/soloinvest/DO_NOT_BLEACH?fmt=png-alpha&amp;hei=44'
							alt='No usar lejia'
							title='No usar lejia'
							width={50}
							height={50}
						/>
					</li>
					<li>
						<Image
							src='https://s7g3.scene7.com/is/image/soloinvest/DO_NOT_TUMBLE_DRY?fmt=png-alpha&amp;hei=44'
							alt='No volcar'
							title='No volcar'
							width={50}
							height={50}
						/>
					</li>
					<li>
						<Image
							src='https://s7g3.scene7.com/is/image/soloinvest/IRON_LOW?fmt=png-alpha&amp;hei=44'
							alt='No usar plancha baja'
							title='No usar plancha baja'
							width={50}
							height={50}
						/>
					</li>
					<li>
						<Image
							src='https://s7g3.scene7.com/is/image/soloinvest/DO_NOT_DRYCLEAN?fmt=png-alpha&amp;hei=44'
							alt='No lavar en seco'
							title='No usar en seco'
							width={50}
							height={50}
						/>
					</li>
				</ul>
			),
		},
	]

	return (
		<Accordion type='multiple' defaultValue={['descripcion']}>
			{items.map((item) => (
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
