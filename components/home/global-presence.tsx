import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { offices } from '@/lib/site'

const regions = Array.from(new Set(offices.map((office) => office.region)))

export function GlobalPresence() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-indigo-deep py-20 text-on-dark lg:py-28">
      <div
        aria-hidden="true"
        className="rule-grid absolute inset-0 -z-10 text-white opacity-40"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Where we are"
            tone="inverted"
            title="Nevis headquartered, Dubai representative office"
            description="Global RE is headquartered in Nevis, with a Dubai representative office for correspondence, meetings, and regional market engagement."
          />
          <Link
            href="/contact#offices"
            className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-gold hover:underline"
          >
            Office directory
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {regions.map((region) => (
            <div key={region} className="flex flex-col gap-5">
              <h3 className="border-b border-white/20 pb-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-brand-gold">
                {region}
              </h3>
              <ul className="flex flex-col gap-4">
                {offices
                  .filter((office) => office.region === region)
                  .map((office) => (
                    <li key={office.city} className="flex flex-col gap-0.5">
                      <span className="font-display text-lg font-semibold">
                        {office.city}
                      </span>
                      <span className="text-sm text-on-dark/60">
                        {office.role}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
