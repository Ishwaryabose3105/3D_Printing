import Reveal from './Reveal'

export default function SectionHeading({ title, text, className = '' }) {
  return (
    <Reveal className={`mb-10 max-w-[640px] ${className}`}>
      <h2>{title}</h2>
      {text && <p className="mt-3">{text}</p>}
    </Reveal>
  )
}
