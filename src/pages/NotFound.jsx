import Container from '../components/common/Container'
import Button from '../components/common/Button'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <Container className="grid min-h-[60svh] content-center justify-items-start gap-4 py-20">
      <span className="font-display font-semibold text-brand">404</span>
      <h1 className="text-5xl">Page not found</h1>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <Button to="/" variant="primary" className="mt-2">
        Back to home
      </Button>
    </Container>
  )
}
