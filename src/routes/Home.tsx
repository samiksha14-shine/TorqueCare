/* src/routes/Home.tsx - Fixed Alignment */
import { motion } from 'motion/react';
import { Link } from 'react-router-dom'
import TrustBadges from '@/components/TrustBadges';
import StatsSection from '@/components/StatsSection';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      {/* Fixed Hero Section - Proper Alignment */}
      <section className="relative min-h-[90vh] flex items-center bg-black text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format&fit=crop&q=80" 
            alt="Luxury Sports Car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent"></div>
        </div>

        {/* Main Content Container - Fixed Grid */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
              
              {/* Left Content - Takes 7 columns on large screens */}
              <div className="lg:col-span-7">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl"
                >
                  {/* Heading */}
                  <div className="mb-8">
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-none mb-4">
                      <span className="block text-white">Premium Auto Cars At Your Doorstep</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                      Experience automotive excellence with certified technicians, 
                      transparent pricing, and convenient doorstep service.
                    </p>
                  </div>

                  {/* Feature Grid - Fixed 2x2 Layout */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 h-20">
                      <span className="text-2xl flex-shrink-0">🚗</span>
                      <div className="min-w-0">
                        <div className="font-semibold text-white text-sm">Free Pickup</div>
                        <div className="text-xs text-gray-400">Doorstep convenience</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 h-20">
                      <span className="text-2xl flex-shrink-0">⚡</span>
                      <div className="min-w-0">
                        <div className="font-semibold text-white text-sm">Same Day</div>
                        <div className="text-xs text-gray-400">Quick turnaround</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 h-20">
                      <span className="text-2xl flex-shrink-0">🛡️</span>
                      <div className="min-w-0">
                        <div className="font-semibold text-white text-sm">30-Day Warranty</div>
                        <div className="text-xs text-gray-400">Quality guaranteed</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 h-20">
                      <span className="text-2xl flex-shrink-0">⭐</span>
                      <div className="min-w-0">
                        <div className="font-semibold text-white text-sm">4.9/5 Rating</div>
                        <div className="text-xs text-gray-400">10,000+ customers</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                 <div className="flex flex-col sm:flex-row gap-4 mb-6">
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to="/contact"
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-accent/90 shadow-xl"
    >
      Book Service Now <span>→</span>
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to="/services"
      className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
    >
      View Services
    </Link>
  </motion.div>
</div>
                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-success">✓</span>
                      ISO Certified
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-success">✓</span>
                      Insured Service
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-success">✓</span>
                      24/7 Support
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Stats Area (5 columns) */}
              <div className="lg:col-span-5 hidden lg:block">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative h-96 flex items-center justify-center"
                >
                 
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile Stats - Show at Bottom */}
          <div className="lg:hidden px-4 pb-8">
            <div className="flex justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center flex-1 max-w-[120px]">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-xs text-gray-300">Services</div>
              </div>
              <div className="bg-accent/80 backdrop-blur-sm rounded-xl p-4 text-center flex-1 max-w-[120px]">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-xs text-white">Rating</div>
              </div>
              <div className="bg-success/80 backdrop-blur-sm rounded-xl p-4 text-center flex-1 max-w-[120px]">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-xs text-white">Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <TrustBadges />
      <StatsSection />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsCarousel />
      <CTASection />
    </>
  );
}
