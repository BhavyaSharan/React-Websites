import React from 'react';

export default function InteractivePrograms() {
  const programs = [
    {
      id: "coaching",
      type: "primary",
      delay: "0s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      tag: "Elite",
      subtitle: "ONLINE COACHING",
      title: "Online Coaching",
      theme: "Digital Ecosystem",
      backDesc: "24/7 Access to tailored workflows and metrics.",
      btnText: "Enter Program"
    },
    {
      id: "nutrition",
      type: "gold",
      delay: "-5s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
      tag: "Pure",
      subtitle: "NUTRITION PLANS",
      title: "Holistic Nutrition",
      theme: "Bio-Harmonization",
      backDesc: "Bio-individualized fueling strategies.",
      btnText: "Explore Menu"
    },
    {
      id: "training",
      type: "primary",
      delay: "-10s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />,
      tag: "Prime",
      subtitle: "PERSONAL TRAINING",
      title: "Personal Training",
      theme: "Elite Mentorship",
      backDesc: "One-on-one high-intensity mentorship.",
      btnText: "Book Session"
    },
    {
      id: "lifestyle",
      type: "gold",
      delay: "-15s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
      tag: "Meta",
      subtitle: "TRANSFORMATION",
      title: "Lifestyle Transformation",
      theme: "Identity Rebirth",
      backDesc: "Complete 12-week paradigm shift.",
      btnText: "Begin Journey"
    }
  ];

  return (
    <section className="relative min-h-screen py-16 md:py-24 holo-grid bg-brand-dark text-white selection:bg-brand-primary selection:text-brand-dark">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <header className="text-center mb-12 md:mb-24">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-primary mb-4 animate-glow-pulse">Premium Elite Access</h2>
          {/* RESPONSIVE FIX: fluid heading size */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold italic tracking-tighter mb-6">
            INTERACTIVE <span className="gold-gradient-text">PROGRAMS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg">
            Immersive digital training ecosystems designed for the elite. Select your path to total physical and mental optimization.
          </p>
        </header>

        {/* RESPONSIVE FIX: 2-col on mobile/tablet, 4-col on lg+ 
            Cube wrapper and face sizes scale down on smaller screens via
            the responsive CSS in globals.css */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8 justify-items-center">
          {programs.map((p) => {
            const isGold = p.type === 'gold';
            const colorClass = isGold ? 'text-brand-gold border-brand-gold hover:text-black hover:bg-brand-gold' : 'text-brand-primary border-brand-primary hover:text-black hover:bg-brand-primary';
            const shadowClass = isGold ? 'shadow-[0_0_25px_rgba(212,175,55,0.2)]' : 'glow-shadow';
            const faceBorder = isGold ? 'border-brand-gold/10' : 'border-brand-primary/10';

            return (
              <div key={p.id} className="program-card scene cursor-pointer relative group">
                <div className="cube-wrapper cube-rotate" style={{ animationDelay: p.delay }}>
                  <div className="cube">
                    {/* Front Face */}
                    <div className={`face front border-${isGold ? 'brand-gold/40' : 'brand-primary/40'} ${shadowClass}`}>
                      {/* RESPONSIVE FIX: icon scales down on small screens */}
                      <svg className={`w-10 h-10 md:w-16 md:h-16 ${isGold ? 'text-brand-gold' : 'text-brand-primary'} mb-2 md:mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {p.icon}
                      </svg>
                      <h3 className={`text-base md:text-xl font-bold tracking-widest uppercase ${isGold ? 'text-brand-gold' : ''}`}>{p.tag}</h3>
                      <p className={`text-[10px] md:text-xs ${isGold ? 'text-brand-gold' : 'text-brand-primary'} tracking-widest`}>{p.subtitle}</p>
                    </div>

                    {/* Content Inside (Back Face initially) */}
                    <div className={`face back border-${isGold ? 'brand-gold/20' : 'brand-primary/20'} bg-brand-card`}>
                      <div className="p-4 md:p-6 text-center">
                        <p className="text-xs md:text-sm text-gray-400 mb-4">{p.backDesc}</p>
                        <button className={`bg-${isGold ? 'brand-gold' : 'brand-primary'} text-black text-xs font-bold py-2 px-4 md:px-6 rounded-theme hover:bg-white transition-colors uppercase mt-4`}>
                          {p.btnText}
                        </button>
                      </div>
                    </div>

                    {/* Structural Faces */}
                    <div className={`face right ${faceBorder}`}></div>
                    <div className={`face left ${faceBorder}`}></div>
                    <div className={`face top ${faceBorder}`}></div>
                    <div className={`face bottom ${faceBorder}`}></div>
                  </div>
                </div>
                {/* RESPONSIVE FIX: smaller text on mobile */}
                <div className="mt-4 md:mt-8 text-center transition-transform transform group-hover:-translate-y-2">
                  <h4 className="text-sm md:text-lg font-bold">{p.title}</h4>
                  <span className={`${isGold ? 'text-brand-gold' : 'text-brand-primary'} text-xs tracking-tighter`}>{p.theme}</span>
                </div>
              </div>
            );
          })}
        </div>

        <footer className="mt-16 md:mt-32 text-center">
          {/* RESPONSIVE FIX: flex-col on very small screens */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 sm:space-x-4 border border-white/10 rounded-full px-6 sm:px-8 py-4 backdrop-blur-md text-center sm:text-left">
            <span className="text-sm font-light">Unsure which program fits your vision?</span>
            <a className="text-brand-primary font-bold text-sm underline underline-offset-4 hover:text-white transition-colors" href="#">Take the Archetype Quiz</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
