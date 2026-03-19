import { motion } from 'framer-motion';

/**
 * FeatureCard - displays a gadget/feature with icon, title, description.
 */
const FeatureCard = ({ icon: Icon, title, description, badge, gradient }) => {
  return (
    <motion.div
      className="glass-card p-6 flex flex-col gap-4 group cursor-pointer"
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    >
      {/* Icon container */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ background: gradient || 'rgba(57,255,20,0.1)' }}
      >
        {Icon && (
          <Icon
            size={28}
            className="text-neonGreen group-hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>

      {/* Badge */}
      {badge && (
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-neonGreen/10 text-neonGreen w-fit border border-neonGreen/20">
          {badge}
        </span>
      )}

      {/* Text */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-neonGreen transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
