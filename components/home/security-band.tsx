import Link from 'next/link'
import { ArrowRight, BadgeCheck, CalendarDays, ShieldCheck } from 'lucide-react'
import { GsapReveal } from '@/components/home/motion'
import { retrocessionSecurityPanel } from '@/lib/site'

export function SecurityBand() {
  const panelRatings = Array.from(
    new Set(retrocessionSecurityPanel.members.map((member) => member.rating)),
  ).join(' / ')

  return (
    <section id="retrocession" className="security-motion-band relative isolate overflow-hidden border-b border-border bg-brand-indigo-deep py-20 text-on-dark lg:py-28">
      <div
        aria-hidden="true"
        className="rule-grid absolute inset-0 -z-10 text-white opacity-25"
      />
      <div className="security-sweep" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.82fr_1fr] lg:items-center lg:gap-16">
        <GsapReveal>
          <div>
            <p className="eyebrow text-brand-gold">Retrocession security</p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-tight text-on-dark sm:text-5xl">
              Backed by A-rated security for the 2026 underwriting year.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-dark/72">
              Global RE's {retrocessionSecurityPanel.year} retrocession protection is
              effective {retrocessionSecurityPanel.effectiveDate}, under the leadership
              of {retrocessionSecurityPanel.leader}.
            </p>
            <Link
              href="/investors#retrocession"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:underline"
            >
              View security panel
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </GsapReveal>

        <GsapReveal delay={0.1}>
          <div className="rounded-lg border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur lg:p-8">
            <div className="grid gap-px overflow-hidden rounded-md border border-white/15 bg-white/10 sm:grid-cols-3">
              <div className="bg-brand-indigo-deep/60 p-5">
                <ShieldCheck className="size-5 text-brand-gold" aria-hidden="true" />
                <p className="mt-5 text-xs uppercase tracking-[0.12em] text-on-dark/55">
                  Panel leader
                </p>
                <p className="mt-2 font-display text-lg font-bold text-on-dark">
                  {retrocessionSecurityPanel.leader}
                </p>
              </div>
              <div className="bg-brand-indigo-deep/60 p-5">
                <CalendarDays className="size-5 text-brand-gold" aria-hidden="true" />
                <p className="mt-5 text-xs uppercase tracking-[0.12em] text-on-dark/55">
                  Effective date
                </p>
                <p className="mt-2 font-display text-lg font-bold text-on-dark">
                  {retrocessionSecurityPanel.effectiveDate}
                </p>
              </div>
              <div className="bg-brand-indigo-deep/60 p-5">
                <BadgeCheck className="size-5 text-brand-gold" aria-hidden="true" />
                <p className="mt-5 text-xs uppercase tracking-[0.12em] text-on-dark/55">
                  Rating range
                </p>
                <p className="mt-2 font-display text-lg font-bold text-on-dark">
                  A.M. Best {panelRatings}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {retrocessionSecurityPanel.members.map((member) => (
                <span
                  key={member.reinsurer}
                  className="security-member-pill rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-on-dark/75"
                  data-gsap-item
                >
                  {member.reinsurer}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-on-dark/55">
              Information updated as of 04 August 2026.
            </p>
          </div>
        </GsapReveal>
      </div>
    </section>
  )
}
