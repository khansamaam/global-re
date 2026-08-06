import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import {
  businessLines,
  portfolioScopeStatement,
  previousYearFinancials,
  retrocessionSecurityPanel,
  site,
  stats,
} from '@/lib/site'

export const metadata: Metadata = {
  title: 'Investors',
  description:
    'Financial strength, previous-year financials, and business scope information for Global RE counterparties.',
}

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors & counterparties"
        title="Financial strength information for counterparties"
        description="Global RE presents financial strength, prior-year financial materials, and business scope information for cedants, brokers, and counterparties."
        image="/images/hero-global.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Investors', href: '/investors' },
        ]}
      />

      <section id="results" className="border-b border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="At a glance"
            title="Operating facts from the company profile"
            description="A concise view of profile facts, portfolio reach, and participation discipline for counterparties."
          />
          <dl className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
                className="rounded-lg border border-border bg-card p-6 animate-fade-up transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <dt className="eyebrow text-muted-foreground">{stat.label}</dt>
                <dd className="mt-3 break-words font-display text-3xl font-bold text-brand-indigo">
                  {stat.value}
                </dd>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stat.note}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="ratings" className="border-b border-border bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-8 animate-fade-up transition-shadow duration-300 hover:shadow-lg">
            <FileText className="size-6 text-brand-teal" aria-hidden="true" />
            <h3 className="mt-5 font-display text-xl font-bold text-card-foreground">
              Financial strength review
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Counterparty review should consider financial strength alongside
              underwriting scope, wording quality, exposure data, and claims obligations.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-8 animate-fade-up animation-delay-100 transition-shadow duration-300 hover:shadow-lg">
            <ShieldCheck className="size-6 text-brand-teal" aria-hidden="true" />
            <h3 className="mt-5 font-display text-xl font-bold text-card-foreground">
              Claims-paying ability
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Claims obligations are considered in relation to underwriting scope,
              wording, exposure quality, and available capital.
            </p>
          </div>
          <div className="rounded-lg border border-brand-gold/35 bg-brand-gold/10 p-8 animate-fade-up animation-delay-200 transition-shadow duration-300 hover:shadow-lg">
            <CheckCircle2 className="size-6 text-brand-gold" aria-hidden="true" />
            <h3 className="mt-5 font-display text-xl font-bold text-card-foreground">
              Written portfolio
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {portfolioScopeStatement}
            </p>
          </div>
        </div>
      </section>

      <section
        id="previous-financials"
        className="border-b border-border bg-background py-20 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Financials"
              title={`${previousYearFinancials.year} financials`}
              description={previousYearFinancials.description}
            />
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="eyebrow text-brand-teal">
                {previousYearFinancials.status}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Previous financial year materials can be reviewed as part of
                counterparty diligence. The figures below are drawn from the audited
                combined FY2025 profile with FY2024 comparatives where stated.
              </p>
              <Button
                size="lg"
                className="mt-6 h-11 bg-brand-indigo px-5 text-on-dark hover:bg-brand-indigo/90"
                nativeButton={false}
                render={
                  <Link
                    href={`mailto:${site.email}?subject=${previousYearFinancials.year}%20financials%20request`}
                  />
                }
              >
                Request financials
                <ArrowRight className="size-4" data-icon="inline-end" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {previousYearFinancials.documents.map((document, index) => (
              <article
                key={document.title}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
                className="rounded-lg border border-border bg-card p-6 animate-fade-up transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-display text-lg font-bold text-card-foreground">
                      {document.title}
                    </p>
                    <p className="mt-2 font-display text-3xl font-bold text-brand-indigo">
                      {document.value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {document.description}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-md border border-brand-teal/30 bg-brand-teal/10 px-3 py-1 text-xs font-semibold text-brand-teal">
                    {document.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="lg:col-start-2 text-xs leading-relaxed text-muted-foreground">
            {previousYearFinancials.note}
          </p>
        </div>
      </section>

      <section
        id="retrocession"
        className="border-b border-border bg-muted/40 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
            <SectionHeading
              eyebrow="Retrocession security"
              title="Security panel"
              description={`Global RE's retrocession protection is under the leadership of ${retrocessionSecurityPanel.leader}.`}
            />
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="grid gap-4">
                <div>
                  <p className="eyebrow text-muted-foreground">Panel leader</p>
                  <p className="mt-2 font-display text-xl font-bold text-card-foreground">
                    {retrocessionSecurityPanel.leader}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
            <div className="hidden grid-cols-[1.35fr_0.9fr_0.5fr_0.8fr] gap-4 border-b border-border bg-muted/45 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:grid">
              <span>Reinsurer</span>
              <span>Country</span>
              <span>Rating</span>
              <span>Agency</span>
            </div>
            <ul className="divide-y divide-border">
              {retrocessionSecurityPanel.members.map((member) => (
                <li
                  key={member.reinsurer}
                  className="grid grid-cols-1 gap-2 px-5 py-4 text-sm sm:grid-cols-[1.35fr_0.9fr_0.5fr_0.8fr] sm:gap-4"
                >
                  <span className="font-semibold text-card-foreground">
                    {member.reinsurer}
                    {member.role && (
                      <span className="ml-2 rounded-sm bg-brand-gold/15 px-2 py-0.5 text-xs text-brand-indigo">
                        {member.role}
                      </span>
                    )}
                  </span>
                  <span className="text-muted-foreground">{member.country}</span>
                  <span className="font-semibold text-card-foreground">
                    {member.rating}
                  </span>
                  <span className="text-muted-foreground">{member.agency}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="governance" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Portfolio scope"
            title="Defined specialist reinsurance classes"
            description="Global RE's business scope is defined by Property, Casualty, Engineering, Marine, and Bonds/Surety reinsurance."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessLines.map((line, index) => (
              <li
                key={line.slug}
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
                className="rounded-lg border border-border bg-card p-6 animate-fade-up transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <h3 className="font-display text-lg font-bold text-card-foreground">
                  {line.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {line.scope}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Button
              size="lg"
              className="h-12 bg-brand-indigo px-6 text-on-dark hover:bg-brand-indigo/90"
              nativeButton={false}
              render={<Link href="/about#financial-strength" />}
            >
              View financial strength
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
