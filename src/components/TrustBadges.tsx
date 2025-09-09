import { motion } from 'motion/react';

const trustBadges = [
  { icon: '🏆', text: 'ISO 9001 Certified', desc: 'Quality management standards' },
  { icon: '🛡️', text: 'Genuine Parts Only', desc: 'OEM and branded components' },
  { icon: '⏰', text: 'Same Day Service', desc: 'Quick turnaround time' },
  { icon: '🚚', text: 'Free Pickup & Drop', desc: 'Doorstep convenience' },
  { icon: '📞', text: '24/7 Support', desc: 'Round-the-clock assistance' },
  { icon: '💳', text: 'Transparent Pricing', desc: 'No hidden charges' }
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Why Choose TorqueCare?</h2>
          <p className="text-muted">Trusted by thousands for reliable, professional automotive services</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-surface border border-white/10 hover:border-accent/30 transition-colors"
            >
              <div className="text-3xl mb-3">{badge.icon}</div>
              <h3 className="font-semibold text-sm">{badge.text}</h3>
              <p className="text-xs text-muted mt-1">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
