import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import GemShape from '../common/GemShape'
import ProductArt from '../common/ProductArt'
import { coreServices } from '../../data/services'

const artClass = 'size-[150px] transition-transform duration-500 group-hover:scale-108 group-hover:-rotate-4'

export default function CoreServices() {
  return (
    <Section id="core-services">
      <SectionHeading
        title="Core services"
        text="From a first print to a finished product, three ways to work with us."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {coreServices.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.1} className="h-full">
            <Card className="group flex h-full flex-col gap-3.5 p-7">
              <div className="flex justify-center">
  <img
    src={service.image}
    alt={service.title}
    className="h-[150px] w-full object-contain transition-transform duration-500 group-hover:scale-110"
  />
</div>

              <h3>{service.title}</h3>

              <ul className="grid gap-1.5 text-[0.95rem] text-muted">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <span className="size-1.5 shrink-0 rounded-full bg-brand" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-2">
                <Button to="/services">Explore service</Button>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
