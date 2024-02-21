'use client'

import { pathnameCrumbs } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumbs = () => {
  const pathname = usePathname()
  const crumbs = pathnameCrumbs(pathname)

  return (
    <nav aria-label='Breadcrumb'>
      <ol className='flex items-center gap-1 text-sm text-gray-800'>
        <li>
          <Link href='/' className='block transition hover:text-secondary'>
            <span className='sr-only'> Home </span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
          </Link>
        </li>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </li>
        {crumbs.map((crumb, index) => (
          <>
            <li key={`${crumb.name}-${index}`}>
              <Link href={crumb.href} className='block transition hover:text-secondary'>
                {crumb.name}
              </Link>
            </li>
            {index === crumbs.length - 1
              ? <></>
              : <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </li>}
          </>
        ))}

      </ol>
    </nav>
  )
}

export default Breadcrumbs
