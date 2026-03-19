import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

function FloatingDots() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        const colors = ['#6366f1', '#818cf8', '#0ea5e9', '#a78bfa', '#c084fc', '#94a3b8']

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        const dots = Array.from({ length: 36 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            r: Math.random() * 1.8 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            phase: Math.random() * Math.PI * 2,
            amp: Math.random() * 7 + 3,
            spd: Math.random() * 0.007 + 0.003,
        }))

        let t = 0
        let rafId

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            t += 0.5
            dots.forEach((d) => {
                const px = ((d.x + Math.sin(t * d.spd + d.phase) * d.amp) % 100 + 100) % 100
                const py = ((d.y + Math.cos(t * d.spd * 0.7 + d.phase) * d.amp * 0.55) % 100 + 100) % 100
                const alpha = 0.2 + 0.18 * Math.sin(t * d.spd * 2 + d.phase)
                ctx.beginPath()
                ctx.arc((px / 100) * canvas.width, (py / 100) * canvas.height, d.r, 0, Math.PI * 2)
                ctx.fillStyle = d.color
                ctx.globalAlpha = alpha
                ctx.fill()
            })
            ctx.globalAlpha = 1
            rafId = requestAnimationFrame(draw)
        }

        resize()
        window.addEventListener('resize', resize)
        draw()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(rafId)
        }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

const stats = [
    { value: '500+', label: 'Campaigns' },
    { value: '50+', label: 'Cities' },
    { value: '10M+', label: 'Impressions' },
]

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-clip pt-20 sm:pt-24 pb-12 sm:pb-20">
            <div className="absolute inset-0 -z-10 bg-[#fafafa]" />
            <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] lg:w-[640px] h-[240px] sm:h-[300px] lg:h-[360px] bg-indigo-200/[0.18] rounded-full blur-[80px] sm:blur-[120px]" />
            <div className="absolute -z-10 bottom-0 right-0 w-[200px] sm:w-[300px] lg:w-[380px] h-[200px] sm:h-[300px] lg:h-[380px] bg-sky-200/[0.12] rounded-full blur-[60px] sm:blur-[100px]" />

            <FloatingDots />

            <div className="relative z-10 w-full max-w-[760px] mx-auto px-5 sm:px-6 text-center flex flex-col items-center">

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-8 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-4 sm:px-[18px] py-1.5 sm:py-2 rounded-full bg-white border border-black/[0.09] shadow-sm">
                        <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] rounded-full bg-indigo-500 animate-pulse flex-shrink-0" />
                        <span className="text-[11px] sm:text-[12.5px] font-semibold text-gray-500 tracking-wide">Experiential Marketing Agency</span>
                    </div>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.22 }} className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-extrabold tracking-[-0.025em] leading-[1.12] text-[#0d0d14] mb-6 sm:mb-12">
                    Bring Your Brand{' '}
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 bg-clip-text text-transparent">To Life</span>
                    <br />
                    With Mobile Experiences
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.38 }} className="text-[15px] sm:text-[17px] text-gray-500 leading-[1.85] font-normal max-w-[480px] sm:max-w-[520px] mx-auto mb-10 sm:mb-20">
                    We create unforgettable brand activations through mobile tours, experiential marketing, and live engagement campaigns.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.52 }} className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-16 sm:mb-28 w-full">
                    <motion.a href="#contact" whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }} className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 sm:px-8 py-4 sm:py-[15px] text-[14px] sm:text-[15px] font-bold text-white bg-[#111118] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:bg-[#1e1e30] hover:shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all duration-200">
                        <span>Launch Your Campaign</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.a>
                    <motion.a href="#portfolio" whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }} className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 sm:px-8 py-4 sm:py-[15px] text-[14px] sm:text-[15px] font-bold text-gray-700 bg-white border-[1.5px] border-black/10 rounded-full shadow-sm hover:border-indigo-300 hover:bg-[#f9f9ff] hover:shadow-[0_8px_24px_rgba(99,102,241,0.12)] transition-all duration-200">
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-indigo-100/70 group-hover:bg-indigo-100 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                            <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-indigo-500 text-indigo-500 ml-0.5" />
                        </span>
                        <span>See Our Work</span>
                    </motion.a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.68 }} className="flex justify-center items-center w-full">
                    {stats.map((stat, i) => (
                        <div key={stat.label} className={`text-center px-6 sm:px-10 lg:px-14 relative ${i !== 2 ? 'after:absolute after:right-0 after:top-[12%] after:h-[76%] after:w-px after:bg-black/10' : ''}`}>
                            <div className="text-[26px] sm:text-[32px] lg:text-[34px] font-extrabold text-[#0d0d14] tracking-[-0.02em] leading-none">{stat.value}</div>
                            <div className="text-[10px] sm:text-[11.5px] text-gray-400 mt-2 sm:mt-2.5 font-semibold uppercase tracking-[0.1em]">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}