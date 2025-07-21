'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { sidebarAccordion } from '@/contants'
import { accordionPathname } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const SideNavbarFilter = () => {
  const pathname = usePathname()
  const accordionPath = accordionPathname(
    pathname,
    sidebarAccordion.map((accordion) => accordion.label)
  )

  return (
    <Accordion type='multiple' className='pr-5' defaultValue={accordionPath}>
      {sidebarAccordion.map((accordion) => (
        <AccordionItem
          value={accordion.label}
          key={accordion.label}
          className='relative'
        >
          <AccordionTrigger
            disabled={accordion.commingSoon}
            className={`${
              accordion.commingSoon
                ? 'cursor-not-allowed pointer-events-none opacity-50 relative'
                : ''
            }`}
          >
            {accordion.label === 'Ninos' ? 'Niños' : accordion.label}
          </AccordionTrigger>
          {accordion.commingSoon && (
            <span className='absolute top-2 -right-1 text-xs text-white bg-red-500 rounded-full px-1.5 py-0.5 pointer-events-none'>
              pronto
            </span>
          )}
          {accordion.products && (
            <AccordionContent className='space-y-2'>
              {accordion.products.map((product) => (
                <li
                  key={product.label}
                  className='list-none ml-5 hover:text-gray-500 duration-200 transition-colors'
                >
                  <a href={product.route}>{product.label}</a>
                </li>
              ))}
            </AccordionContent>
          )}
        </AccordionItem>
      ))}
      {/* Render a a to the personalize page with a 'new' badge */}
      <a
        href='/personalizar'
        className='flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline relative'
      >
        Personalizar
        <span className='absolute top-2 -right-1 text-xs text-white bg-gray-900 rounded-full px-1.5 py-0.5 pointer-events-none'>
          nuevo
        </span>
      </a>
    </Accordion>
  )
}

export default SideNavbarFilter
