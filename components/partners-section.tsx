import {
  Banknote,
  ChartNoAxesColumnIncreasing,
  Handshake,
  Landmark,
  MonitorCog,
} from 'lucide-react'
import { MarqueeStrip } from '@/components/home/motion'
import { SectionHeading } from '@/components/section-heading'
import { partners } from '@/lib/site'
import { cn } from '@/lib/utils'

const partnerIcons = [
  Handshake,
  ChartNoAxesColumnIncreasing,
  MonitorCog,
  Landmark,
  Banknote,
]

export function PartnersSection({
  className,
  surface = 'muted',
  variant = 'grid',
}: {
  className?: string
  surface?: 'muted' | 'background'
  variant?: 'grid' | 'marquee'
}) {
  const isMarquee = variant === 'marquee'
  const marqueeItems = partners.flatMap((partner) => [
    partner.category,
    partner.title,
  ])

  return (
    <section
      id="partners"
      className={cn(
        'border-b border-border py-20 lg:py-28',
        surface === 'muted' ? 'bg-muted/40' : 'bg-background',
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={cn(
            'grid gap-10 lg:gap-16',
            isMarquee ? 'lg:grid-cols-[0.58fr_1fr]' : 'lg:grid-cols-[0.62fr_1fr]',
          )}
        >
          <SectionHeading
            eyebrow="Our partners"
            title={
              isMarquee
                ? 'Support around the operating platform'
                : 'Institutional support around the operating platform'
            }
            description="Global RE's compliance board identifies partner categories supporting capital, assurance, systems, banking, and technology operations."
          />

          <div className="min-w-0">
            {isMarquee && (
              <div className="mb-6 rounded-lg border border-border bg-card py-5 shadow-sm">
                <MarqueeStrip items={marqueeItems} className="px-5" />
              </div>
            )}
            <ul
              className={cn(
                'grid gap-4 sm:grid-cols-2',
                isMarquee ? 'xl:grid-cols-5' : 'xl:grid-cols-3',
              )}
            >
              {partners.map((partner, index) => {
                const Icon = partnerIcons[index] ?? Handshake

                return (
                  <li key={partner.category}>
                    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="flex items-center justify-between gap-4">
                        <p className="eyebrow text-brand-teal">{partner.category}</p>
                        <span className="grid size-10 place-items-center rounded-md border border-border bg-muted/45 text-brand-indigo">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">
                        {partner.title}
                      </h3>
                      {!isMarquee && (
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {partner.description}
                        </p>
                      )}
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
