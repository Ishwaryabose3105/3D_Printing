import { useEffect, useState } from 'react'

// true once the page has scrolled past `offset` pixels (used for the navbar background)
export default function useScrolled(offset = 20) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > offset)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > offset)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return scrolled
}
