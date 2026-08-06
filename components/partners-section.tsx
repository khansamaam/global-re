import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { partners } from '@/lib/site'
import { cn } from '@/lib/utils'

export function PartnersSection({
  className,
  surface = 'muted',
}: {
  className?: string
  surface?: 'muted' | 'background'
}) {
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
        <SectionHeading
          eyebrow="Our partners"
          title="Institutional support around the operating platform"
          description="Global RE's compliance board identifies partner categories supporting capital, assurance, systems, banking, and technology operations."
        />

        <ul className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <li key={partner.category} className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-16 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {partner.category}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
