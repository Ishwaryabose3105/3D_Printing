import { Link } from 'react-router-dom'

const variants = {
  primary:
    'border border-blue-400/50 bg-gradient-to-r from-black via-[#0a2356] to-[#1d6ee5] text-white shadow-[0_4px_20px_-4px_rgba(29,110,229,0.5)] hover:from-[#050b18] hover:via-[#0e2f75] hover:to-[#2563eb] hover:border-blue-300 hover:shadow-[0_6px_25px_rgba(37,99,235,0.65)]',
  outline:
    'border border-blue-500/40 bg-[#030914] text-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:border-blue-400 hover:bg-gradient-to-r hover:from-black hover:via-[#091f46] hover:to-[#12336e] hover:text-white hover:shadow-[0_4px_16px_rgba(37,99,235,0.3)]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[0.95rem]',
}

// Renders a router <Link> when `to` is passed, otherwise a normal <button>
export default function Button({ to, variant = 'outline', size = 'md', className = '', children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant] || variants.outline} ${sizes[size] || sizes.md} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
