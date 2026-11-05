// Gradients shared by illustrations and icons on the site.
// Features Dark Blue, Blue, and Black palette.
export default function SvgGradients() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        {/* Core Theme Gradient: Black -> Dark Blue -> Vibrant Blue */}
        <linearGradient id="grad-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="40%" stopColor="#0a2559" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        {/* Alias grad-orange to the Dark Blue & Blue theme for seamless compatibility */}
        <linearGradient id="grad-orange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="40%" stopColor="#0a2559" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        {/* Metallic Blue-Silver gradient for contrast */}
        <linearGradient id="grad-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="50%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#0a1936" />
        </linearGradient>

        {/* Bright electric blue gradient */}
        <linearGradient id="grad-blue-vibrant" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Deep navy dark blue gradient */}
        <linearGradient id="grad-darkblue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="100%" stopColor="#0d244d" />
        </linearGradient>
      </defs>
    </svg>
  )
}
