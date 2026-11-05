import Container from '../components/common/Container'
import PageHeader from '../components/common/PageHeader'
import Section from '../components/common/Section'
import CallToAction from '../components/common/CallToAction'
import Button from '../components/common/Button'
import PrintingInfo from '../components/services/PrintingInfo'
import LayerResolution from '../components/services/LayerResolution'
import ServiceFeatures from '../components/services/ServiceFeatures'
import useModal from '../hooks/useModal'
import usePageTitle from '../hooks/usePageTitle'

export default function Services() {
  usePageTitle('Services')
  const { openQuote } = useModal()

  return (
    <>
      <Container>
        <PageHeader
          title="Printing, modeling and made-to-order manufacturing"
          text="Bring a sketch, a file or just an idea. We design it, print it and finish it."
        >
          <Button variant="primary" onClick={() => openQuote()}>
            Book a project consultation
          </Button>
        </PageHeader>

        <PrintingInfo />
      </Container>

      <LayerResolution />
      <ServiceFeatures />

      <Section className="pb-14 md:pb-24 lg:pb-28">
        <CallToAction
          title="Not sure where to start?"
          text="Share your idea and we’ll recommend the right process, material and finish."
        >
          <Button variant="primary" onClick={() => openQuote()}>
            Start Your Project
          </Button>
        </CallToAction>
      </Section>
    </>
  )
}
