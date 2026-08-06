import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Button } from '@/components/ui/button'
import { formatDate, insights } from '@/lib/insights'

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const insight = insights.find((item) => item.slug === slug)

  if (!insight) return {}

  return {
    title: insight.title,
    description: insight.excerpt,
  }
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const insight = insights.find((item) => item.slug === slug)

  if (!insight) notFound()

  return (
    <>
      <PageHero
        eyebrow={insight.category}
        title={insight.title}
        description={insight.excerpt}
        image={insight.image}
        imageAlt={insight.imageAlt}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: insight.category, href: `/insights/${insight.slug}` },
        ]}
      />
      <article className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div className="min-w-0">
            <div className="flex flex-col gap-3 border-b border-border pb-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                {formatDate(insight.date)} / {insight.readingTime} read
              </p>
              <p>
                <span className="font-medium text-foreground">{insight.author}</span>
                {' - '}
                {insight.authorRole}
              </p>
            </div>

            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted animate-fade-up">
              <Image
                src={insight.image}
                alt={insight.imageAlt}
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-12 space-y-10">
              {insight.body.map((section) => (
                <section key={section.heading} className="animate-fade-up">
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-5 text-pretty text-base leading-8 text-muted-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                render={<Link href="/insights" />}
              >
                <ArrowLeft className="size-4" data-icon="inline-start" />
                Back to insights
              </Button>
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="eyebrow text-brand-teal">Underwriting signals</p>
              <ul className="mt-5 flex flex-col gap-4">
                {insight.signals.map((signal) => (
                  <li key={signal} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-brand-teal"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed text-card-foreground">
                      {signal}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 rounded-lg border border-border bg-muted/50 p-6">
              <p className="eyebrow text-muted-foreground">Related action</p>
              <h2 className="mt-3 font-display text-xl font-bold text-foreground">
                Discuss a proposal
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Share exposure data, proposed structure, loss history, and timing so
                Global RE can review appetite against the relevant written class.
              </p>
              <Button
                size="lg"
                className="mt-5 h-11 w-full bg-brand-indigo text-on-dark hover:bg-brand-indigo/90"
                nativeButton={false}
                render={<Link href="/contact" />}
              >
                Submit Proposal
              </Button>
            </div>
          </aside>
        </div>
      </article>
    </>
  )
}
