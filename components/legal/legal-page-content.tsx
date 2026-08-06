import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Button } from '@/components/ui/button'
import { legalNavigation, type LegalPage } from '@/lib/legal-pages'

export function LegalPageContent({ page }: { page: LegalPage }) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        image="/images/hero-global.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: page.title, href: `/${page.slug}` },
        ]}
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <p className="eyebrow text-brand-teal">Compliance pages</p>
              <nav className="mt-5" aria-label="Legal pages">
                <ul className="flex flex-col gap-1">
                  {legalNavigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-card-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {page.updated}
                </p>
                {page.contact && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-4 h-10 w-full justify-center"
                    nativeButton={false}
                    render={<Link href={`mailto:${page.contact.email}`} />}
                  >
                    <Mail className="size-4" data-icon="inline-start" />
                    {page.contact.label}
                  </Button>
                )}
              </div>
            </div>
          </aside>

          <div className="flex flex-col gap-6">
            {page.sections.map((section, index) => (
              <article
                key={section.heading}
                className="rounded-lg border border-border bg-card p-6 shadow-sm lg:p-8 animate-fade-up"
                style={{ animationDelay: `${Math.min(index, 6) * 55}ms` }}
              >
                <h2 className="font-display text-2xl font-bold text-card-foreground">
                  {section.heading}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {section.body}
                </p>
                {section.bullets && (
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-md border border-border bg-muted/35 px-4 py-3 text-sm font-medium text-card-foreground"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            {page.cards && (
              <div className="grid gap-4 sm:grid-cols-3">
                {page.cards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-lg border border-brand-gold/30 bg-brand-gold/10 p-5"
                  >
                    <h2 className="font-display text-lg font-bold text-card-foreground">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {card.body}
                    </p>
                    {card.href && (
                      <Link
                        href={card.href}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-indigo hover:underline"
                      >
                        View reference
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </Link>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
