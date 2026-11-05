const BLUE = 'url(#grad-blue)'
const SILVER = 'url(#grad-silver)'
const DARK_BLUE = 'url(#grad-darkblue)'

// six faces of the hexagon "gem" in Dark Blue, Blue and Black
const faces = [
  { points: '100,14 172,56 100,100', fill: BLUE, opacity: 1 },
  { points: '172,56 172,144 100,100', fill: BLUE, opacity: 0.75 },
  { points: '172,144 100,186 100,100', fill: DARK_BLUE, opacity: 0.9 },
  { points: '100,186 28,144 100,100', fill: BLUE, opacity: 0.5 },
  { points: '28,144 28,56 100,100', fill: SILVER, opacity: 0.75 },
  { points: '28,56 100,14 100,100', fill: DARK_BLUE, opacity: 0.6 },
]

// wire = outline only
export default function GemShape({ wire = false, className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {faces.map((face) => (
        <polygon
          key={face.points}
          points={face.points}
          opacity={face.opacity}
          fill={wire ? 'none' : face.fill}
          stroke={wire ? '#3b82f6' : undefined}
          strokeWidth={wire ? 1.6 : undefined}
        />
      ))}
      <path
        d="M100 14l72 42v88l-72 42-72-42V56zM100 100V14M100 100l72-44M100 100l72 44M100 100v86M100 100l-72 44M100 100L28 56"
        fill="none"
        stroke="#60a5fa"
        strokeOpacity=".35"
      />
    </svg>
  )
}
