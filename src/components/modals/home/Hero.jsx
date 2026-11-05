import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

import Container from '../common/Container'
import Button from '../common/Button'
import GemShape from '../common/GemShape'
import useModal from '../../hooks/useModal'

// heading, text and buttons come in one after another
const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const textItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] } },
}

export default function Hero() {
  const { openQuote } = useModal()

  // pointer position inside the stage, from -0.5 to 0.5
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const spring = { stiffness: 120, damping: 14 }
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-13, 13]), spring)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [13, -13]), spring)

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handlePointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <Container className="grid min-h-[calc(100svh-68px)] items-center gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div variants={textContainer} initial="hidden" animate="show">
        <motion.h1 variants={textItem}>
          Ideas Engineered.
          <br />
          <span className="bg-gradient-to-r from-ink via-blue-400 via-60% to-blue-200 bg-clip-text text-transparent">
            Creations Brought to Life.
          </span>
        </motion.h1>

        <motion.p variants={textItem} className="mt-5 mb-8 max-w-[460px] text-lg">
          Shine Craft Technologies turns concepts into precise, finished objects: rapid prototypes,
          architectural models and personalized products made for you.
        </motion.p>

        <motion.div variants={textItem} className="flex flex-wrap gap-3">
          <Button to="/services" variant="primary">
            Explore Our Services
          </Button>
          <Button onClick={() => openQuote()}>Start Your Project</Button>
        </motion.div>
      </motion.div>

      {/* 3D stage: the gem tilts towards the pointer */}
      <div
        className="relative grid min-h-[340px] place-items-center perspective-[900px]"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            className="aspect-square w-[min(520px,90%)] rounded-full bg-[conic-gradient(#020617,#0a2559,#2563eb,transparent_40%,#1d4ed8_65%,transparent)] opacity-50 blur-[80px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative">
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GemShape className="block w-[min(420px,78vw)] drop-shadow-[0_40px_40px_rgba(0,0,0,0.35)]" />
          </motion.div>
        </motion.div>
      </div>
    </Container>
  )
}
