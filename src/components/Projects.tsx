import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const projects = [
  {
    title: 'PCS',
    description: 'Application web full-stack sur le padel avec Symfony PHP, Tailwind CSS. Authentification, Dashboard',
    tags: ['Symfony', 'Twig', 'JavaScript Natif' ,'Tailwind CSS', 'PostgreSQL', 'Docker'],
    images: ['/PCS1.png', '/PCS2.png', '/PCS3.png', '/PCS4.png', '/PCS5.png', '/PCS6.png'],
    github: null,
    demo: 'https://padelclubstats.fr/',
  },
  {
    title: 'Portfolio',
    description: 'Mon portfolio professionnel.',
    tags: ['React', 'Tailwind CSS', 'Motion', 'TypeScript'],
    images: ['/Portfolio1.png', '/Portfolio2.png', '/Portfolio3.png', '/Portfolio4.png', '/Portfolio5.png'],
    github: '#',
    demo: null,
  },
  {
    title: 'Pokedex',
    description: "Pokedex avec statistiques de la célèbre licence Pokémon avec sprite animé et système de combat.",
    tags: ['Symfony', 'Twig', 'CSS Natif'],
    images: ['/pokemon1.png', '/pokemon2.png', '/pokemon3.png'],
    github: 'https://github.com/MathisCordon/Pokedex',
    demo: null,
  },
]

function ProjectCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative rounded-xl overflow-hidden bg-black/5 aspect-video">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Aperçu ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {/* Indicateurs */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === index ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-xs font-bold tracking-widest text-black/40 uppercase mb-3 text-center">
            Réalisations
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 text-center">
            Projets
          </h2>
          <p className="text-black/50 text-center mb-16 max-w-xl mx-auto">
            Quelques projets représentatifs de mon travail.
          </p>
        </motion.div>

        {/* Cards — stagger */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map(({ title, description, tags, images, github, demo }) => (
            <motion.div
              key={title}
              className="bg-[#ebebeb] rounded-2xl p-6 flex flex-col gap-4"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {images.length > 0 ? (
                <ProjectCarousel images={images} />
              ) : (
                <div className="bg-black/5 rounded-xl h-40 flex items-center justify-center text-black/30 text-sm font-medium">
                  Aperçu
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-black font-black text-lg mb-2">{title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-black text-white px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs font-bold py-2.5 border border-black text-black hover:bg-black hover:text-white rounded-lg transition-colors tracking-wider"
                  >
                    GITHUB
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs font-bold py-2.5 border border-transparent bg-black text-white hover:bg-white hover:text-black hover:border-black rounded-lg transition-colors tracking-wider"
                  >
                    DEMO
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
