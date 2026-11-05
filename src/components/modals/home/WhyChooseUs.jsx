import { motion } from 'framer-motion'

import Section from '../common/Section'
import Card from '../common/Card'
import Reveal from '../common/Reveal'
import GemShape from '../common/GemShape'
import { whyChooseUs } from '../../data/homeContent'

export default function WhyChooseUs() {
  return (
    <Section id="about">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal className="mx-auto w-full max-w-[520px]">
          <Card className="grid aspect-square place-items-center bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand)_20%,var(--card)),var(--card)_70%)] p-10">
            <motion.div
              className="w-[70%]"
              animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <GemShape className="w-full" />
            </motion.div>
          </Card>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="mb-7">Why choose Shine Craft</h2>
          </Reveal>

          <ul className="grid gap-5.5">
            {whyChooseUs.map((item, index) => (
              <motion.li
                key={item.title}
                className="border-l-2 border-brand pl-5.5"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
