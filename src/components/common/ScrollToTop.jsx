import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router doesn't reset scroll on navigation, so this does it.
// If the url has a hash (/#work) it scrolls to that section instead.
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const section = document.getElementById(hash.slice(1))
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key]) // key changes on every click, so the same link works twice

  return null
}
