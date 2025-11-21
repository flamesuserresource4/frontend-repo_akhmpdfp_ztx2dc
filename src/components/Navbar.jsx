import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Our Mission', href: '#our-mission' },
    { label: 'Features', href: '#features' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'backdrop-blur-xl bg-white/5 border-b border-white/10' : 'bg-transparent'} `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-white/90 hover:text-white text-lg">
            supermind
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-full bg-violet-500/90 hover:bg-violet-400 text-white px-4 py-2 text-sm font-medium shadow-[0_0_30px_rgba(167,139,250,0.35)] hover:shadow-[0_0_40px_rgba(167,139,250,0.55)] transition-all duration-200 hover:scale-[1.03]">
              Try for Free
            </a>
          </div>
          <div className="md:hidden">
            <a href="#cta" className="inline-flex items-center rounded-full bg-violet-500/90 hover:bg-violet-400 text-white px-4 py-2 text-sm font-medium shadow-[0_0_30px_rgba(167,139,250,0.35)] transition-all duration-200 hover:scale-[1.03]">
              Try for Free
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
