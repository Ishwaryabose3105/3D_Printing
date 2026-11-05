
export default function ProductArt({ product, name, className = '' }) {
  const productName = product?.name || name || '3D Product'
  const image = product?.image

  if (!image) {
    return (
      <div className={`flex aspect-[1/0.82] w-full items-center justify-center bg-slate-900 text-white ${className}`}>
        {productName}
      </div>
    )
  }

  return (
    <img
      src={image}
      alt={productName}
      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
    />
  )
}
