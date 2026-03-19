import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const EcoSystem = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden"
    >
      <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 tech-grid -z-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-24 relative">
          <div className="flex flex-col lg:flex-row items-end gap-12">
            <div className="lg:w-2/3">
              <motion.span
                className="font-label text-primary uppercase tracking-[0.3em] text-sm mb-4 block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                System Protocol: Core
              </motion.span>
              <motion.h1
                className="font-headline text-6xl md:text-[5.5rem] leading-[0.9] font-black text-on-surface tracking-tighter uppercase mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                The Tech{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#00fc3f]">Universe</span>
              </motion.h1>
            </div>
            <motion.div
              className="lg:w-1/3 pb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-[#adaaaa] text-lg leading-relaxed font-body border-l-2 border-primary/30 pl-6">
                An interconnected digital nervous system where every review, build, and breakthrough flows into a singular kinetic stream.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Network Visualization */}
        <section className="max-w-[1400px] mx-auto px-8 mb-32 relative">
          <motion.div
            className="aspect-[21/9] w-full rounded-2xl bg-[#131313] border border-white/5 relative overflow-hidden group shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 opacity-40">
              <img
                alt="Cyber network visualization"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABW0XLCH8FMRJqGnaRokl_t70AD7c6woBar88UYsGLnsUUcU-kLkhTiG8C991FZ70xaO5UUrmNktOUjWzaQ3cHA8hYszH8EnHYuwGphspyj0k4uy0-LYGa_j46K_lh6EV0oV_CJkC_GcYeIjvNreLXT7UkmNBJB4l92661Y3hyGWie_EfnHhCQ2mmZBC4yrB9Akk8OR4UOKb5VSiD64lCUOIZuNcASrgxvZZMRM3hCTqa0T7C-9rztHJGiQqx7g4m817AFIIQ46w"
                loading="lazy"
              />
            </div>

            {/* Floating nodes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-4xl text-primary">hub</span>
                </div>
                <div className="absolute w-48 h-48 rounded-full border border-primary/20 animate-pulse" />
              </div>

              <div className="absolute top-[20%] left-[30%]">
                <div className="bg-[#262626]/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 shadow-lg">
                  <span className="material-symbols-outlined text-secondary">smartphone</span>
                  <span className="font-label text-xs uppercase tracking-widest">Mobile Reviews</span>
                </div>
                <div className="w-px h-32 bg-gradient-to-t from-primary/50 to-transparent absolute top-full left-1/2 -translate-x-1/2" />
              </div>

              <div className="absolute bottom-[15%] right-[25%]">
                <div className="bg-[#262626]/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 shadow-lg">
                  <span className="material-symbols-outlined text-tertiary">desktop_windows</span>
                  <span className="font-label text-xs uppercase tracking-widest">PC Builds</span>
                </div>
                <div className="w-px h-40 bg-gradient-to-b from-primary/50 to-transparent absolute bottom-full left-1/2 -translate-x-1/2" />
              </div>

              <div className="absolute top-[40%] right-[10%]">
                <div className="bg-[#262626]/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 shadow-lg">
                  <span className="material-symbols-outlined text-primary">home_iot_device</span>
                  <span className="font-label text-xs uppercase tracking-widest">Smart Home Tech</span>
                </div>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute bottom-8 left-8 flex gap-4">
              <div className="bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10">
                <div className="text-[10px] text-[#adaaaa] uppercase tracking-widest mb-1">Active Streams</div>
                <div className="text-2xl font-headline font-bold text-primary">
                  1,204 <span className="text-xs font-normal text-[#adaaaa] ml-2 tracking-normal">Nodes Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Hubs Bento Grid */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Mobile Hub - col-span-8 */}
            <motion.div
              className="md:col-span-8 group relative overflow-hidden rounded-xl bg-[#201f1f] p-8 hover:bg-[#262626] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <span className="material-symbols-outlined text-primary">vibration</span>
                    </div>
                    <h3 className="font-headline text-3xl font-bold uppercase">Mobile Hub</h3>
                  </div>
                  <p className="text-[#adaaaa] max-w-md leading-relaxed">
                    The evolution of pocket technology. Deep dives into silicon architecture, camera optics, and the future of OS interface design.
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-6">
                  <button className="bg-gradient-to-br from-primary to-[#00fc3f] text-[#004409] px-6 py-3 rounded-md font-label font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform">
                    Explore Lab
                  </button>
                  <span className="text-[#adaaaa] text-[10px] font-label uppercase tracking-[0.2em]">Latest: S24 Ultra Deep Dive</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  alt="Futuristic smartphone concept"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALN4vpS8gMjje5ozUXU5bPl2nqzO-5OHCxdeXB7nYOsKue-1K9jVzTXtjpPG5cUPzeT5SuIqavwpcNADBTdRkz7lWAO76ugOF84kjErz5uc6A3PXzs14M88Igid7C4-E_XiZVZBY5wxzPqEyOBFVHlsjL2BDuiwl49g_KOusrm4h3Xpt89nKg-RDVXiHFXYiZqhR4uQnTeTeozmM64n2HJE2nF5yM30n41b9B_cvYljIXxZ8-HzF9xxqXx6npupvgYS9Ou-USvtQ"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Future Lab - col-span-4 */}
            <motion.div
              className="md:col-span-4 group relative overflow-hidden rounded-xl bg-[#201f1f] p-8 border border-white/5 hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center border border-tertiary/20 mb-6">
                  <span className="material-symbols-outlined text-tertiary">science</span>
                </div>
                <h3 className="font-headline text-2xl font-bold uppercase mb-4">Future Lab</h3>
                <p className="text-[#adaaaa] text-sm leading-relaxed mb-8">
                  Experimental hardware, VR/AR breakthroughs, and AI integration prototypes.
                </p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-label uppercase text-tertiary tracking-widest">Active R&D</span>
                  <span className="material-symbols-outlined text-[#adaaaa] group-hover:translate-x-2 transition-transform">trending_flat</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-tertiary/10 rounded-full blur-3xl" />
            </motion.div>

            {/* Workspace - col-span-5 */}
            <motion.div
              className="md:col-span-5 group relative overflow-hidden rounded-xl bg-[#262626]/40 backdrop-blur-xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-secondary">terminal</span>
                  <h3 className="font-headline text-2xl font-bold uppercase tracking-tight">The Workspace</h3>
                </div>
                <p className="text-[#adaaaa] text-sm leading-relaxed mb-6">
                  Architecting the ultimate productive environment. From mechanical keyboards to 8K array setups.
                </p>
                <ul className="space-y-3">
                  {['PC Architecture', 'Desk Setup V5', 'Peripheral Engine'].map((item, i) => (
                    <li key={item} className="flex items-center gap-3 text-xs font-label uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors">
                      <span className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-secondary' : 'bg-tertiary'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Live Stream - col-span-7 */}
            <motion.div
              className="md:col-span-7 rounded-xl bg-[#131313] border border-white/5 p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="font-headline text-3xl font-bold uppercase mb-1">Live Stream</h3>
                  <span className="text-xs font-label text-primary uppercase tracking-[0.3em]">Real-time Ecosystem Sync</span>
                </div>
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-[#262626] flex items-center justify-center">
                    <span className="text-[10px] font-bold">TB</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary flex items-center justify-center">
                    <span className="text-[10px] text-[#006412] font-bold">CORE</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { color: 'bg-primary', label: 'Protocol Delta-9 Analysis', time: '2m ago' },
                  { color: 'bg-secondary', label: 'Workspace V4 Deployment', time: '15m ago', dimmed: true },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center justify-between p-4 rounded-lg bg-[#201f1f]/50 border border-white/5 ${item.dimmed ? 'opacity-60' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${item.color} ${!item.dimmed ? 'animate-pulse' : ''}`} />
                      <span className="text-xs font-label uppercase tracking-widest">{item.label}</span>
                    </div>
                    <span className="text-[10px] text-[#adaaaa] font-mono">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default EcoSystem;
