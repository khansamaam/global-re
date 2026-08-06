import type { Metadata } from 'next'
import { LegalPageContent } from '@/components/legal/legal-page-content'
import { getLegalPage } from '@/lib/legal-pages'

const page = getLegalPage('disclaimer')

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
}

export default function DisclaimerPage() {
  return <LegalPageContent page={page} />
}
