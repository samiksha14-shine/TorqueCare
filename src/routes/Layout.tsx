// src/routes/Layout.tsx
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-bg text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-lg font-semibold tracking-tight cursor-pointer" onClick={() => navigate('/')}>
            TorqueCare
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden gap-6 md:flex">
            <NavLink to="/" end className="text-muted hover:text-foreground">Home</NavLink>
            <NavLink to="/services" className="text-muted hover:text-foreground">Services</NavLink>
            <NavLink to="/packages" className="text-muted hover:text-foreground">Packages</NavLink>
            <NavLink to="/about" className="text-muted hover:text-foreground">About</NavLink>
            <NavLink to="/contact" className="text-muted hover:text-foreground">Contact</NavLink>
          </nav>

          {/* Desktop Book Now */}
          <a href="/contact" className="hidden md:inline-block rounded-md bg-accent px-3 py-2 text-sm text-black hover:opacity-90">
            Book now
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-muted hover:text-foreground"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-white/10 bg-bg/90 backdrop-blur overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                <NavLink 
                  to="/" 
                  end 
                  className="block px-4 py-3 text-lg rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🏠 Home
                </NavLink>
                <NavLink 
                  to="/services" 
                  className="block px-4 py-3 text-lg rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🔧 Services
                </NavLink>
                <NavLink 
                  to="/packages" 
                  className="block px-4 py-3 text-lg rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  📦 Packages
                </NavLink>
                <NavLink 
                  to="/about" 
                  className="block px-4 py-3 text-lg rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ℹ️ About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className="block px-4 py-3 text-lg rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  📞 Contact
                </NavLink>

                
                {/* Mobile Book Now Button */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center py-4 rounded-lg bg-accent text-black font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book Service Now
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} TorqueCare · All rights reserved
      </footer>
    </div>
  );
}
