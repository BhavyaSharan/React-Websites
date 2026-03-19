import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const campaigns = [
    {
        title: 'Summer Flavor Tour',
        brand: 'FreshCo Beverages',
        objective: 'Nationwide product sampling across 30 cities',
        results: '2.1M+ samples distributed, 450K social impressions',
        gradient: 'from-orange-400 via-pink-500 to-purple-600',
    },
    {
        title: 'EV Test Drive Experience',
        brand: 'VoltMotors',
        objective: 'Mobile test drive events for new EV lineup',
        results: '15K test drives, 3.2K qualified leads generated',
        gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    },
    {
        title: 'Campus Connect Tour',
        brand: 'TechStart',
        objective: 'University campus activations for Gen-Z engagement',
        results: '60 campuses, 180K student interactions',
        gradient: 'from-indigo-400 via-blue-500 to-sky-600',
    },
    {
        title: 'Health On Wheels',
        brand: 'WellCare Foundation',
        objective: 'Mobile health screening units in underserved areas',
        results: '25K screenings, 8K referrals for follow-up care',
        gradient: 'from-rose-400 via-red-500 to-orange-600',
    },
    {
        title: 'Pop-Up Retail Experience',
        brand: 'Luxe Beauty',
        objective: 'Mobile pop-up stores in high-traffic urban locations',
        results: '$1.2M in direct sales, 95K app downloads',
        gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
    },
    {
        title: 'Game Day Fan Zone',
        brand: 'SportsBrew',
        objective: 'Stadium tailgate activations during NFL season',
        results: '16 stadiums, 500K+ fan interactions',
        gradient: 'from-amber-400 via-yellow-500 to-lime-600',
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Portfolio() {
    return (
        <section id="portfolio" className="section-padding bg-gray-50/50">
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
                        Campaign Showcase
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                        Campaigns that{' '}
                        <span className="gradient-text">drive results</span>
                    </h2>
                    <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
                        Explore our portfolio of successful experiential marketing campaigns
                        that have generated millions of brand impressions.
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
                    {campaigns.map((campaign) => (
                        <motion.div
                            key={campaign.title}
                            variants={cardVariants}
                            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                        >
                            {/* Image area */}
                            <div className={`h-44 sm:h-52 bg-gradient-to-br ${campaign.gradient} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white/20 text-[100px] sm:text-[120px] font-black leading-none select-none">
                                        {campaign.brand.charAt(0)}
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6">
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1.5">
                                    {campaign.brand}
                                </p>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{campaign.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{campaign.objective}</p>
                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Results</p>
                                    <p className="text-sm font-medium text-gray-700">{campaign.results}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}