/* src/routes/PackagesPage.tsx */
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const packages = [
  {
    id: 'basic',
    name: 'Basic Care',
    tagline: 'Essential Maintenance',
    price: '₹2,999',
    originalPrice: '₹3,999',
    period: '/month',
    description: 'Perfect for daily commuters who need reliable, basic automotive care.',
    features: [
      'Monthly oil change',
      'Basic exterior wash',
      'Brake system check',
      'Battery health test',
      'Tire pressure monitoring',
      'Fluid level inspection',
      '1 emergency service call',
      'Basic interior cleaning'
    ],
    additionalBenefits: [
      'Free pickup & delivery',
      '48-hour service guarantee',
      'SMS service reminders'
    ],
    popular: false,
    savings: 'Save ₹1,000',
    icon: '🚗',
    color: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/20',
    buttonStyle: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    id: 'complete',
    name: 'Complete Care',
    tagline: 'Comprehensive Protection',
    price: '₹5,999',
    originalPrice: '₹7,999', 
    period: '/month',
    description: 'Our most popular plan for car owners who want complete peace of mind.',
    features: [
      'Everything in Basic Care',
      'AC service & repair',
      'Tyre rotation & balancing',
      'Engine diagnostic scan',
      'Premium interior detailing',
      'Paint protection spray',
      '3 emergency service calls',
      'Brake pad replacement (if needed)',
      'Air filter replacement',
      'Spark plug inspection'
    ],
    additionalBenefits: [
      'Priority booking slots',
      '24-hour turnaround',
      'Dedicated service advisor',
      'Quarterly performance report'
    ],
    popular: true,
    savings: 'Save ₹2,000',
    icon: '⭐',
    color: 'from-accent/10 to-accent/20',
    borderColor: 'border-accent/30',
    buttonStyle: 'bg-accent hover:bg-accent/90'
  },
  {
    id: 'premium',
    name: 'Premium Care',
    tagline: 'Luxury Treatment',
    price: '₹9,999',
    originalPrice: '₹12,999',
    period: '/month',
    description: 'VIP treatment for luxury vehicles and discerning car owners.',
    features: [
      'Everything in Complete Care',
      'Ceramic coating maintenance',
      'Premium paint correction',
      'Leather conditioning',
      'Engine bay detailing',
      'Unlimited emergency calls',
      'Complimentary loaner car',
      'Home service available',
      'Advanced diagnostics',
      'Performance tuning',
      'Chrome polishing',
      'Headlight restoration'
    ],
    additionalBenefits: [
      'Same-day service',
      'VIP customer support',
      'Annual vehicle health report',
      'Concierge pickup/delivery'
    ],
    popular: false,
    savings: 'Save ₹3,000',
    icon: '👑',
    color: 'from-gold/10 to-yellow-500/10',
    borderColor: 'border-gold/20',
    buttonStyle: 'bg-gold hover:bg-gold/90 text-black'
  }
];

const billingOptions = [
  { id: 'monthly', label: 'Monthly', multiplier: 1 },
  { id: 'quarterly', label: 'Quarterly', multiplier: 3, discount: 10 },
  { id: 'annual', label: 'Annual', multiplier: 12, discount: 20 }
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    package: 'Complete Care',
    rating: 5,
    text: 'Best investment for my car! The Complete Care package keeps my vehicle in perfect condition.',
    location: 'Mumbai'
  },
  {
    name: 'Priya Singh', 
    package: 'Premium Care',
    rating: 5,
    text: 'The Premium Care package is worth every penny. My car always looks and runs like new.',
    location: 'Delhi'
  },
  {
    name: 'Amit Shah',
    package: 'Basic Care', 
    rating: 5,
    text: 'Great value for money! The Basic Care plan covers all my essential maintenance needs.',
    location: 'Bangalore'
  }
];

const faqs = [
  {
    question: 'Can I upgrade or downgrade my package?',
    answer: 'Yes, you can change your package at any time. The new plan will take effect from your next billing cycle.'
  },
  {
    question: 'What if I need services beyond my package?',
    answer: 'Additional services are available at discounted rates for package subscribers. We\'ll always inform you of any extra charges beforehand.'
  },
  {
    question: 'Is there a contract period?',
    answer: 'No long-term contracts required. You can cancel or modify your plan with 30 days notice.'
  },
  {
    question: 'Do you service all car brands?',
    answer: 'Yes, our certified technicians are trained to work on all major car brands and models.'
  }
];

export default function PackagesPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const selectedBilling = billingOptions.find(option => option.id === billingCycle);

  const calculatePrice = (price: string, originalPrice: string) => {
    const numPrice = parseInt(price.replace('₹', '').replace(',', ''));
    const numOriginalPrice = parseInt(originalPrice.replace('₹', '').replace(',', ''));
    
    let finalPrice = numPrice;
    let finalOriginalPrice = numOriginalPrice;
    
    if (selectedBilling && selectedBilling.discount) {
      finalPrice = Math.round(numPrice * selectedBilling.multiplier * (1 - selectedBilling.discount / 100));
      finalOriginalPrice = numOriginalPrice * selectedBilling.multiplier;
    } else if (selectedBilling) {
      finalPrice = numPrice * selectedBilling.multiplier;
      finalOriginalPrice = numOriginalPrice * selectedBilling.multiplier;
    }
    
    return {
      price: `₹${finalPrice.toLocaleString('en-IN')}`,
      originalPrice: `₹${finalOriginalPrice.toLocaleString('en-IN')}`
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg via-surface/30 to-bg">
      
      {/* Billing Toggle */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-8">Choose Your Billing Cycle</h2>
            <div className="inline-flex rounded-2xl bg-surface p-2 border border-white/10">
              {billingOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setBillingCycle(option.id)}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all ${
                    billingCycle === option.id
                      ? 'bg-accent text-white shadow-lg'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {option.label}
                  {option.discount && (
                    <span className="absolute -top-2 -right-2 bg-success text-white text-xs px-2 py-1 rounded-full">
                      -{option.discount}%
                    </span>
                  )}
                </button>
              ))}
            </div>
            {selectedBilling?.discount && (
              <p className="mt-4 text-sm text-success">
                🎉 Save {selectedBilling.discount}% with {selectedBilling.label.toLowerCase()} billing!
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={billingCycle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-8 lg:grid-cols-3"
            >
              {packages.map((pkg, index) => {
                const pricing = calculatePrice(pkg.price, pkg.originalPrice);
                
                return (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`relative rounded-3xl border p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${
                      pkg.popular
                        ? 'border-accent bg-gradient-to-br from-accent/5 to-accent/10 shadow-xl shadow-accent/20 scale-[1.05]'
                        : 'border-white/10 bg-surface hover:border-accent/30'
                    }`}
                  >
                    {/* Popular Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-6 py-2 text-sm font-bold text-white shadow-lg">
                        🔥 Most Popular
                      </div>
                    )}

                    {/* Savings Badge */}
                    <div className="absolute -top-4 -right-4 rounded-full bg-success px-4 py-2 text-sm font-bold text-white shadow-lg">
                      {pkg.savings}
                    </div>

                    {/* Package Header */}
                    <div className="text-center mb-8">
                      <div className="text-4xl mb-4">{pkg.icon}</div>
                      <h3 className="text-2xl font-bold">{pkg.name}</h3>
                      <p className="text-accent font-semibold">{pkg.tagline}</p>
                      <p className="text-sm text-muted mt-2 leading-relaxed">{pkg.description}</p>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold text-accent">{pricing.price}</span>
                        <div className="text-left">
                          <div className="text-xs text-muted line-through">{pricing.originalPrice}</div>
                          <div className="text-sm text-muted">{pkg.period}</div>
                        </div>
                      </div>
                      {selectedBilling?.discount && (
                        <div className="mt-2 text-sm text-success">
                          Save ₹{(parseInt(pricing.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pricing.price.replace('₹', '').replace(',', ''))).toLocaleString('en-IN')} with {selectedBilling.label.toLowerCase()} plan!
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-bold text-sm uppercase tracking-wide mb-4">
                        What's Included:
                      </h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start text-sm"
                          >
                            <span className="mr-3 mt-0.5 text-success flex-shrink-0">✓</span>
                            <span className="text-muted">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Additional Benefits */}
                    <div className="mb-8 p-4 bg-surface-alt/30 rounded-xl">
                      <h4 className="font-semibold text-sm mb-3 text-accent">Additional Benefits:</h4>
                      <ul className="space-y-2">
                        {pkg.additionalBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-xs text-muted">
                            <span className="mr-2 text-warning">⭐</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full rounded-xl py-4 text-center font-bold transition-all shadow-lg ${pkg.buttonStyle}`}
                    >
                      Choose {pkg.name}
                    </motion.a>

                    {/* Money Back Guarantee */}
                    <div className="mt-4 text-center text-xs text-muted">
                      💯 30-day money-back guarantee
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted">Everything you need to know about our service packages</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-white/10 bg-surface overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-surface-alt/50 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className={`transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10"
                    >
                      <div className="p-6 text-muted">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-accent to-accent/80 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Keep Your Car in Perfect Condition?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of satisfied customers who trust TorqueCare for their automotive needs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-accent transition-colors hover:bg-white/90"
              >
                Start Your Package Today
              </motion.a>
              <motion.a
                href="tel:+911234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition-colors hover:bg-white hover:text-accent"
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
