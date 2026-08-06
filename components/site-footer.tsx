import Image from 'next/image'
import Link from 'next/link'
import { businessLines, site } from '@/lib/site'
import { legalNavigation } from '@/lib/legal-pages'

const columns = [
  {
    heading: 'Solutions',
    links: businessLines.map((line) => ({
      label: line.name,
      href: `/solutions/${line.slug}`,
    })),
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Global RE', href: '/about' },
      { label: 'Financial strength', href: '/about#financial-strength' },
      { label: 'Leadership', href: '/about#leadership' },
      { label: 'Offices', href: '/contact#offices' },
    ],
  },
  {
    heading: 'Focus',
    links: [
      { label: 'Written portfolio', href: '/about#scope' },
      { label: 'Construction & Engineering', href: '/about#scope' },
      { label: 'Energy', href: '/about#scope' },
      { label: 'Claims-paying ability', href: '/about#financial-strength' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Risk insights', href: '/insights' },
      { label: 'Submit Proposal', href: '/contact' },
      { label: 'Claims notification', href: '/contact' },
      { label: 'Office & claims', href: '/contact#offices' },
    ],
  },
  {
    heading: 'Compliance',
    links: legalNavigation,
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-brand-indigo-deep text-on-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={site.logo}
                alt=""
                width={44}
                height={44}
                className="size-11 object-contain"
              />
              <span className="font-display text-xl font-bold tracking-tight">
                GLOBAL RE
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed opacity-70">
              {site.legalName} is a Nevis-headquartered global reinsurance firm with a
              Dubai representative office, focused on treaty and facultative risk
              across defined specialist reinsurance classes.
            </p>
            <dl className="mt-6 flex flex-col gap-1 text-sm opacity-70">
              <div className="flex gap-2">
                <dt className="shrink-0">HQ:</dt>
                <dd>{site.hq}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0">Dubai:</dt>
                <dd>{site.representativeOffice}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="sr-only">Telephone</dt>
                <dd>{site.phone}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="sr-only">Email</dt>
                <dd>
                  <a className="hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="sr-only">Claims email</dt>
                <dd>
                  <a className="hover:underline" href={`mailto:${site.claimsEmail}`}>
                    {site.claimsEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-12">
            {columns.map((column) => (
              <nav key={column.heading} aria-labelledby={`footer-${column.heading}`}>
                <h2
                  id={`footer-${column.heading}`}
                  className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold"
                >
                  {column.heading}
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm opacity-70 transition-opacity hover:opacity-100"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-8 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:underline">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:underline">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
