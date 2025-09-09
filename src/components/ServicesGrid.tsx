/* src/components/ServicesGrid.tsx */
import { motion } from 'motion/react';

export default function ServicesGrid() {
  const services = [
    {
      icon: '🔧',
      title: 'Full Service & Maintenance',
      description: 'Complete vehicle inspection, oil change, filter replacements, and preventive maintenance.',
      features: ['Engine diagnostics', 'Brake inspection', 'Fluid top-ups', '50+ point checklist'],
      price: 'Starting ₹2,999'
    },
    {
      icon: '✨',
      title: 'Premium Detailing',
      description: 'Interior and exterior deep cleaning with paint protection and ceramic coating options.',
      features: ['Paint correction', 'Interior shampoo', 'Ceramic coating', 'Scratch removal'],
      price: 'Starting ₹4,999'
    },
    {
      icon: '❄️',
      title: 'AC Service & Repair',
      description: 'Complete AC system diagnosis, repair, and maintenance for optimal cooling performance.',
      features: ['Gas refill', 'Filter replacement', 'Compressor check', 'Duct cleaning'],
      price: 'Starting ₹1,999'
    },
    {
      icon: '🛞',
      title: 'Tyre & Wheel Care',
      description: 'Tyre rotation, balancing, alignment, and replacement with premium brands.',
      features: ['Wheel alignment', 'Tyre rotation', 'Pressure check', 'Brand tyres'],
      price: 'Starting ₹999'
    },
    {
      icon: '🔋',
      title: 'Battery Service',
      description: 'Battery testing, replacement, and electrical system diagnostics.',
      features: ['Battery testing', 'Jump start', 'Electrical repair', 'Warranty coverage'],
      price: 'Starting ₹799'
    },
    {
      icon: '🛡️',
      title: 'Insurance Claims',
      description: 'Hassle-free insurance claim processing and cashless repair services.',
      features: ['Claim assistance', 'Cashless repair', 'Direct billing', 'Documentation'],
      price: 'No extra cost'
    }
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted">Comprehensive automotive care for every need</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-surface p-6 transition-all hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-muted">{service.description}</p>
              
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted">
                    <span className="mr-2 text-success">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 flex items-center justify-between">
                <span className="font-semibold text-accent">{service.price}</span>
                <a 
                  href="/contact"
                  className="rounded-lg bg-accent/10 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
