import { useEffect } from 'react'

const DEFAULT_TITLE = 'Shine Craft Technologies | 3D Printing & Design Studio'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Shine Craft Technologies` : DEFAULT_TITLE
  }, [title])
}
