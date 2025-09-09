/* src/components/StatsSection.tsx */
import { motion } from 'motion/react';

export default function StatsSection() {
  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '50,000+', label: 'Services Completed' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '24/7', label: 'Emergency Support' },
  ];

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
         <p className="mt-2 text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              From routine maintenance to premium detailing, our certified technicians deliver 
              exceptional automotive care with guaranteed satisfaction and transparent pricing.
            </p>
         <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-accent md:text-4xl">{stat.number}</div>
              <div className="mt-2 text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
