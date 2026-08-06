import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Instrument_Sans } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Global RE - Specialist Reinsurance Headquartered in Nevis',
    template: '%s | Global RE',
  },
  description:
    'Global RE is a Nevis-headquartered global reinsurance firm with a Dubai representative office, focused on defined specialist treaty and facultative reinsurance classes.',
  generator: 'v0.app',
  keywords: [
    'reinsurance',
    'specialist reinsurance',
    'Nevis reinsurer',
    'Dubai representative office',
    'casualty reinsurance',
    'engineering reinsurance',
    'marine reinsurance',
    'property reinsurance',
    'bonds and surety reinsurance',
  ],
  openGraph: {
    title: 'Global RE - Specialist Reinsurance Headquartered in Nevis',
    description:
      'Property, Casualty, Engineering, Marine, and Bonds/Surety reinsurance from a Nevis-headquartered firm with a Dubai representative office.',
    type: 'website',
    siteName: 'Global RE',
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const themeScript = `
    try {
      function applyGlobalReTheme(theme) {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('light', theme === 'light');
        localStorage.setItem('global-re-theme', theme);
      }

      function toggleGlobalReTheme() {
        applyGlobalReTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
      }

      window.__globalReApplyTheme = applyGlobalReTheme;
      window.__globalReToggleTheme = toggleGlobalReTheme;

      var stored = localStorage.getItem('global-re-theme');
      applyGlobalReTheme(
        stored === 'light' || stored === 'dark'
          ? stored
          : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      );

      document.addEventListener('click', function(event) {
        var target = event.target;
        var button = target && target.closest ? target.closest('[data-theme-toggle]') : null;
        if (!button) return;
        toggleGlobalReTheme();
      }, true);
    } catch (_) {}
  `

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`bg-background ${archivo.variable} ${instrumentSans.variable}`}
    >
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
