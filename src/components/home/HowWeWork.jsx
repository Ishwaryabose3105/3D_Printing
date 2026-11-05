import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import { processSteps } from '../../data/homeContent'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// line position: vertical on the left for mobile, horizontal through the numbers on desktop
const lineClass =
  'absolute top-0 bottom-0 left-[21px] w-0.5 lg:top-[21px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-0.5 lg:w-auto'

export default function HowWeWork() {
  const stepsRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions
          if (reduceMotion) return // line just stays full

          // the blue line fills up while you scroll through the steps
          const lineStart = isDesktop ? { scaleX: 0 } : { scaleY: 0 }
          gsap.from('.process-line', {
            ...lineStart,
            ease: 'none',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 75%',
              end: isDesktop ? 'top 35%' : 'bottom 60%',
              scrub: 0.6,
            },
          })

          gsap.from('.process-step', {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: { trigger: stepsRef.current, start: 'top 75%' },
          })
        },
      )
    },
    { scope: stepsRef },
  )

  return (
    <Section id="process">
      <SectionHeading title="How we work" />

      <div ref={stepsRef} className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
        <div className={`${lineClass} bg-line`} />
        <div
          className={`process-line ${lineClass} origin-top bg-gradient-to-b from-black via-[#0a2559] to-[#2563eb] lg:origin-left lg:bg-gradient-to-r`}
        />

        {processSteps.map((step, index) => (
          <div key={step.title} className="process-step relative pl-16 lg:pl-0">
            <span className="absolute top-0 left-0 z-10 grid size-11 place-items-center rounded-full border-2 border-blue-500 bg-[#071329] text-white font-display font-semibold shadow-[0_0_15px_rgba(37,99,235,0.35)] lg:relative lg:mb-4">
              {index + 1}
            </span>
            <h3 className="mb-1.5 pt-2.5 lg:pt-0">{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
