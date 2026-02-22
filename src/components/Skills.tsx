import { motion } from 'motion/react'

const skills = [
  { category: 'Frontend', items: ['JavaScript', 'Tailwind CSS', 'Twig', 'React'] },
  { category: 'Backend', items: ['Symfony PHP', 'PostgreSQL', 'REST API'] },
  { category: 'DevOps', items: ['Docker', 'Git', 'CI/CD'] },
  { category: 'Outils', items: ['VS Code', 'Figma', 'Postman', 'JetBrains'] },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay },
  viewport: { once: true, amount: 0.2 },
})

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center py-24 px-6 bg-[#ebebeb]">
      <div className="max-w-6xl mx-auto w-full py-16">

        <div className="mb-16">
          <motion.p
            className="text-xs font-bold tracking-widest text-black/40 uppercase mb-3 text-center"
            {...fadeUp(0)}
          >
            Stack
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-black mb-4 text-center"
            {...fadeUp(0.1)}
          >
            Compétences
          </motion.h2>
          <motion.p
            className="text-black/50 text-center max-w-xl mx-auto"
            {...fadeUp(0.2)}
          >
            Les technologies que j'utilise au quotidien.
          </motion.p>
        </div>

        {/* Cards — stagger */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skills.map(({ category, items }) => (
            <motion.div
              key={category}
              className="bg-white rounded-2xl p-6 cursor-default"
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 className="font-black text-sm tracking-widest uppercase mb-5 text-black">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="text-black/70 font-medium flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-14"
          {...fadeUp(0.4)}
        >
          <motion.a
            href="/CV-Mathis-CORDON.pdf"
            download="CV Mathis CORDON - Alternance CDA.pdf"
            className="flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-xl tracking-widest text-sm hover:bg-black/80 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
            </svg>
            TÉLÉCHARGER MON CV
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
