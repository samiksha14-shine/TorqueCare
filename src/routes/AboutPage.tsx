/* src/routes/AboutPage.tsx */
import { motion } from 'motion/react';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & Chief Technician',
    experience: '15+ Years',
    specialization: 'Engine Diagnostics & Performance',
    image: '/api/placeholder/300/300',
    bio: 'Former BMW and Mercedes-Benz certified technician with expertise in luxury vehicle maintenance.'
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Director',
    experience: '12+ Years',
    specialization: 'Fleet Management & Quality Control',
    image: '/api/placeholder/300/300',
    bio: 'Operations expert with background in automotive supply chain and customer service excellence.'
  },
  {
    name: 'Amit Patel',
    role: 'Lead Technician',
    experience: '10+ Years',
    specialization: 'Electrical Systems & Diagnostics',
    image: '/api/placeholder/300/300',
    bio: 'Electrical systems specialist with advanced certifications in modern vehicle technologies.'
  },
  {
    name: 'Meera Singh',
    role: 'Customer Experience Manager',
    experience: '8+ Years',
    specialization: 'Service Coordination & Support',
    image: '/api/placeholder/300/300',
    bio: 'Dedicated to ensuring every customer receives exceptional service and support throughout their journey.'
  }
];

const milestones = [
  { year: '2019', title: 'Company Founded', desc: 'Started with a vision to revolutionize automotive care' },
  { year: '2020', title: 'First 1,000 Customers', desc: 'Built trust through exceptional service quality' },
  { year: '2021', title: 'Fleet Services Launch', desc: 'Expanded to serve commercial vehicle fleets' },
  { year: '2022', title: 'Digital Platform', desc: 'Launched advanced booking and tracking system' },
  { year: '2023', title: '10,000+ Customers', desc: 'Became the region\'s most trusted auto service' },
  { year: '2024', title: 'Premium Services', desc: 'Added luxury vehicle and specialty services' },
  { year: '2025', title: 'Expansion', desc: 'Opening new service centers across the region' }
];

const values = [
  {
    icon: '🎯',
    title: 'Precision',
    description: 'Every service performed with meticulous attention to detail and technical accuracy.'
  },
  {
    icon: '🤝',
    title: 'Trust',
    description: 'Building long-term relationships through transparent pricing and reliable service.'
  },
  {
    icon: '⚡',
    title: 'Convenience',
    description: 'Making automotive care effortless with pickup, delivery, and digital tracking.'
  },
  {
    icon: '🔧',
    title: 'Expertise',
    description: 'Certified technicians with deep knowledge of all vehicle makes and models.'
  }
];

const certifications = [
  { name: 'ISO 9001:2015', desc: 'Quality Management Systems' },
  { name: 'ASE Certified', desc: 'Automotive Service Excellence' },
  { name: 'Environmental Compliance', desc: 'Eco-friendly practices' },
  { name: 'Insurance Approved', desc: 'Authorized repair facility' }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story');
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg via-surface/30 to-bg">
      
      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-bg/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-center gap-2">
            {[
              { id: 'story', label: 'Our Story', icon: '📖' },
              { id: 'team', label: 'Our Team', icon: '👥' },
              { id: 'values', label: 'Our Values', icon: '💎' },
              { id: 'process', label: 'Our Process', icon: '⚙️' }
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

      {/* Our Story */}
      {activeTab === 'story' && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                <p className="text-muted mb-6 text-lg leading-relaxed">
                  TorqueCare was founded in 2019 with a simple belief: automotive care should be 
                  transparent, convenient, and performed with the highest standards of precision. 
                  What started as a small team of passionate technicians has grown into the region's 
                  most trusted automotive service provider.
                </p>
                <p className="text-muted mb-8 text-lg leading-relaxed">
                  We've served over 10,000 customers, completed 50,000+ services, and built a 
                  reputation for excellence that spans across individual car owners to large fleet operators.
                </p>

                {/* Mission & Vision */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 rounded-2xl bg-surface border border-white/10">
                    <h3 className="font-bold text-accent mb-2">Our Mission</h3>
                    <p className="text-sm text-muted">To make automotive care effortless, transparent, and exceptional for every customer.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-surface border border-white/10">
                    <h3 className="font-bold text-accent mb-2">Our Vision</h3>
                    <p className="text-sm text-muted">To be the most trusted automotive service provider, known for innovation and excellence.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="rounded-3xl bg-gradient-to-br from-accent/20 to-accent/10 p-8 border border-accent/20">
                    <h3 className="text-xl font-bold mb-6 text-center">Company Milestones</h3>
                    <div className="space-y-4">
                      {milestones.map((milestone, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 hover:bg-surface transition-colors"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">
                            {milestone.year.slice(-2)}
                          </div>
                          <div>
                            <div className="font-semibold">{milestone.title}</div>
                            <div className="text-sm text-muted">{milestone.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
            >
              {[
                { number: '10,000+', label: 'Happy Customers', icon: '😊' },
                { number: '50,000+', label: 'Services Completed', icon: '🔧' },
                { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
                { number: '30+', label: 'Expert Technicians', icon: '👨‍🔧' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-surface border border-white/10">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Our Team */}
      {activeTab === 'team' && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
              <p className="text-muted">Certified professionals dedicated to automotive excellence</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-surface border border-white/10 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                    <div className="h-32 w-32 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-4xl">
                      👨‍🔧
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-accent font-medium">{member.role}</p>
                      <p className="text-sm text-muted mt-1">{member.experience}</p>
                      <p className="text-xs text-muted mt-2">{member.specialization}</p>
                    </div>
                    
                    {selectedMember === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <p className="text-sm text-muted leading-relaxed">{member.bio}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-center mb-8">Our Certifications</h3>
              <div className="grid gap-6 md:grid-cols-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl bg-surface border border-white/10">
                    <div className="text-2xl mb-2">🏆</div>
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-sm text-muted mt-1">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Our Values */}
      {activeTab === 'values' && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-surface border border-white/10 hover:border-accent/30 transition-all hover:shadow-lg"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Process */}
      {activeTab === 'process' && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
              <p className="text-muted">How we ensure exceptional results every time</p>
            </motion.div>

            <div className="relative">
              {/* Process Steps */}
              <div className="grid gap-8 md:grid-cols-6">
                {[
                  { step: '01', title: 'Inspect', desc: 'Comprehensive vehicle assessment', icon: '🔍' },
                  { step: '02', title: 'Estimate', desc: 'Transparent pricing breakdown', icon: '📋' },
                  { step: '03', title: 'Approve', desc: 'Customer confirmation', icon: '✅' },
                  { step: '04', title: 'Service', desc: 'Expert technical work', icon: '🔧' },
                  { step: '05', title: 'Quality Check', desc: 'Rigorous testing & validation', icon: '🎯' },
                  { step: '06', title: 'Deliver', desc: 'Clean, serviced vehicle return', icon: '🚗' }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 text-2xl text-white">
                      {process.icon}
                    </div>
                    <div className="text-2xl font-bold text-accent mb-2">{process.step}</div>
                    <h3 className="font-bold mb-2">{process.title}</h3>
                    <p className="text-sm text-muted">{process.desc}</p>
                    
                    {index < 5 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent -translate-y-1/2" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Coverage Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16 grid gap-8 md:grid-cols-3"
              >
                <div className="text-center p-8 rounded-2xl bg-surface border border-white/10">
                  <div className="text-3xl mb-4">🌆</div>
                  <h3 className="font-bold mb-2">Service Coverage</h3>
                  <p className="text-muted">Urban core + nearby suburbs, 7 days a week</p>
                </div>
                <div className="text-center p-8 rounded-2xl bg-surface border border-white/10">
                  <div className="text-3xl mb-4">⏰</div>
                  <h3 className="font-bold mb-2">Response Time</h3>
                  <p className="text-muted">Same-day pickup, 24-48 hour service completion</p>
                </div>
                <div className="text-center p-8 rounded-2xl bg-surface border border-white/10">
                  <div className="text-3xl mb-4">🛡️</div>
                  <h3 className="font-bold mb-2">Quality Guarantee</h3>
                  <p className="text-muted">30-day warranty on all services and repairs</p>
                </div>
              </motion.div>
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
              Experience the TorqueCare Difference
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of satisfied customers who trust us with their automotive care needs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-accent hover:bg-white/90"
              >
                Schedule Your Service
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-accent"
              >
                View Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
