import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { ModalContext } from './ModalContext'
import Modal from '../components/modals/Modal'
import ProductModal from '../components/modals/ProductModal'
import QuoteModal from '../components/modals/QuoteModal'

// One modal for the whole site. Any component can open it with useModal():
//   openQuote()                                   -> empty quote form
//   openQuote({ productName, options })           -> quote form for a product
//   openProduct(product)                          -> product details
export default function ModalProvider({ children }) {
  const [modal, setModal] = useState(null)

  const openQuote = useCallback((details = {}) => setModal({ type: 'quote', ...details }), [])
  const openProduct = useCallback((product) => setModal({ type: 'product', product }), [])
  const closeModal = useCallback(() => setModal(null), [])

  return (
    <ModalContext.Provider value={{ openQuote, openProduct, closeModal }}>
      {children}

      <AnimatePresence>
        {modal && (
          <Modal
            key="site-modal"
            onClose={closeModal}
            size={modal.type === 'product' ? 'lg' : 'md'}
            label={modal.type === 'product' ? modal.product.name : 'Start your project'}
          >
            {modal.type === 'product' ? (
              <ProductModal product={modal.product} />
            ) : (
              <QuoteModal productName={modal.productName} options={modal.options} />
            )}
          </Modal>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  )
}
