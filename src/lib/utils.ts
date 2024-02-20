import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const pathnameCrumbs = (pathname: string) => {
  const crumbs = pathname.split('/').filter(Boolean)
  if (crumbs.length === 0) return []
  return crumbs.map((crumb, index) => ({
    name: crumb,
    href: '/' + crumbs.slice(0, index + 1).join('/')
  }))
}
