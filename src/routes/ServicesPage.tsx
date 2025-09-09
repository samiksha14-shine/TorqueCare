/* src/routes/ServicesPage.tsx */
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const services = [
  {
    id: 'full-service',
    icon: '🔧',
    title: 'Full Service & Maintenance',
    tagline: 'Complete Care Package',
    description: 'Comprehensive vehicle inspection and maintenance to keep your car running at peak performance with our certified technicians.',
    longDescription: 'Our full service package includes everything your vehicle needs to stay in optimal condition. We perform a comprehensive 50+ point inspection, checking all major systems including engine, transmission, brakes, suspension, and electrical components.',
    features: [
      'Multi-point inspection (50+ checks)',
      'Engine oil & filter change',
      'Brake system inspection',
      'Battery & electrical testing',
      'Fluid top-ups & replacements',
      'Tire pressure & tread check',
      'Air filter replacement',
      'Spark plug inspection'
    ],
    pricing: {
      starting: '₹2,999',
      duration: '2-4 hours',
      warranty: '30 days'
    },
    popular: false,
    savings: null,
    image: '/api/placeholder/400/300',
    category: 'maintenance'
  },
  {
    id: 'detailing',
    icon: '✨',
    title: 'Premium Detailing',
    tagline: 'Showroom Fresh Look',
    description: 'Professional interior and exterior detailing with paint protection options that make your car look brand new.',
    longDescription: 'Transform your vehicle with our premium detailing service. We use professional-grade products and techniques to restore your car\'s original shine while protecting it from environmental damage.',
    features: [
      'Deep interior shampooing',
      'Paint correction & polishing',
      'Ceramic coating application',
      'Scratch removal & touch-ups',
      'Leather conditioning',
      'UV protection treatment',
      'Chrome polishing',
      'Odor elimination'
    ],
    pricing: {
      starting: '₹4,999',
      duration: '4-6 hours',
      warranty: '6 months'
    },
    popular: true,
    savings: 'Save ₹1,000',
    image: '/api/placeholder/400/300',
    category: 'detailing'
  },
  {
    id: 'ac-service',
    icon: '❄️',
    title: 'AC Service & Repair',
    tagline: 'Cool Comfort Guaranteed',
    description: 'Complete AC system diagnosis, cleaning, and repair for optimal cooling performance in all weather conditions.',
    longDescription: 'Beat the heat with our comprehensive AC service. Our technicians use advanced diagnostic tools to identify issues and provide long-lasting solutions for your vehicle\'s cooling system.',
    features: [
      'AC gas refill & leak detection',
      'Compressor health check',
      'Filter replacement',
      'Duct cleaning & sanitization',
      'Temperature calibration',
      'Performance testing',
      'Blower motor inspection',
      'Thermostat calibration'
    ],
    pricing: {
      starting: '₹1,999',
      duration: '1-3 hours',
      warranty: '90 days'
    },
    popular: false,
    savings: null,
    image: '/api/placeholder/400/300',
    category: 'repair'
  },
  {
    id: 'tyre-service',
    icon: '🛞',
    title: 'Tyre & Wheel Care',
    tagline: 'Perfect Alignment',
    description: 'Professional tyre services including rotation, balancing, and precision wheel alignment for optimal performance.',
    longDescription: 'Ensure your safety and vehicle performance with our comprehensive tyre services. We use computerized equipment for precise alignment and balancing.',
    features: [
      'Computerized wheel alignment',
      'Tyre rotation & balancing',
      'Pressure monitoring setup',
      'Tread depth analysis',
      'Puncture repair',
      'Premium brand tyres available',
      'Valve replacement',
      'Performance tyre consultation'
    ],
    pricing: {
      starting: '₹999',
      duration: '1-2 hours',
      warranty: '3 months'
    },
    popular: false,
    savings: null,
    image: '/api/placeholder/400/300',
    category: 'maintenance'
  },
  {
    id: 'battery-service',
    icon: '🔋',
    title: 'Battery & Electrical',
    tagline: 'Power You Can Trust',
    description: 'Complete electrical system diagnostics, battery testing, and replacement with genuine parts and warranty.',
    longDescription: 'Keep your vehicle powered and running smoothly with our electrical services. We handle everything from battery replacement to complex electrical troubleshooting.',
    features: [
      'Battery health diagnosis',
      'Alternator testing',
      'Starter motor inspection',
      'Wiring harness check',
      'Jump start service',
      'Electrical component repair',
      'Fuse box maintenance',
      '24/7 emergency service'
    ],
    pricing: {
      starting: '₹799',
      duration: '1-2 hours',
      warranty: '1 year'
    },
    popular: false,
    savings: null,
    image: '/api/placeholder/400/300',
    category: 'repair'
  },
  {
    id: 'insurance',
    icon: '🛡️',
    title: 'Insurance Claims',
    tagline: 'Hassle-Free Processing',
    description: 'Complete insurance claim assistance and cashless repair services with direct billing to your insurance provider.',
    longDescription: 'Navigate insurance claims effortlessly with our expert assistance. We handle all paperwork and coordinate directly with insurance companies for seamless repairs.',
    features: [
      'Claim documentation assistance',
      'Cashless repair facility',
      'Direct insurance billing',
      'Damage assessment report',
      'Photo documentation',
      'Follow-up with insurers',
      'Quality assurance',
      'Claim status updates'
    ],
    pricing: {
      starting: 'No extra cost',
      duration: 'As needed',
      warranty: 'As per policy'
    },
    popular: false,
    savings: null,
    image: '/api/placeholder/400/300',
    category: 'insurance'
  }
];

const categories = [
  { id: 'all', name: 'All Services', icon: '🔧' },
  { id: 'maintenance', name: 'Maintenance', icon: '⚙️' },
  { id: 'detailing', name: 'Detailing', icon: '✨' },
  { id: 'repair', name: 'Repairs', icon: '🔧' },
  { id: 'insurance', name: 'Insurance', icon: '🛡️' }
];

const trustBadges = [
  { icon: '🏆', text: 'ISO 9001 Certified', desc: 'Quality management standards' },
  { icon: '🛡️', text: 'Genuine Parts Only', desc: 'OEM and branded components' },
  { icon: '⏰', text: 'Same Day Service', desc: 'Quick turnaround time' },
  { icon: '🚚', text: 'Free Pickup & Drop', desc: 'Doorstep convenience' },
  { icon: '📞', text: '24/7 Support', desc: 'Round-the-clock assistance' },
  { icon: '💳', text: 'Transparent Pricing', desc: 'No hidden charges' }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg via-surface/50 to-bg">


      {/* Category Filter */}
      <section className="py-8 bg-bg sticky top-16 z-40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-surface text-muted hover:text-foreground hover:bg-surface-alt border border-white/10'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-8 lg:grid-cols-2"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`group relative rounded-3xl border p-8 transition-all duration-500 hover:shadow-2xl ${
                    service.popular
                      ? 'border-accent bg-gradient-to-br from-accent/5 to-accent/10 shadow-xl shadow-accent/20'
                      : 'border-white/10 bg-surface hover:border-accent/30 hover:shadow-accent/10'
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-4 left-8 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg">
                      ⭐ Most Popular
                    </div>
                  )}

                  {/* Savings Badge */}
                  {service.savings && (
                    <div className="absolute -top-4 right-8 rounded-full bg-success px-4 py-2 text-sm font-semibold text-white shadow-lg">
                      {service.savings}
                    </div>
                  )}

                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
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
                  <p className="text-muted leading-relaxed mb-6">{service.description}</p>

                  {/* Features Grid */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-accent mb-4">
                      What's Included:
                    </h4>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {service.features.slice(0, expandedService === service.id ? service.features.length : 6).map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start text-sm"
                        >
                          <span className="mr-2 mt-0.5 text-success flex-shrink-0">✓</span>
                          <span className="text-muted">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {service.features.length > 6 && (
                      <button
                        onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                        className="mt-3 text-sm text-accent hover:underline"
                      >
                        {expandedService === service.id ? 'Show Less' : `+${service.features.length - 6} More`}
                      </button>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="flex items-center justify-between text-sm mb-6 p-4 bg-surface-alt/50 rounded-xl">
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
                  <div className="flex gap-3">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-1 rounded-xl py-4 px-6 text-center font-semibold transition-all ${
                        service.popular
                          ? 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25'
                          : 'bg-accent/10 text-accent hover:bg-accent hover:text-white'
                      }`}
                    >
                      Book Service
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-xl border border-accent/30 px-6 py-4 text-accent transition-colors hover:bg-accent/10"
                    >
                      Learn More
                    </motion.button>
                  </div>

                  {/* Quick Info */}
                  <div className="mt-4 flex items-center justify-center text-xs text-muted space-x-6">
                    <span className="flex items-center">
                      <span className="mr-1">🚚</span>
                      Free pickup & delivery
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">📞</span>
                      24/7 support
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-accent to-accent/80 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Need a Custom Service Package?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We offer tailored maintenance plans for fleet vehicles, luxury cars, and special requirements.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-accent transition-colors hover:bg-white/90"
              >
                Get Custom Quote
              </motion.a>
              <motion.a
                href="tel:+911234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-accent"
              >
                <span className="mr-2">📞</span>
                Call Now: +91 12345 67890
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
