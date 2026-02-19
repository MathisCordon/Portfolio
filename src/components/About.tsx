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

export default function About() {
  const typewriter = useTypewriter()

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image — entre depuis la gauche */}
        <motion.div
          className="max-w-sm mx-auto w-full"
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

        {/* Texte — entre depuis la droite */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-xs font-bold tracking-widest text-black/40 uppercase mb-3">
            À propos
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
            {typewriter}
            <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
          </h2>
          <p className="text-black/60 text-base mb-4 leading-relaxed">
            Développeur web en reconversion, je suis rigoureux et passionné par la création d'application moderne et performante.
          </p>
          <p className="text-black/60 text-base mb-10 leading-relaxed">
            J'aime concevoir des interfaces intuitives et des architectures scalables.
          </p>

          {/* Stats — stagger Motion */}
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
                className="border border-black/10 rounded-xl p-4"
                variants={statItem}
              >
                <p className="text-black/40 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
                <p className="text-black font-bold text-lg">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
