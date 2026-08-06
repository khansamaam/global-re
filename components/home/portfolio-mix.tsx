import Link from 'next/link'
import { ArrowRight, FileText, Scale, SearchCheck, ShieldCheck } from 'lucide-react'
import { FinancialYearPortfolioCard } from '@/components/financial-year-portfolio-card'
import { GsapReveal } from '@/components/home/motion'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

const processSteps = [
  {
    icon: FileText,
    label: 'I',
    title: 'Submit',
    body: 'Cedants and brokers share the class, exposure data, wording, loss history, proposed structure, and timing expectations.',
  },
  {
    icon: SearchCheck,
    label: 'II',
    title: 'Review',
    body: 'Underwriting, claims, legal, retrocession, and accounting input is brought in where the risk requires specialist review.',
  },
  {
    icon: Scale,
    label: 'III',
    title: 'Structure',
    body: 'Participation is sized against wording, accumulation, attachment point, premium adequacy, and claims obligations.',
  },
  {
    icon: ShieldCheck,
    label: 'IV',
    title: 'Decide',
    body: 'Global RE gives a direct appetite view, including when the answer is no or further information is needed.',
  },
]

export function PortfolioMix() {
  return (
    <section id="portfolio" className="process-motion-section relative isolate overflow-hidden border-b border-border bg-muted/35 py-20 lg:py-28">
      <div className="process-background-track" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="How we underwrite"
            title="Discipline is a workflow, not a slogan"
            description="The placement path is intentionally direct: define the exposure, review the evidence, structure the participation, and communicate appetite clearly."
          />
          <Button
            size="lg"
            className="h-11 bg-brand-indigo px-5 text-on-dark hover:bg-brand-indigo/90"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Submit Proposal
            <ArrowRight className="size-4" data-icon="inline-end" />
          </Button>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <GsapReveal key={step.title} delay={index * 0.05}>
              <article
                className="process-card flex h-full min-h-72 flex-col bg-card p-7 transition-colors hover:bg-background"
                data-gsap-item
                data-gsap-delay={index * 0.05}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-4xl font-bold text-brand-indigo/30">
                    {step.label}
                  </span>
                  <span className="grid size-11 place-items-center rounded-md border border-border bg-muted/45 text-brand-teal">
                    <step.icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-bold text-card-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </article>
            </GsapReveal>
          ))}
        </div>

        <div className="mt-16">
          <GsapReveal>
            <SectionHeading
              eyebrow="Financial year portfolio"
              title="FY2025 audited profile"
              description="A fuller portfolio view for counterparties reviewing scale, reach, concentration, and participation discipline."
              className="mb-10 max-w-4xl"
            />
          </GsapReveal>
          <GsapReveal delay={0.08}>
            <FinancialYearPortfolioCard variant="full" />
          </GsapReveal>
        </div>
      </div>
    </section>
  )
}
