import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  tone = 'default',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'start' | 'center'
  tone?: 'default' | 'inverted'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex max-w-3xl flex-col gap-4 animate-fade-up',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'eyebrow',
            tone === 'inverted' ? 'text-brand-gold' : 'text-brand-teal',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-balance text-3xl font-bold sm:text-4xl',
          tone === 'inverted' ? 'text-on-dark' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-pretty text-base leading-relaxed sm:text-lg',
            tone === 'inverted'
              ? 'text-on-dark/75'
              : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
