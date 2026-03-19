import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Innovations', to: '/' },
  { label: 'Eco-Systems', to: '/ecosystem' },
  { label: 'The Core', to: '/core' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      {/* Floating pill navbar - exactly as in Stitch design */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto mt-6 rounded-full border border-white/15 bg-[#262626]/30 backdrop-blur-xl floating-nav secondary-glow-sm"
        >
          {/* Brand */}
          <Link to="/" className="text-2xl font-black tracking-tighter text-primary uppercase font-headline">
            TechBurner
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-label text-sm uppercase tracking-widest transition-colors relative pb-1 ${
                  location.pathname === link.to
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-[#adaaaa] hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Menu button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:backdrop-blur-3xl hover:border-white/40 transition-all duration-300 scale-95 active:scale-90 flex items-center justify-center p-2 rounded-full"
            >
              <span className="material-symbols-outlined text-white">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Floating side nav - exactly as in Stitch design */}
      <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 w-20 rounded-full border border-white/10 bg-[#262626]/20 backdrop-blur-2xl flex-col items-center py-8 gap-6 z-40 shadow-[0_0_15px_rgba(0,255,64,0.1)]">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
          <span className="material-symbols-outlined text-primary text-xl">bolt</span>
        </div>
        <button className="text-[#adaaaa] p-3 hover:text-secondary hover:bg-white/10 rounded-full transition-all">
          <span className="material-symbols-outlined">share</span>
        </button>
        <button className="bg-[#00fc3f] text-[#005a10] rounded-full p-3 shadow-lg shadow-primary/40">
          <span className="material-symbols-outlined">code</span>
        </button>
        <button className="text-[#adaaaa] p-3 hover:text-secondary hover:bg-white/10 rounded-full transition-all">
          <span className="material-symbols-outlined">person</span>
        </button>
      </aside>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 rounded-2xl bg-[#262626]/95 backdrop-blur-2xl border border-white/10 md:hidden"
          >
            <div className="p-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-label uppercase tracking-widest py-3 px-4 rounded-xl transition-all ${
                    location.pathname === link.to
                      ? 'text-primary bg-primary/10 font-bold'
                      : 'text-[#adaaaa] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
