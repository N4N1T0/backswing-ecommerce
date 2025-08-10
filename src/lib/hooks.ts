import { useEffect, useState } from 'react'

/**
 import { useEffect, useState } from 'react'
 * Custom hook to detect scroll direction
 * @returns {boolean} true if scrolling up, false if scrolling down
 */
export function useScrollDirection(): boolean {
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true)
      } else if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return isScrollingUp
}
