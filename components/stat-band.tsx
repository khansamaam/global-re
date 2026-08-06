import { stats } from '@/lib/site'

export function StatBand() {
  return (
    <section
      aria-label="Operating snapshot"
      className="border-b border-border bg-background"
    >
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden border-x border-border bg-border sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex min-h-44 flex-col justify-between bg-background px-6 py-8"
          >
            <div>
              <dt className="eyebrow text-muted-foreground">{stat.label}</dt>
              <dd className="mt-3 font-display text-4xl font-bold leading-none tracking-tight text-brand-indigo sm:text-5xl">
                {stat.value}
              </dd>
            </div>
            <p className="mt-6 border-t border-brand-gold/50 pt-4 text-sm leading-relaxed text-muted-foreground">
              {stat.note}
            </p>
          </div>
        ))}
      </dl>
    </section>
  )
}
