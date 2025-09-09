/* src/routes/ContactPage.tsx */
import { motion } from 'motion/react';
import { useState } from 'react';

const contactMethods = [
  {
    icon: '📞',
    title: 'Phone Support',
    description: '24/7 customer support',
    details: '+91 12345 67890',
    action: 'Call Now',
    link: 'tel:+911234567890',
    available: 'Available 24/7'
  },
  {
    icon: '📧',
    title: 'Email Support',
    description: 'Get detailed assistance',
    details: 'support@torquecare.com',
    action: 'Send Email',
    link: 'mailto:support@torquecare.com',
    available: 'Response within 2 hours'
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    description: 'Quick chat support',
    details: '+91 98765 43210',
    action: 'Chat Now',
    link: 'https://wa.me/919876543210',
    available: 'Instant response'
  },
  {
    icon: '🚗',
    title: 'Emergency Service',
    description: 'Roadside assistance',
    details: '+91 11111 22222',
    action: 'Emergency Call',
    link: 'tel:+911111122222',
    available: '24/7 Emergency'
  }
];

const serviceAreas = [
  { area: 'Mumbai Central', time: '30-45 mins', popular: true },
  { area: 'Andheri & Suburbs', time: '45-60 mins', popular: true },
  { area: 'Thane & Navi Mumbai', time: '60-75 mins', popular: false },
  { area: 'Extended Mumbai', time: '75-90 mins', popular: false }
];

const faqs = [
  {
    question: 'How quickly can you pick up my vehicle?',
    answer: 'We typically arrange pickup within 2-4 hours of booking, depending on your location and our current schedule.'
  },
  {
    question: 'Do you provide cost estimates before starting work?',
    answer: 'Yes, we provide detailed cost estimates after our initial inspection and get your approval before proceeding with any work.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including cash, cards, UPI, digital wallets, and bank transfers.'
  },
  {
    question: 'Do you offer warranty on your services?',
    answer: 'Yes, all our services come with a 30-day warranty, and specific repairs may have extended warranty periods.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicleModel: '',
    location: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Thank you! We\'ll contact you within 15 minutes to confirm your service.');
    setFormData({
      name: '', email: '', phone: '', service: '', vehicleModel: '', 
      location: '', message: '', urgency: 'normal'
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg via-surface/30 to-bg">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-bg to-surface/50">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center rounded-full bg-accent/10 px-6 py-3 text-accent mb-6">
              📞 Get in Touch With Our Experts
            </div>
            
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Request a Free Inspection
            </h1>
            
            <p className="mt-6 text-xl text-muted max-w-3xl mx-auto">
              Share your details and get a same-day callback from our automotive experts. 
              We're here to help with all your vehicle care needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-muted">Choose the most convenient way to get in touch</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-surface border border-white/10 hover:border-accent/30 transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                <p className="text-muted mb-3">{method.description}</p>
                <div className="font-semibold text-accent mb-3">{method.details}</div>
                <a
                  href={method.link}
                  className="inline-block rounded-lg bg-accent/10 px-4 py-2 text-sm text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  {method.action}
                </a>
                <div className="text-xs text-muted mt-2">{method.available}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl bg-surface border border-white/10 p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Book Your Service</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-white/10 bg-bg px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-white/10 bg-bg px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-white/10 bg-bg px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="service" className="block mb-2 font-medium">Service Required *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-white/10 bg-bg px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      >
                        <option value="">Select a service</option>
                        <option value="full-service">Full Service & Maintenance</option>
                        <option value="detailing">Premium Detailing</option>
                        <option value="ac-service">AC Service & Repair</option>
                        <option value="tyre-service">Tyre & Wheel Care</option>
                        <option value="battery-service">Battery & Electrical</option>
                        <option value="insurance">Insurance Claims</option>
                        <option value="other">Other (specify in message)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="vehicleModel" className="block mb-2 font-medium">Vehicle Model</label>
                      <input
                        type="text"
                        id="vehicleModel"
                        name="vehicleModel"
                        value={formData.vehicleModel}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-bg px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="e.g., Honda City, Maruti Swift"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block mb-2 font-medium">Pickup Location *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-white/10 bg-bg px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Full address for vehicle pickup"
                    />
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block mb-2 font-medium">Service Urgency</label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/10 bg-bg px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="normal">Normal (2-3 days)</option>
                      <option value="priority">Priority (1-2 days)</option>
                      <option value="emergency">Emergency (Same day)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Additional Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-lg border border-white/10 bg-bg px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                      placeholder="Describe any specific issues or requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full rounded-xl bg-accent px-6 py-4 font-bold text-white transition-all hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></span>
                        Submitting Request...
                      </span>
                    ) : (
                      'Submit Service Request'
                    )}
                  </motion.button>

                  <p className="text-sm text-muted text-center">
                    🕒 We'll call you within 15 minutes to confirm your booking
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Service Areas & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Service Areas */}
              <div className="rounded-2xl bg-surface border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-4">Service Coverage Areas</h3>
                <div className="space-y-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-bg/50">
                      <div className="flex items-center gap-3">
                        <div className="text-accent">📍</div>
                        <div>
                          <div className="font-medium">{area.area}</div>
                          <div className="text-xs text-muted">Avg. pickup time: {area.time}</div>
                        </div>
                      </div>
                      {area.popular && (
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl bg-surface border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-white/10 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-bg/30 transition-colors"
                      >
                        <span className="font-medium">{faq.question}</span>
                        <span className={`transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                          ↓
                        </span>
                      </button>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-white/10 p-4 text-muted text-sm"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-gradient-to-r from-accent-alt/80 to-accent-alt py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Need Emergency Roadside Assistance?</h2>
            <p className="text-white/90 mb-6">
              Vehicle breakdown? Battery dead? We're available 24/7 for emergency services.
            </p>
            <a
              href="tel:+911111122222"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-accent-alt hover:bg-white/90 transition-colors"
            >
              <span className="text-xl">🚨</span>
              Call Emergency: +91 11111 22222
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
