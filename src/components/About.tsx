import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const TYPEWRITER_TEXT = 'Développeur Web'

function useTypewriter() {
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < TYPEWRITER_TEXT.length) {
      timeout = setTimeout(() => setDisplayed(TYPEWRITER_TEXT.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === TYPEWRITER_TEXT.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(TYPEWRITER_TEXT.slice(0, displayed.length - 1)), 45)
    } else {
      timeout = setTimeout(() => setIsDeleting(false), 500)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting])

  return displayed
}

const stats = [
  { label: 'Expérience', value: '1 an' },
  { label: 'Projets', value: '3' },
  { label: 'Localisation', value: 'Rennes, France' },
  { label: 'Disponibilité', value: 'Tout de suite' },
]

const statsVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
}

const statItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay },
  viewport: { once: true, amount: 0.2 },
})

export default function About() {
  const typewriter = useTypewriter()

  return (
    <section id="about" className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-center">

        <motion.div
          className="w-full max-w-xs mx-auto md:max-w-none md:mx-0"
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/logoMC.svg"
            alt="Logo"
            className="rounded-2xl w-full aspect-square object-cover"
          />
        </motion.div>

        <div>
          <motion.p
            className="text-xs font-bold tracking-widest text-black/40 uppercase mb-3"
            {...fadeUp(0)}
          >
            À propos
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight"
            {...fadeUp(0.1)}
          >
            {typewriter}
            <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
          </motion.h2>

          <motion.p
            className="text-black/60 text-base mb-4 leading-relaxed"
            {...fadeUp(0.2)}
          >
            Développeur web en reconversion, je suis rigoureux et passionné par la création d'application moderne et performante.
          </motion.p>

          <motion.p
            className="text-black/60 text-base mb-10 leading-relaxed"
            {...fadeUp(0.3)}
          >
            J'aime concevoir des interfaces intuitives et des architectures scalables.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={statsVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map(({ label, value }) => (
              <motion.div
                key={label}
                className="border border-black/10 rounded-xl p-4 cursor-default"
                variants={statItem}
                whileHover={{ scale: 1.04, borderColor: 'rgba(0,0,0,0.3)', backgroundColor: 'rgba(0,0,0,0.03)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <p className="text-black/40 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
                <p className="text-black font-bold text-lg">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
