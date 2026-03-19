import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ecosystemData = {
  mindfulness: {
    title: "Mindfulness",
    description: "Cultivating present-moment awareness through guided meditation, breathwork, and nervous system regulation. Learn to silence the noise and reconnect with your inner compass.",
    metrics: ["Stress Reduction: 40%", "Focus Improvement: 2x"]
  },
  nutrition: {
    title: "Nutrition",
    description: "Bio-individual fueling strategies that prioritize whole foods and hormonal balance. It's not just what you eat, but how your body utilizes energy for optimal performance.",
    metrics: ["Energy Stability: High", "Metabolic Health: Peak"]
  },
  strength: {
    title: "Strength",
    description: "Functional movement designed for longevity. Building a resilient physical foundation that supports daily activities and long-term musculoskeletal health.",
    metrics: ["Muscle Density", "Power Output"]
  },
  recovery: {
    title: "Recovery",
    description: "The most underrated pillar. Sleep optimization, thermal therapy (sauna/cold plunge), and active rest protocols to ensure every workout yields maximum results.",
    metrics: ["HRV Improvement", "Repair Speed"]
  },
  energy: {
    title: "Energy Balance",
    description: "Understanding the synergy of all pillars. Managing your 'Life Battery' by balancing output with regenerative practices for sustained, vibrant living.",
    metrics: ["Daily Vitality", "Burnout Prevention"]
  }
};

export default function WellnessEcosystem() {
  const [activeNode, setActiveNode] = useState(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!activeNode) {
        setRotation({
          x: (window.innerWidth / 2 - e.pageX) / 50,
          y: (window.innerHeight / 2 - e.pageY) / 50
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [activeNode]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-charcoal overflow-hidden text-white" id="wellness-ecosystem">
      {/* Background Decor Elements */}
      <div className="eco-holographic-glow top-0 left-0 animate-pulse-glow"></div>
      <div className="eco-holographic-glow bottom-0 right-0 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Holistic <span className="text-brand">Wellness</span> Ecosystem
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Lauren's philosophy connects five core pillars into a singular flow of vitality. 
            Interact with the nodes to explore the depth of each discipline.
          </p>
        </header>

        <div className="perspective-container relative h-[400px] sm:h-[500px] md:h-[700px] w-full flex items-center justify-center overflow-visible">
          <div className="transform scale-[0.45] sm:scale-75 md:scale-100 absolute inset-0 flex items-center justify-center mt-[-100px] md:mt-0">
            <motion.div 
              className="w-full h-full absolute inset-0 flex items-center justify-center three-d-layer"
              animate={{ rotateY: rotation.x, rotateX: rotation.y }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              {/* Central Core */}
              <div className="absolute z-20 w-48 h-48 rounded-full flex items-center justify-center glass-card border-brand/40 animate-float">
                <div className="text-center">
                  <span className="block text-brand text-xs uppercase tracking-widest mb-1">Center</span>
                  <span className="text-2xl font-bold">BALANCE</span>
                </div>
              </div>

              {/* Orbits */}
              <div className="absolute w-[600px] h-[600px] rounded-full orbit-path animate-spin-slow opacity-30"></div>
              <div className="absolute w-[450px] h-[450px] rounded-full orbit-path animate-spin-slow opacity-20" style={{ animationDirection: 'reverse' }}></div>

              {/* Nodes */}
              <Node 
                id="mindfulness" label="Mindfulness" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />} 
                transform="translate(-280px, -150px) rotateX(10deg)" 
                onClick={() => setActiveNode('mindfulness')}
                isActive={activeNode === 'mindfulness'}
              />
              <Node 
                id="nutrition" label="Nutrition" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />} 
                transform="translate(280px, -150px) rotateX(10deg)" 
                onClick={() => setActiveNode('nutrition')}
                isActive={activeNode === 'nutrition'}
              />
              <Node 
                id="strength" label="Strength" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />} 
                transform="translate(-320px, 150px) rotateX(-5deg)" 
                onClick={() => setActiveNode('strength')}
                isActive={activeNode === 'strength'}
              />
              <Node 
                id="recovery" label="Recovery" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />} 
                transform="translate(320px, 150px) rotateX(-5deg)" 
                onClick={() => setActiveNode('recovery')}
                isActive={activeNode === 'recovery'}
              />
              <Node 
                id="energy" label="Energy" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />} 
                transform="translate(0px, 280px) rotateX(-15deg)" 
                onClick={() => setActiveNode('energy')}
                isActive={activeNode === 'energy'}
              />
            </motion.div>
          </div>
        </div>

        {/* Detail Panel */}
        <AnimatePresence>
          {activeNode && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center z-50 p-4"
            >
              <div 
                className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm cursor-pointer" 
                onClick={() => setActiveNode(null)} 
              />
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="glass-card w-full max-w-xl p-10 relative overflow-hidden pointer-events-auto"
              >
                <button 
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors" 
                  onClick={() => setActiveNode(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4 text-brand">
                    {ecosystemData[activeNode].title}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {ecosystemData[activeNode].description}
                  </p>
                  <div className="flex justify-center gap-4 mb-8">
                    {ecosystemData[activeNode].metrics.map(m => (
                      <span key={m} className="px-4 py-2 bg-brand/10 border border-brand/30 rounded-custom text-xs font-bold uppercase">
                        {m}
                      </span>
                    ))}
                  </div>
                  <button className="bg-brand text-charcoal px-8 py-3 rounded-custom font-bold hover:bg-white transition-colors duration-300">
                    EXPLORE {ecosystemData[activeNode].title.toUpperCase()} PROTOCOLS
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-50 -z-10"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Node({ id, label, icon, transform, onClick, isActive }) {
  return (
    <div 
      className={`absolute glass-card w-40 p-6 rounded-custom cursor-pointer transition-all duration-500 hover:node-active text-center ${isActive ? 'node-active z-30' : 'z-20'}`} 
      onClick={onClick} 
      style={{ transform }}
    >
      <div className="text-brand mb-2 flex justify-center">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h3 className="text-sm font-semibold tracking-wider uppercase">{label}</h3>
    </div>
  );
}
