import type { Metadata } from 'next'
import { LegalPageContent } from '@/components/legal/legal-page-content'
import { getLegalPage } from '@/lib/legal-pages'

const page = getLegalPage('terms-and-conditions')

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
}

export default function TermsAndConditionsPage() {
  return <LegalPageContent page={page} />
}
