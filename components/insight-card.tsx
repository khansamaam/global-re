import Image from 'next/image'
import Link from 'next/link'
import { formatDate, type Insight } from '@/lib/insights'
import { cn } from '@/lib/utils'

export function InsightCard({
  insight,
  variant = 'default',
}: {
  insight: Insight
  variant?: 'default' | 'compact'
}) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-[border-color,box-shadow,transform] duration-300 animate-fade-up hover:-translate-y-1 hover:border-brand-teal hover:shadow-lg',
      )}
    >
      {variant === 'default' && insight.image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={insight.image}
            alt={insight.imageAlt ?? ''}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="font-display font-semibold uppercase tracking-[0.12em] text-brand-teal">
            {insight.category}
          </span>
          <span aria-hidden="true">/</span>
          <time dateTime={insight.date}>{formatDate(insight.date)}</time>
          <span aria-hidden="true">/</span>
          <span>{insight.readingTime} read</span>
        </div>
        <h3 className="text-pretty font-display text-lg font-bold leading-snug text-card-foreground">
          <Link href={`/insights/${insight.slug}`}>
            {insight.title}
            <span className="absolute inset-0" aria-hidden="true" />
          </Link>
        </h3>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          {insight.excerpt}
        </p>
        <p className="mt-auto pt-3 text-xs text-muted-foreground">
          <span className="font-medium text-card-foreground">{insight.author}</span>
          {' - '}
          {insight.authorRole}
        </p>
      </div>
    </article>
  )
}
