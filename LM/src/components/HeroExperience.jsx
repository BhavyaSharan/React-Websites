import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleCloud() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} matrixAutoUpdate>
        <PointMaterial
          transparent
          color="#51c878"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function HeroExperience() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    /* RESPONSIVE FIX: changed min-h-screen to min-h-[100dvh] so the hero
       fills the true viewport on mobile (accounts for browser chrome).
       Added pt-16 so content is never hidden under the fixed nav. */
    <main className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-charcoal pt-24 md:pt-24 lg:pt-20">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <ParticleCloud />
        </Canvas>
      </div>

      {/* Overlay Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/50 to-charcoal pointer-events-none z-0"></div>

      {/* Holographic human-like subtle glow */}
      {/* RESPONSIVE FIX: hidden on mobile to avoid overflow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden items-center justify-end pr-32 hidden lg:flex">
        <div style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(81, 200, 120, 0.15) 0%, rgba(212, 175, 55, 0.05) 50%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
      </div>

      {/* Navigation Layer */}
      {/* RESPONSIVE FIX: added fixed positioning so nav stays at top;
          hamburger now visible on mobile, links hidden below md */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 flex justify-between items-center bg-charcoal/60 backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-bold tracking-tighter text-brand text-glow">LM</div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-gray-400">
          <a className="hover:text-brand transition-colors" href="#">Experience</a>
          <a className="hover:text-brand transition-colors" href="#">Methods</a>
          <a className="hover:text-brand transition-colors" href="#">About Lauren</a>
        </div>
        
        {/* Hamburger Icon */}
        <div 
          className="h-10 w-10 glass-card rounded-custom flex flex-col items-center justify-center cursor-pointer relative z-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-5 h-0.5 bg-brand mb-1 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-brand transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-brand mt-1 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 md:hidden">
          <a className="text-2xl font-medium uppercase tracking-widest text-white hover:text-brand transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
          <a className="text-2xl font-medium uppercase tracking-widest text-white hover:text-brand transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>Methods</a>
          <a className="text-2xl font-medium uppercase tracking-widest text-white hover:text-brand transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>About Lauren</a>
        </div>
      )}

      {/* Main Content */}
      {/* RESPONSIVE FIX: px-4 on mobile, px-6 on larger; single col on mobile,
          two col on lg+; gap reduced on smaller screens */}
      <section className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        {/* Left Column: Branding and CTA */}
        {/* FIX: outer div has NO float animation — only the inner content wrapper
            animates so the float never pushes content under the fixed nav.
            pt-4 gives breathing room above the badge on all screen sizes. */}
        <div className="space-y-6 lg:space-y-8 py-8 lg:py-0">
          {/* Inner wrapper gets the float — it floats in place, never clipping upward
              beyond the outer div's top edge because overflow is hidden on <main> */}
          <div className="lg:animate-float pt-2 lg:pt-4">
            <div className="inline-block px-4 py-1 glass-card border-brand/30 rounded-full text-xs font-bold tracking-[0.2em] text-brand uppercase mb-2 lg:mb-4">
              The Future of Wellness
            </div>

            {/* RESPONSIVE FIX: fluid font sizing with clamp via text sizing classes */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
              IGNITE YOUR <br />
              <span className="text-brand text-glow">INNER LIGHT</span>
            </h1>

            <p className="max-w-md text-gray-400 text-base lg:text-lg leading-relaxed">
              Shed the weight of stress. Transform into pure energy with Lauren McBride's signature 3D holographic wellness experience.
            </p>

            {/* RESPONSIVE FIX: flex-col on very small screens, row from sm+ */}
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 lg:gap-4">
              <button className="w-full sm:w-auto px-6 lg:px-8 py-4 bg-brand text-charcoal font-bold rounded-custom hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(81,200,120,0.4)] text-sm">
                START YOUR TRANSFORMATION
              </button>
              <button className="w-full sm:w-auto px-6 lg:px-8 py-4 glass-card font-bold rounded-custom hover:border-brand/50 transition-all text-sm">
                EXPLORE THE SCIENCE
              </button>
            </div>

            <div className="flex items-center space-x-4 mt-4 lg:mt-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-charcoal bg-gray-700"></div>
                <div className="w-8 h-8 rounded-full border-2 border-charcoal bg-gray-600"></div>
                <div className="w-8 h-8 rounded-full border-2 border-charcoal bg-gray-500"></div>
              </div>
              <span className="text-xs text-gray-500 tracking-wider">JOIN 2,500+ TRANSFORMED LIVES</span>
            </div>
          </div>{/* end inner animate-float wrapper */}
        </div>

        {/* Right Column: Visual Focus — hidden below lg breakpoint */}
        <div className="hidden lg:block h-[600px] relative w-full">
          {/* Floating UI Elements over 3D space */}
          <div className="absolute top-10 right-0 glass-card p-4 rounded-custom border-gold/20 animate-pulse-slow">
            <div className="text-gold text-xs font-bold mb-1">STRESS LEVEL</div>
            <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gold w-1/4"></div>
            </div>
            <div className="text-[10px] mt-1 text-gray-500">DECREASING...</div>
          </div>
          <div className="absolute bottom-20 left-10 glass-card p-4 rounded-custom border-brand/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <div className="text-brand text-xs font-bold uppercase">Energy State</div>
                <div className="text-xl font-bold">OPTIMAL</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
