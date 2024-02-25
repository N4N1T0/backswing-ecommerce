'use client'

import { pathnameCrumbs } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const SideNavbarFilter = () => {
  const pathname = usePathname()
  const crumbs = pathnameCrumbs(pathname)

  return (
    <div>
      <ul className='flex flex-col space-y-2'>
        <li>
          <strong className='block text-xs font-medium uppercase text-gray-400'> Diseños de {crumbs[0].name} </strong>
          <ul className='mt-2 space-y-1 uppercase'>
            <li>
              <a
                href='#'
                className='block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 ease-out'
              >
                Rtp Apparel Vision
              </a>
            </li>

            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 ease-out'
              >
                Sols Calipso
              </a>
            </li>

            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 ease-out'
              >
                SOLS CONSTELLATION
              </a>
            </li>

            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 ease-out'
              >
                SOLS COOPER
              </a>
            </li>

            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 ease-out'
              >
                SOLS CONRAD
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 ease-out'
              >
                SOLS CARTER
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 ease-out'
              >
                SOLS PLANET LSL
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 ease-out'
              >
                SOLS PEGASE
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 ease-out'
              >
                SOLS LEGEND
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 ease-out'
              >
                SOLS RE CRUSADER
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default SideNavbarFilter
