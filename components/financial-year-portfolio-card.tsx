import { financialYearPortfolio } from '@/lib/site'
import { cn } from '@/lib/utils'

function BarRow({
  label,
  value,
  valueLabel,
  note,
  max = 100,
}: {
  label: string
  value: number
  valueLabel: string
  note: string
  max?: number
}) {
  const width = Math.min(100, Math.max(4, (value / max) * 100))

  return (
    <li className="space-y-2">
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <span className="font-semibold text-card-foreground">{label}</span>
        <span className="font-display font-bold text-brand-indigo">
          {valueLabel}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-brand-teal"
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">{note}</p>
    </li>
  )
}

export function FinancialYearPortfolioCard({
  className,
  variant = 'compact',
}: {
  className?: string
  variant?: 'compact' | 'full'
}) {
  const maxPremium = Math.max(
    ...financialYearPortfolio.premiumTrend.map((item) => item.value),
  )
  const isFull = variant === 'full'

  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-card p-6 shadow-sm animate-fade-up transition-shadow duration-300 hover:shadow-lg lg:p-8',
        className,
      )}
    >
      <div
        className={cn(
          'grid gap-7',
          isFull && 'lg:grid-cols-[0.7fr_1fr] lg:items-end',
        )}
      >
        <div className="flex flex-col gap-2">
          <p className="eyebrow text-brand-teal">
            {financialYearPortfolio.year} Financial Highlights
          </p>
          <p className="font-display text-4xl font-bold tracking-tight text-card-foreground sm:text-5xl">
            {financialYearPortfolio.total}
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {financialYearPortfolio.metric}
          </p>
        </div>

        {isFull && (
          <p className="text-sm leading-relaxed text-muted-foreground lg:text-right">
            A concise view of scale, capital position, portfolio reach, and disciplined
            participation from the FY2025 company profile.
          </p>
        )}
      </div>

      <div
        className={cn(
          'mt-7 grid gap-3 sm:grid-cols-2',
          isFull && 'xl:grid-cols-4',
        )}
      >
        {financialYearPortfolio.highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-md border border-border bg-muted/35 p-4"
          >
            <p className="eyebrow text-muted-foreground">{item.label}</p>
            <p className="mt-2 font-display text-2xl font-bold text-card-foreground">
              {item.value}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {item.note}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-border pt-7">
        <p className="eyebrow text-brand-teal">Portfolio distribution</p>
        <div
          className={cn(
            'mt-5 grid gap-5',
            isFull ? 'lg:grid-cols-3' : 'grid-cols-1',
          )}
        >
          <div className="rounded-md border border-border bg-muted/25 p-5">
            <p className="font-display text-lg font-bold text-card-foreground">
              Line of business
            </p>
            <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-muted">
              {financialYearPortfolio.lineMix.map((item, index) => (
                <div
                  key={item.label}
                  className={index === 0 ? 'bg-brand-indigo' : 'bg-brand-teal'}
                  style={{ width: `${item.value}%` }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <ul className="mt-5 flex flex-col gap-4">
              {financialYearPortfolio.lineMix.map((item, index) => (
                <li key={item.label} className="grid gap-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="flex items-center gap-2 text-sm font-semibold text-card-foreground">
                      <span
                        className={cn(
                          'size-2.5 rounded-full',
                          index === 0 ? 'bg-brand-indigo' : 'bg-brand-teal',
                        )}
                        aria-hidden="true"
                      />
                      {item.label}
                    </span>
                    <span className="font-display text-lg font-bold text-brand-indigo">
                      {item.value}%
                    </span>
                  </div>
                  <p className="pl-4 text-xs leading-relaxed text-muted-foreground">
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-border bg-muted/25 p-5">
            <p className="font-display text-lg font-bold text-card-foreground">
              Country concentration
            </p>
            <ul className="mt-4 space-y-4">
              {financialYearPortfolio.countrySignals.map((item) => (
                <BarRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  valueLabel={item.valueLabel}
                  note={item.note}
                  max={15}
                />
              ))}
            </ul>
            <div className="mt-5 grid gap-2">
              {financialYearPortfolio.marketNotes.map((item) => (
                <div key={item.label} className="rounded-md bg-card p-3">
                  <p className="text-xs font-semibold text-card-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-border bg-muted/25 p-5">
            <p className="font-display text-lg font-bold text-card-foreground">
              Facultative and treaty signals
            </p>
            <ul className="mt-4 space-y-4">
              {financialYearPortfolio.placementSignals.map((item) => (
                <BarRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  valueLabel={item.valueLabel}
                  note={item.note}
                  max={item.label === 'Markets reached' ? 112 : 100}
                />
              ))}
            </ul>
          </div>

          <div
            className={cn(
              'rounded-md border border-border bg-muted/25 p-5',
              isFull && 'lg:col-span-3',
            )}
          >
            <p className="font-display text-lg font-bold text-card-foreground">
              GWP trend
            </p>
            <div className="mt-5 grid gap-4">
              {financialYearPortfolio.premiumTrend.map((item) => (
                <div
                  key={item.year}
                  className={cn(
                    'grid gap-2',
                    isFull && 'sm:grid-cols-[4rem_1fr_7rem] sm:items-center',
                  )}
                >
                  <div className="flex items-baseline justify-between gap-3 sm:block">
                    <span className="text-sm font-semibold text-card-foreground">
                      {item.year}
                    </span>
                    <span className="font-display text-sm font-bold text-brand-indigo sm:hidden">
                      {item.valueLabel}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-brand-indigo"
                      style={{
                        width: `${Math.max(8, (item.value / maxPremium) * 100)}%`,
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="hidden font-display text-sm font-bold text-brand-indigo sm:block">
                    {item.valueLabel}
                  </span>
                  <p
                    className={cn(
                      'text-xs leading-relaxed text-muted-foreground',
                      isFull && 'sm:col-start-2 sm:col-span-2',
                    )}
                  >
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          {financialYearPortfolio.sourceNote}
        </p>
      </div>
    </div>
  )
}
