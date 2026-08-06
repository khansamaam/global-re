import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export function HomeFinalCta() {
  return (
    <section className="final-motion-cta py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="final-cta-panel relative isolate overflow-hidden rounded-2xl border border-white/[0.06] p-8 text-on-dark shadow-2xl lg:p-14">
          {/* Background layers */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 rounded-2xl bg-gradient-to-br from-[oklch(0.18_0.1_275)] via-[oklch(0.14_0.08_275)] to-[oklch(0.10_0.05_280)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-2xl opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle, oklch(1 0 0 / 40%) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-gold/[0.07] blur-[80px]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-teal/[0.06] blur-[60px]"
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            {/* Left content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold/90">
                Submit Proposal
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
                Send the risk with enough detail for a direct appetite view.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
                Share the business class, exposure data, proposed structure, wording,
                and claims history. Global RE will assess whether the placement sits
                within its specialist appetite.
              </p>
            </div>

            {/* Right card */}
            <div className="group relative rounded-xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.06] lg:p-7">
              <div className="absolute -left-px -top-px h-px w-16 rounded-full bg-gradient-to-r from-brand-gold/60 to-transparent" />
              <p className="text-sm text-white/50">
                Completed proposal packs should be sent to:
              </p>
              <a
                href={`mailto:${site.underwritingEmail}`}
                className="mt-3 flex items-center gap-2.5 font-display text-lg font-bold text-brand-gold transition-colors hover:text-brand-gold/90"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {site.underwritingEmail}
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="h-11 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 text-sm font-semibold text-slate-900 shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/30"
                  nativeButton={false}
                  render={<Link href="/contact" />}
                >
                  Submit Proposal
                  <ArrowRight className="size-4" data-icon="inline-end" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 rounded-xl border-white/[0.12] bg-white/[0.04] px-6 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  nativeButton={false}
                  render={<Link href="/solutions" />}
                >
                  Explore appetite
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
