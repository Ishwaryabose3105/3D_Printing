import { ArrowRight } from 'lucide-react'

import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import ProductCard from '../products/ProductCard'
import { products } from '../../data/products'

const FEATURED_COUNT = 6

export default function FeaturedProducts() {
  return (
    <Section id="featured-products">
      <SectionHeading
        title="Explore our product collection"
        text="A few favorites. Every piece can be customized to your size, color and design."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, FEATURED_COUNT).map((product, index) => (
          <Reveal key={product.id} delay={(index % 3) * 0.08} className="h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-7">
        <Button to="/products">
          View all {products.length} products <ArrowRight size={17} />
        </Button>
      </Reveal>
    </Section>
  )
}
