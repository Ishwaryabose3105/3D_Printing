import { motion } from 'framer-motion'
import Reveal from './Reveal'
import GemShape from './GemShape'

export default function CallToAction({ title, text, showShape = false, children }) {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-[32px] border border-blue-500/25 bg-gradient-to-b from-[#081530] via-[#050e20] to-[#020617] px-6 py-14 text-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] sm:py-20 lg:py-28">
        {showShape && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-[520px] max-w-[90%] opacity-15"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <GemShape wire className="w-full" />
            </motion.div>
          </div>
        )}

        <div className="relative">
          <h2>{title}</h2>
          <p className="mx-auto mt-3.5 mb-7 max-w-[480px]">{text}</p>
          <div className="flex flex-wrap justify-center gap-3">{children}</div>
        </div>
      </div>
    </Reveal>
  )
}
