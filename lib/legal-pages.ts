export type LegalPage = {
  slug: string
  title: string
  eyebrow: string
  description: string
  updated: string
  contact?: {
    label: string
    email: string
  }
  sections: {
    heading: string
    body: string
    bullets?: string[]
  }[]
  cards?: {
    title: string
    body: string
    href?: string
  }[]
}

export const legalPages: LegalPage[] = [
  {
    slug: 'disclaimer',
    title: 'Disclaimer',
    eyebrow: 'Legal notice',
    description:
      'Website information, regulatory status, forward-looking statements, liability, trademarks, external links, and governing law.',
    updated: 'Information reviewed from Global RE public materials on 04 August 2026.',
    contact: {
      label: 'Legal enquiries',
      email: 'legal@global-re.com',
    },
    sections: [
      {
        heading: 'Regulatory status',
        body:
          'Global RE Overseas Ltd is described in the public notice as a reinsurance company authorised by the Financial Services Regulation and Supervision Department - Office of the Registrar of International Insurance. The notice references commercial registration number I 57722 and reinsurance activity under the Nevis International Insurance Ordinance Cap 7.07.',
      },
      {
        heading: 'Information only',
        body:
          'The website is provided for general informational purposes. It should not be treated as professional insurance, reinsurance, investment, legal, tax, or financial advice, and counterparties should take independent advice before making decisions.',
      },
      {
        heading: 'Forward-looking information',
        body:
          'Any forward-looking statements are subject to risks and uncertainties, including claims frequency and severity, catastrophe events, market cyclicality, regulation, reserves, litigation, currency movement, competition, operational disruption, and other factors.',
      },
      {
        heading: 'Liability, trademarks, and external links',
        body:
          'Global RE reserves rights in its name, marks, site content, layout, and data. External links may lead to sites outside Global RE control, and their presence does not imply responsibility for or endorsement of those sites.',
      },
      {
        heading: 'Governing law',
        body:
          'The disclaimer and use of the website are stated to be governed by Nevis law, with disputes subject to the jurisdiction of the courts of Nevis.',
      },
    ],
  },
  {
    slug: 'aml-and-fraud-procedure',
    title: 'AML and Fraud Procedure',
    eyebrow: 'Financial crime controls',
    description:
      'Summary of Global RE Overseas Ltd procedures for anti-bribery and corruption, anti-money laundering, sanctions controls, and fraud prevention.',
    updated: 'Information reviewed from Global RE public materials on 04 August 2026.',
    sections: [
      {
        heading: 'Compliance commitment',
        body:
          'Global RE states that employees are expected to follow its code of conduct, internal compliance policies, and applicable laws. Management and compliance functions are responsible for embedding these requirements into business processes.',
      },
      {
        heading: 'Financial crime risk areas',
        body:
          'The procedure identifies four key compliance risk areas connected to financial crime and sanctions violations.',
        bullets: [
          'Anti-bribery and corruption',
          'Anti-money laundering',
          'International trade controls and sanctions violations',
          'Fraud prevention, detection, and response',
        ],
      },
      {
        heading: 'Control framework',
        body:
          'The stated framework is built around policies, standards, processes, training, awareness, tools, monitoring, investigation, and reporting. Gifts, hospitality, due diligence, suspicious activity escalation, and sanctions controls are treated as controlled compliance processes.',
      },
      {
        heading: 'Customer due diligence and monitoring',
        body:
          'The procedure describes Know Your Client checks, beneficial ownership review, documentation requirements, risk-based monitoring, suspicious activity reporting, and record keeping. Business relationships are reviewed for unusual activity, source-of-funds concerns, complex ownership, and sanctions exposure.',
      },
      {
        heading: 'Fraud and sanctions',
        body:
          'Global RE states that it maintains policies and procedures to prevent, detect, and respond to fraud, and to comply with applicable sanctions and international trade control requirements.',
      },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    eyebrow: 'Data protection',
    description:
      'How Global RE Overseas Ltd describes collection, use, protection, and handling of personal information from website visitors and business contacts.',
    updated: 'Information reviewed from Global RE public materials on 04 August 2026.',
    contact: {
      label: 'Data protection',
      email: 'dataprotection@global-re.com',
    },
    sections: [
      {
        heading: 'Scope',
        body:
          'The privacy notice applies to Global RE Overseas Ltd website activity and business interactions. It notes that third-party websites linked from the site are managed by their own operators.',
      },
      {
        heading: 'Information collected',
        body:
          'Personal information may be collected directly from individuals, through business interactions, by email or forms, and through website technologies that help understand visitor behaviour. The public notice also describes anonymous browsing and limited non-personal analytics information.',
      },
      {
        heading: 'Use of information',
        body:
          'Personal data is used to respond to enquiries, provide requested information, manage services or business interactions, operate protected areas, and satisfy legal, regulatory, contractual, and pre-contractual requirements.',
      },
      {
        heading: 'Legal basis and protection',
        body:
          'The notice references applicable data protection laws, including St. Kitts and Nevis data protection legislation and GDPR principles where relevant. Global RE states that personal information is handled confidentially and with security safeguards.',
      },
      {
        heading: 'Data protection contact',
        body:
          'The Data Protection Officer can be contacted through the data protection email address for privacy questions, link concerns, or data handling requests.',
      },
    ],
  },
  {
    slug: 'terms-and-conditions',
    title: 'Terms and Conditions',
    eyebrow: 'Website terms',
    description:
      'General terms governing access to and use of the Global RE Overseas Ltd website and electronic reinsurance information.',
    updated: 'Information reviewed from Global RE public materials on 04 August 2026.',
    sections: [
      {
        heading: 'Use of the website',
        body:
          'The website is operated by Global RE Overseas Ltd as an informational resource about the company, services, and products. Continued use indicates acceptance of the terms and related privacy and cookie notices.',
      },
      {
        heading: 'User responsibilities',
        body:
          'Users are responsible for complying with applicable laws and ensuring that anyone using their device or access point also complies with the terms. The website is not intended for jurisdictions where local restrictions prohibit the activities described.',
      },
      {
        heading: 'Regulatory and licensing information',
        body:
          'The terms identify Global RE Overseas Ltd as registered in Nevis under company number I 57722, with its registered office at A.L. Evelyn Ltd Building, Main Street, Charlestown, Nevis, Saint Kitts and Nevis. The public terms describe authorisation for reinsurance activity under the relevant Nevis ordinance.',
      },
      {
        heading: 'No solicitation or advice',
        body:
          'Website content is for information only and should not be read as investment advice, professional advice, invitation, offer, or solicitation in any jurisdiction.',
      },
      {
        heading: 'Law and third-party links',
        body:
          'The terms are stated to be governed by Nevis law. External links may be provided for convenience, but third-party privacy practices and content remain outside Global RE control.',
      },
    ],
  },
  {
    slug: 'our-licenses',
    title: 'Our Licenses',
    eyebrow: 'Regulatory materials',
    description:
      'Public licensing references for Global RE Overseas Ltd, including Nevis insurance authorisation, incorporation materials, and LEI reference.',
    updated: 'Information reviewed from Global RE public materials on 04 August 2026.',
    sections: [
      {
        heading: 'Nevis reinsurance authorisation',
        body:
          'Global RE Overseas Ltd is described in public materials as authorised by the Financial Services Regulation and Supervision Department - Office of the Registrar of International Insurance for reinsurance activity under the Nevis International Insurance Ordinance Cap 7.07.',
      },
      {
        heading: 'Corporate registration',
        body:
          'The public legal materials identify commercial registration number I 57722 and registered office at A.L. Evelyn Ltd Building, Main Street, Charlestown, Nevis, Saint Kitts and Nevis.',
      },
      {
        heading: 'Reference materials',
        body:
          'The license page lists the Nevis International Insurance Ordinance and Certificate of Incorporation as downloadable reference materials. The privacy notice also references LEI 2549002D7MQHO16VCL46.',
      },
    ],
    cards: [
      {
        title: 'Nevis International Insurance Ordinance',
        body:
          'Referenced public licensing material for the Nevis reinsurance framework.',
        href: 'https://global-re.com/our-licenses/',
      },
      {
        title: 'Certificate of Incorporation',
        body:
          'Referenced public corporate registration material for Global RE Overseas Ltd.',
        href: 'https://global-re.com/our-licenses/',
      },
      {
        title: 'Legal Entity Identifier',
        body: 'LEI 2549002D7MQHO16VCL46.',
        href: 'https://lei.bloomberg.com/',
      },
    ],
  },
]

export const legalNavigation = legalPages.map((page) => ({
  label: page.title,
  href: `/${page.slug}`,
}))

export function getLegalPage(slug: string) {
  const page = legalPages.find((item) => item.slug === slug)

  if (!page) {
    throw new Error(`Unknown legal page: ${slug}`)
  }

  return page
}
