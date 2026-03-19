import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);

  // Particle animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(57,255,20,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57,255,20,${p.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden tech-grid">
      {/* Particle canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonGreen/5 rounded-full blur-3xl pulse-green pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-neonGreen/4 rounded-full blur-3xl pulse-green pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neonGreen/30 bg-neonGreen/5 text-neonGreen text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 bg-neonGreen rounded-full animate-pulse" />
          India&apos;s #1 Tech YouTube Channel
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Exploring the{' '}
          <span className="neon-text">Future</span>
          {' '}of Tech
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={item} className="text-white/60 text-lg sm:text-xl font-light tracking-widest mb-10">
          Gadgets &bull; Experiments &bull; Innovation
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="https://www.youtube.com/@TechBurner"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <Play size={18} fill="#0A0A0A" />
            Watch Latest Tech
          </motion.a>
          <Link to="/ecosystem">
            <motion.span
              className="btn-secondary"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Eco-System
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest font-light">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
