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

      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          {/* Left: Content */}
          <div className="hero-content relative z-10 flex flex-col gap-6">
            {/* Headline */}
            <h1 className="hero-headline animate-fade-up animation-delay-100 max-w-2xl text-balance text-4xl font-bold leading-[1.08] text-white lg:text-5xl xl:text-[3.4rem]">
              Specialist Capacity for{' '}
              <span className="hero-gradient-text">Reinsurance Risk</span>
            </h1>

            {/* Description */}
            <p className="hero-description animate-fade-up animation-delay-200 max-w-lg text-pretty text-base leading-relaxed text-white/55 lg:text-lg">
              {portfolioScopeStatement} A defined reinsurance platform with
              Supported by an A-rated retrocession panel and global market reach.
            </p>

            {/* Trust indicators */}
            <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-3">
              {[
                { icon: Globe2, label: '112 Markets', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                { icon: ShieldCheck, label: 'Supported by an A-rated retrocession panel', color: 'text-sky-400', bg: 'bg-sky-400/10' },
              ].map(({ icon: Icon, label, color, bg }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2.5 rounded-full border border-white/[0.06] ${bg} px-4 py-2`}
                >
                  <Icon className={`size-4 ${color}`} />
                  <span className="text-sm font-medium tracking-wide text-white/70">{label}</span>
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
