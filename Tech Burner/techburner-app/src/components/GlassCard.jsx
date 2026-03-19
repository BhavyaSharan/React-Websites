import { motion } from 'framer-motion';

/**
 * Reusable GlassCard component
 * Uses the .glass-card CSS class for glassmorphism effect.
 */
const GlassCard = ({ children, className = '', onClick, neon = false }) => {
  return (
    <motion.div
      className={`glass-card ${neon ? 'neon-border' : ''} ${className}`}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
