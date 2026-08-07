export type InsightSection = {
  heading: string
  paragraphs: string[]
}

export type Insight = {
  slug: string
  title: string
  excerpt: string
  category: 'Risk research' | 'Market commentary' | 'Loss review' | 'Regulation'
  date: string
  readingTime: string
  author: string
  authorRole: string
  image: string
  imageAlt: string
  featured?: boolean
  signals: string[]
  body: InsightSection[]
}

export const insights: Insight[] = [
  {
    slug: 'systemic-cyber-aggregation',
    title: 'Pricing the outage: how we model systemic cyber aggregation',
    excerpt:
      'A single cloud region failure can touch thousands of policies at once. We break down the dependency mapping behind our cyber accumulation view, and why we cap systemic exposure at portfolio rather than treaty level.',
    category: 'Risk research',
    date: '2026-07-14',
    readingTime: '11 min',
    author: 'Analytics team',
    authorRole: 'Global RE Risk Science',
    image: '/images/insight-cyber-new.webp',
    imageAlt: 'Dark data centre corridor lined with server racks lit in teal and indigo',
    featured: true,
    signals: [
      'Cloud provider concentration',
      'Shared identity and payment systems',
      'Silent accumulation across liability wordings',
    ],
    body: [
      {
        heading: 'Why aggregation is the first question',
        paragraphs: [
          'Cyber severity is rarely driven by one insured. The larger concern is a shared dependency that can create losses across hundreds or thousands of policies at the same time.',
          'Global RE reviews cloud regions, managed service providers, payment infrastructure, and identity platforms as accumulation points before considering price or line size.',
        ],
      },
      {
        heading: 'How the exposure view is built',
        paragraphs: [
          'The analysis starts with declared technology dependencies and is then cross-checked against industry concentration assumptions. Where data is thin, the exposure is stress-tested rather than treated as diversified by default.',
          'Scenario work considers outage duration, contractual notification duties, business interruption waiting periods, liability triggers, and whether one event can activate more than one coverage part.',
        ],
      },
      {
        heading: 'What changes the underwriting answer',
        paragraphs: [
          'Strong segmentation, named supplier limits, precise event definitions, and transparent cedant controls can all improve the underwriting view. Broad dependent-business-interruption language without dependency data usually has the opposite effect.',
          'The result is an appetite decision that reflects probable accumulation, not only the expected loss on an individual account.',
        ],
      },
    ],
  },
  {
    slug: 'secondary-perils-2026',
    title: 'Secondary perils are now primary: wildfire, hail and inland flood',
    excerpt:
      'For the eighth consecutive year, so-called secondary perils contributed more to insured losses than named windstorms. We examine what that means for per-risk pricing and aggregate deductibles.',
    category: 'Risk research',
    date: '2026-06-28',
    readingTime: '9 min',
    author: 'Property underwriting team',
    authorRole: 'Global RE Underwriting',
    image: '/images/insight-wildfire.webp',
    imageAlt: 'Aerial view of a braided river delta with teal channels and gold sediment banks',
    featured: true,
    signals: [
      'Wildfire interface expansion',
      'Hail frequency and roof vulnerability',
      'Inland flood mapping gaps',
    ],
    body: [
      {
        heading: 'The label no longer fits the loss pattern',
        paragraphs: [
          'Wildfire, hail, convective storm, and inland flood can no longer be treated as secondary modifiers to a wind or earthquake view. They are recurring drivers of earnings volatility for property portfolios.',
          'Global RE looks for cedants that separate these exposures in pricing, reporting, and accumulation controls rather than folding them into broad catastrophe loadings.',
        ],
      },
      {
        heading: 'Data quality matters more than model count',
        paragraphs: [
          'Multiple models can still produce a narrow answer if the exposure data is weak. Construction, occupancy, roof age, geocoding precision, and flood-defence assumptions often explain more of the risk than the vendor model selection.',
          'Where data quality varies across a schedule, attachments and deductibles should reflect that uncertainty instead of assuming all locations are equally credible.',
        ],
      },
      {
        heading: 'Implications for treaty structure',
        paragraphs: [
          'Aggregate deductibles, occurrence definitions, hours clauses, and reinstatement provisions carry more weight when frequent severe weather is the driver.',
          'For cedants, the strongest submissions make clear how pricing, accumulation, and claims handling have changed after recent loss years.',
        ],
      },
    ],
  },
  {
    slug: 'mid-year-renewal-commentary',
    title: 'Mid-year renewals: discipline holds, but the margin is thinning',
    excerpt:
      'Risk-adjusted property rates softened modestly at 1 June and 1 July while liability terms tightened. Our view on where the cycle sits and which structures we are still prepared to write.',
    category: 'Market commentary',
    date: '2026-07-02',
    readingTime: '7 min',
    author: 'Underwriting committee',
    authorRole: 'Global RE Underwriting',
    image: '/images/insight-renewals.webp',
    imageAlt: 'Business renewal and contract negotiation setting',
    signals: [
      'Risk-adjusted pricing movement',
      'Attachment point discipline',
      'Cedant retention quality',
    ],
    body: [
      {
        heading: 'Pricing is softer, but not uniform',
        paragraphs: [
          'Mid-year renewals showed a wider spread between attractive and marginal risks. Well-documented property programmes with improved retention and clean wording still drew support, while thinner data sets were more exposed to reduced capacity.',
          'Liability remains more selective, particularly where jurisdiction, claims inflation, or contract wording makes ultimate loss development difficult to read.',
        ],
      },
      {
        heading: 'Structure is doing more work',
        paragraphs: [
          'Cedants are using aggregate covers, higher retentions, and more precise event definitions to protect budgets while preserving meaningful protection.',
          'For reinsurers, the question is less whether to support a line and more whether the attachment, reinstatement, and reporting mechanics create an acceptable obligation.',
        ],
      },
      {
        heading: 'What we expect next',
        paragraphs: [
          'The next renewal cycle is likely to reward submissions that arrive early with credible data and clear claims narratives.',
          'Global RE expects to remain selective, particularly where terms depend on optimistic loss trend assumptions rather than visible portfolio improvement.',
        ],
      },
    ],
  },
  {
    slug: 'liability-verdict-trends',
    title: 'Liability severity: what verdict data tells us',
    excerpt:
      'Large verdicts above $10M have grown at a compound rate far above wage or repair-cost inflation. We share the trend selections our liability underwriters are watching.',
    category: 'Risk research',
    date: '2026-05-19',
    readingTime: '13 min',
    author: 'Casualty underwriting team',
    authorRole: 'Global RE Underwriting',
    image: '/images/insight-liability.webp',
    imageAlt: 'Ordered logistics terminal at blue hour with transport lanes and cranes',
    signals: [
      'Venue and jurisdiction',
      'Contractual risk transfer',
      'Large-loss development patterns',
    ],
    body: [
      {
        heading: 'Severity is a portfolio issue',
        paragraphs: [
          'A small number of large awards can reshape the expected loss cost of an entire liability book. The effect is most visible where policy limits, attachment points, and jurisdictional exposure have not changed with the claims environment.',
          'Global RE reviews verdict trends alongside cedant claims files to understand whether recent severity is isolated, emerging, or already embedded in pricing.',
        ],
      },
      {
        heading: 'The submission needs a claims narrative',
        paragraphs: [
          'Loss triangles alone rarely explain why severity changed. Strong submissions describe venue shifts, plaintiff strategy, defence posture, settlement authority, and any changes in underwriting selection.',
          'Where the narrative is credible, a reinsurer can distinguish adverse development from a portfolio that has already been remediated.',
        ],
      },
      {
        heading: 'What supports capacity',
        paragraphs: [
          'Clear exclusions, disciplined limits deployment, subcontractor controls, and claims escalation procedures all support a better view of liability risk.',
          'Attachment levels should reflect the time it takes for severity trends to emerge, not only the loss experience visible at renewal.',
        ],
      },
    ],
  },
  {
    slug: 'q1-2026-catastrophe-review',
    title: 'Q1 2026 catastrophe loss review',
    excerpt:
      'Insured losses for the first quarter reached an estimated $38B, driven by European windstorm and two US severe convective storm outbreaks. Line-by-line attribution and our own loss picks.',
    category: 'Loss review',
    date: '2026-04-22',
    readingTime: '6 min',
    author: 'Catastrophe analytics team',
    authorRole: 'Global RE Risk Science',
    image: '/images/insight-catastrophe.webp',
    imageAlt: 'Satellite view of a hurricane system over open ocean near a coastline',
    signals: [
      'Event definition and hours clauses',
      'Demand surge assumptions',
      'Reinstatement exposure',
    ],
    body: [
      {
        heading: 'A busy quarter for attritional catastrophe loss',
        paragraphs: [
          'The quarter reinforced how quickly mid-sized events can accumulate. European windstorm loss and US severe convective storm activity both produced broad claims activity without a single market-defining event.',
          'For reinsurers, the issue is how these events interact with attachment, hours clauses, and aggregate erosion across the treaty year.',
        ],
      },
      {
        heading: 'Claims information still arrives unevenly',
        paragraphs: [
          'Early loss notices often understate business interruption, demand surge, and reopened claims. Global RE therefore tracks reported loss, expected ultimate loss, and exposure-based reasonableness separately.',
          'Programmes with strong event coding and location-level claims reporting allow a faster and more confident reserving response.',
        ],
      },
      {
        heading: 'What changes for renewals',
        paragraphs: [
          'Cedants with visible mitigation work, tighter data, and a practical explanation of loss drivers are better placed to defend structure and pricing.',
          'Where losses reveal unmanaged concentration, the renewal discussion should start with retention, wording, and accumulation controls rather than price alone.',
        ],
      },
    ],
  },
  {
    slug: 'engineering-project-data',
    title: 'Engineering project data: underwriting through staged risk',
    excerpt:
      'Construction and engineering portfolios are shaped by project stage, contractor quality, testing exposure, and documentation depth. Our underwriting team explains the controls we look for before supporting engineering programmes.',
    category: 'Risk research',
    date: '2026-03-30',
    readingTime: '10 min',
    author: 'Engineering underwriting team',
    authorRole: 'Global RE Underwriting',
    image: '/images/insight-engineering.webp',
    imageAlt: 'Construction and engineering project infrastructure',
    signals: [
      'Project stage and critical path',
      'Testing and commissioning controls',
      'Contractor and subcontractor experience',
    ],
    body: [
      {
        heading: 'Engineering data is project-specific by design',
        paragraphs: [
          'Engineering portfolios depend on project-specific information: contract value, works schedule, method statement, contractor experience, and testing exposure.',
          'Global RE reviews the credibility of technical documentation before giving weight to price indications or proposed participation.',
        ],
      },
      {
        heading: 'Project stage changes the risk conversation',
        paragraphs: [
          'A project can look balanced on paper while carrying concentrated exposure during heavy lifts, testing, commissioning, or transition to operational cover.',
          'Reinsurance structures should reflect project stage through deductible design, reporting cadence, testing language, and clear handover definitions.',
        ],
      },
      {
        heading: 'What makes a submission stronger',
        paragraphs: [
          'Credible project documents, engineering reports, contractor records, loss history, and quality-control procedures all improve the underwriting view.',
          'Where delay exposure exists, critical path assumptions should be explained clearly before placement so cedants and reinsurers share the same expectation of performance.',
        ],
      },
    ],
  },
  {
    slug: 'ifrs17-reinsurance-presentation',
    title: 'IFRS 17 three years on: what cedants still get wrong',
    excerpt:
      'Reinsurance contracts held remain the most frequently restated element of insurer disclosures. Practical guidance for cedants preparing their year-end position.',
    category: 'Regulation',
    date: '2026-02-11',
    readingTime: '8 min',
    author: 'Accounting and technical team',
    authorRole: 'Global RE Technical Accounting',
    image: '/images/insight-ifrs.webp',
    imageAlt: 'Financial accounting and compliance documentation',
    signals: [
      'Contract boundary evidence',
      'Risk transfer documentation',
      'Claims cash-flow presentation',
    ],
    body: [
      {
        heading: 'Presentation needs to match contract economics',
        paragraphs: [
          'IFRS 17 disclosures can become misleading when the reinsurance contract held is treated as a mechanical offset rather than an instrument with its own cash-flow pattern.',
          'Cedants should be able to explain contract boundaries, risk transfer, reinstatement assumptions, and expected recoveries in language that aligns with the underlying treaty.',
        ],
      },
      {
        heading: 'Common areas of restatement',
        paragraphs: [
          'Restatements often arise from inconsistent treatment of commissions, reinstatement premiums, onerous groups, or claims recoveries after a loss event.',
          'The strongest year-end packs connect accounting presentation to wording and claims mechanics, reducing avoidable questions from auditors and counterparties.',
        ],
      },
      {
        heading: 'What Global RE looks for',
        paragraphs: [
          'Technical accounting teams should be involved before placement when structure is complex. This helps confirm that the intended risk transfer and financial reporting treatment are aligned.',
          'Clear documentation protects both sides by making the expected claims and premium cash flows easier to evidence later.',
        ],
      },
    ],
  },
  {
    slug: 'parametric-triggers-emerging-markets',
    title: 'Parametric triggers are closing the protection gap faster than treaties',
    excerpt:
      'In markets where loss adjustment infrastructure is thin, index-based cover pays in weeks rather than years. Lessons from four sovereign and municipal programmes.',
    category: 'Market commentary',
    date: '2026-01-28',
    readingTime: '9 min',
    author: 'Specialty underwriting team',
    authorRole: 'Global RE Underwriting',
    image: '/images/insight-parametric.webp',
    imageAlt: 'Offshore energy infrastructure at sunrise with teal water and industrial detail',
    signals: [
      'Trigger transparency',
      'Basis risk communication',
      'Independent data source governance',
    ],
    body: [
      {
        heading: 'Speed is the core value',
        paragraphs: [
          'Parametric structures can deliver liquidity quickly when traditional loss adjustment is slow, unavailable, or too costly relative to the protection need.',
          'The trade-off is basis risk, which must be measured and explained before the cover is placed.',
        ],
      },
      {
        heading: 'Trigger design decides credibility',
        paragraphs: [
          'A good trigger is independently verifiable, difficult to manipulate, and closely related to the economic loss the cedant is trying to manage.',
          'Rainfall, wind speed, earthquake intensity, and infrastructure disruption indices can all work, but only when the data source and payout curve are transparent.',
        ],
      },
      {
        heading: 'Where the structure fits',
        paragraphs: [
          'Parametric cover is particularly useful for public-sector, municipal, engineering, marine, and infrastructure exposures where quick funds can reduce downstream loss.',
          'Global RE reviews trigger governance, payout adequacy, and the cedant explanation of basis risk before considering support.',
        ],
      },
    ],
  },
]

export const categories = [
  'Risk research',
  'Market commentary',
  'Loss review',
  'Regulation',
] as const

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
