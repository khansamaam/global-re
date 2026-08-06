import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbs,
}: {
  eyebrow: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  breadcrumbs?: { label: string; href: string }[]
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-indigo-deep">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ''}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover opacity-30"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-indigo-deep via-brand-indigo-deep/85 to-brand-indigo-deep/40"
          />
        </>
      )}
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-20 lg:py-28">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="animate-fade-up">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-on-dark/60">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-1">
                  {index > 0 && <ChevronRight className="size-3" aria-hidden="true" />}
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="eyebrow text-brand-gold animate-fade-up animation-delay-100">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-on-dark animate-fade-up animation-delay-200 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-on-dark/75 animate-fade-up animation-delay-300">
          {description}
        </p>
      </div>
    </section>
  )
}
