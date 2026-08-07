'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { businessLines, site } from '@/lib/site'
import { submitContactForm } from '@/app/actions/contact'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const formData = new FormData(form)

    const result = await submitContactForm({
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      businessClass: formData.get('businessClass') as string,
      proposalSummary: formData.get('proposalSummary') as string,
    })

    if (result.success) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-lg border border-border bg-card p-6 shadow-sm sm:grid-cols-2 lg:p-8 animate-fade-up animation-delay-100">
      <label className="flex flex-col gap-2 text-sm font-medium text-card-foreground">
        Name *
        <input
          name="name"
          required
          className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-brand-teal"
          placeholder="Your name"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-card-foreground">
        Company
        <input
          name="company"
          className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-brand-teal"
          placeholder="Company name"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-card-foreground">
        Email *
        <input
          name="email"
          type="email"
          required
          className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-brand-teal"
          placeholder="name@company.com"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-card-foreground">
        Business class
        <select
          name="businessClass"
          className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-brand-teal"
        >
          {businessLines.map((line) => (
            <option key={line.slug}>{line.name}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-card-foreground sm:col-span-2">
        Proposal summary *
        <textarea
          name="proposalSummary"
          required
          className="min-h-32 rounded-md border border-input bg-background px-3 py-3 text-sm outline-none transition-colors focus:border-brand-teal"
          placeholder="Share the proposed structure, territory, exposure data, loss history, and timing."
        />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Email the completed proposal pack to {site.underwritingEmail}.
        </p>
        <Button
          type="submit"
          disabled={status === 'sending'}
          className="h-11 bg-brand-indigo px-5 text-on-dark hover:bg-brand-indigo/90 disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Submit Proposal'}
        </Button>
      </div>
      {status === 'success' && (
        <p className="sm:col-span-2 rounded-md bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-700">
          ✓ Your proposal has been submitted successfully. We will respond shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="sm:col-span-2 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          ✗ {errorMsg}
        </p>
      )}
    </form>
  )
}

export function AddressSection() {
  return (
    <section className="border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-brand-teal" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-card-foreground">
                  Correspondence address and meeting address
                </h3>
              </div>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {site.representativeOffice}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A.L.Evelyn Ltd Building, Main Street, Charlestown, Nevis (KN-N), KN1200, SAINT KITTS AND NEVIS.
              </p>
            </div>
            <Button
              size="lg"
              className="h-12 bg-brand-indigo px-6 text-on-dark hover:bg-brand-indigo/90"
              nativeButton={false}
              render={<Link href="https://www.google.com/maps/search/14th+Floor+H+Hotel+Office+Tower+Sheikh+Zayed+Road+Dubai+UAE" target="_blank" rel="noopener noreferrer" />}
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
