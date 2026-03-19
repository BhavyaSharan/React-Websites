import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const Landing = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen flex flex-col bg-background text-on-surface selection:bg-primary selection:text-on-primary"
    >
      {/* ── Background cinematic layer ── */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          className="w-full h-full object-cover scale-105 opacity-40"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDIXHYLTED7Z8Z7IOJFEnNDwUO6HGD6pydi-IH599rFUpqeo8XUDs-baBj69aHmm8BUNzl0mhVWXYTykTiwa3iXlnrahEfs_CAF9HrZaFO6RiRG_Tr5AqOFwfPslvDwqkSV1HOoNfEbYyzz3cFVdWukUTrCSlLnsCbKptqkrxtWpZ7ImfW1U8tUkHJpYQmW_e0NF9d0Ws0FFj0313xT93ue8m-c4QXhpTK92s4Oat39cLsPc8u9AhkARW0OfVs9FPOe7uPJG0RVw"
          alt="Cinematic neon circuitry"
          loading="eager"
        />
        {/* Radial lighting leaks */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      {/* ── Main content ── */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Hero: left + right panels */}
        <section className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full px-6 pt-32 pb-12 gap-12 items-stretch">
          
          {/* Left panel – 60% */}
          <div className="w-full md:w-3/5 flex flex-col justify-center space-y-12">
            <div className="space-y-6">
              {/* Category badges */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase tracking-widest font-bold font-label backdrop-blur-md">
                  Gadget Reviews
                </span>
                <span className="px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-[10px] uppercase tracking-widest font-bold font-label backdrop-blur-md">
                  Tech Experiments
                </span>
                <span className="px-4 py-1.5 rounded-full border border-tertiary/20 bg-tertiary/5 text-tertiary text-[10px] uppercase tracking-widest font-bold font-label backdrop-blur-md">
                  Future Tech
                </span>
              </div>

              {/* Main heading */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter leading-[0.9] text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Exploring the{' '}
                <span className="text-primary text-glow italic">Future</span>{' '}
                of Tech
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-[#adaaaa] text-lg md:text-xl font-body max-w-md uppercase tracking-[0.2em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Gadgets • Experiments • Innovation
              </motion.p>
            </div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href="https://www.youtube.com/@TechBurner"
                target="_blank"
                rel="noopener noreferrer"
                className="kinetic-gradient text-[#006412] px-8 py-4 rounded-md font-headline font-bold uppercase tracking-widest neon-glow-primary hover:scale-105 transition-transform flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Watch the Latest Tech
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">play_arrow</span>
              </motion.a>
              <Link to="/core">
                <motion.span
                  className="px-8 py-4 rounded-md border border-[#484847]/30 hover:bg-white/5 transition-all font-headline font-bold uppercase tracking-widest text-[#adaaaa] hover:text-white cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Join The Core
                </motion.span>
              </Link>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="pt-8 border-l-2 border-primary/30 pl-6 max-w-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-[#adaaaa] font-body italic text-sm leading-relaxed">
                "Technology is only boring until you burn it. The kinetic core of innovation lies in the wreckage of yesterday's standards."
              </p>
              <span className="block mt-3 text-primary font-bold text-xs uppercase tracking-widest font-label">
                — TechBurner Community
              </span>
            </motion.div>
          </div>

          {/* Right panel – 40% */}
          <motion.div
            className="w-full md:w-2/5 flex flex-col gap-6 justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Social connectivity pill */}
            <div className="glass-panel rounded-full px-6 py-4 flex justify-between items-center neon-glow-secondary">
              <span className="font-headline font-bold text-sm tracking-widest text-secondary">CONNECT</span>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#adaaaa] hover:text-white cursor-pointer transition-colors">share</span>
                <span className="material-symbols-outlined text-[#adaaaa] hover:text-white cursor-pointer transition-colors">group</span>
                <span className="material-symbols-outlined text-[#adaaaa] hover:text-white cursor-pointer transition-colors">video_library</span>
              </div>
            </div>

            {/* Army CTA card */}
            <motion.div
              className="glass-panel p-6 rounded-xl hover:bg-[#262626]/40 transition-all group cursor-pointer"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline font-bold text-2xl leading-none">
                  Join the <br />
                  <span className="text-secondary">TechBurner Army</span>
                </h3>
                <div className="w-12 h-12 rounded-full kinetic-gradient flex items-center justify-center text-[#006412] shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
              </div>
              <p className="text-[#adaaaa] text-sm font-body mb-4">20M+ Strong. Experience tech at the speed of light.</p>
              <div className="flex -space-x-3">
                <img className="w-8 h-8 rounded-full border-2 border-background object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQqElBE5N5ds_kmZj8-iCVxnBlyCBufcenDQgzOs6V1jyugen2GczzHpG9LtEKN8eXPqOsfcFPhm1P3WbHCkHSWGThO2SpeKFU1a3yG0SDqDG65cy_kzQUhtkTKe66xp8-BQmmcXoqpunLj7sby-J1xL3wQLz6PQ8IJEUDpzO8kG5Q7VjyIqRC3QATcbw2CqUyQCNuiCtPShtz221I4VuBZShMQ7aJIAz7dWRl5Lj3PucujDPp8XvKZe0x6C4Y42FWkA6hbjsU9w" alt="Member" />
                <img className="w-8 h-8 rounded-full border-2 border-background object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHQ_fYIcqbqjSSejI8AztEn67Vz5nRt1P_ORe8LnKRpjzettEzqfQzuJBQ8lXRz-NcI1RxrPBOabHklU32-t1cYSW6KoUnQAiP6y7lBi0fy4R77ZIyVcDqjatjvNrG3ScO1e4CLhJvd2SbLYILHJ7Rf7925OQK-JxjKf-jYIotUt0_fo0-Eay2gS9lQLY9KDKc68ethaT24IZicmCKDpu0N53OJdvniMVcBhI6E5stF8pR4Xf--cLLbBWd7AYTmn4RnpQ6U6dcwQ" alt="Member" />
                <img className="w-8 h-8 rounded-full border-2 border-background object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsPRAk7ZDvjl-AUj5RjWSn5Y7COhy6B-SrEEox50RVDqtG_xmUz6oOzQyca4YhjqZgvRiQKvUdF3Qp0Ahog5YaCIUFjfFPDVhFTXDO7BfK722Rs5YqmtCWM7aKQdMatxfMFTjXBv1cV8qQ4GawF9hiyeHnjsAnEFAUiItCHFcrZ5-0wstIgdvdVF7zL_IAUkKQIgPGKfoMKm8fEV3Xbh3JhsTOfoV7ozR6k2zrMfrIBWXZX0bYJg26SwZ3cBit2o42_0auS7p-1w" alt="Member" />
                <div className="w-8 h-8 rounded-full border-2 border-background bg-[#262626] flex items-center justify-center text-[10px] font-bold">+12k</div>
              </div>
            </motion.div>

            {/* Micro cards */}
            <div className="flex flex-col gap-4">
              <motion.div
                className="flex gap-4 p-4 glass-panel rounded-xl hover:border-primary/40 transition-all cursor-pointer group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#201f1f] flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">smartphone</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider group-hover:text-primary transition-colors">Latest Gadget Reviews</h4>
                  <p className="text-xs text-[#adaaaa]">The future is foldable. Depth dive.</p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 p-4 glass-panel rounded-xl hover:border-secondary/40 transition-all cursor-pointer group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#201f1f] flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">memory</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider group-hover:text-secondary transition-colors">Tech Experiments</h4>
                  <p className="text-xs text-[#adaaaa]">Liquid nitrogen vs. CPU. Don't try this.</p>
                </div>
              </motion.div>

              {/* Content preview card */}
              <motion.div
                className="relative rounded-xl overflow-hidden aspect-video glass-panel group cursor-pointer mt-2"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA01hS8nEy-GHrlmSAU973_v11mm4de_tAZbBuqJju0HbEpumY6_Tlr5piT_vyAFY5mKmfREX2_bDINapCbyoLhLre-7iXRDY9U7gwFJcyiQ04jgSaQRsxPT3BK5c_6Sk8tT3mqjLPrNbgsU_27Lpps9lKAxRIkZKJ2txhbTa18dwLeDbmti7E8LD32ZRtcxuVWE2dQiAvbNo1dmPbJmyojJWr9P7I0hfW3sGKQBxtVqwd467cA9_D6xVHDAy584TEthyd8p7a9vw"
                  alt="Creator Lab"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface">Creator Lab Live</span>
                  </div>
                  <h4 className="font-headline font-bold text-lg">Inside the TechBurner HQ</h4>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </motion.div>
  );
};

export default Landing;
