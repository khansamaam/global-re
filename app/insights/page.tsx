import type { Metadata } from 'next'
import { InsightLibrary } from '@/components/insights/insight-library'
import { PageHero } from '@/components/page-hero'
import { insights } from '@/lib/insights'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Specialist reinsurance insight from Global RE across risk research, market commentary, loss review, and regulation.',
}

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Specialist reinsurance views from the underwriting desk"
        description="Research and commentary on the risk themes Global RE considers when evaluating treaty and facultative proposals."
        image="/images/hero-global.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
        ]}
      />
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <InsightLibrary insights={insights} />
        </div>
      </section>
    </>
  )
}
