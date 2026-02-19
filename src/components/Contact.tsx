import { motion } from 'motion/react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#ebebeb]">
      <div className="max-w-2xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-xs font-bold tracking-widest text-black/40 uppercase mb-3">
            Travaillons ensemble
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Contact
          </h2>
          <p className="text-black/50 mb-12">
            Un besoin en recrutement ? Discutons-en.
          </p>
        </motion.div>

        <motion.a
          href="mailto:mathis.cordon@outlook.com"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 bg-black text-white font-bold rounded-xl tracking-widest text-sm hover:bg-black/80 transition-colors"
        >
          ENVOYER UN MAIL
        </motion.a>

        <motion.p
          className="mt-6 text-black/40 text-xs tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          mathis.cordon@outlook.com
        </motion.p>

      </div>
    </section>
  )
}
