import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaBand({
  title = 'Renewal season starts earlier than you think',
  description = 'Send us a proposal and you will get a named underwriter, a decision timeline, and a direct answer on appetite, including when the answer is no.',
  primary = { label: 'Submit Proposal', href: '/contact' },
  secondary = { label: 'Talk to an underwriter', href: '/contact#enquiry' },
}: {
  title?: string
  description?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="bg-muted/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 rounded-lg border border-border bg-card p-10 animate-fade-up transition-shadow duration-300 hover:shadow-xl lg:flex-row lg:items-center lg:justify-between lg:p-14">
          <div className="flex max-w-2xl flex-col gap-4">
            <h2 className="text-balance text-2xl font-bold text-card-foreground sm:text-3xl">
              {title}
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="h-12 bg-brand-indigo px-6 text-base text-on-dark hover:bg-brand-indigo/90"
              nativeButton={false}
              render={<Link href={primary.href} />}
            >
              {primary.label}
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={<Link href={secondary.href} />}
            >
              {secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
