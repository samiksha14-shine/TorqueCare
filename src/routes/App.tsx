import Hero3D from '@/components/Hero3D';
import AnimatedCTA from '@/components/AnimatedCTA';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

export default function App() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-lg font-semibold tracking-tight">TorqueCare</div>
          <nav className="hidden gap-6 md:flex">
            <a href="#services" className="text-gray-300 hover:text-white">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Book now</a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Precision car care. Same‑day results.
            </h1>
            <p className="mt-3 max-w-2xl text-gray-300">
              Concierge pickup, expert diagnostics, and finish that turns heads.
            </p>
            <AnimatedCTA />
          </div>
          <Hero3D />
        </section>

        <Services />
        <Testimonials />
        <ContactForm />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TorqueCare · All rights reserved
      </footer>
    </div>
  );
}
