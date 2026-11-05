import Container from './Container'

// className replaces the default vertical padding, e.g. "pb-14 md:pb-24" for no top padding
export default function Section({ id, className = 'py-14 md:py-24 lg:py-28', children }) {
  return (
    <section id={id} className={className}>
      <Container>{children}</Container>
    </section>
  )
}
