import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import founderImg from '../../assets/founder.jpg'

const journey = [
  {
    title: 'Ajmer Beginnings',
    desc: 'Born in the cultural heart of Rajasthan, with an insatiable curiosity for how things work and a dream to make them accessible to all.',
    year: '1991',
  },
  {
    title: 'Dubai & Engineering',
    desc: 'Moving to the global hub of Dubai, mastering the language of engineering, hardware, and cutting-edge technology.',
    year: '2012',
  },
  {
    title: 'Digital Mastery',
    desc: 'Establishing Technical Guruji as the world\'s most subscribed Hindi tech channel, reaching 23 million hearts.',
    year: '2024',
  },
]

export default function FounderSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Portrait — Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            {/* Glow behind portrait */}
            <div className="absolute -inset-8 bg-radial-gold pointer-events-none scale-110" />
            {/* Decorative ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-500/30 via-transparent to-transparent p-px">
              <div className="w-full h-full rounded-3xl bg-black" />
            </div>
            <img
              src={founderImg}
              alt="Gaurav Chaudhary - Technical Guruji"
              className="relative rounded-3xl w-full object-cover grayscale contrast-110 max-h-[600px]"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 glass-card p-4">
              <p className="text-amber-400 font-bold text-lg">Gaurav Chaudhary</p>
              <p className="text-white/60 text-sm">The Digital Alchemist</p>
            </div>
          </motion.div>

          {/* Journey — Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Header */}
            <div>
              <p className="section-label mb-3">The Alchemist's Path</p>
              <h2 className="section-title">Turning Passion<br />Into Purpose.</h2>
              <p className="text-white/50 text-base leading-relaxed mt-4 max-w-lg">
                Bridging the gap between technology and people — one video, one review, one moment of clarity at a time.
              </p>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              {journey.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {/* Timeline line */}
                  {idx !== journey.length - 1 && (
                    <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-amber-500/50 to-transparent" />
                  )}
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-amber-500 bg-black flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-amber-400/60 text-sm font-mono whitespace-nowrap mt-0.5">{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Partners note */}
            <div className="glass-card p-5">
              <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-1">Strategic Global Partners</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Collaborating with world's leading tech brands to bring honest, in-depth reviews to over 23 million subscribers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
