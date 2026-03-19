import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const barHeights = [30, 45, 60, 40, 75, 90, 65, 85, 100, 50];

const Core = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden"
    >
      <main className="relative pt-32">

        {/* ── Hero: The Kinetic Heart ── */}
        <section className="relative min-h-[600px] flex items-center px-6 md:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          </div>

          <div className="relative z-10 max-w-5xl">
            <div className="flex flex-col gap-4">
              <motion.span
                className="font-label text-primary uppercase tracking-[0.3em] text-sm font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                System Status: Active
              </motion.span>
              <motion.h1
                className="font-headline text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tighter text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                THE <span className="text-primary italic">KINETIC</span><br />HEART
              </motion.h1>
              <motion.p
                className="font-body text-[#adaaaa] text-lg md:text-xl max-w-xl mt-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Where raw silicon meets pure ambition. Dive into the pulsating core of TechBurner's high-performance laboratory.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.button
                  className="bg-gradient-to-br from-primary to-[#00fc3f] text-[#006412] px-8 py-4 rounded-md font-label font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Initiate Sequence
                </motion.button>
                <motion.button
                  className="border border-[#484847]/40 bg-white/5 backdrop-blur-md text-secondary px-8 py-4 rounded-md font-label font-bold uppercase tracking-wider hover:border-white/40 transition-all"
                  whileHover={{ scale: 1.03 }}
                >
                  View Schematics
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Hero background image */}
          <div className="absolute right-0 bottom-0 w-full h-1/2 md:w-1/2 md:h-full z-0 opacity-40 pointer-events-none">
            <img
              className="w-full h-full object-cover mix-blend-screen grayscale contrast-150"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnd3ORqp-LNWYQq2o6jlhb5AL9hiFVvDTyLkVtqi21h-oRezQG4KcYgrV3x86XakKudQac__UNnaQN2dK7YPAx_DbH8JeV7qiLSuShoXYsOD_SK5DJW-R7Fq1JeZG7pexQ4VF3AZv7pwFZ2lS_5QKnojfRzZHzh2zl_53Ob6GGPg7KBNqYx-7_gGGGI2mhELxbYCxouAo409e4JAeg2B_AKybvNWOqEqgN8hUdY09v5GYWQ5JZp9kL3l8iJTv0XFVBzS9Q"
              alt="Glowing CPU circuit board"
              loading="lazy"
            />
          </div>
        </section>

        {/* ── The Engine Room ── */}
        <section className="py-24 px-6 md:px-24 bg-[#131313] relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <motion.h2
                  className="font-headline text-5xl font-bold text-primary mb-4 uppercase tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  The Engine Room
                </motion.h2>
                <div className="h-1 w-24 bg-primary mb-6" />
                <p className="text-[#adaaaa] text-lg">
                  Pushing hardware beyond the breaking point. Our labs operate at sub-zero temperatures to extract every ounce of performance from the latest silicon.
                </p>
              </div>
              <div className="font-label text-[#adaaaa] text-sm flex gap-12">
                <div>
                  <div className="text-white font-bold text-2xl">0.004ms</div>
                  <div className="uppercase tracking-widest text-[10px]">Latency Core</div>
                </div>
                <div>
                  <div className="text-white font-bold text-2xl">-196°C</div>
                  <div className="uppercase tracking-widest text-[10px]">Nitrogen Flow</div>
                </div>
              </div>
            </div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Liquid Nitrogen Card - col-span-8 */}
              <motion.div
                className="md:col-span-8 group relative overflow-hidden rounded-xl border border-white/5 bg-[#201f1f] p-8 h-[500px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLHNAgqZbP1b5I5ZuG_9X8peWlSRalSJsyMteyvMcG3Ph_U0NOpnkGZ7SsjiAtserNSpqML03N4j0lA-ACuiRF9JUwH2_9sgV2jhrf8Vca1ITMQ7QeMSaiOfSLoMXNf8L1Hjosze_XmBFn92yXI2RwsDpGaif7CSRS-FgTF9tn7bkQOpJMTf7gjuKtXXwaGqJTa8GMnRzzOZMTiy2fVKDTM4K8m4uWQPqm8A3KIG04ojbRINIeDRYwUCkUbnRCiy913SE69zV9Yw"
                    alt="Liquid nitrogen experiment"
                    loading="lazy"
                  />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Live Experiment</span>
                    <div className="text-right">
                      <div className="text-white font-headline text-3xl font-black italic">6.8 GHz</div>
                      <div className="text-primary text-[10px] uppercase font-bold tracking-tighter">Clock Speed Attained</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-headline text-4xl font-bold text-white mb-4">
                      Cryo-Vault<br />Overclocking
                    </h3>
                    <p className="text-[#adaaaa] max-w-md mb-6">
                      Direct application of liquid nitrogen cooling on prototype X-Series chipsets. Stabilizing voltage at peak frequencies.
                    </p>
                    <a className="inline-flex items-center gap-2 text-primary font-bold uppercase text-sm tracking-widest hover:gap-4 transition-all" href="#">
                      Access Telemetry <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Side stats - col-span-4 */}
              <motion.div
                className="md:col-span-4 flex flex-col gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Terminal output panel */}
                <div className="flex-1 bg-[#262626] p-6 rounded-xl border border-white/10 glass-panel">
                  <h4 className="font-headline text-secondary text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">analytics</span> Terminal Output
                  </h4>
                  <div className="font-mono text-[11px] text-[#adaaaa] space-y-1">
                    <p className="text-primary/70">&gt; Initializing core_sync.sh</p>
                    <p>&gt; Voltage: 1.45V [STABLE]</p>
                    <p>&gt; Temp: -182°C</p>
                    <p>&gt; Memory usage: 84%</p>
                    <p className="text-secondary">&gt; WARNING: Thermal throttle bypassed</p>
                    <p>&gt; Sector 7G verified...</p>
                    <p className="text-primary/70">&gt; Link established.</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/5 flex flex-col gap-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#adaaaa]">Power Draw</span>
                      <span className="text-white">450W</span>
                    </div>
                    <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[85%]" />
                    </div>
                  </div>
                </div>

                {/* Thermal buffer card */}
                <div className="h-48 bg-tertiary/10 rounded-xl border border-tertiary/20 p-6 flex flex-col justify-end group cursor-pointer">
                  <motion.span
                    className="material-symbols-outlined text-tertiary text-4xl mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    ac_unit
                  </motion.span>
                  <h4 className="text-white font-bold text-lg">Thermal Buffer Alpha</h4>
                  <p className="text-[#adaaaa] text-xs">Custom loop engineering with 14% efficiency gain.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Community Pulse ── */}
        <section className="py-32 px-6 md:px-24 bg-surface overflow-hidden relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
            <div className="w-full h-full border-[40px] border-primary rounded-full scale-150 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <motion.h2
                className="font-headline text-7xl font-black text-white tracking-tighter mb-4 uppercase"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Community Pulse
              </motion.h2>
              <p className="font-body text-[#adaaaa] uppercase tracking-widest text-sm">
                Real-time engagement within the kinetic ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Raid Feed */}
              <motion.div
                className="bg-[#201f1f]/40 backdrop-blur-md rounded-xl border border-[#484847]/20 p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-headline font-bold text-2xl flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    Upcoming Raids
                  </h3>
                  <span className="text-[#adaaaa] text-xs font-mono uppercase">Live_Grid</span>
                </div>
                <div className="space-y-6">
                  {[
                    { border: 'border-primary', time: 'In 45 Minutes', timeColor: 'text-primary', title: 'Server stress test: Omega', desc: 'Simulating 1M concurrent connections across the core nodes.' },
                    { border: 'border-secondary', time: 'Tomorrow 18:00', timeColor: 'text-secondary', title: 'GPU Silicon Lottery', desc: 'Unboxing and testing batch A-23 for high-frequency bins.' },
                    { border: 'border-tertiary', time: 'Sat 10:00', timeColor: 'text-tertiary', title: 'Global Node Sync', desc: 'Community-driven latency mapping of the decentral network.' },
                  ].map((raid) => (
                    <div key={raid.title} className={`p-4 bg-white/5 rounded-lg border-l-4 ${raid.border}`}>
                      <div className={`text-[10px] ${raid.timeColor} font-bold uppercase mb-1`}>{raid.time}</div>
                      <div className="text-white font-bold mb-1">{raid.title}</div>
                      <p className="text-[#adaaaa] text-xs">{raid.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Stats visualizer - col-span-2 */}
              <motion.div
                className="lg:col-span-2 bg-[#1a1919] p-8 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="material-symbols-outlined text-primary/30 text-8xl">sensors</span>
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex gap-12 mb-12">
                    <div>
                      <div className="text-[#adaaaa] text-[10px] uppercase font-bold tracking-widest mb-2">Connected Cores</div>
                      <div className="text-4xl font-headline font-black text-white">12,842</div>
                    </div>
                    <div>
                      <div className="text-[#adaaaa] text-[10px] uppercase font-bold tracking-widest mb-2">Data Throughput</div>
                      <div className="text-4xl font-headline font-black text-primary">4.2 PB/s</div>
                    </div>
                  </div>
                  {/* Bar chart */}
                  <div className="mt-auto flex items-end gap-2 h-48 w-full">
                    {barHeights.map((h, i) => (
                      <motion.div
                        key={i}
                        className="hover:bg-primary/40 transition-colors w-full rounded-t-sm"
                        style={{ height: `${h}%`, backgroundColor: `rgba(156, 255, 146, ${h > 80 ? 0.6 : h > 60 ? 0.4 : 0.2})` }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] text-[#adaaaa] font-mono">
                    <span>00:00 UTC</span>
                    <span>CURRENT STATUS: NOMINAL</span>
                    <span>23:59 UTC</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA: Become Part of The Core ── */}
        <section className="py-24 px-6">
          <motion.div
            className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#201f1f] to-[#1a1919] p-12 text-center border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="font-headline text-4xl font-bold mb-6 text-white uppercase tracking-tight">
                Become a part of <span className="text-primary">The Core</span>
              </h2>
              <p className="text-[#adaaaa] mb-10 text-lg max-w-xl mx-auto leading-relaxed">
                Early access to experimental technical data, raw bench files, and high-performance hardware raids.
              </p>
              <div className="max-w-md mx-auto relative group neon-border-focus">
                <input
                  className="w-full bg-[#262626] border-none rounded-md px-6 py-4 font-label text-sm tracking-widest focus:ring-0 focus:outline-none text-white placeholder-[#adaaaa]"
                  placeholder="ENTER ACCESS CODE OR EMAIL"
                  type="email"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-primary text-[#006412] px-6 rounded-md font-bold uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-transform">
                  Authorize
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Core;
