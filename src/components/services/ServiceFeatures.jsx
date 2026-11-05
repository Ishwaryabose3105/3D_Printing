import Section from '../common/Section'
import Card from '../common/Card'
import Reveal from '../common/Reveal'
import { serviceFeatures } from '../../data/services'

export default function ServiceFeatures() {
  return (
    <Section className="pb-14 md:pb-24 lg:pb-28">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {serviceFeatures.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Reveal key={feature.title} delay={(index % 3) * 0.08} className="h-full">
              <Card className="h-full p-6.5">
                <Icon size={30} strokeWidth={1.6} className="text-brand" />
                <h3 className="mt-3.5 mb-1.5">{feature.title}</h3>
                <p>{feature.text}</p>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
