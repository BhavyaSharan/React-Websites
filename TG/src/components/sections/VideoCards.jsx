import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import thumb1 from '../../assets/video_thumb1.png'
import thumb2 from '../../assets/video_thumb2.png'

const videos = [
  {
    id: 1,
    title: 'The Future of Mobile Intelligence: AI in Your Pocket',
    desc: 'Exploring how on-device AI is reshaping the smartphone experience and what it means for daily life.',
    thumb: thumb1,
    duration: '18:42',
    category: 'Artificial Intelligence',
    views: '4.2M views',
  },
  {
    id: 2,
    title: 'Beyond Audio: Pro Sound Reimagined',
    desc: 'Unboxing the latest acoustic breakthroughs. We test next-gen audio tech so you don\'t have to.',
    thumb: thumb2,
    duration: '22:15',
    category: 'Audio Technology',
    views: '3.1M views',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function VideoCards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="videos" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <p className="section-label mb-3">Latest Insights</p>
            <h2 className="section-title">Deep Dives Into<br />The Tech That Matters Today.</h2>
          </div>
          <motion.a
            href="https://youtube.com/@TechnicalGuruji"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline text-sm whitespace-nowrap"
          >
            View Channel
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group glass-card overflow-hidden cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm border border-white/20 text-white text-xs px-2 py-1 rounded-md font-medium">
                  {video.duration}
                </div>
                {/* Category */}
                <div className="absolute top-3 left-3 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-400 text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                  {video.category}
                </div>
                {/* Play button overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-amber-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.6)]">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <p className="text-white/40 text-xs mb-2">{video.views}</p>
                <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
