import Hero from '../components/home/Hero'
import Capabilities from '../components/home/Capabilities'
import CoreServices from '../components/home/CoreServices'
import FeaturedProducts from '../components/home/FeaturedProducts'
import FeaturedProjects from '../components/home/FeaturedProjects'
import HowWeWork from '../components/home/HowWeWork'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Section from '../components/common/Section'
import CallToAction from '../components/common/CallToAction'
import Button from '../components/common/Button'
import useModal from '../hooks/useModal'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle()
  const { openQuote } = useModal()

  return (
    <>
      <Hero />
      <Capabilities />
      <CoreServices />
      <FeaturedProducts />
      <FeaturedProjects />
      <HowWeWork />
      <WhyChooseUs />

      <Section>
        <CallToAction
          showShape
          title="Have an idea? Let’s make it real."
          text="Bring your concepts to life with customized 3D design and printing solutions."
        >
          <Button variant="primary" onClick={() => openQuote()}>
            Start Your Project
          </Button>
          <Button to="/#contact">Contact Our Team</Button>
        </CallToAction>
      </Section>
    </>
  )
}
