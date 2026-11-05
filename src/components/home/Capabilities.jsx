import Container from '../common/Container'
import Card from '../common/Card'
import Reveal from '../common/Reveal'
import { capabilities } from '../../data/homeContent'

export default function Capabilities() {
  return (
    <Container className="pb-14 md:pb-24">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
              <Card className="h-full p-6.5">
                <Icon size={34} strokeWidth={1.6} className="text-brand" />
                <h3 className="mt-3.5 mb-1.5">{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Container>
  )
}
