import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { GsapReveal } from '@/components/home/motion'
import { SectionHeading } from '@/components/section-heading'
import { businessLines } from '@/lib/site'

export function BusinessLines() {
  return (
    <section className="capability-motion-section relative isolate overflow-hidden border-b border-border bg-background py-20 lg:py-28">
      <div className="capability-background-word" aria-hidden="true">
        Underwriting
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we write"
            title="Everything in scope. Nothing outside appetite."
            description="Global RE keeps its underwriting scope deliberate: Property, Casualty, Engineering, Marine, and Bonds/Surety reinsurance, with particular focus on construction, engineering, and energy risks."
          />
          <Link
            href="/solutions"
            className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-teal hover:underline"
          >
            All solutions
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="capability-row-stack mt-14 border-y border-border">
          {businessLines.map((line, index) => (
            <GsapReveal key={line.slug} delay={index * 0.04}>
              <Link
                href={`/solutions/${line.slug}`}
                className="capability-row group grid gap-6 border-b border-border py-8 transition-colors last:border-b-0 hover:bg-muted/35 md:grid-cols-[4.5rem_9rem_0.75fr_1.05fr_9rem] md:items-center md:px-4"
                data-gsap-item
                data-gsap-delay={index * 0.05}
              >
                <span className="font-display text-4xl font-bold text-brand-indigo/35 transition-colors group-hover:text-brand-indigo">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="capability-thumb relative hidden aspect-[1.12] overflow-hidden rounded-md border border-border bg-muted md:block">
                  <Image
                    src={line.image}
                    alt=""
                    fill
                    sizes="160px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-brand-indigo-deep/20" />
                </span>
                <div>
                  <p className="eyebrow text-brand-teal">{line.scope}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold text-foreground">
                    {line.name}
                  </h3>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {line.summary}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal">
                  View detail
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
