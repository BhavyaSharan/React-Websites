import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import tabletImg from '../../assets/gadget_tablet.png'
import watchImg from '../../assets/gadget_watch.png'
import laptopImg from '../../assets/gadget_laptop.png'

const gadgets = [
  {
    id: 1,
    name: 'Tablet Ultra Pro',
    tagline: 'The definitive workstation.',
    desc: 'The definitive review of the thinnest workstation ever made. Unprecedented power in a featherweight shell.',
    rating: 4.8,
    reviews: 2140,
    image: tabletImg,
    badge: 'Editor\'s Pick',
    badgeColor: 'amber',
  },
  {
    id: 2,
    name: 'Chrono Smart X',
    tagline: 'Health meets horology.',
    desc: 'Health tracking meets high-end horology. Does it deliver? We put 30 days on the wrist.',
    rating: 4.5,
    reviews: 1830,
    image: watchImg,
    badge: 'Top Rated',
    badgeColor: 'cyan',
  },
  {
    id: 3,
    name: 'ZenBook Alpha',
    tagline: 'Beauty for creators.',
    desc: 'A beauty for creators, but what about the thermals? Full stress-test after 90 days of daily use.',
    rating: 4.3,
    reviews: 980,
    image: laptopImg,
    badge: 'New Review',
    badgeColor: 'purple',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3.5 h-3.5 ${star <= Math.floor(rating) ? 'text-amber-400' : star <= rating ? 'text-amber-400/60' : 'text-white/20'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-amber-400 text-sm font-semibold">{rating}</span>
    </div>
  )
}

const badgeColors = {
  amber: 'bg-amber-500/20 border-amber-500/30 text-amber-400',
  cyan: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400',
  purple: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
}

export default function GadgetShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="reviews" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Gadget Showcase</p>
          <h2 className="section-title">Expert Verdict on the Most<br />Anticipated Releases.</h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {gadgets.map((gadget, idx) => (
            <motion.div
              key={gadget.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 60px rgba(245, 158, 11, 0.15), 0 0 0 1px rgba(245, 158, 11, 0.2)',
                transition: { duration: 0.3 }
              }}
              className="group glass-card overflow-hidden cursor-pointer"
            >
              {/* Product image */}
              <div className="relative overflow-hidden bg-gradient-to-b from-white/3 to-black/20 p-6 pt-8">
                <div className={`absolute top-4 left-4 text-xs px-2.5 py-1 rounded-full border font-medium tracking-wide ${badgeColors[gadget.badgeColor]}`}>
                  {gadget.badge}
                </div>
                <img
                  src={gadget.image}
                  alt={gadget.name}
                  loading="lazy"
                  className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 border-t border-white/5">
                <StarRating rating={gadget.rating} />
                <p className="text-white/30 text-xs mt-1 mb-3">{gadget.reviews.toLocaleString()} reviews</p>
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-amber-400 transition-colors duration-300">
                  {gadget.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{gadget.desc}</p>
                <motion.a
                  href="#"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors duration-300"
                >
                  Read Full Review
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
