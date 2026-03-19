import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const dotStyle = {
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
    backgroundSize: '30px 30px',
}

export default function CTA() {
    return (
        <section id="contact" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-600" />
                    <div className="absolute inset-0 opacity-10" style={dotStyle} />
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />

                    <div className="relative px-6 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24 text-center">
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </motion.div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
                            Ready To Take Your Brand <span className="text-sky-300">On The Road?</span>
                        </h2>

                        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-indigo-100 max-w-xl mx-auto leading-relaxed">
                            Launch an unforgettable marketing campaign today. Let's create experiences your audience will never forget.
                        </p>

                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                            <a href="mailto:hello@eventmanager.com" className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-indigo-700 bg-white rounded-full hover:bg-indigo-50 transition-all duration-300 shadow-xl shadow-black/10 hover:-translate-y-0.5 group">
                                <span>Start Your Campaign</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#services" className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5">
                                <span>Explore Services</span>
                            </a>
                        </div>

                        <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-sm text-indigo-200">
                            {['Nationwide Coverage', 'Dedicated Project Manager', 'Real-time Reporting'].map((item) => (
                                <div key={item} className="flex items-center justify-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}