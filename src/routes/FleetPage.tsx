/* src/routes/FleetPage.tsx */
import { motion } from 'motion/react';
import { useState } from 'react';

const fleetSolutions = [
  {
    id: 'enterprise',
    icon: '🏢',
    title: 'Enterprise Fleet Solutions',
    tagline: 'For Large Corporations',
    description: 'Comprehensive fleet management for companies with 50+ vehicles. Advanced analytics, cost optimization, and dedicated support.',
    features: [
      'Bulk pricing discounts up to 40%',
      'Priority scheduling & express lanes',
      'Real-time fleet management dashboard',
      'Advanced analytics & reporting',
      'Dedicated fleet coordinator',
      'Custom maintenance schedules',
      'Predictive maintenance alerts',
      'Insurance claim management',
      'Driver training programs',
      'Emergency roadside assistance'
    ],
    pricing: 'Custom pricing based on fleet size',
    fleetSize: '50+ vehicles',
    savings: 'Save up to 40%',
    popular: false
  },
  {
    id: 'commercial',
    title: 'Commercial Fleet Care',
    icon: '🚐',
    tagline: 'For Growing Businesses',
    description: 'Perfect for delivery services, logistics companies, and commercial vehicle operators with moderate fleet sizes.',
    features: [
      'Volume discounts up to 25%',
      'Same-day service guarantee',
      'Fleet tracking & monitoring',
      'Monthly performance reports',
      'Preventive maintenance scheduling',
      'Multi-location service support',
      'Digital service records',
      'Cost per mile analytics',
      'Vehicle inspection services',
      '24/7 emergency support'
    ],
    pricing: 'Starting ₹15,000/month',
    fleetSize: '10-50 vehicles',
    savings: 'Save up to 25%',
    popular: true
  },
  {
    id: 'taxi',
    title: 'Taxi & Ride-Share',
    icon: '🚖',
    tagline: 'For Transportation Services',
    description: 'Specialized services for taxi operators, ride-share companies, and passenger transportation businesses.',
    features: [
      '24/7 emergency support',
      'Quick 2-hour turnaround',
      'Loaner vehicle program',
      'Revenue optimization analytics',
      'Driver vehicle inspection',
      'Commercial insurance support',
      'Peak hour priority service',
      'Mobile service units',
      'Fuel efficiency optimization',
      'Compliance documentation'
    ],
    pricing: 'Starting ₹8,000/month',
    fleetSize: '5-25 vehicles',
    savings: 'Minimize downtime',
    popular: false
  }
];

const industries = [
  {
    name: 'Logistics & Delivery',
    icon: '📦',
    vehicles: 'Trucks, Vans, Cargo vehicles',
    challenges: 'High mileage, frequent use, cargo protection',
    solutions: 'Preventive maintenance, route optimization, cargo area servicing'
  },
  {
    name: 'Transportation Services',
    icon: '🚌',
    vehicles: 'Buses, Shuttles, Passenger vehicles',
    challenges: 'Safety compliance, passenger comfort, regulatory requirements',
    solutions: 'Safety inspections, comfort enhancements, compliance documentation'
  },
  {
    name: 'Construction & Heavy Equipment',
    icon: '🚜',
    vehicles: 'Construction vehicles, Heavy machinery',
    challenges: 'Harsh environments, heavy-duty operations, equipment reliability',
    solutions: 'Heavy-duty maintenance, specialized repairs, equipment optimization'
  },
  {
    name: 'Emergency Services',
    icon: '🚑',
    vehicles: 'Ambulances, Fire trucks, Police vehicles',
    challenges: 'Critical reliability, rapid response readiness, specialized equipment',
    solutions: 'Priority service, emergency repairs, specialized maintenance'
  }
];

const benefits = [
  {
    icon: '💰',
    title: 'Cost Reduction',
    description: 'Reduce fleet operating costs by up to 30% through optimized maintenance schedules and bulk pricing.',
    metrics: 'Average savings: ₹2.5L per vehicle annually'
  },
  {
    icon: '📊',
    title: 'Fleet Analytics',
    description: 'Real-time insights into vehicle performance, maintenance costs, and operational efficiency.',
    metrics: 'Improve efficiency by 25% on average'
  },
  {
    icon: '🔧',
    title: 'Preventive Maintenance',
    description: 'Proactive maintenance scheduling to prevent breakdowns and extend vehicle lifespan.',
    metrics: 'Reduce breakdowns by 60%'
  },
  {
    icon: '📱',
    title: 'Digital Management',
    description: 'Complete digital fleet management with mobile access, reports, and real-time tracking.',
    metrics: 'Save 15 hours per week on admin tasks'
  }
];

const testimonials = [
  {
    company: 'LogiTech Delivery Solutions',
    person: 'Rajesh Mehta, Fleet Manager',
    fleetSize: '120 vehicles',
    testimonial: 'TorqueCare has transformed our fleet management. Our operational costs are down 35% and vehicle uptime is at an all-time high.',
    results: '35% cost reduction, 99.2% uptime',
    industry: 'Logistics'
  },
  {
    company: 'Metro Cab Services',
    person: 'Priya Sharma, Operations Director',
    fleetSize: '85 vehicles',
    testimonial: 'The 24/7 support and quick turnaround times have been game-changers for our taxi business. Minimal downtime means maximum revenue.',
    results: '40% less downtime, ₹50L annual savings',
    industry: 'Transportation'
  },
  {
    company: 'BuildCorp Construction',
    person: 'Amit Kumar, Equipment Manager',
    fleetSize: '45 vehicles',
    testimonial: 'Specialized heavy equipment maintenance that actually understands our industry needs. Reliable service for our demanding operations.',
    results: '50% fewer equipment failures',
    industry: 'Construction'
  }
];

export default function FleetPage() {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('solutions');

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg via-surface/30 to-bg">
      {/* Main Header */}
      <section className="py-16 bg-gradient-to-br from-accent/10 via-bg to-surface/50">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center rounded-full bg-accent/10 px-6 py-3 text-accent mb-6">
              🚛 Comprehensive Fleet Management Solutions
            </div>
            
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Professional Fleet Management
            </h1>
            
            <p className="mt-6 text-lg text-muted max-w-3xl mx-auto">
              Streamline your fleet operations with our comprehensive vehicle maintenance solutions. 
              From small businesses to large enterprises, we keep your vehicles running efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-bg/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-center gap-2">
            {[
              { id: 'solutions', label: 'Fleet Solutions', icon: '🚗' },
              { id: 'industries', label: 'Industries', icon: '🏭' },
              { id: 'benefits', label: 'Benefits', icon: '📊' },
              { id: 'testimonials', label: 'Success Stories', icon: '⭐' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-accent text-white shadow-lg'
                    : 'text-muted hover:text-foreground hover:bg-surface'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Solutions */}
      {activeTab === 'solutions' && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Fleet Solutions for Every Business</h2>
              <p className="text-muted">Choose the perfect fleet management solution based on your business size and needs</p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-3">
              {fleetSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-3xl border p-8 transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                    solution.popular
                      ? 'border-accent bg-gradient-to-br from-accent/5 to-accent/10 shadow-xl scale-[1.05]'
                      : 'border-white/10 bg-surface hover:border-accent/30'
                  }`}
                  onClick={() => setSelectedSolution(selectedSolution === solution.id ? null : solution.id)}
                >
                  {solution.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-6 py-2 text-sm font-bold text-white">
                      Most Popular
                    </div>
                  )}

                  <div className="absolute -top-4 -right-4 rounded-full bg-success px-4 py-2 text-sm font-bold text-white">
                    {solution.savings}
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <h3 className="text-xl font-bold">{solution.title}</h3>
                    <p className="text-accent font-medium">{solution.tagline}</p>
                    <p className="text-sm text-muted mt-2">{solution.description}</p>
                  </div>

                  <div className="mb-6 p-4 bg-surface-alt/30 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Fleet Size:</span>
                      <span className="text-accent font-bold">{solution.fleetSize}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Pricing:</span>
                      <span className="text-foreground font-bold">{solution.pricing}</span>
                    </div>
                  </div>

                  <div className={`transition-all duration-300 ${selectedSolution === solution.id ? 'max-h-96 opacity-100' : 'max-h-16 opacity-70'} overflow-hidden`}>
                    <h4 className="font-bold text-sm uppercase tracking-wide mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, selectedSolution === solution.id ? solution.features.length : 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="mr-2 mt-0.5 text-success flex-shrink-0">✓</span>
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {!selectedSolution && solution.features.length > 3 && (
                      <p className="text-xs text-accent mt-2">Click to see {solution.features.length - 3} more features...</p>
                    )}
                  </div>

                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    className={`mt-6 block w-full rounded-xl py-4 text-center font-bold transition-all ${
                      solution.popular
                        ? 'bg-accent text-white hover:bg-accent/90'
                        : 'bg-accent/10 text-accent hover:bg-accent hover:text-white'
                    }`}
                  >
                    Get Custom Quote
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries */}
      {activeTab === 'industries' && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-muted">Specialized fleet management solutions tailored to your industry needs</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-surface p-8 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold">{industry.name}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-semibold text-accent">Vehicle Types:</span>
                      <p className="text-sm text-muted">{industry.vehicles}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-accent">Key Challenges:</span>
                      <p className="text-sm text-muted">{industry.challenges}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-accent">Our Solutions:</span>
                      <p className="text-sm text-muted">{industry.solutions}</p>
                    </div>
                  </div>

                  <a 
                    href="/contact"
                    className="mt-6 inline-block rounded-lg bg-accent/10 px-4 py-2 text-sm text-accent hover:bg-accent hover:text-white transition-colors"
                  >
                    Learn More
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {activeTab === 'benefits' && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Fleet Management?</h2>
              <p className="text-muted">Measurable benefits that impact your bottom line</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-surface border border-white/10 hover:border-accent/30 transition-colors"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="text-xs font-semibold text-accent bg-accent/10 rounded-full px-3 py-2">
                    {benefit.metrics}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Success Stories */}
      {activeTab === 'testimonials' && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Fleet Success Stories</h2>
              <p className="text-muted">Real results from real businesses across different industries</p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-surface p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold">{testimonial.company}</h3>
                      <p className="text-sm text-muted">{testimonial.person}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-accent font-bold">{testimonial.fleetSize}</div>
                      <div className="text-xs text-muted">{testimonial.industry}</div>
                    </div>
                  </div>

                  <p className="text-muted italic mb-6">"{testimonial.testimonial}"</p>

                  <div className="bg-accent/10 rounded-xl p-4">
                    <div className="text-sm font-semibold text-accent mb-1">Results Achieved:</div>
                    <div className="text-sm font-bold">{testimonial.results}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent to-accent/80 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Fleet Operations?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get a custom fleet management solution designed specifically for your business needs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-accent hover:bg-white/90"
              >
                Get Custom Fleet Quote
              </motion.a>
              <motion.a
                href="tel:+911234567890"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-accent"
              >
                <span className="mr-2">📞</span>
                Call Fleet Specialist
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
