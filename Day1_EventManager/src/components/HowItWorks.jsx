import { motion } from 'framer-motion'
import { Lightbulb, Palette, Globe, Users, BarChart3 } from 'lucide-react'

const steps = [
    {
        num: '01',
        icon: Lightbulb,
        title: 'Strategy & Campaign Planning',
        description: 'We align your brand goals with a tailored experiential strategy, define your target audience, and map out the campaign journey.',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        gradient: 'from-indigo-500 to-indigo-600',
    },
    {
        num: '02',
        icon: Palette,
        title: 'Vehicle Branding & Setup',
        description: 'Custom vehicle wraps, interior buildouts, technology integration, and branded environments designed to wow your audience.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        gradient: 'from-purple-500 to-purple-600',
    },
    {
        num: '03',
        icon: Globe,
        title: 'Nationwide Tour Execution',
        description: 'From routing and logistics to permits and staffing, we handle every detail of multi-city tour operations.',
        color: 'text-sky-600',
        bg: 'bg-sky-50',
        gradient: 'from-sky-500 to-sky-600',
    },
    {
        num: '04',
        icon: Users,
        title: 'Audience Engagement',
        description: 'Interactive experiences, product sampling, live demonstrations, and social media amplification that drive real connections.',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        gradient: 'from-emerald-500 to-emerald-600',
    },
    {
        num: '05',
        icon: BarChart3,
        title: 'Data Collection & Insights',
        description: 'Real-time reporting dashboards, audience analytics, ROI measurement, and post-campaign insights to fuel future strategies.',
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        gradient: 'from-amber-500 to-amber-600',
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function HowItWorks() {
    return (
        <section id="process" className="section-padding">
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
                        How It Works
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                        From concept to{' '}
                        <span className="gradient-text">campaign success</span>
                    </h2>
                    <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
                        Our proven five-step process ensures every campaign is executed flawlessly
                        from strategy to measurement.
                    </p>
                </motion.div>

                {/* Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid gap-4 sm:gap-6 max-w-4xl mx-auto"
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={step.num}
                                variants={cardVariants}
                                className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-5 sm:p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-500 hover:-translate-y-0.5 cursor-pointer overflow-hidden"
                            >
                                {/* Gradient accent */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Icon */}
                                <div className="shrink-0">
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${step.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${step.color}`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`text-xs font-bold ${step.color} tracking-wider uppercase`}>
                                            Step {step.num}
                                        </span>
                                        {index < steps.length - 1 && (
                                            <div className="hidden sm:block flex-1 h-px bg-gray-100" />
                                        )}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{step.description}</p>
                                </div>

                                {/* Step number badge — hidden on mobile */}
                                <div className="hidden sm:flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-300 text-lg font-bold group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-all duration-300">
                                    {step.num}
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}