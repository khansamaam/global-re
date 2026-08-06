import { BusinessLines } from '@/components/home/business-lines'
import { HomeFinalCta } from '@/components/home/final-cta'
import { HomeGsapRuntime } from '@/components/home/gsap-runtime'
import { Hero } from '@/components/home/hero'
import { InsightsPreview } from '@/components/home/insights-preview'
import { PortfolioMix } from '@/components/home/portfolio-mix'
import { ProofStrip } from '@/components/home/proof-strip'
import { SecurityBand } from '@/components/home/security-band'
import { PartnersSection } from '@/components/partners-section'

export default function HomePage() {
  return (
    <div className="home-scroll-page">
      <HomeGsapRuntime />
      <Hero />
      <ProofStrip />
      <BusinessLines />
      <PortfolioMix />
      <SecurityBand />
      <PartnersSection surface="muted" variant="marquee" />
      <InsightsPreview />
      <HomeFinalCta />
    </div>
  )
}
