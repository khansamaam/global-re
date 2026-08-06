import Link from 'next/link'
import { ArrowUpRight, Building2, Handshake, Landmark } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const audiences = [
  {
    icon: Building2,
    title: 'For cedants',
    body: 'Treaty and facultative support across defined specialist reinsurance classes, with scope and documentation expectations stated early.',
    cta: 'See what we write',
    href: '/solutions',
    points: ['Property, Casualty, Engineering, Marine, and Bonds/Surety reinsurance', 'Construction, engineering, and energy focus', 'Claims obligations reviewed with wording'],
  },
  {
    icon: Handshake,
    title: 'For brokers',
    body: 'A clear view of appetite for Property, Casualty, Engineering, Marine, and Bonds/Surety placements.',
    cta: 'Placement contacts',
    href: '/contact',
    points: ['Defined appetite by line', 'Dubai representative office', 'Office and claims channels available'],
  },
  {
    icon: Landmark,
    title: 'For counterparties',
    body: 'Global RE presents financial strength, operating scope, and claims process information in a direct format for counterparty review.',
    cta: 'Financial strength',
    href: '/about#financial-strength',
    points: ['Financial strength stated plainly', 'Defined portfolio scope', 'Executive Board and operating team visibility'],
  },
]

export function AudienceRouter() {
  return (
    <section className="border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Who we work with"
          title="Cedants, brokers, and counterparties"
          description="Reinsurance works best when scope, capital, and claims expectations are plain. These entry points reflect how Global RE's specialist appetite is presented."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {audiences.map((audience) => (
            <Link
              key={audience.title}
              href={audience.href}
              className="group flex flex-col gap-5 rounded-lg border border-border bg-card p-8 transition-colors hover:border-brand-teal"
            >
              <span className="flex size-11 items-center justify-center rounded-md bg-brand-indigo/10 text-brand-indigo">
                <audience.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-bold text-card-foreground">
                {audience.title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {audience.body}
              </p>
              <ul className="flex flex-col gap-2 border-t border-border pt-5">
                {audience.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-card-foreground"
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-gold"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand-teal">
                {audience.cta}
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
