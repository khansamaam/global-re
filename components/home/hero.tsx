import Image from 'next/image'
import { Globe2, ShieldCheck, TrendingUp } from 'lucide-react'
import { AnimatedShowcase } from '@/components/home/animated-showcase'
import { portfolioScopeStatement } from '@/lib/site'

export function Hero() {
  return (
    <section className="modern-hero relative isolate overflow-hidden">
      {/* Refined gradient mesh background */}
      <div className="hero-gradient-mesh" aria-hidden="true" />
      <div className="hero-noise-overlay" aria-hidden="true" />

      {/* Subtle dot grid */}
      <div className="hero-dot-grid" aria-hidden="true" />

      {/* Ambient glow accents */}
      <div className="hero-glow-accent hero-glow-accent-gold" aria-hidden="true" />
      <div className="hero-glow-accent hero-glow-accent-teal" aria-hidden="true" />
      <div className="hero-glow-accent hero-glow-accent-indigo" aria-hidden="true" />

      {/* Background image with refined blend */}
      <div
        data-mouse-parallax
        data-parallax-depth="-8"
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero-global.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.12] mix-blend-screen"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          {/* Left: Content */}
          <div className="hero-content relative z-10 flex flex-col gap-7">
            {/* Eyebrow */}
            <div className="animate-fade-up">
              <div className="hero-eyebrow-badge inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2.5 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span className="text-[13px] font-medium tracking-wide text-white/70">
                  Global Reinsurance · Nevis HQ
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="hero-headline animate-fade-up animation-delay-100 max-w-3xl text-balance font-bold leading-[1.03] text-white">
              Specialist Capacity for{' '}
              <span className="hero-gradient-text">Reinsurance Risk</span>
            </h1>

            {/* Description */}
            <p className="hero-description animate-fade-up animation-delay-200 max-w-xl text-pretty text-lg leading-relaxed text-white/60 lg:text-xl">
              {portfolioScopeStatement} A defined reinsurance platform with
              A-rated retrocession support and global market reach.
            </p>

            {/* Trust indicators */}
            <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { icon: Globe2, label: '112 Markets', color: 'text-emerald-400' },
                { icon: ShieldCheck, label: 'A-Rated Security', color: 'text-sky-400' },
                { icon: TrendingUp, label: '$287.5M Portfolio', color: 'text-amber-400' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2.5 text-white/50">
                  <Icon className={`size-4 ${color}`} />
                  <span className="text-sm font-medium tracking-wide">{label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Animated showcase */}
          <div className="relative z-10 animate-fade-up animation-delay-200">
            <AnimatedShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
