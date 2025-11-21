import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.45),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
      </div>

      {/* Spline 3D asset */}
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="text-sm font-medium tracking-wider uppercase text-violet-300/90">Manifest with AI</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Unlock Your
              <span className="block bg-gradient-to-r from-violet-300 via-white to-blue-300 bg-clip-text text-transparent"> Limitless Potential</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
              Experience hyper-personalized AI activations that gently rewire subconscious patterns—so you can align your beliefs, emotions, and actions with the reality you choose.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-violet-500/90 hover:bg-violet-400 text-white px-6 py-3 text-base font-semibold shadow-[0_0_40px_rgba(167,139,250,0.35)] hover:shadow-[0_0_60px_rgba(167,139,250,0.6)] transition-all duration-200 hover:scale-[1.04]">
                Try for Free
              </a>
              <a href="#waitlist" className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 text-white/90 hover:text-white px-6 py-3 text-base font-semibold backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-[1.03]">
                Get Early Access
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60">Available on the App Store · Google Play coming soon</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto w-[90%] max-w-md"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-violet-500/20 via-fuchsia-400/10 to-blue-400/20 blur-2xl rounded-3xl" />
              <div className="relative rounded-[28px] p-4 bg-white/5 backdrop-blur-xl border border-white/15 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6),0_0_80px_rgba(167,139,250,0.2)]">
                <div className="aspect-[9/19.5] w-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden border border-white/10">
                  <div className="h-full w-full grid place-items-center text-white/70">
                    <div className="text-center px-6">
                      <div className="text-xs uppercase tracking-widest text-violet-300/80">Supermind</div>
                      <div className="mt-2 text-2xl font-bold">Subconscious Reprogramming</div>
                      <div className="mt-2 text-sm text-white/60">Tap to begin your activation</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
