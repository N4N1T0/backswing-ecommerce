'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { pathnameCrumbs } from '@/lib/utils'
import { HomeIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

const Breadcrumbs = () => {
  const pathname = usePathname()
  const crumbs = pathnameCrumbs(pathname)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>
            <HomeIcon className='h-4 w-4' />
            <span className='sr-only'>Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {crumbs.map((crumb, index) => (
          <React.Fragment key={`${crumb.name}-${index}`}>
            <BreadcrumbItem>
              <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default Breadcrumbs
