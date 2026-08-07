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
    value: 'Backed by',
    label: 'A-Rated Retrocession',
    detail: 'ASR Syndicate 2454 leader',
    color: 'text-sky-400',
    glow: 'bg-sky-400/10',
  },
  {
    icon: TrendingUp,
    value: '$33.4M',
    label: 'Insurance Revenue',
    detail: 'FY2025, up 17% YoY',
    color: 'text-amber-400',
    glow: 'bg-amber-400/10',
  },
  {
    icon: Building2,
    value: '$437M',
    label: 'Total Equity',
    detail: 'Combined position',
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

      {/* Center hero metric - Net Premium Income Line Chart */}
      <Link
        href="#portfolio"
        className="showcase-hero-metric group/hero"
      >
        <div className="showcase-hero-glow" aria-hidden="true" />
        <div className="relative z-10 w-full">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
            Net Premium Income Growth
          </p>

          {/* Animated Line Chart */}
          <div className="relative mt-6 h-28 px-4">
            {/* Grid lines */}
            <div className="absolute inset-0">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 border-t border-white/5"
                  style={{ top: `${i * 33.33}%` }}
                />
              ))}
            </div>

            {/* SVG Line Path */}
            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Gradient for area under line */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(52, 211, 153)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgb(52, 211, 153)" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Area under curve */}
              <path
                className="showcase-line-area"
                d="M 10 45 Q 30 52, 50 55 Q 70 35, 90 20 L 90 100 L 10 100 Z"
                fill="url(#lineGradient)"
              />

              {/* Main line */}
              <path
                className="showcase-line-path"
                d="M 10 45 Q 30 52, 50 55 Q 70 35, 90 20"
                fill="none"
                stroke="rgb(52, 211, 153)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Data points */}
            {[
              { x: 10, y: 45, year: '2024', amount: '$24.1M', note: 'Full Year', labelBelow: true },
              { x: 50, y: 55, year: '2025', amount: '$15.1M', note: 'Full Year', labelBelow: true },
              { x: 90, y: 20, year: '2026', amount: '$18.9M', note: 'YTD (30 June 2026)', labelBelow: true },
            ].map((point, i) => (
              <div
                key={point.year}
                className="showcase-data-point absolute"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  animationDelay: `${0.8 + i * 0.2}s`,
                }}
              >
                <div className="relative">
                  {/* Point circle */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2">
                    <div className="h-3 w-3 rounded-full border-2 border-emerald-400 bg-emerald-400/80 shadow-lg shadow-emerald-400/50" />
                  </div>
                  {/* Label */}
                  <div className={`absolute -translate-x-1/2 whitespace-nowrap text-center ${point.labelBelow ? 'translate-y-6' : '-translate-y-14'}`}>
                    <p className="text-sm font-bold text-white drop-shadow-lg">{point.amount}</p>
                    <p className="text-[11px] font-medium text-white/50">{point.year}</p>
                    {point.note && (
                      <p className="text-[10px] font-medium text-white/40">{point.note}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-1.5 text-emerald-400">
            <TrendingUp className="size-3.5" />
            <span className="text-xs font-semibold tracking-wide">
              Strong 2026 momentum - YTD exceeds 2025
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
