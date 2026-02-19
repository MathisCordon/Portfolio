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
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#ebebeb]">
      <div className="max-w-6xl mx-auto">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-xs font-bold tracking-widest text-black/40 uppercase mb-3 text-center">
            Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 text-center">
            Compétences
          </h2>
          <p className="text-black/50 text-center mb-16 max-w-xl mx-auto">
            Les technologies que j'utilise au quotidien.
          </p>
        </motion.div>

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
              className="bg-white rounded-2xl p-6"
              variants={cardVariants}
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

      </div>
    </section>
  )
}
