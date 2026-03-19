import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Campaigns', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
]

function NavLink({ link }) {
    const [hovered, setHovered] = useState(false)

    return (
        <a
            href={link.href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300"
        >
            {link.name}
            {/* Animated underline dot */}
            <motion.span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-sky-500"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                    width: hovered ? '60%' : 0,
                    opacity: hovered ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
            />
            {/* Subtle glow on hover */}
            <motion.span
                className="absolute inset-0 rounded-lg bg-indigo-50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: hovered ? 1 : 0,
                    scale: hovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                style={{ zIndex: -1 }}
            />
        </a>
    )
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-gray-100/50'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                            transition={{ duration: 0.5 }}
                            className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow duration-300"
                        >
                            <Zap className="w-5 h-5 text-white" />
                        </motion.div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            Event<span className="gradient-text">Manager</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-3">
                        {navLinks.map((link) => (
                            <NavLink key={link.name} link={link} />
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white gradient-bg rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                        >
                            Start Your Campaign
                        </motion.a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="pt-4">
                                <a
                                    href="#contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="block w-full text-center px-6 py-3 text-sm font-semibold text-white gradient-bg rounded-full"
                                >
                                    Start Your Campaign
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
