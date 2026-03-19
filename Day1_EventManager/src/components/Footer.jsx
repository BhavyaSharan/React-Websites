import { Zap, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = [
    { title: 'Company', links: [{ name: 'About Us', href: '#about' }, { name: 'Our Process', href: '#process' }, { name: 'Campaigns', href: '#portfolio' }, { name: 'Careers', href: '#' }] },
    { title: 'Services', links: [{ name: 'Mobile Tours', href: '#services' }, { name: 'Brand Activations', href: '#services' }, { name: 'Product Launches', href: '#services' }, { name: 'Event Logistics', href: '#services' }] },
    { title: 'Resources', links: [{ name: 'Case Studies', href: '#portfolio' }, { name: 'Blog', href: '#' }, { name: 'FAQ', href: '#' }, { name: 'Privacy Policy', href: '#' }] },
]

const socials = [
    { name: 'Twitter', href: '#', label: 'TW' },
    { name: 'LinkedIn', href: '#', label: 'LI' },
    { name: 'Instagram', href: '#', label: 'IG' },
    { name: 'Facebook', href: '#', label: 'FB' },
]

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-gray-950 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">
                    <div className="sm:col-span-2">
                        <a href="#home" className="flex items-center gap-2 mb-5 sm:mb-6">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl gradient-bg flex items-center justify-center">
                                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <span className="text-lg sm:text-xl font-bold text-white">Event<span className="text-indigo-400">Manager</span></span>
                        </a>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6 sm:mb-8">
                            Creating unforgettable brand experiences through mobile marketing tours and experiential activations nationwide.
                        </p>
                        <div className="space-y-3">
                            <a href="mailto:hello@eventmanager.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                                <span>hello@eventmanager.com</span>
                            </a>
                            <a href="tel:+18001234567" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                                <span>+1 (800) 123-4567</span>
                            </a>
                            <div className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                <span>New York, NY - Nationwide Operations</span>
                            </div>
                        </div>
                    </div>
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">{section.title}</h4>
                            <ul className="space-y-2.5 sm:space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="py-5 sm:py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">{year} EventManager. All rights reserved.</p>
                    <div className="flex items-center gap-3 sm:gap-4">
                        {socials.map((social) => (
                            <a key={social.name} href={social.href} aria-label={social.name} className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-xs text-gray-400 hover:text-white transition-all duration-200">
                                {social.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}