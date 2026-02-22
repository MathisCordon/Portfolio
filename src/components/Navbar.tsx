import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
  { href: '#about', label: 'À PROPOS' },
  { href: '#skills', label: 'COMPÉTENCES' },
  { href: '#projects', label: 'PROJETS' },
  { href: '#contact', label: 'CONTACT' },
]

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.45)',
  backdropFilter: 'blur(28px) saturate(200%) brightness(1.05)',
  WebkitBackdropFilter: 'blur(28px) saturate(200%) brightness(1.05)',
  boxShadow: `
    0 4px 24px rgba(0, 0, 0, 0.06),
    0 1px 3px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.95),
    inset 0 -1px 0 rgba(0, 0, 0, 0.04)
  `,
}

export default function Navbar() {
  // open=false → desktop nav visible, mobile menu closed
  // open=true  → desktop nav hidden, mobile menu open
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ── Desktop navbar ── */}
      <AnimatePresence initial={false}>
        {!open && (
          <motion.header
            className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 hidden md:block"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <nav
              className="max-w-6xl mx-auto rounded-2xl px-6 pr-20 h-16 flex items-center justify-between"
              style={glassStyle}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 shrink-0">
                  <img src="/logo1.svg" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-medium tracking-wide">
                  PORTFOLIO <strong>MATHIS CORDON</strong>
                </span>
              </div>

              <ul className="flex items-center">
                {links.map(({ href, label }, i) => (
                  <li key={href} className="flex items-center">
                    <motion.a
                      href={href}
                      className="relative text-black/60 text-xs font-semibold tracking-wider px-3 py-1 flex flex-col overflow-hidden cursor-pointer"
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                    >
                      <motion.span
                        variants={{
                          rest: { color: 'rgba(0,0,0,0.6)' },
                          hover: { color: 'rgba(0,0,0,1)' },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {label}
                      </motion.span>
                      <motion.span
                        className="absolute bottom-0 left-3 right-3 h-px bg-black origin-left pointer-events-none"
                        variants={{
                          rest: { scaleX: 0 },
                          hover: { scaleX: 1 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    </motion.a>
                    {i < links.length - 1 && (
                      <span className="text-black/25 text-sm">/</span>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="border border-black text-black text-xs font-bold tracking-widest px-5 py-2 rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                PARLONS !
              </a>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ── Mobile top bar (always visible on mobile) ── */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:hidden">
        <nav
          className="rounded-2xl px-5 pr-16 h-14 flex items-center justify-between"
          style={glassStyle}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 shrink-0">
              <img src="/logo1.svg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xs font-bold tracking-wide">MATHIS CORDON</span>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold tracking-widest text-black/60 hover:text-black transition-colors"
          >
            PARLONS !
          </a>
        </nav>
      </div>

      {/* ── Mobile overlay menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-2 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(({ href, label }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-2xl font-black tracking-widest text-black px-8 py-4 hover:text-black/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                {label}
              </motion.a>
            ))}

            <motion.div
              className="absolute bottom-12 flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <a
                href="mailto:mathis.cordon@outlook.com"
                className="text-xs font-semibold text-black/30 tracking-widest"
              >
                mathis.cordon@outlook.com
              </a>
              <div className="flex gap-8">
                <a href="https://github.com/MathisCordon" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-black/40 tracking-widest hover:text-black transition-colors">
                  GITHUB
                </a>
                <a href="https://www.linkedin.com/in/mathiscordon/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-black/40 tracking-widest hover:text-black transition-colors">
                  LINKEDIN
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Burger button ── */}
      <motion.button
        onClick={() => setOpen(v => !v)}
        className="fixed z-50 w-12 h-12 rounded-2xl flex flex-col items-center justify-center gap-1.5 cursor-pointer"
        style={{ top: '1.25rem', right: '1.5rem', ...glassStyle }}
        aria-label="Toggle navigation"
      >
        <motion.span
          className="block w-5 h-0.5 bg-black rounded-full origin-center"
          animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-5 h-0.5 bg-black rounded-full"
          animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block w-5 h-0.5 bg-black rounded-full origin-center"
          animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </>
  )
}
