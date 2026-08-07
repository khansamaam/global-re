import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'
import { ContactForm, AddressSection } from './contact-form'

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
            <ContactForm />
          </div>
        </div>
      </section>

      <AddressSection />
    </>
  )
}
