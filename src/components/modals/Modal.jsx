import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const widths = {
  md: 'max-w-[560px]',
  lg: 'max-w-[880px]',
}

export default function Modal({ onClose, label, size = 'lg', children }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const root = document.getElementById('root')
    const lastFocused = document.activeElement

    // lock page scroll and make everything behind the modal unclickable / untabbable
    document.body.style.overflow = 'hidden'
    root.inert = true
    closeButtonRef.current?.focus()

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('popstate', onClose) // browser back button closes it too

    return () => {
      document.body.style.overflow = ''
      root.inert = false
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('popstate', onClose)
      lastFocused?.focus()
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    // only close when the dark area itself is clicked, not the panel
    if (e.target === e.currentTarget) onClose()
  }

  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={handleBackdropClick}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`relative max-h-[90svh] w-full overflow-y-auto rounded-[26px] border border-line bg-card p-5 sm:p-9 ${widths[size]}`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 grid size-10 place-items-center rounded-full bg-card/80 text-ink transition-colors hover:bg-blue-950/40 hover:text-blue-400"
        >
          <X size={22} />
        </button>
        {children}
      </motion.div>
    </motion.div>,
    document.body,
  )
}
