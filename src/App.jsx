import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ControlSection, LiveLimitless, Features, YourVoice, ShiftRealityCTA, Waitlist, Footer } from './components/Sections'

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handler = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (id.length > 1) {
        e.preventDefault()
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b12] via-[#0b0c18] to-[#090a10] text-white relative">
      {/* Soft background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.25),transparent_60%)] blur-[80px]" />
        <div className="absolute right-[-10%] top-[35%] h-[35vh] w-[35vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),transparent_60%)] blur-[80px]" />
        <div className="absolute left-1/3 bottom-[10%] h-[30vh] w-[30vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_60%)] blur-[80px]" />
      </div>

      <Navbar />
      <Hero />
      <main>
        <ControlSection />
        <LiveLimitless />
        <section id="our-mission" className="relative py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold">Our Mission</h3>
            <p className="mt-3 text-white/80">We create soulful AI that helps you re-pattern from the inside out—so your external life reflects your deepest truth. Gentle, ethical, and designed for long-term transformation.</p>
          </div>
        </section>
        <Features />
        <YourVoice />
        <ShiftRealityCTA />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}

export default App
