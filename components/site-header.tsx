'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { ChevronDown, Globe, Menu, Moon, Sun, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navigation, site } from '@/lib/site'
import { cn } from '@/lib/utils'

const utilityLinks = [
  { label: 'Claims notification', href: '/contact' },
  { label: 'Media centre', href: '/insights' },
]

export function SiteHeader() {
  const pathname = usePathname()

  useEffect(() => {
    const mobileMenu = document.querySelector(
      'details[data-mobile-menu]',
    ) as HTMLDetailsElement | null

    if (mobileMenu) mobileMenu.open = false
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const closeMobileMenu = () => {
    const mobileMenu = document.querySelector(
      'details[data-mobile-menu]',
    ) as HTMLDetailsElement | null

    if (mobileMenu) mobileMenu.open = false
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-brand-indigo-deep text-on-dark md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between overflow-hidden px-6 text-xs">
          <p className="flex min-w-0 items-center gap-2 opacity-80">
            <Globe className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">
              Specialist treaty and facultative reinsurance
            </span>
          </p>
          <nav aria-label="Utility" className="flex shrink-0 items-center gap-6">
            {utilityLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 px-6 lg:h-20">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src={site.logo}
              alt=""
              width={44}
              height={44}
              className="size-9 object-contain lg:size-11"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-brand-indigo lg:text-xl">
                GLOBAL <span className="text-brand-teal">RE</span>
              </span>
              <span className="mt-1 hidden text-[0.625rem] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
                Reinsurance
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className="desktop-nav-item group relative">
                  <Link
                    href={item.href}
                    aria-haspopup="true"
                    className={cn(
                      'flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive(item.href)
                        ? 'text-brand-indigo'
                        : 'text-foreground/75 hover:text-foreground',
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'size-3.5 transition-transform',
                        'group-hover:rotate-180 group-focus-within:rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                  <div className="desktop-nav-menu absolute left-0 top-full z-50 hidden w-[23rem] pt-2 group-hover:block group-focus-within:block">
                    <ul className="max-h-[calc(100vh-9rem)] overflow-y-auto rounded-lg border border-border bg-popover shadow-xl animate-fade-up">
                      {item.children.map((child) => (
                        <li key={child.label} className="border-b border-border last:border-0">
                          <Link
                            href={child.href}
                            className="block px-4 py-3 transition-colors hover:bg-muted"
                          >
                            <span className="block text-sm font-semibold text-popover-foreground">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-muted-foreground">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive(item.href)
                      ? 'text-brand-indigo'
                      : 'text-foreground/75 hover:text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              data-theme-toggle
              className="hidden size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted lg:inline-flex"
              aria-label="Toggle light and dark mode"
              title="Toggle light and dark mode"
            >
              <Moon className="size-4 dark:hidden" aria-hidden="true" />
              <Sun className="hidden size-4 dark:block" aria-hidden="true" />
            </button>
            <button
              type="button"
              data-theme-toggle
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted lg:hidden"
              aria-label="Toggle light and dark mode"
              title="Toggle light and dark mode"
            >
              <Moon className="size-4 dark:hidden" aria-hidden="true" />
              <Sun className="hidden size-4 dark:block" aria-hidden="true" />
            </button>
            <Button
              size="lg"
              className="hidden h-10 bg-brand-indigo px-5 text-on-dark hover:bg-brand-indigo/90 sm:inline-flex"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Submit Proposal
            </Button>
            <details data-mobile-menu className="group/mobile lg:hidden">
              <summary
                className="inline-flex size-10 cursor-pointer list-none items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted [&::-webkit-details-marker]:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5 group-open/mobile:hidden" aria-hidden="true" />
                <X className="hidden size-5 group-open/mobile:block" aria-hidden="true" />
              </summary>

              <div className="fixed inset-x-0 top-16 z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-background shadow-xl animate-fade-up">
                <nav aria-label="Mobile" className="mx-auto max-w-7xl px-6 py-4">
                  <ul className="flex flex-col">
                    {navigation.map((item) => (
                      <li key={item.label} className="border-b border-border py-1">
                        {item.children ? (
                          <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3 font-display text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                              <span>{item.label}</span>
                              <ChevronDown
                                className="size-4 transition-transform group-open:rotate-180"
                                aria-hidden="true"
                              />
                            </summary>
                            <ul className="space-y-1 pb-3 pl-4">
                              {item.children.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    href={child.href}
                                    onClick={closeMobileMenu}
                                    className={cn(
                                      'block py-1.5 text-sm',
                                      child.href === item.href
                                        ? 'font-medium text-foreground'
                                        : 'text-muted-foreground',
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </details>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="block py-3 font-display text-base font-semibold"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      data-theme-toggle
                      className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
                      aria-label="Toggle light and dark mode"
                      title="Toggle light and dark mode"
                    >
                      <Moon className="size-4 dark:hidden" aria-hidden="true" />
                      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
                    </button>
                    <Button
                      size="lg"
                      className="h-11 flex-1 bg-brand-indigo text-on-dark hover:bg-brand-indigo/90"
                      nativeButton={false}
                      render={<Link href="/contact" onClick={closeMobileMenu} />}
                    >
                      Submit Proposal
                    </Button>
                  </div>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  )
}
