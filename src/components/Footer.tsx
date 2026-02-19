import { motion } from 'motion/react'

const socials = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-black">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-white/40 text-xs font-medium tracking-wider">
          © {new Date().getFullYear()} MATHIS CORDON. TOUS DROITS RÉSERVÉS.
        </p>
        <div className="flex gap-8">
          {socials.map(({ label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              className="text-white/40 hover:text-white text-xs font-bold tracking-widest transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  )
}
