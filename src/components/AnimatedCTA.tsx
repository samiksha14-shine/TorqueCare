import { motion } from 'motion/react';

export default function AnimatedCTA() {
  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <motion.a
        href="#contact"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-white shadow-lg hover:bg-red-500"
      >
        Get a Free Inspection →
      </motion.a>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm text-gray-300"
      >
        24/7 pickup, transparent pricing, same-day delivery
      </motion.p>
    </div>
  );
}
