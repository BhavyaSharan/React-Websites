import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroPhone from '../../assets/hero_phone.png'

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.2 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial-gold-right pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 z-10"
          >
            {/* Label */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-400" />
              <span className="section-label">Empowering the Digital Generation</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeLeft}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
            >
              Tech Made{' '}
              <span className="text-gradient-gold block">Simple</span>
              <span className="text-white">In Hindi.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-white/60 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Transforming complex innovation into everyday wisdom. Join millions in the journey of technical mastery.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
              <motion.a
                href="#videos"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(245,158,11,0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-gold text-base px-8 py-4"
              >
                Start Your Journey
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#reviews"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-outline text-base px-8 py-4"
              >
                Popular Products
              </motion.a>
            </motion.div>

            {/* Social proof row */}
            <motion.div variants={fadeUp} className="flex items-center gap-6 mt-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-2xl font-bold text-amber-400">23M+</span>
                <p className="text-white/50 text-xs">Subscribers</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="text-2xl font-bold text-white">3.5B+</span>
                <p className="text-white/50 text-xs">Total Views</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="text-2xl font-bold text-white">5K+</span>
                <p className="text-white/50 text-xs">Videos</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Phone Mockup with parallax */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            style={{ y }}
            className="relative flex justify-center lg:justify-end z-10"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-radial-gold pointer-events-none scale-150" />
            <motion.img
              src={heroPhone}
              alt="Technical Guruji App"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg object-contain drop-shadow-[0_0_60px_rgba(245,158,11,0.35)] rounded-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-amber-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
