import { useState } from 'react'

import ProductArt from '../common/ProductArt'
import Button from '../common/Button'
import Chip from '../common/Chip'
import useModal from '../../hooks/useModal'
import { customizationOptions, productSpecs } from '../../data/products'

// color previews for the illustration, can be replaced with real photos later
const finishes = [
  { label: 'Deep Blue', filter: '' },
  { label: 'Silver', filter: 'grayscale brightness-115' },
  { label: 'Cobalt', filter: 'hue-rotate-30 brightness-110' },
]

export default function ProductModal({ product }) {
  const { openQuote } = useModal()
  const [finish, setFinish] = useState(finishes[0])
  const [selectedOptions, setSelectedOptions] = useState([])

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    )
  }

  const handleQuote = () => {
    openQuote({ productName: product.name, options: selectedOptions })
  }

  return (
    <div className="grid gap-7 md:grid-cols-2">
      <div>
        <div className="grid aspect-[1/0.82] place-items-center rounded-[18px] border border-blue-900/30 bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,#2563eb_20%,#050e1f),#050e1f_75%)]">
          <ProductArt name={product.art} className={`w-[56%] transition-[filter] duration-300 ${finish.filter}`} />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {finishes.map((item) => (
            <Chip key={item.label} active={finish.label === item.label} onClick={() => setFinish(item)}>
              {item.label}
            </Chip>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <small className="text-sm text-muted">{product.category}</small>
        <h2 className="pr-8 text-3xl sm:text-4xl">{product.name}</h2>
        <p>{product.description}</p>

        <h3 className="mt-2">Customization</h3>
        <div className="flex flex-wrap gap-2">
          {customizationOptions.map((option) => (
            <Chip key={option} active={selectedOptions.includes(option)} onClick={() => toggleOption(option)}>
              {option}
            </Chip>
          ))}
        </div>

        <h3 className="mt-2">Specifications</h3>
        <ul className="grid gap-1.5 text-[0.95rem] text-muted">
          {productSpecs.map((spec) => (
            <li key={spec.label}>
              <span className="text-ink">{spec.label}:</span> {spec.value}
            </li>
          ))}
        </ul>

        <Button variant="primary" onClick={handleQuote} className="mt-3 self-start">
          Request a quote
        </Button>
      </div>
    </div>
  )
}
