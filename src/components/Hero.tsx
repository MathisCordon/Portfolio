import { motion } from 'motion/react'

const MARQUEE_REPEAT = 'MATHIS CORDON\u00A0\u00A0\u00A0\u00A0'
const MARQUEE_REPEAT2 = 'DÉVELOPPEUR WEB\u00A0\u00A0\u00A0\u00A0'
const repeat = (str: string, n: number) => str.repeat(n)

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#ebebeb] overflow-hidden">

      <div className="absolute left-[20%] top-[30%] w-150 h-150 pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-black/10" />
        <div className="absolute inset-0" style={{ animation: 'orbit 8s linear infinite' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black/25" />
        </div>
      </div>

      <div className="absolute right-[20%] bottom-[20%] w-40 h-40 pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-black/10" />
        <div className="absolute inset-0" style={{ animation: 'orbit-reverse 5s linear infinite' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/25" />
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center z-0 pointer-events-none select-none">

        <div className="overflow-hidden w-full">
          <div
            className="font-black leading-none tracking-tighter text-black"
            style={{
              fontSize: 'clamp(60px, 15vw, 280px)',
              display: 'flex',
              width: 'max-content',
              willChange: 'transform',
              animation: 'marquee-ltr 24s linear infinite',
            }}
          >
            <span>{repeat(MARQUEE_REPEAT, 6)}</span>
            <span>{repeat(MARQUEE_REPEAT, 6)}</span>
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <div
            className="font-black leading-none tracking-tighter text-black"
            style={{
              fontSize: 'clamp(60px, 15vw, 280px)',
              display: 'flex',
              width: 'max-content',
              willChange: 'transform',
              animation: 'marquee-rtl 28s linear infinite',
            }}
          >
            <span>{repeat(MARQUEE_REPEAT2, 6)}</span>
            <span>{repeat(MARQUEE_REPEAT2, 6)}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <img
            src="/avatar.png"
            alt="Photo de profil"
            style={{ height: '90vh' }}
            className="w-auto object-contain object-bottom"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 right-6 md:bottom-8 md:right-10 z-20 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs font-semibold tracking-widest text-black">Scroll down</span>
        <span className="text-lg">↓</span>
      </motion.div>
    </section>
  )
}
