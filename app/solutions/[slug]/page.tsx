import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CtaBand } from '@/components/cta-band'
import { Button } from '@/components/ui/button'
import { businessLines, site } from '@/lib/site'

export function generateStaticParams() {
  return businessLines.map((line) => ({ slug: line.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const line = businessLines.find((item) => item.slug === slug)

  if (!line) return {}

  return {
    title: line.name,
    description: line.summary,
  }
}

export default async function BusinessLinePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const line = businessLines.find((item) => item.slug === slug)

  if (!line) notFound()

  const others = businessLines.filter((item) => item.slug !== line.slug)

  return (
    <>
      <PageHero
        eyebrow={`${site.name} Solutions`}
        title={line.name}
        description={line.summary}
        image={line.image}
        imageAlt={line.imageAlt}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: line.shortName, href: `/solutions/${line.slug}` },
        ]}
      />

      <section aria-label="Class at a glance" className="border-b border-border bg-card">
        <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-y-8 px-6 py-12 sm:grid-cols-3 lg:gap-x-8">
          <div className="flex flex-col gap-1.5 border-brand-gold/60 sm:border-l sm:pl-6">
            <dt className="eyebrow text-muted-foreground">Scope</dt>
            <dd className="font-display text-2xl font-bold text-brand-indigo">
              {line.scope}
            </dd>
            <p className="text-sm text-muted-foreground">Specialist reinsurance class</p>
          </div>
          <div className="flex flex-col gap-1.5 border-brand-gold/60 sm:border-l sm:pl-6">
            <dt className="eyebrow text-muted-foreground">Focus</dt>
            <dd className="text-pretty text-sm leading-relaxed text-foreground">
              {line.focus}
            </dd>
          </div>
          <div className="flex flex-col gap-1.5 border-brand-gold/60 sm:border-l sm:pl-6">
            <dt className="eyebrow text-muted-foreground">Structures written</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {line.treatyTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-sm bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                >
                  {type}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
          <SectionHeading
            eyebrow="What we write"
            title="Products and structures"
            description={`The covers below represent Global RE's core appetite in ${line.shortName.toLowerCase()}. Risks outside this list can still be reviewed when the scope, data, and wording are clear.`}
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {line.products.map((product) => (
              <article
                key={product.name}
                className="flex flex-col gap-3 rounded-lg border border-border bg-card p-8"
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-teal/15"
                  >
                    <Check className="size-3.5 text-brand-teal" />
                  </span>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {product.name}
                  </h3>
                </div>
                <p className="pl-9 text-pretty leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Underwriting view"
            title={`How Global RE reviews ${line.shortName.toLowerCase()} submissions`}
            description="Each submission is reviewed through the lens of exposure quality, documentation, contractual wording, claims experience, and the specific controls relevant to the class."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {line.riskConsiderations.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="font-display text-lg font-bold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-indigo-deep py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
          <SectionHeading
            tone="inverted"
            eyebrow="Why cedants place with us"
            title={`Our approach to ${line.shortName.toLowerCase()} risk`}
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
            {line.differentiators.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 border-t-2 border-brand-gold pt-6"
              >
                <h3 className="text-lg font-semibold text-on-dark">{item.title}</h3>
                <p className="text-pretty leading-relaxed text-on-dark/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Submission checklist"
            title="Information expected for review"
            description={`The following information helps Global RE assess whether a ${line.shortName.toLowerCase()} opportunity sits within appetite and whether the proposed structure is sufficiently clear.`}
          />
          <ol className="grid gap-4 sm:grid-cols-2">
            {line.submissionRequirements.map((requirement, index) => (
              <li
                key={requirement}
                className="flex gap-4 rounded-lg border border-border bg-card p-6"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-brand-gold/15 font-mono text-sm font-semibold text-brand-indigo">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {requirement}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
          <SectionHeading
            eyebrow="Other classes"
            title="Explore the rest of the specialist portfolio"
            description="Each class is written within a defined appetite so counterparties can see where Global RE is prepared to participate."
          />
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/solutions/${other.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6 transition-colors hover:border-brand-teal"
                >
                  <h3 className="font-semibold text-card-foreground group-hover:text-brand-teal">
                    {other.name}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {other.summary}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand-teal">
                    View class
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-6"
              nativeButton={false}
              render={<Link href="/solutions" />}
            >
              Back to solutions overview
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Discuss your ${line.shortName.toLowerCase()} proposal`}
        description={`Global RE reviews ${line.shortName.toLowerCase()} submissions within its defined appetite, with claims obligations, structure, and documentation assessed before capacity is committed.`}
      />
    </>
  )
}
