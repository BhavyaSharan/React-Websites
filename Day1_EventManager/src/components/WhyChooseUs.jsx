import { motion } from 'framer-motion'
import { Globe2, Layers, Target, TrendingUp, ShieldCheck } from 'lucide-react'

const features = [
    {
        icon: Globe2,
        title: 'Nationwide Tour Experience',
        description: 'Proven expertise executing campaigns across 50+ cities with seamless logistics and consistent quality.',
    },
    {
        icon: Layers,
        title: 'End-to-End Campaign Management',
        description: 'From strategy to post-campaign analytics, we handle every aspect so you can focus on your brand.',
    },
    {
        icon: Target,
        title: 'High Audience Engagement',
        description: 'Our immersive experiences achieve 4x higher engagement rates compared to traditional marketing channels.',
    },
    {
        icon: TrendingUp,
        title: 'Measurable Marketing Results',
        description: 'Real-time dashboards and comprehensive post-campaign reports so you always know your ROI.',
    },
    {
        icon: ShieldCheck,
        title: 'Experienced Tour Operators',
        description: '15+ years of field experience with a 98% client satisfaction rate and award-winning campaign execution.',
    },
]

export default function WhyChooseUs() {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-sm font-semibold text-indigo-600 tracking-wider uppercase mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                            The trusted partner for{' '}
                            <span className="gradient-text">experiential marketing</span>
                        </h2>
                        <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
                            We combine creative vision with operational excellence to deliver
                            campaigns that move audiences – literally and figuratively.
                        </p>

                        {/* Stats bar — wraps gracefully on small screens */}
                        <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 p-5 sm:p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            {[
                                { value: '98%', label: 'Client Retention' },
                                { value: '15+', label: 'Years Experience' },
                                { value: '500+', label: 'Campaigns Delivered' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                                    <div className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right */}
                    <div className="space-y-3 sm:space-y-4">
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="group flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center shrink-0 transition-colors duration-300">
                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}