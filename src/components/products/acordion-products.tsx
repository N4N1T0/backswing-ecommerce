import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import Image from 'next/image'

const AccordionProducts = () => {
  return (
    <Accordion type='multiple' defaultValue={['descripcion', 'composition']}>
      <AccordionItem value='descripcion' className='border-secondary/50'>
        <AccordionTrigger className='font-bold text-lg uppercase'>descripcion</AccordionTrigger>
        <AccordionContent>
          a 1a camiseta del mercado 100% pretratada para facilitar la impresión digital
          Algodón semipeinado para una excelente relación calidad/precio
          Ningún residuo de pretratamiento visible
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='composition' className='border-secondary/50'>
        <AccordionTrigger className='font-bold text-lg uppercase'>Composicion</AccordionTrigger>
        <AccordionContent>
          100% algodón (85% algodón - 15% algodón biológico) - Enteramente pretratada para una impresión digital completa
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='estilo' className='border-secondary/50'>
        <AccordionTrigger className='font-bold text-lg uppercase'>Estilo</AccordionTrigger>
        <AccordionContent>
          <ul className='list-none'>
            <li>Tubular</li>
            <li>Cuello redondo acanalado con</li>
            <li>tapacosturas en el interior</li>
            <li>Corte moderno</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='cuidado' className='border-secondary/50'>
        <AccordionTrigger className='font-bold text-lg uppercase'>Cuidado</AccordionTrigger>
        <AccordionContent>
          <ul className='flex items-center gap-5'>
            <li>
              <Image src='https://s7g3.scene7.com/is/image/soloinvest/WASH_AT_40?fmt=png-alpha&amp;hei=44' alt='Agua caliente 40º' title='Agua caliente 40º' width={50} height={50} />
            </li>
            <li>
              <Image src='https://s7g3.scene7.com/is/image/soloinvest/DO_NOT_BLEACH?fmt=png-alpha&amp;hei=44' alt='No usar lejia' title='No usar lejia' width={50} height={50} />
            </li>
            <li>
              <Image src='https://s7g3.scene7.com/is/image/soloinvest/DO_NOT_TUMBLE_DRY?fmt=png-alpha&amp;hei=44' alt='No volcar' title='No volcar' width={50} height={50} />
            </li>
            <li>
              <Image src='https://s7g3.scene7.com/is/image/soloinvest/IRON_LOW?fmt=png-alpha&amp;hei=44' alt='No usar plancha baja' title='No usar plancha baja' width={50} height={50} />
            </li>
            <li>
              <Image src='https://s7g3.scene7.com/is/image/soloinvest/DO_NOT_DRYCLEAN?fmt=png-alpha&amp;hei=44' alt='No lavar en seco' title='No usar en seco' width={50} height={50} />
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='Compromiso' className='border-secondary/50'>
        <AccordionTrigger className='font-bold text-lg uppercase'>Compromiso</AccordionTrigger>
        <AccordionContent>
          <ul className='flex items-center gap-5'>
            <li>
              <Image src='https://s7g3.scene7.com/is/image/soloinvest/certification_organic_blended?fmt=png-alpha' alt='Organic Blended' width={100} height={100} title='El contenido de fibra/material es organico' />
            </li>
            <li>
              <Image src='https://s7g3.scene7.com/is/image/soloinvest/certification_peta?fmt=png-alpha' alt='PETA Aproved' width={100} height={100} title='Articulo fabricado con alternativas vegenas' />
            </li>
            <li>
              <Image src='https://s7g3.scene7.com/is/image/soloinvest/certification_oekotex_5?fmt=png-alpha' alt='Standard 100' width={100} height={100} title='Calidad garantizada de producto seguro' />
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionProducts
