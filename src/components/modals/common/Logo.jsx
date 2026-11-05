import { Link } from 'react-router-dom'

export default function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink"
    >
      <svg width="44" height="44" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M14 2l11 6.5v11L14 26 3 19.5v-11z" fill="url(#grad-blue)" />
        <path d="M14 2v24M3 8.5l22 11" stroke="#020617" strokeOpacity=".55" strokeWidth="1.2" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-cyan-600 dark:text-black tracking-tight">
          Shine Craft
        </span>
        <span className="font-semibold text-blue-600 dark:text-blue-400 tracking-wider text-[10px]">
          3D PRINTING SERVICE
        </span>
      </div>
    </Link>
  )
}
