/* src/components/TestimonialsCarousel.tsx */
import { motion } from 'motion/react';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      text: 'Exceptional service! They picked up my BMW, serviced it perfectly, and delivered it back the same day. Transparent pricing and professional staff.',
      service: 'Full Service'
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'Best car detailing service in the city. My car looks brand new after their premium wash and ceramic coating. Highly recommended!',
      service: 'Premium Detailing'
    },
    {
      name: 'Amit Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'Quick AC repair service. They diagnosed the issue correctly and fixed it within hours. Very reasonable pricing compared to others.',
      service: 'AC Service'
    }
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-muted">Trusted by thousands of vehicle owners</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-surface p-6 border border-white/10"
            >
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-warning">⭐</span>
                ))}
              </div>
              <p className="mt-4 text-muted">"{testimonial.text}"</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted">{testimonial.location}</div>
                </div>
                <div className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
                  {testimonial.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
