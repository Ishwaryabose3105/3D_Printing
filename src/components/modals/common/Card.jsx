export default function Card({ as: Tag = 'div', className = '', children, ...props }) {
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag
      onPointerMove={handlePointerMove}
      className={`relative overflow-hidden rounded-[22px] border border-line bg-card shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(280px_circle_at_var(--mx,50%)_var(--my,0),rgba(37,99,235,0.25),transparent_65%)] after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(15,35,80,0.45)] hover:after:opacity-100 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
