
import Card from '../common/Card'
import Button from '../common/Button'
import ProductArt from '../common/ProductArt'
import useModal from '../../hooks/useModal'

export default function ProductCard({ product }) {
  const { openProduct } = useModal()

  return (
    <Card as="article" className="group flex h-full flex-col">

      {/* Product Image */}
      <div className="aspect-[1/0.82] overflow-hidden bg-[#050e1f]">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              console.error('Image not found:', product.image)
            }}
          />
        ) : (
          <div className="w-full h-full overflow-hidden">
  <img
    src={project.image}
    alt={project.name}
    className="w-full h-full object-cover
               transition-transform duration-500
               group-hover:scale-105"
  />
</div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col items-start gap-1.5 p-5">

        <small className="text-sm text-muted">
          {product.category}
        </small>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="mt-auto pt-2.5">
          <Button
            size="sm"
            onClick={() => openProduct(product)}
          >
            View details
          </Button>
        </div>

      </div>
    </Card>
  )
}
