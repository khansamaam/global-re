import type { Metadata } from 'next'
import { LegalPageContent } from '@/components/legal/legal-page-content'
import { getLegalPage } from '@/lib/legal-pages'

const page = getLegalPage('our-licenses')

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
}

export default function OurLicensesPage() {
  return <LegalPageContent page={page} />
}
