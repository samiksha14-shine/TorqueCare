import { motion } from 'motion/react';

const services = [
  {
    icon: '🔧',
    title: 'Full Service & Maintenance',
    tagline: 'Complete Care Package',
    description: 'Comprehensive vehicle inspection and maintenance to keep your car running at peak performance.',
    features: [
      'Multi-point inspection (50+ checks)',
      'Engine oil & filter change',
      'Brake system inspection',
      'Battery & electrical testing',
      'Fluid top-ups & replacements',
      'Tire pressure & tread check'
    ],
    pricing: {
      starting: '₹2,999',
      duration: '2-4 hours',
      warranty: '30 days'
    },
    popular: false,
    savings: null
  },
  {
    icon: '✨',
    title: 'Premium Detailing',
    tagline: 'Showroom Fresh Look',
    description: 'Professional interior and exterior detailing with paint protection options.',
    features: [
      'Deep interior shampooing',
      'Paint correction & polishing',
      'Ceramic coating application',
      'Scratch removal & touch-ups',
      'Leather conditioning',
      'UV protection treatment'
    ],
    pricing: {
      starting: '₹4,999',
      duration: '4-6 hours',
      warranty: '6 months'
    },
    popular: true,
    savings: 'Save ₹1,000'
  },
  {
    icon: '❄️',
    title: 'AC Service & Repair',
    tagline: 'Cool Comfort Guaranteed',
    description: 'Complete AC system diagnosis, cleaning, and repair for optimal cooling performance.',
    features: [
      'AC gas refill & leak detection',
      'Compressor health check',
      'Filter replacement',
      'Duct cleaning & sanitization',
      'Temperature calibration',
      'Performance testing'
    ],
    pricing: {
      starting: '₹1,999',
      duration: '1-3 hours',
      warranty: '90 days'
    },
    popular: false,
    savings: null
  },
  {
    icon: '🛞',
    title: 'Tyre & Wheel Care',
    tagline: 'Perfect Alignment',
    description: 'Professional tyre services including rotation, balancing, and precision wheel alignment.',
    features: [
      'Computerized wheel alignment',
      'Tyre rotation & balancing',
      'Pressure monitoring setup',
      'Tread depth analysis',
      'Puncture repair',
      'Premium brand tyres available'
    ],
    pricing: {
      starting: '₹999',
      duration: '1-2 hours',
      warranty: '3 months'
    },
    popular: false,
    savings: null
  }
];

const trustIndicators = [
  { icon: '🏆', text: 'ISO 9001 Certified' },
  { icon: '🛡️', text: 'Genuine Parts Only' },
  { icon: '⏰', text: 'Same Day Service' },
  { icon: '🚚', text: 'Free Pickup & Drop' }
];

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-bg to-surface py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm text-accent mb-4">
            🔥 Most Trusted Auto Services
          </div>
          <h2 className="text-4xl font-bold md:text-5xl bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Premium Auto Care Services
          </h2>
          <p className="mt-4 text-lg text-muted max-w-3xl mx-auto">
            Professional automotive services with transparent pricing, expert technicians, and guaranteed satisfaction. 
            From routine maintenance to premium detailing, we've got your vehicle covered.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm"
        >
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center text-muted">
              <span className="mr-2">{indicator.icon}</span>
              {indicator.text}
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative rounded-2xl border p-8 transition-all duration-300 ${
                service.popular
                  ? 'border-accent bg-gradient-to-br from-accent/5 to-accent/10 shadow-xl shadow-accent/20'
                  : 'border-white/10 bg-surface hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-8 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white">
                  ⭐ Most Popular
                </div>
              )}

              {/* Savings Badge */}
              {service.savings && (
                <div className="absolute -top-4 right-8 rounded-full bg-success px-4 py-2 text-sm font-semibold text-white">
                  {service.savings}
                </div>
              )}

              {/* Service Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-3xl group-hover:bg-accent/20 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-accent font-medium">{service.tagline}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">{service.pricing.starting}</div>
                  <div className="text-xs text-muted">starting from</div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-muted leading-relaxed">{service.description}</p>

              {/* Features List */}
              <div className="mt-6">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-accent mb-3">
                  What's Included:
                </h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <span className="mr-2 mt-0.5 text-success flex-shrink-0">✓</span>
                      <span className="text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="mt-6 flex items-center justify-between text-sm">
                <div className="flex space-x-6">
                  <div>
                    <span className="text-muted">Duration:</span>
                    <span className="ml-1 font-medium">{service.pricing.duration}</span>
                  </div>
                  <div>
                    <span className="text-muted">Warranty:</span>
                    <span className="ml-1 font-medium text-success">{service.pricing.warranty}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-3">
                <a
                  href="/contact"
                  className={`flex-1 rounded-lg py-3 px-4 text-center font-semibold transition-all ${
                    service.popular
                      ? 'bg-accent text-white hover:bg-accent/90 shadow-lg'
                      : 'bg-accent/10 text-accent hover:bg-accent hover:text-white'
                  }`}
                >
                  Book Service
                </a>
                <button className="rounded-lg border border-accent/30 px-4 py-3 text-accent transition-colors hover:bg-accent/10">
                  Learn More
                </button>
              </div>

              {/* Quick Info */}
              <div className="mt-4 flex items-center justify-center text-xs text-muted">
                <span className="mr-4">🚚 Free pickup & delivery</span>
                <span>📞 24/7 support</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-accent/10 to-accent-alt/10 p-8 text-center border border-accent/20"
        >
          <h3 className="text-2xl font-bold">Need a Custom Service Package?</h3>
          <p className="mt-2 text-muted">
            We offer tailored maintenance plans for fleet vehicles, luxury cars, and special requirements.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="rounded-lg bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+911234567890"
              className="rounded-lg border border-accent px-8 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
            >
              Call Now: +91 12345 67890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
