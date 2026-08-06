import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { businessLines, offices, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Office, claims, and proposal submission contact details for Global RE.',
}

const contactCards = [
  {
    icon: Mail,
    label: 'Proposal enquiries',
    value: site.underwritingEmail,
    href: `mailto:${site.underwritingEmail}`,
  },
  {
    icon: Mail,
    label: 'Claims notification',
    value: site.claimsEmail,
    href: `mailto:${site.claimsEmail}`,
  },
  {
    icon: Phone,
    label: 'Telephone',
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, '')}`,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Office & claims"
        title="Contact Us"
        description="Proposal enquiries, office correspondence, and claims notifications are routed through the channels below."
        image="/images/hero-global.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      <section id="enquiry" className="border-b border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Contact channels"
            title="Proposal and claims contacts"
            description="For a proposal submission, include the business class, exposure data, loss history, proposed structure, and any relevant wording or collateral information."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {contactCards.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
                className="group rounded-lg border border-border bg-card p-8 animate-fade-up transition-all duration-300 hover:border-brand-teal hover:shadow-lg hover:-translate-y-1"
              >
                <span className="flex size-11 items-center justify-center rounded-md bg-brand-indigo/10 text-brand-indigo">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="eyebrow mt-6 text-brand-teal">{item.label}</p>
                <p className="mt-3 break-words font-display text-xl font-bold text-card-foreground group-hover:text-brand-teal">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
            <SectionHeading
              eyebrow="Submit Proposal"
              title="Send the details needed for an appetite review"
              description="Use this form layout to prepare the core information Global RE expects before reviewing a treaty or facultative opportunity."
            />
            <form className="grid gap-5 rounded-lg border border-border bg-card p-6 shadow-sm sm:grid-cols-2 lg:p-8 animate-fade-up animation-delay-100">
              <label className="flex flex-col gap-2 text-sm font-medium text-card-foreground">
                Name
                <input
                  className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-brand-teal"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-card-foreground">
                Company
                <input
                  className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-brand-teal"
                  placeholder="Company name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-card-foreground">
                Email
                <input
                  type="email"
                  className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-brand-teal"
                  placeholder="name@company.com"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-card-foreground">
                Business class
                <select className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-brand-teal">
                  {businessLines.map((line) => (
                    <option key={line.slug}>{line.name}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-card-foreground sm:col-span-2">
                Proposal summary
                <textarea
                  className="min-h-32 rounded-md border border-input bg-background px-3 py-3 text-sm outline-none transition-colors focus:border-brand-teal"
                  placeholder="Share the proposed structure, territory, exposure data, loss history, and timing."
                />
              </label>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Email the completed proposal pack to {site.underwritingEmail}.
                </p>
                <Button
                  type="button"
                  className="h-11 bg-brand-indigo px-5 text-on-dark hover:bg-brand-indigo/90"
                >
                  Submit Proposal
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="offices" className="border-b border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Offices"
            title="Headquarters, representative office, and registered details"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {offices.map((office, index) => (
              <article
                key={`${office.city}-${office.role}`}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
                className="rounded-lg border border-border bg-card p-8 animate-fade-up transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Building2 className="size-6 text-brand-teal" aria-hidden="true" />
                <p className="mt-5 font-display text-2xl font-bold text-card-foreground">
                  {office.city}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {office.role}
                </p>
                <p className="eyebrow mt-5 text-muted-foreground">{office.region}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-border bg-card p-8 animate-fade-up animation-delay-300 transition-shadow duration-300 hover:shadow-lg">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-brand-teal" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-card-foreground">
                    Dubai representative office
                  </h3>
                </div>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {site.representativeOffice}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Headquarters: {site.hq}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Registered office: {site.registeredOffice}
                </p>
              </div>
              <Button
                size="lg"
                className="h-12 bg-brand-indigo px-6 text-on-dark hover:bg-brand-indigo/90"
                nativeButton={false}
                render={<Link href={`mailto:${site.underwritingEmail}`} />}
              >
                Email Underwriting
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
