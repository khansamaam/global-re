import Image from 'next/image'
import {
  BriefcaseBusiness,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'
import { FinancialYearPortfolioCard } from '@/components/financial-year-portfolio-card'
import { SectionHeading } from '@/components/section-heading'
import {
  businessLines,
  companySnapshot,
  executiveBoard,
  industryFocus,
  portfolioScopeStatement,
  site,
  type TeamMember,
  widerTeam,
} from '@/lib/site'

function TeamCard({
  member,
  index,
  variant = 'standard',
}: {
  member: TeamMember
  index: number
  variant?: 'executive' | 'standard'
}) {
  return (
    <li
      style={{
        animationDelay: `${Math.min(index, 8) * 65}ms`,
      }}
      className="group flex h-full flex-col animate-fade-up"
    >
      <article className="flex h-full flex-col gap-4">
        <div
          className="relative aspect-square w-full overflow-hidden rounded-lg border border-border bg-muted shadow-sm transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
        >
          <Image
            src={member.image}
            alt={`${member.name}, ${member.title}`}
            fill
            sizes={
              variant === 'executive'
                ? '(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw'
                : '(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, (min-width: 640px) 33vw, 100vw'
            }
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-display text-lg font-bold text-foreground">
            {member.name}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {member.title}
          </p>
          {variant === 'standard' && (
            <p className="eyebrow mt-2 text-brand-teal">{member.group}</p>
          )}
        </div>
      </article>
    </li>
  )
}

export function FinancialStrengthLeadership() {
  return (
    <>
      <section className="border-b border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
            <SectionHeading
              eyebrow="Company overview"
              title="Focused non-life reinsurance and advisory"
              description="Founded in 2022, Global Re is a closely held specialist reinsurer providing non-life reinsurance and advisory solutions across MENA, Africa, Asia, and expanding international markets."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {companySnapshot.map((item) => (
                <article
                  key={item.label}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <p className="eyebrow text-muted-foreground">{item.label}</p>
                  <p className="mt-3 font-display text-2xl font-bold text-brand-indigo">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.note}
                  </p>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section
        id="financial-strength"
        className="border-b border-border bg-background py-20 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.86fr] lg:gap-16">
          <div className="flex flex-col gap-8 animate-fade-up">
            <SectionHeading
              eyebrow="Financial strength"
              title="Claims-paying ability and defined scope"
              description="Global RE presents financial strength in practical terms: capital, underwriting appetite, wording clarity, and claims obligations are considered together."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <ShieldCheck className="size-6 text-brand-teal" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-card-foreground">
                  Claims obligations
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The firm presents its capital base in relation to its reliable ability
                  to meet valid claims obligations under the business it writes.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <BriefcaseBusiness
                  className="size-6 text-brand-teal"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-lg font-bold text-card-foreground">
                  Underwriting scope
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Appetite is focused on Property, Casualty, Engineering, Marine, and
                  Bonds/Surety reinsurance.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 shadow-sm animate-fade-up lg:p-10">
            <p className="eyebrow text-brand-teal">Financial strength detail</p>
            <h3 className="mt-4 font-display text-2xl font-bold text-card-foreground">
              Capital is viewed alongside the risks written
            </h3>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              As a supporting detail within the financial strength assessment, Global
              RE maintains paid-up capital of {site.paidUpCapital}. Counterparty review
              should also consider business scope, exposure quality, wording, and
              claims-handling obligations.
            </p>
            <dl className="mt-8 overflow-hidden rounded-lg border border-border bg-border">
              <div className="bg-card p-5">
                <dt className="eyebrow text-muted-foreground">Written portfolio</dt>
                <dd className="mt-2 text-sm leading-relaxed text-card-foreground">
                  Property, Casualty, Engineering, Marine, and Bonds/Surety reinsurance
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        id="scope"
        className="border-b border-border bg-muted/40 py-20 lg:py-28"
      >
        <div className="mx-auto mb-20 max-w-7xl px-6">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.48fr] lg:items-end">
            <SectionHeading
              eyebrow="Financial year portfolio"
              title="FY2025 Financial Highlights"
              description="A concise view of audited financial highlights, portfolio reach, and underwriting discipline from the company profile."
              className="max-w-4xl"
            />
            <p className="text-sm leading-relaxed text-muted-foreground lg:text-right">
              The profile is presented alongside underwriting scope so cedants, brokers,
              and counterparties can assess scale, diversification, and participation
              discipline in one place.
            </p>
          </div>
          <FinancialYearPortfolioCard variant="full" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-8">
              <SectionHeading
                eyebrow="Business scope"
                title="Written business classes, stated without ambiguity"
                description="The business classes below are paraphrased into a concise market-facing view of Global RE's underwriting scope."
              />
              <div className="rounded-lg border border-brand-gold/35 bg-brand-gold/10 p-5">
                <p className="text-sm leading-relaxed text-foreground">
                  {portfolioScopeStatement}
                </p>
              </div>
              <div className="grid gap-4">
                {industryFocus.map((industry) => (
                  <article
                    key={industry.name}
                    className="rounded-lg border border-border bg-card p-6"
                  >
                    <p className="eyebrow text-brand-teal">Industry focus</p>
                    <h3 className="mt-3 font-display text-xl font-bold text-card-foreground">
                      {industry.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {businessLines.map((line) => (
                <li
                  key={line.slug}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <CheckCircle2
                    className="size-5 text-brand-teal"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-lg font-bold text-card-foreground">
                    {line.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {line.summary}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Leadership & team"
            title="Executive oversight and operating depth"
            description="Global RE's Executive Board is supported by colleagues across legal and compliance, claims, underwriting, retrocession, credit control, accounting, and technical roles."
          />

          <div className="mt-14 flex flex-col gap-14">
            <div>
              <div className="mb-6 flex items-end justify-between gap-6 border-b border-border pb-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Executive Board
                </h3>
                <p className="eyebrow text-muted-foreground">CEO / COO / CFO</p>
              </div>
              <ul className="grid max-w-5xl gap-6 md:grid-cols-3">
                {executiveBoard.map((member, index) => (
                  <TeamCard
                    key={member.name}
                    member={member}
                    index={index}
                    variant="executive"
                  />
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-6 flex items-end justify-between gap-6 border-b border-border pb-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Wider team
                </h3>
                <p className="eyebrow text-muted-foreground">Operating functions</p>
              </div>
              <ul className="grid gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
                {widerTeam.map((member, index) => (
                  <TeamCard key={member.name} member={member} index={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
