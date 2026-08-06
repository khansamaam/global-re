'use client'

import { useMemo, useState } from 'react'
import { InsightCard } from '@/components/insight-card'
import { categories, type Insight } from '@/lib/insights'
import { cn } from '@/lib/utils'

export function InsightLibrary({ insights }: { insights: Insight[] }) {
  const [active, setActive] = useState<string>('All')

  const filtered = useMemo(
    () => (active === 'All' ? insights : insights.filter((i) => i.category === active)),
    [active, insights],
  )

  const filters = ['All', ...categories]

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 border-b border-border pb-6">
        <h2 className="eyebrow text-muted-foreground" id="library-heading">
          Browse the library
        </h2>
        <div
          role="group"
          aria-labelledby="library-heading"
          className="flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const isActive = filter === active
            const count =
              filter === 'All'
                ? insights.length
                : insights.filter((i) => i.category === filter).length

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'border-brand-indigo bg-brand-indigo text-on-dark'
                    : 'border-border bg-card text-muted-foreground hover:border-brand-teal hover:text-foreground',
                )}
              >
                {filter}
                <span className={cn('ml-2 text-xs', isActive ? 'text-on-dark/60' : 'text-muted-foreground/70')}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {`Showing ${filtered.length} of ${insights.length} publications`}
      </p>

      {filtered.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((insight) => (
            <li key={insight.slug} className="flex">
              <div className="flex flex-1">
                <InsightCard insight={insight} variant={insight.image ? 'default' : 'compact'} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-lg border border-border bg-card p-10 text-center text-muted-foreground">
          Nothing published in this category yet.
        </p>
      )}
    </div>
  )
}
