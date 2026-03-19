import React, { useEffect } from 'react';
import Lenis from 'lenis';

import HeroExperience from './components/HeroExperience';
import TransformationJourney from './components/TransformationJourney';
import WellnessEcosystem from './components/WellnessEcosystem';
import InteractivePrograms from './components/InteractivePrograms';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-charcoal text-white min-h-screen">
      <HeroExperience />
      <TransformationJourney />
      <WellnessEcosystem />
      <InteractivePrograms />
    </div>
  );
}

export default App;
