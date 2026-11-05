import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Container from '../components/common/Container'
import PageHeader from '../components/common/PageHeader'
import Button from '../components/common/Button'
import ProductCard from '../components/products/ProductCard'
import ProductFilters from '../components/products/ProductFilters'
import usePageTitle from '../hooks/usePageTitle'
import { products } from '../data/products'

export default function Products() {
  usePageTitle('Products')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const query = search.trim().toLowerCase()
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category
    const matchesSearch = `${product.name} ${product.description}`.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  const clearFilters = () => {
    setSearch('')
    setCategory('All')
  }

  return (
    <Container className="pb-14 md:pb-24">
      <PageHeader
        title="Product collection"
        text="Browse by category, open any product for customization options, then request a quote."
      />

      <ProductFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        count={filteredProducts.length}
      />

      {filteredProducts.length > 0 ? (
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                className="h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="py-10">
          <p>No products match. Clear the search or choose another category.</p>
          <Button onClick={clearFilters} className="mt-4">
            Clear filters
          </Button>
        </div>
      )}
    </Container>
  )
}
