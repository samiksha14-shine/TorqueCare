/* src/components/CTASection.tsx */
import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent via-accent/90 to-accent-alt py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white mb-6">
              🚀 Book Now & Save Up to ₹2,000
            </div>
            
            <h2 className="text-4xl font-bold text-white leading-tight md:text-5xl">
              Ready to Experience
              <span className="block">Premium Auto Care?</span>
            </h2>
            
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Join over 10,000 satisfied customers who trust TorqueCare for reliable, 
              professional automotive services. Get your free inspection and quote today.
            </p>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                Free Pickup & Delivery
              </div>
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                30-Day Warranty
              </div>
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                Same-Day Service
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-accent transition-all hover:bg-white/95 hover:shadow-xl"
              >
                Book Free Inspection
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </motion.a>
              
              <motion.a
                href="tel:+911234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
              >
                <span className="mr-2">📞</span>
                Call Now: +91 12345 67890
              </motion.a>
            </div>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-sm text-white/70">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-white/70">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Interactive Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 shadow-2xl">
              {/* Special Offer Badge */}
              <div className="absolute -top-4 -right-4 rounded-full bg-warning px-4 py-2 text-sm font-bold text-black">
                Limited Time!
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get Instant Quote
                </h3>
                
                {/* Quick Form */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg bg-white/20 border border-white/30 px-4 py-3 text-white placeholder:text-white/70 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-lg bg-white/20 border border-white/30 px-4 py-3 text-white placeholder:text-white/70 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <select className="w-full rounded-lg bg-white/20 border border-white/30 px-4 py-3 text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20">
                    <option value="" className="text-black">Select Service</option>
                    <option value="full-service" className="text-black">Full Service</option>
                    <option value="detailing" className="text-black">Premium Detailing</option>
                    <option value="ac-service" className="text-black">AC Service</option>
                    <option value="custom" className="text-black">Custom Package</option>
                  </select>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-lg bg-white px-6 py-3 font-bold text-accent transition-all hover:bg-white/95 hover:shadow-lg"
                  >
                    Get Free Quote Now
                  </motion.button>
                </form>

                {/* Additional Info */}
                <div className="mt-6 text-sm text-white/80">
                  <p>📧 Instant quote delivered to your email</p>
                  <p className="mt-1">⏰ Response within 15 minutes</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute -bottom-4 -left-4 rounded-2xl bg-success px-4 py-2 text-sm font-semibold text-white shadow-lg"
            >
              💰 Save up to ₹2,000
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -3, 0] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -top-4 -left-8 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-accent shadow-lg"
            >
              🚚 Free Pickup
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Urgency & Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-white">
            <span className="mr-3 h-2 w-2 animate-pulse rounded-full bg-success"></span>
            <span className="text-sm">156 customers booked services in the last 24 hours</span>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <div>🏆 ISO 9001 Certified</div>
            <div>🛡️ Insured Services</div>
            <div>⭐ 4.9/5 Rating</div>
            <div>🔧 Expert Technicians</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
