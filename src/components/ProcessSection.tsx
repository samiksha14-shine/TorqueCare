/* src/components/ProcessSection.tsx */
import { motion } from 'motion/react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Book Online',
      description: 'Schedule your service online or call us. Choose date, time, and location.',
      icon: '📱'
    },
    {
      number: '02', 
      title: 'Free Pickup',
      description: 'Our trained driver picks up your vehicle from your preferred location.',
      icon: '🚗'
    },
    {
      number: '03',
      title: 'Expert Service',
      description: 'Certified technicians service your car with genuine parts and advanced tools.',
      icon: '🔧'
    },
    {
      number: '04',
      title: 'Quality Check',
      description: 'Thorough quality inspection and road test before delivery.',
      icon: '✅'
    },
    {
      number: '05',
      title: 'Delivery',
      description: 'Your car is delivered back to you, serviced and ready to drive.',
      icon: '🏠'
    }
  ];

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-muted">Simple, transparent, and convenient</p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 text-2xl text-white">
                  {step.icon}
                </div>
                <div className="mt-4 text-2xl font-bold text-accent">{step.number}</div>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
