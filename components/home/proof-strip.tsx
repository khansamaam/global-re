import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MarqueeStrip, MetricCountUp } from '@/components/home/motion'
import {
  financialYearPortfolio,
  portfolioScopeStatement,
  retrocessionSecurityPanel,
} from '@/lib/site'

const proofItems = [
  'Nevis headquarters',
  'Dubai representative office',
  `${financialYearPortfolio.year} Financial Highlights`,
  `${retrocessionSecurityPanel.year} A-rated security panel`,
  'Treaty and facultative placements',
  portfolioScopeStatement.replace('Global RE writes ', ''),
]

export function ProofStrip() {
  return (
    <section className="proof-motion-section relative isolate overflow-hidden border-y border-border bg-background">
      <div className="proof-motion-glow" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-px px-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="proof-metric-deck grid gap-px border-x border-border bg-border sm:grid-cols-3 lg:border-r-0">
          <div className="proof-metric-card flex flex-col justify-center bg-card p-5 text-left" data-gsap-item>
            <p className="eyebrow text-left text-muted-foreground">Markets reached</p>
            <p className="mt-3 text-left font-display text-3xl font-bold text-brand-indigo">
              <MetricCountUp value={112} />
            </p>
          </div>
          <div
            className="proof-metric-card flex flex-col justify-center bg-card p-5 text-left"
            data-gsap-item
            data-gsap-delay="0.06"
          >
            <p className="eyebrow text-left text-muted-foreground">Property share</p>
            <p className="mt-3 text-left font-display text-3xl font-bold text-brand-indigo">
              <MetricCountUp value={37} suffix="%" />
            </p>
          </div>
          <div
            className="proof-metric-card flex flex-col justify-center bg-card p-5 text-left"
            data-gsap-item
            data-gsap-delay="0.12"
          >
            <p className="eyebrow text-left text-muted-foreground">Average share</p>
            <p className="mt-3 text-left font-display text-3xl font-bold text-brand-indigo">
              <MetricCountUp value={8.3} suffix="%" decimals={1} />
            </p>
          </div>
        </div>

        <div className="proof-marquee-panel flex min-w-0 flex-col justify-center gap-5 border-x border-border bg-muted/30 py-5 lg:border-l-0">
          <div className="relative z-10 overflow-hidden">
            <MarqueeStrip items={proofItems} className="px-5" />
          </div>
          <Link
            href="/investors#previous-financials"
            className="relative z-20 mx-5 inline-flex w-fit items-center gap-1.5 rounded-md bg-muted/80 px-3 py-1.5 text-sm font-semibold text-brand-teal backdrop-blur-sm transition-colors hover:bg-muted hover:underline"
          >
            Review FY2025 profile
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
