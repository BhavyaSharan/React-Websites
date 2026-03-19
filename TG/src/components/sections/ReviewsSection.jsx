import { motion } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: 'Arjun Sharma',
    handle: '@arjun_tech',
    avatar: 'AS',
    text: 'Technical Guruji makes even the most complex tech topics feel like a conversation with a brilliant friend. Unmatched clarity!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Mehta',
    handle: '@priya_m',
    avatar: 'PM',
    text: 'I\'ve been watching since 2017. The production quality, depth of knowledge, and Hindi explanations are simply world-class.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ravi Kumar',
    handle: '@ravi_gadgets',
    avatar: 'RK',
    text: 'Before buying any gadget, I always check Technical Guruji\'s review first. His verdicts are honest and always spot-on.',
    rating: 5,
  },
]

function ReviewCard({ review, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(245,158,11,0.1), 0 0 0 1px rgba(245,158,11,0.15)' }}
      className="glass-card p-6 flex flex-col gap-4"
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(review.rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {/* Text */}
      <p className="text-white/70 text-sm leading-relaxed flex-1">"{review.text}"</p>
      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-bold text-xs">
          {review.avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{review.name}</p>
          <p className="text-white/40 text-xs">{review.handle}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ReviewsSection() {
  return (
    <section id="brands" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="section-label mb-3">Community Reviews</p>
          <h2 className="section-title">Trusted By Millions,<br />Loved By All.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <ReviewCard key={review.id} review={review} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}
