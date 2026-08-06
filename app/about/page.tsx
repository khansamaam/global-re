import type { Metadata } from 'next'
import { CtaBand } from '@/components/cta-band'
import { FinancialStrengthLeadership } from '@/components/about/financial-strength-leadership'
import { PageHero } from '@/components/page-hero'
import { PartnersSection } from '@/components/partners-section'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Financial strength, claims-paying ability, business scope, and leadership for Global RE.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Global RE"
        title="Financial strength and leadership for specialist reinsurance"
        description="Global RE is a global reinsurance firm headquartered in Nevis, with a Dubai representative office and a defined specialist reinsurance portfolio."
        image="/images/about-team.png"
        imageAlt="Global RE team discussion in an office setting"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />
      <FinancialStrengthLeadership />
      <PartnersSection surface="background" />
      <CtaBand
        title="Discuss a reinsurance proposal"
        description="Share the business class, exposure data, proposed structure, and claims history so Global RE can assess whether the risk sits within appetite."
      />
    </>
  )
}
