import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText, Gauge, ShieldCheck, Users } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import {
  businessLines,
  industryFocus,
  portfolioScopeStatement,
} from '@/lib/site'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Property, Casualty, Engineering, Marine, and Bonds/Surety reinsurance from Global RE.',
}

const support = [
  {
    icon: Users,
    title: 'Named accountability',
    body: 'Proposals are handled by identified underwriters and operating teams rather than anonymous intake queues.',
  },
  {
    icon: Gauge,
    title: 'Defined appetite',
    body: 'Line size and structure are considered against scope, claims environment, accumulation, and documentation quality.',
  },
  {
    icon: ShieldCheck,
    title: 'Claims-aware underwriting',
    body: 'Claims obligations are considered before binding, with wording clarity and evidence requirements reviewed early.',
  },
  {
    icon: FileText,
    title: 'Clear written portfolio',
    body: portfolioScopeStatement,
  },
]

const process = [
  {
    step: 'Submission',
    body: 'Send exposure data, historical loss experience, proposed structure, and any relevant wording or collateral information.',
  },
  {
    step: 'Review',
    body: 'Underwriting, claims, legal, retrocession, and accounting input is brought in where the risk requires it.',
  },
  {
    step: 'Terms',
    body: 'Terms are framed around risk quality, structure, and scope. Where appetite is limited, that constraint is stated directly.',
  },
  {
    step: 'Claims',
    body: 'Claims notifications are handled with attention to treaty wording, documentation, and the obligations accepted at placement.',
  },
]

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Reinsurance across defined specialist classes"
        description="Global RE writes Property, Casualty, Engineering, Marine, and Bonds/Surety reinsurance, with appetite reviewed against scope, wording, exposure quality, and claims obligations."
        image="/images/hero-global.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
        ]}
      />

      <section className="border-b border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Business classes"
            title="Where Global RE writes"
            description="The classes below define the underwriting scope, with construction, engineering, and energy treated as recurring specialist industries."
          />

          <div className="mt-14 flex flex-col divide-y divide-border">
            {businessLines.map((line, index) => (
              <article
                key={line.slug}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                className="grid gap-8 py-12 first:pt-0 animate-fade-up lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={line.image}
                      alt={line.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-5 lg:col-span-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-brand-gold">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {line.name}
                    </h3>
                  </div>
                  <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                    {line.summary}
                  </p>

                  <dl className="grid gap-6 border-y border-border py-5 sm:grid-cols-3">
                    <div className="flex flex-col gap-1">
                      <dt className="eyebrow text-muted-foreground">Scope</dt>
                      <dd className="font-display text-lg font-bold text-brand-indigo">
                        {line.scope}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="eyebrow text-muted-foreground">Focus</dt>
                      <dd className="text-sm leading-relaxed text-foreground">
                        {line.focus}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="eyebrow text-muted-foreground">Structures</dt>
                      <dd className="text-sm leading-relaxed text-foreground">
                        {line.treatyTypes.join(', ')}
                      </dd>
                    </div>
                  </dl>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {line.products.map((product) => (
                      <li key={product.name} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-teal"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-foreground">{product.name}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/solutions/${line.slug}`}
                    className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-brand-teal hover:underline"
                  >
                    {line.shortName} in detail
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Industry focus"
            title="Specialist industries that cut across lines"
            description="Construction, engineering, and energy risks often involve bonds, marine, property, casualty, and technical project exposure at the same time. Global RE treats those connections as part of the underwriting review."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {industryFocus.map((industry, index) => (
              <article
                key={industry.name}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
                className="flex flex-col gap-3 rounded-lg border border-border bg-card p-8 animate-fade-up transition-shadow duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <h3 className="font-display text-xl font-bold text-card-foreground">
                  {industry.name}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What comes with the capacity"
            title="Operational support around the placement"
            description="Capacity is only useful when counterparties know who owns the risk, how claims are handled, and where appetite begins and ends."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {support.map((item, index) => (
              <div
                key={item.title}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
                className="flex flex-col gap-4 rounded-lg border border-border bg-card p-8 animate-fade-up transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="flex size-11 items-center justify-center rounded-md bg-brand-teal/12 text-brand-teal">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="How placement works"
            title="From submission to claims obligation"
          />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <li
                key={item.step}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                className="flex flex-col gap-3 bg-card p-8 animate-fade-up transition-colors duration-300 hover:bg-muted/50"
              >
                <span className="font-mono text-sm text-brand-gold">
                  Step {index + 1}
                </span>
                <h3 className="font-display text-lg font-bold text-card-foreground">
                  {item.step}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
