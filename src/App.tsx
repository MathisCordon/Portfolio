import { motion } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const slideIn = (direction: 'left' | 'right') => ({
  initial: { opacity: 0, x: direction === 'left' ? -80 : 80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, amount: 0.1 },
})

export default function App() {
  return (
    <div className="bg-[#ebebeb] text-black overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navbar />
      <Hero />
      <motion.div {...slideIn('left')}>  <About />    </motion.div>
      <motion.div {...slideIn('right')}><Skills />   </motion.div>
      <motion.div {...slideIn('left')}>  <Projects /></motion.div>
      <motion.div {...slideIn('right')}><Contact />  </motion.div>
      <motion.div {...slideIn('left')}>  <Footer />   </motion.div>
    </div>
  )
}
