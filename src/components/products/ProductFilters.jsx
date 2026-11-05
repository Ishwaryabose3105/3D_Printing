import { Search } from 'lucide-react'

import Chip from '../common/Chip'
import { categories } from '../../data/products'

export default function ProductFilters({ search, onSearchChange, category, onCategoryChange, count }) {
  return (
    <div className="mb-7 flex flex-wrap items-center gap-4">
      <div className="relative w-full max-w-[320px]">
        <Search
          size={18}
          className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-muted"
        />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products"
          aria-label="Search products"
          className="w-full rounded-[14px] border border-line bg-surface py-3 pr-4 pl-10 text-ink outline-none transition-all placeholder:text-muted/70 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <Chip key={item} active={item === category} onClick={() => onCategoryChange(item)}>
            {item}
          </Chip>
        ))}
      </div>

      <small className="text-sm text-muted" aria-live="polite">
        {count} {count === 1 ? 'product' : 'products'}
      </small>
    </div>
  )
}
