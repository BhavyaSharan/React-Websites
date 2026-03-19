import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'VP of Marketing, FreshCo Beverages',
        quote: 'This campaign generated incredible engagement and brand visibility. Our product sampling tour reached over 2 million consumers, and the team handled every detail flawlessly.',
        rating: 5,
        initials: 'SM',
        gradient: 'from-indigo-500 to-purple-500',
    },
    {
        name: 'James Rekhad',
        role: 'CMO, VoltMotors',
        quote: 'EventManager delivered a world-class mobile test drive experience. The quality of leads we generated was exceptional, and the ROI exceeded every benchmark we set.',
        rating: 5,
        initials: 'JR',
        gradient: 'from-emerald-500 to-teal-500',
    },
    {
        name: 'Emily Nguyen',
        role: 'Brand Director, Luxe Beauty',
        quote: "Our pop-up retail tour was a game-changer. The team's attention to brand aesthetics and customer experience was unmatched. We're already planning our next campaign.",
        rating: 5,
        initials: 'EN',
        gradient: 'from-rose-500 to-pink-500',
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Testimonials() {
    return (
        <section className="section-padding bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
                >
                    <span className="inline-block text-sm font-semibold text-indigo-600 tracking-wider uppercase mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                        Trusted by{' '}
                        <span className="gradient-text">leading brands</span>
                    </h2>
                    <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
                        Hear from marketing leaders who have transformed their brand presence
                        with our experiential campaigns.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
                >
                    {testimonials.map((t) => (
                        <motion.div
                            key={t.name}
                            variants={cardVariants}
                            className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="mb-5 sm:mb-6">
                                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-100" />
                            </div>

                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-[15px]">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-gray-100">
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-lg shrink-0`}>
                                    {t.initials}
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm truncate">{t.name}</p>
                                    <p className="text-xs text-gray-500 truncate">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}