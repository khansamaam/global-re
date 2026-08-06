import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GsapReveal } from '@/components/home/motion'
import { InsightCard } from '@/components/insight-card'
import { SectionHeading } from '@/components/section-heading'
import { formatDate, insights } from '@/lib/insights'

export function InsightsPreview() {
  const latest = insights.slice(0, 3)
  const [featured, ...secondary] = latest

  return (
    <section className="insights-motion-section relative isolate overflow-hidden border-b border-border bg-background py-20 lg:py-28">
      <div className="insights-background-word" aria-hidden="true">
        Risk
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Risk knowledge"
            title="Underwriting views, written for counterparties"
            description="Current thinking on risk quality, accumulation, pricing, and portfolio discipline from the people closest to the placement."
          />
          <Link
            href="/insights"
            className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-teal hover:underline"
          >
            All insights
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          {featured && (
            <GsapReveal>
              <Link
                href={`/insights/${featured.slug}`}
                className="featured-insight-card group relative isolate flex min-h-[32rem] overflow-hidden rounded-lg border border-border p-8"
                data-gsap-item
              >
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt ?? ''}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-indigo-deep via-brand-indigo-deep/80 to-brand-indigo-deep/20"
                />
                <div className="mt-auto max-w-2xl">
                  <p className="eyebrow text-brand-gold">{featured.category}</p>
                  <h3 className="mt-4 text-balance font-display text-4xl font-bold leading-tight text-on-dark">
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-on-dark/75">
                    {featured.excerpt}
                  </p>
                  <p className="mt-6 text-xs text-on-dark/55">
                    {formatDate(featured.date)} / {featured.readingTime} read
                  </p>
                </div>
              </Link>
            </GsapReveal>
          )}

          <div className="grid gap-6">
            {secondary.map((insight, index) => (
              <GsapReveal key={insight.slug} delay={index * 0.06}>
                <InsightCard insight={insight} variant="compact" />
              </GsapReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
