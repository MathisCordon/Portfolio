import { motion } from 'motion/react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as number[], delay },
  viewport: { once: true, amount: 0.2 },
})

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-24 px-6 bg-[#ebebeb]">
      <div className="max-w-2xl mx-auto w-full text-center">

        <motion.p
          className="text-xs font-bold tracking-widest text-black/40 uppercase mb-3"
          {...fadeUp(0)}
        >
          Travaillons ensemble
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-black text-black mb-4"
          {...fadeUp(0.1)}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-black/50 mb-12"
          {...fadeUp(0.2)}
        >
          Un besoin en recrutement ? Discutons-en.
        </motion.p>

        <motion.a
          href="mailto:mathis.cordon@outlook.com"
          {...fadeUp(0.3)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 bg-black text-white font-bold rounded-xl tracking-widest text-sm hover:bg-black/80 transition-colors"
        >
          ENVOYER UN MAIL
        </motion.a>

      </div>
    </section>
  )
}
