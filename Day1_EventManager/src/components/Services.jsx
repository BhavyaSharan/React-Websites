import { motion } from 'framer-motion'
import { Truck, Sparkles, Rocket, MapPin, Settings, HeartPulse } from 'lucide-react'

const services = [
    {
        icon: Truck,
        title: 'Mobile Marketing Tours',
        description: 'Custom-branded mobile vehicles that bring your product directly to your target audience across the nation.',
        color: 'from-indigo-500 to-blue-500',
        bg: 'bg-indigo-50',
        iconColor: 'text-indigo-600',
    },
    {
        icon: Sparkles,
        title: 'Experiential Brand Activations',
        description: 'Immersive brand experiences that create lasting emotional connections between consumers and your brand.',
        color: 'from-purple-500 to-pink-500',
        bg: 'bg-purple-50',
        iconColor: 'text-purple-600',
    },
    {
        icon: Rocket,
        title: 'Product Launch Events',
        description: 'High-impact launch events that generate buzz, media coverage, and consumer excitement for new products.',
        color: 'from-orange-500 to-red-500',
        bg: 'bg-orange-50',
        iconColor: 'text-orange-600',
    },
    {
        icon: MapPin,
        title: 'Nationwide Promotional Campaigns',
        description: 'Scalable promotional tours covering multiple cities with consistent brand messaging and local impact.',
        color: 'from-emerald-500 to-teal-500',
        bg: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
    },
    {
        icon: Settings,
        title: 'Event Logistics & Management',
        description: 'End-to-end event planning from permits and routing to staffing and on-ground execution.',
        color: 'from-sky-500 to-cyan-500',
        bg: 'bg-sky-50',
        iconColor: 'text-sky-600',
    },
    {
        icon: HeartPulse,
        title: 'Mobile Health & Awareness',
        description: 'Purpose-driven mobile campaigns for health screenings, awareness drives, and community outreach programs.',
        color: 'from-rose-500 to-pink-500',
        bg: 'bg-rose-50',
        iconColor: 'text-rose-600',
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
    return (
        <section id="services" className="section-padding bg-gray-50/50">
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
                        Our Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                        Everything you need to{' '}
                        <span className="gradient-text">activate your brand</span>
                    </h2>
                    <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
                        From concept to execution, we deliver comprehensive experiential marketing
                        solutions that drive measurable results.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
                >
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                variants={cardVariants}
                                className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 cursor-pointer overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.iconColor}`} />
                                </div>

                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{service.description}</p>

                                <div className="mt-5 sm:mt-6 flex items-center gap-2 text-sm font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    Learn more
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}