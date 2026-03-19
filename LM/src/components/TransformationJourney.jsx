import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stages = [
  {
    id: 'mind',
    number: '01',
    title: 'MIND',
    description: 'Cognitive clarity and stress management through neurological conditioning.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    align: 'start',
    rotation: '-rotate-12',
    hoverRotate: 'group-hover:-translate-y-2 md:group-hover:translate-x-2 md:group-hover:-translate-y-0'
  },
  {
    id: 'body',
    number: '02',
    title: 'BODY',
    description: 'Optimized movement protocols designed for longevity and functional power.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    align: 'end',
    rotation: 'rotate-6',
    hoverRotate: 'group-hover:-translate-y-2 md:group-hover:-translate-x-2 md:group-hover:-translate-y-0'
  },
  {
    id: 'nutrition',
    number: '03',
    title: 'NUTRITION',
    description: 'Bio-individual fueling strategies to sustain peak mental and physical energy.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
    align: 'start',
    rotation: '-rotate-6',
    hoverRotate: 'group-hover:-translate-y-2 md:group-hover:translate-x-2 md:group-hover:-translate-y-0'
  },
  {
    id: 'lifestyle',
    number: '04',
    title: 'LIFESTYLE',
    description: 'Integrating high-level wellness into the rhythm of your daily existence.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
    align: 'end',
    rotation: 'rotate-12',
    hoverRotate: 'group-hover:-translate-y-2 md:group-hover:-translate-x-2 md:group-hover:-translate-y-0'
  }
];

export default function TransformationJourney() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // RESPONSIVE FIX: disable mouse parallax on touch/small screens
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return;
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-16 md:py-20 px-4 md:px-6 overflow-hidden bg-darkBg text-white">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald rounded-full animate-pulse-soft blur-sm"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-gold rounded-full animate-float-delayed blur-sm"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-emerald rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-emerald/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-emerald/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 text-center mb-12 md:mb-24 max-w-3xl px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-emerald font-semibold tracking-widest uppercase text-sm mb-4 block"
        >
          The McBride Method
        </motion.span>
        {/* RESPONSIVE FIX: fluid heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Your Transformation <span className="gradient-text-gold">Journey</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed"
        >
          A holistic evolution crafted for high-performance living. We guide you through four essential dimensions of wellness.
        </motion.p>
      </header>

      {/* RESPONSIVE FIX: on mobile/tablet, switch from the complex absolute-
          positioned zigzag layout to a simple 2-col responsive grid.
          The original zigzag is preserved on md+ screens. */}

      {/* Mobile / Tablet grid (hidden on md+) */}
      <div className="md:hidden relative w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 z-10 px-2">
        {stages.map((stage) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass-label p-6 rounded-custom text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {stage.icon}
              </svg>
            </div>
            <h3 className="text-emerald font-bold text-lg mb-2">{stage.number}. {stage.title}</h3>
            <p className="text-sm text-gray-300">{stage.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Desktop zigzag layout (hidden below md) */}
      {/* Two-column grid with a center line. Left col = align-end, right col = align-start
          so island + label sit close to the center line on each side. */}
      <div className="relative w-full max-w-5xl hidden md:block z-10">
        {/* Central Connector Line — absolutely positioned, full height */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 emerald-line opacity-30 z-0"></div>

        {stages.map((stage, index) => {
          const factor = (index + 1) * 0.5;
          const isLeft = stage.align === 'start'; // odd stages → left side, even → right

          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full grid grid-cols-2 mb-32 items-center"
              style={{ transform: `translate(${mousePos.x * factor}px, ${mousePos.y * factor}px)` }}
            >
              {isLeft ? (
                <>
                  {/* LEFT side — island + label flush to center line */}
                  <div className={`flex justify-end pr-12 ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}>
                    <div className="relative group cursor-pointer w-[300px]">
                      {/* Floating Island */}
                      <div className={`island-glow w-48 h-28 ml-auto bg-gradient-to-br from-emerald/20 to-transparent rounded-[50%] border-b-4 border-emerald/40 relative transform ${stage.rotation} transition-transform duration-500 group-hover:scale-110`}>
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center">
                          <svg className="w-14 h-14 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {stage.icon}
                          </svg>
                        </div>
                      </div>
                      {/* Label — sits below island, right-aligned */}
                      <div className="glass-label mt-6 p-6 rounded-custom w-full text-right transition-all duration-300 group-hover:-translate-y-2">
                        <h3 className="text-emerald font-bold text-xl mb-1">{stage.number}. {stage.title}</h3>
                        <p className="text-sm text-gray-300">{stage.description}</p>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT side — empty */}
                  <div></div>
                </>
              ) : (
                <>
                  {/* LEFT side — empty */}
                  <div></div>
                  {/* RIGHT side — island + label flush to center line */}
                  <div className={`flex justify-start pl-12 ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}>
                    <div className="relative group cursor-pointer w-[300px]">
                      {/* Floating Island */}
                      <div className={`island-glow w-48 h-28 bg-gradient-to-br from-emerald/20 to-transparent rounded-[50%] border-b-4 border-emerald/40 relative transform ${stage.rotation} transition-transform duration-500 group-hover:scale-110`}>
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center">
                          <svg className="w-14 h-14 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {stage.icon}
                          </svg>
                        </div>
                      </div>
                      {/* Label — sits below island, left-aligned */}
                      <div className="glass-label mt-6 p-6 rounded-custom w-full text-left transition-all duration-300 group-hover:-translate-y-2">
                        <h3 className="text-emerald font-bold text-xl mb-1">{stage.number}. {stage.title}</h3>
                        <p className="text-sm text-gray-300">{stage.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Center dot on the line */}
              <div className="absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald z-10 shadow-[0_0_10px_rgba(81,200,120,0.8)]"></div>
            </motion.div>
          );
        })}
      </div>

      <footer className="mt-16 md:mt-32 relative z-10">
        <button className="px-8 md:px-10 py-4 bg-transparent border-2 border-emerald text-emerald font-bold rounded-custom hover:bg-emerald hover:text-darkBg transition-all duration-300 uppercase tracking-widest text-sm">
          Start Your Evolution
        </button>
      </footer>
    </section>
  );
}
