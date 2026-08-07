'use server'

import nodemailer from 'nodemailer'
import { appendFile } from 'fs/promises'
import { join } from 'path'

const LOG_FILE = join(process.cwd(), 'submissions.log')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.office365.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false,
  },
})

async function logSubmission(entry: Record<string, string>) {
  const timestamp = new Date().toISOString()
  const line = JSON.stringify({ timestamp, ...entry }) + '\n'
  try {
    await appendFile(LOG_FILE, line, 'utf-8')
  } catch (err) {
    console.error('Failed to write log:', err)
  }
}

export async function submitContactForm(formData: {
  name: string
  company: string
  email: string
  businessClass: string
  proposalSummary: string
}) {
  const { name, company, email, businessClass, proposalSummary } = formData

  if (!name || !email || !proposalSummary) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const entry = { name, company, email, businessClass, proposalSummary }
  await logSubmission(entry)

  try {
    await transporter.sendMail({
      from: `"Global RE Website" <${process.env.SMTP_USER}>`,
      to: 'office@global-re.com',
      cc: 'samaam@global-re.com',
      replyTo: email,
      subject: `Proposal Submission — ${businessClass} — ${name} (${company})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a4e; border-bottom: 2px solid #1a1a4e; padding-bottom: 8px;">
            New Proposal Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company</td>
              <td style="padding: 8px 0; color: #222;">${company || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0; color: #222;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Business Class</td>
              <td style="padding: 8px 0; color: #222;">${businessClass}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <h3 style="margin: 0 0 8px 0; color: #1a1a4e;">Proposal Summary</h3>
            <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${proposalSummary}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            This proposal was submitted via the Global RE website contact form.
          </p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: 'Failed to send proposal. Please try again or email us directly.' }
  }
}
