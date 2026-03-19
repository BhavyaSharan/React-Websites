import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '23M+', label: 'YouTube Subscribers', highlight: true },
  { value: '5K+', label: 'Video Uploads', highlight: false },
  { value: '3.5B+', label: 'Total Views', highlight: false },
  { value: 'Ajmer', label: 'Place of Origin', highlight: false },
]

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stats" ref={ref} className="relative py-12 overflow-hidden">
      {/* Glass bar */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glass-card p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * idx, ease: 'easeOut' }}
                className={`flex flex-col items-center text-center gap-1 ${idx !== stats.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
              >
                <span className={`text-3xl md:text-4xl font-black ${stat.highlight ? 'text-gradient-gold' : 'text-white'}`}>
                  {stat.value}
                </span>
                <span className="text-white/50 text-sm font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
