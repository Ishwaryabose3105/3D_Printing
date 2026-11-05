import { motion } from 'framer-motion'

// Big title block at the top of inner pages (Services, Products)
export default function PageHeader({ title, text, children }) {
  return (
    <motion.div
      className="max-w-[760px] pt-12 pb-10 md:pt-20 lg:pt-24"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <h1 className="text-[clamp(2.4rem,5.5vw,4.2rem)]">{title}</h1>
      <p className="mt-4 mb-6 text-lg">{text}</p>
      {children}
    </motion.div>
  )
}
