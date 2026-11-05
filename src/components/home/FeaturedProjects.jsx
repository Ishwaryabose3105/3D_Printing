import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import ProductArt from '../common/ProductArt'
import { projects } from '../../data/homeContent'

// grid spans for the mosaic (2 columns on mobile, 4 on desktop)
const tileSizes = {
  large: 'col-span-2 row-span-2',
  tall: 'row-span-2',
  wide: 'col-span-4 md:col-span-4',
}

export default function FeaturedProjects() {
  return (
    <Section id="work">
      <SectionHeading title="Featured projects" text="Designs, models and prototypes from our studio." />

      <div className="grid grid-flow-dense auto-rows-[170px] grid-cols-2 gap-4 md:auto-rows-[210px] md:grid-cols-4">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06} className={tileSizes[project.size] || ''}>
            <div className="group relative grid h-full place-items-center overflow-hidden rounded-[22px] border border-line bg-gradient-to-br from-surface via-[#07132a] to-card shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)]">
              <img src={project.image} alt={project.title}
  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
/>

              {/* title slides up on hover, always visible on touch screens */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-linear-to-b from-transparent to-black/70 p-4.5 font-medium text-white transition-transform duration-300 group-hover:translate-y-0 [@media(hover:none)]:translate-y-0">
                {project.title}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
