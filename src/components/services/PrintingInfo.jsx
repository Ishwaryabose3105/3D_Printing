import Card from '../common/Card'
import Reveal from '../common/Reveal'
import { printingInfo } from '../../data/services'

export default function PrintingInfo() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {printingInfo.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.1} className="h-full">
          <Card className="h-full p-6.5">
            <h3 className="mb-1.5">{item.title}</h3>
            <p>{item.text}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
