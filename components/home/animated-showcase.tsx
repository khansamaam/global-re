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
    label: 'Security',
    detail: 'Backed by A-Rated Security',
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

      {/* Center hero metric - Net Premium Income Chart */}
      <Link
        href="#portfolio"
        className="showcase-hero-metric group/hero"
      >
        <div className="showcase-hero-glow" aria-hidden="true" />
        <div className="relative z-10 w-full">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
            Net Premium Income
          </p>

          {/* Animated Bar Chart */}
          <div className="mt-4 flex items-end justify-between gap-3 px-2">
            {[
              { year: '2024', value: 28, amount: '$28M', color: 'bg-sky-400/60' },
              { year: '2025', value: 33.4, amount: '$33.4M', color: 'bg-emerald-400/70' },
              { year: '2026 YTD', value: 18, amount: '$18M', color: 'bg-amber-400/80' },
            ].map((data, i) => {
              const heightPercent = (data.value / 33.4) * 100
              return (
                <div key={data.year} className="flex flex-1 flex-col items-center gap-2">
                  <div className="relative w-full">
                    <div
                      className={`showcase-chart-bar ${data.color} relative overflow-hidden rounded-t-md transition-all duration-700 ease-out`}
                      style={{
                        height: `${heightPercent * 1.2}px`,
                        animationDelay: `${0.2 + i * 0.15}s`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                    </div>
                    <p className="mt-2 text-center font-display text-sm font-bold text-white">
                      {data.amount}
                    </p>
                  </div>
                  <p className="text-center text-[10px] font-medium text-white/40">
                    {data.year}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-emerald-400">
            <TrendingUp className="size-3.5" />
            <span className="text-xs font-semibold tracking-wide">
              +19% YoY Growth
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
