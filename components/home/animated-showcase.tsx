import Link from 'next/link'
import { ArrowUpRight, Globe2, ShieldCheck, TrendingUp, Building2, Users } from 'lucide-react'

const stats = [
  {
    icon: Globe2,
    value: '112',
    label: 'Markets',
    detail: 'Facultative & treaty combined',
    color: 'text-emerald-400',
    glow: 'bg-emerald-400/10',
  },
  {
    icon: ShieldCheck,
    value: 'A-Rated',
    label: 'Retrocession',
    detail: 'ASR Syndicate 2454 leader',
    color: 'text-sky-400',
    glow: 'bg-sky-400/10',
  },
  {
    icon: TrendingUp,
    value: '$33.4M',
    label: 'Insurance Revenue',
    detail: 'FY2025 audited, up 17% YoY',
    color: 'text-amber-400',
    glow: 'bg-amber-400/10',
  },
  {
    icon: Building2,
    value: '$437M',
    label: 'Total Equity',
    detail: 'Audited combined position',
    color: 'text-violet-400',
    glow: 'bg-violet-400/10',
  },
  {
    icon: Users,
    value: '25+',
    label: 'Professionals',
    detail: 'Across 5 specialist classes',
    color: 'text-rose-400',
    glow: 'bg-rose-400/10',
  },
]

export function AnimatedShowcase() {
  return (
    <div
      data-mouse-parallax
      data-parallax-depth="6"
      className="modern-showcase-stage"
      aria-label="Global RE key metrics"
    >
      {/* Background pattern */}
      <div className="showcase-bg-pattern" aria-hidden="true" />

      {/* Top row — 2 cards */}
      <div className="showcase-stats-row">
        {stats.slice(0, 2).map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>

      {/* Center hero metric */}
      <Link
        href="#portfolio"
        className="showcase-hero-metric group/hero"
      >
        <div className="showcase-hero-glow" aria-hidden="true" />
        <div className="relative z-10">
          <p className="font-display text-5xl font-black tracking-tight text-white lg:text-6xl">
            $287.5M
          </p>
          <p className="mt-2 text-sm font-medium text-white/50">
            Portfolio Capacity
          </p>
          <div className="mt-3 flex items-center gap-1.5 text-emerald-400">
            <ArrowUpRight className="size-3.5" />
            <span className="text-xs font-semibold tracking-wide">
              A-Rated Retrocession Support
            </span>
          </div>
        </div>
      </Link>

      {/* Bottom row — 3 cards */}
      <div className="showcase-stats-row showcase-stats-row-3">
        {stats.slice(2).map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i + 2} />
        ))}
      </div>
    </div>
  )
}

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number]
  index: number
}) {
  const Icon = stat.icon
  return (
    <div
      className={`showcase-stat-card group/stat`}
      style={{ animationDelay: `${0.1 + index * 0.08}s` }}
    >
      <div className={`absolute -top-px left-6 right-6 h-px ${stat.glow}`} />
      <div className="flex items-start gap-3.5">
        <div
          className={`flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] transition-colors duration-300 group-hover/stat:bg-white/[0.08]`}
        >
          <Icon className={`size-4 ${stat.color}`} />
        </div>
        <div className="min-w-0">
          <p className="font-display text-xl font-bold tracking-tight text-white">
            {stat.value}
          </p>
          <p className="text-[13px] font-medium text-white/45">{stat.label}</p>
          <p className="mt-1 text-[11px] leading-relaxed text-white/30">
            {stat.detail}
          </p>
        </div>
      </div>
    </div>
  )
}
