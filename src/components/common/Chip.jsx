export default function Chip({ active = false, className = '', children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
        active
          ? 'border-blue-400 bg-gradient-to-r from-black via-[#0c275a] to-[#2563eb] text-white shadow-[0_2px_12px_rgba(37,99,235,0.4)]'
          : 'border-blue-900/40 bg-[#030914] text-slate-300 hover:border-blue-500/60 hover:bg-[#07152b] hover:text-white'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
