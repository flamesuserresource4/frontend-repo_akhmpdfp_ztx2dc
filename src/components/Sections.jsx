import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Briefcase, Plane, HeartPulse, Sparkles, Wallet, Instagram, Linkedin, Twitter, Music4 } from 'lucide-react'

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function ControlSection() {
  return (
    <section id="how-it-works" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
                <span className="block">Control Your Mind</span>
                <span className="block bg-gradient-to-r from-violet-300 via-white to-blue-300 bg-clip-text text-transparent">Manifest Your Reality</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/80 text-lg">
              Under the surface, old stories can keep you looping the same patterns. Our AI listens, learns, and adapts—crafting gentle, daily micro-activations that dissolve resistance and align your inner state with your vision. You’ll feel lighter, clearer, and more capable of receiving what you truly want.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const lifeAreas = [
  {
    icon: Heart,
    title: 'Love & Relationships',
    desc: 'Open your heart, communicate clearly, and attract aligned connections.',
  },
  { icon: Briefcase, title: 'Professional', desc: 'Clarify your path, amplify focus, and grow with integrity and ease.' },
  { icon: Plane, title: 'Lifestyle & Freedom', desc: 'Design a life you love with time, space, and true autonomy.' },
  { icon: HeartPulse, title: 'Wellness', desc: 'Regulate your nervous system and cultivate calm, vitality, and flow.' },
  { icon: Sparkles, title: 'Personal Growth', desc: 'Expand your identity, reframe beliefs, and step into your highest self.' },
  { icon: Wallet, title: 'Finances', desc: 'Shift scarcity into sufficiency and receive with confidence.' },
]

export function LiveLimitless() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Live Limitless</h3>
          <p className="mt-3 text-white/70">Design every area of your life.</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifeAreas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-left shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_80px_-15px_rgba(167,139,250,0.4)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/0 via-fuchsia-400/0 to-blue-400/0 group-hover:from-violet-500/10 group-hover:to-blue-400/10 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <a.icon className="h-6 w-6 text-violet-300" />
                  <div>
                    <h4 className="font-semibold text-white">{a.title}</h4>
                    <p className="mt-1 text-sm text-white/70">{a.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureRow({ title, copy, reverse = false }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <Reveal>
        <div>
          <h4 className="text-2xl sm:text-3xl font-bold text-white">{title}</h4>
          <p className="mt-3 text-white/80 leading-relaxed">{copy}</p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-violet-500/20 via-fuchsia-400/10 to-blue-400/20 blur-2xl rounded-3xl" />
          <div className="relative h-64 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl grid place-items-center text-white/70">
            <div className="flex items-center gap-2">
              <Music4 className="h-5 w-5 text-violet-300" />
              <span>Abstract UI mockup</span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export function Features() {
  const features = [
    {
      title: 'Hyper-Personalized Imagination Sessions',
      copy: 'Guided, cinematic sessions crafted by AI using your goals, language, and emotional patterns—so each journey lands exactly where it needs to.',
    },
    {
      title: 'AI-Powered Vibrational Intelligence',
      copy: 'Our engine detects emotional resonance and adapts the experience in real time, helping you anchor new states faster.',
      reverse: true,
    },
    {
      title: 'Superconscious Activations',
      copy: 'Short daily activations that quietly recondition your beliefs beneath conscious thought—steady and sustainable.',
    },
    {
      title: 'Daily Journals & AI Feedback',
      copy: 'Reflect with gentle prompts and receive precise feedback. Watch your insights compound as the system learns you.',
      reverse: true,
    },
  ]

  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {features.map((f, i) => (
          <FeatureRow key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}

export function YourVoice() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Your Mind, Your Voice</h3>
            <p className="mt-3 text-white/80">Listen in the voice that moves you most—yours. Clone your voice in minutes and let each activation speak to you with uncanny familiarity and care.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-violet-500/20 via-fuchsia-400/10 to-blue-400/20 blur-2xl rounded-3xl" />
            <div className="relative h-72 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl grid place-items-center">
              <button className="group relative inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white/90 hover:text-white hover:bg-white/15 transition-all duration-200 hover:scale-[1.03]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-300"></span>
                </span>
                Play Demo
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ShiftRealityCTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Shift Your Reality</h3>
          <p className="mt-3 text-white/80">As your vision evolves, your activations evolve with you. Keep refining. Keep aligning. Keep receiving.</p>
          <div className="mt-8">
            <a id="cta" href="#waitlist" className="inline-flex items-center justify-center rounded-full bg-violet-500/90 hover:bg-violet-400 text-white px-6 py-3 text-base font-semibold shadow-[0_0_40px_rgba(167,139,250,0.35)] hover:shadow-[0_0_60px_rgba(167,139,250,0.6)] transition-all duration-200 hover:scale-[1.04]">
              Try for Free
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Waitlist() {
  return (
    <section id="waitlist" className="relative py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Launching Summer 2025</h3>
          <p className="mt-3 text-white/80">Sign up to be notified when the app is ready for download.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" required placeholder="Enter your email" className="w-full sm:w-96 rounded-full bg-white/5 border border-white/15 px-5 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-violet-400/60" />
            <button className="relative inline-flex items-center justify-center rounded-full bg-violet-500/90 hover:bg-violet-400 text-white px-6 py-3 text-base font-semibold shadow-[0_0_40px_rgba(167,139,250,0.35)] hover:shadow-[0_0_70px_rgba(167,139,250,0.7)] transition-all duration-200 hover:scale-[1.04]">
              <span className="absolute inset-0 rounded-full border border-violet-300/40 animate-pulse"></span>
              <span className="relative">Get Early Access</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="relative py-10 border-t border-transparent">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-white/70">
        <div>
          <div className="font-semibold text-white">supermind</div>
          <div className="text-sm">Live Limitless</div>
        </div>
        <div className="text-center text-sm">
          contact@supermind.app • Available on the App Store • Pre-order on Google Play
        </div>
        <div className="flex items-center justify-end gap-4 text-sm">
          <a className="hover:text-white" href="#">Instagram</a>
          <a className="hover:text-white" href="#">TikTok</a>
          <a className="hover:text-white" href="#">X</a>
          <a className="hover:text-white" href="#">LinkedIn</a>
          <span className="mx-2">•</span>
          <a className="hover:text-white" href="#">Navigating Our Services</a>
          <a className="hover:text-white" href="#">Privacy Policy</a>
          <a className="hover:text-white" href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  )
}
