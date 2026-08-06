export const site = {
  name: 'Global RE',
  legalName: 'Global RE Overseas Ltd.',
  tagline: 'Measured reinsurance capacity for defined specialist classes.',
  logo: '/images/global-re-logo.png',
  paidUpCapital: '$500M',
  email: 'office@global-re.com',
  underwritingEmail: 'underwriting@global-re.com',
  claimsEmail: 'claims@global-re.com',
  phone: '+971 43 20 5517',
  fax: '+971 44 54 23 10',
  hq: 'Charlestown, Nevis, Saint Kitts and Nevis',
  representativeOffice:
    '14th Floor, H Hotel Office Tower, Sheikh Zayed Road, Dubai, UAE',
  registeredOffice:
    'A.L. Evelyn Ltd Building, Main Street, Charlestown, Nevis, Saint Kitts and Nevis',
}

export type BusinessLine = {
  slug: string
  name: string
  shortName: string
  summary: string
  image: string
  imageAlt: string
  scope: string
  focus: string
  treatyTypes: string[]
  products: { name: string; description: string }[]
  differentiators: { title: string; body: string }[]
  riskConsiderations: { title: string; body: string }[]
  submissionRequirements: string[]
}

export const businessLines: BusinessLine[] = [
  {
    slug: 'property',
    name: 'Property',
    shortName: 'Property',
    summary:
      'Property reinsurance for commercial, industrial, and project-related assets, with attention to physical damage, business interruption, and catastrophe aggregation.',
    image: '/images/line-property.png',
    imageAlt:
      'Satellite view of a hurricane system spiralling over open ocean near a coastline',
    scope: 'Commercial and industrial property',
    focus: 'Commercial assets, industrial schedules, energy assets, and catastrophe-exposed portfolios',
    treatyTypes: ['Facultative', 'Treaty', 'Quota share', 'Excess of loss', 'Catastrophe'],
    products: [
      {
        name: 'Physical damage',
        description:
          'Capacity for commercial and industrial property damage where values, occupancies, and protection standards are clearly described.',
      },
      {
        name: 'Business interruption',
        description:
          'Time-element exposure reviewed against declared values, reinstatement assumptions, supply dependencies, and indemnity periods.',
      },
      {
        name: 'Catastrophe layers',
        description:
          'Selective participation where peak peril exposure, accumulation, attachment point, reinstatement terms, and event definitions are transparent.',
      },
      {
        name: 'Industrial all risks',
        description:
          'Support for complex industrial locations where engineering reports, loss prevention measures, and claims history are available.',
      },
      {
        name: 'Energy property',
        description:
          'Property and business interruption exposure for energy-related assets, reviewed with attention to concentration and operational resilience.',
      },
      {
        name: 'Project operational handover',
        description:
          'Property exposure following completion or commissioning, where construction, testing, and operating phases are clearly separated.',
      },
    ],
    differentiators: [
      {
        title: 'Accumulation discipline',
        body: 'Locations, zones, occupancies, and peak peril exposure are reviewed before capacity is committed.',
      },
      {
        title: 'Engineering-led review',
        body: 'Risk quality is assessed with attention to protection systems, maintenance standards, and loss prevention evidence.',
      },
      {
        title: 'Business interruption clarity',
        body: 'Declared values, dependencies, and indemnity periods are examined alongside physical damage exposure.',
      },
      {
        title: 'Wording focus',
        body: 'Deductibles, event language, reinstatements, and basis of settlement are reviewed before participation is agreed.',
      },
    ],
    riskConsiderations: [
      {
        title: 'Occupancy and construction',
        body: 'Risk selection considers building construction, use, occupancy, fire protection, and maintenance standards.',
      },
      {
        title: 'Catastrophe and accumulation',
        body: 'Exposure is reviewed by territory, peril zone, and concentration before line size is set.',
      },
      {
        title: 'Business interruption dependencies',
        body: 'Supplier, utility, access, and customer dependencies are considered where they can materially change loss outcomes.',
      },
      {
        title: 'Claims evidence',
        body: 'Loss history, survey reports, valuations, and engineering recommendations are expected for material placements.',
      },
    ],
    submissionRequirements: [
      'Location schedule with values, occupancies, construction, and protection details',
      'Loss history and large-loss narrative for the account or portfolio',
      'Engineering reports, risk improvement status, and catastrophe exposure information',
      'Proposed wording, limits, deductibles, attachment points, and reinstatement terms',
    ],
  },
  {
    slug: 'casualty',
    name: 'Casualty',
    shortName: 'Casualty',
    summary:
      'Casualty reinsurance for general liability, products liability, employers liability, and excess liability exposures where jurisdiction, wording, and claims environment are understood.',
    image: '/images/line-casualty.png',
    imageAlt:
      'Automated container terminal at blue hour with gantry cranes and ordered transport lanes',
    scope: 'Liability and casualty',
    focus: 'Commercial liability, project liability, products exposure, and excess casualty layers',
    treatyTypes: ['Facultative', 'Treaty', 'Quota share', 'Excess of loss', 'Clash'],
    products: [
      {
        name: 'General liability',
        description:
          'Capacity for third party bodily injury and property damage exposures where operations, territories, and limits are well defined.',
      },
      {
        name: 'Products liability',
        description:
          'Selective participation where product type, distribution territory, recall exposure, and historical experience are understood.',
      },
      {
        name: 'Employers liability',
        description:
          'Support for workplace injury liability where employment practices, industry sector, and jurisdiction are clearly described.',
      },
      {
        name: 'Project and contractors liability',
        description:
          'Liability exposure connected to construction, engineering, and infrastructure projects, reviewed against contractual risk transfer.',
      },
      {
        name: 'Excess casualty',
        description:
          'Higher layer support considered where attachment point, wording, claims environment, and historical severity are appropriate.',
      },
      {
        name: 'Clash and accumulation protections',
        description:
          'Treaty structures considered where event definitions and multi-policy loss pathways are clearly mapped.',
      },
    ],
    differentiators: [
      {
        title: 'Jurisdiction-aware appetite',
        body: 'Venue, legal trend, inflation, and litigation behaviour are reviewed before capacity is sized.',
      },
      {
        title: 'Long-tail discipline',
        body: 'Participation reflects development risk and claims severity, not only headline premium volume.',
      },
      {
        title: 'Contract wording review',
        body: 'Limit structure, exclusions, occurrence language, and aggregation provisions are treated as core underwriting inputs.',
      },
      {
        title: 'Claims environment review',
        body: 'Claims files, settlement practices, defence strategy, and large-loss experience shape the underwriting view.',
      },
    ],
    riskConsiderations: [
      {
        title: 'Venue and legal trend',
        body: 'Jurisdiction, court behaviour, statutory environment, and social inflation are reviewed for each material territory.',
      },
      {
        title: 'Limit adequacy',
        body: 'Attachment points and policy limits are compared with historical severity and expected development.',
      },
      {
        title: 'Operational exposure',
        body: 'Activities, subcontracting, product use, and contract risk transfer are considered together.',
      },
      {
        title: 'Reporting cadence',
        body: 'Timely bordereaux and large-loss reporting are important for long-tail portfolio monitoring.',
      },
    ],
    submissionRequirements: [
      'Schedule of limits, attachment points, territories, and insured activities',
      'Five-year loss experience with large-loss details and open-claim status',
      'Draft wording, exclusions, aggregation language, and claims-control provisions',
      'Exposure data by industry, jurisdiction, product type, and project where relevant',
    ],
  },
  {
    slug: 'engineering',
    name: 'Engineering',
    shortName: 'Engineering',
    summary:
      'Engineering reinsurance for construction, erection, machinery, equipment, and project-related risks where technical controls, testing phases, and contract conditions are visible.',
    image: '/images/line-specialty.png',
    imageAlt:
      'Offshore energy infrastructure seen from above in calm blue water at sunrise',
    scope: 'Construction and engineering',
    focus: 'CAR, EAR, machinery breakdown, project equipment, testing, and delay-sensitive works',
    treatyTypes: ['Facultative', 'Treaty', 'Quota share', 'Excess of loss', 'Project-specific'],
    products: [
      {
        name: 'Construction all risks',
        description:
          'Reinsurance for civil works and construction projects where contract terms, site controls, and project timetable are available.',
      },
      {
        name: 'Erection all risks',
        description:
          'Capacity for plant, machinery, and equipment installation where testing, commissioning, and handover phases are clearly defined.',
      },
      {
        name: 'Machinery breakdown',
        description:
          'Support for operational machinery exposure where maintenance, inspection, and loss-prevention practices are evidenced.',
      },
      {
        name: 'Contractors plant and equipment',
        description:
          'Coverage for mobile plant, equipment, and site machinery subject to valuation, usage, and theft-control review.',
      },
      {
        name: 'Delay in start-up',
        description:
          'Delay-sensitive project exposure considered where critical path, testing, and indemnity assumptions are technically supported.',
      },
      {
        name: 'Infrastructure projects',
        description:
          'Selective support for roads, utilities, energy infrastructure, public works, and major engineering projects.',
      },
    ],
    differentiators: [
      {
        title: 'Project-stage underwriting',
        body: 'Risk is assessed through design, procurement, construction, testing, commissioning, and maintenance stages.',
      },
      {
        title: 'Technical information focus',
        body: 'Engineering reports, method statements, project controls, and contractor experience are reviewed before participation.',
      },
      {
        title: 'Contractual risk transfer',
        body: 'Responsibility among principals, contractors, subcontractors, and suppliers is reviewed alongside policy wording.',
      },
      {
        title: 'Delay exposure discipline',
        body: 'Delay in start-up and time-element exposure are considered only where critical path assumptions are credible.',
      },
    ],
    riskConsiderations: [
      {
        title: 'Project complexity',
        body: 'Civil, mechanical, electrical, and commissioning risk are reviewed according to project phase and technical controls.',
      },
      {
        title: 'Contractor experience',
        body: 'Experience with similar works, subcontractor management, and quality assurance practices inform participation.',
      },
      {
        title: 'Testing and commissioning',
        body: 'Testing procedures, defects cover, hot testing, and handover conditions materially affect the underwriting view.',
      },
      {
        title: 'Natural catastrophe exposure',
        body: 'Project location and works schedule are compared with weather, flood, earthquake, and other peril exposure.',
      },
    ],
    submissionRequirements: [
      'Project description, contract value, timeline, location, and principal parties',
      'Construction method, engineering reports, and contractor/subcontractor experience',
      'Testing and commissioning details, maintenance period, and delay assumptions',
      'Draft wording, deductibles, extensions, accumulation, and loss history',
    ],
  },
  {
    slug: 'marine',
    name: 'Marine',
    shortName: 'Marine',
    summary:
      'Marine reinsurance for cargo, transit, project cargo, stock throughput, and related logistics exposures where route, storage, and accumulation controls are understood.',
    image: '/images/line-specialty.png',
    imageAlt:
      'Offshore energy infrastructure seen from above in calm blue water at sunrise',
    scope: 'Marine cargo and transit',
    focus: 'Goods in transit, project cargo, logistics, storage, and marine-related project interfaces',
    treatyTypes: ['Facultative', 'Treaty', 'Open cover', 'Quota share', 'Excess of loss'],
    products: [
      {
        name: 'Marine cargo',
        description:
          'Capacity for insured goods moving by sea, air, and land, subject to route, packing, conveyance, and accumulation review.',
      },
      {
        name: 'Project cargo',
        description:
          'Support for high-value, oversized, or delay-sensitive cargo connected to infrastructure, energy, and construction projects.',
      },
      {
        name: 'Stock throughput',
        description:
          'Selective programmes combining transit and storage exposure where locations, values, and security controls are transparent.',
      },
      {
        name: 'Warehouse and storage exposure',
        description:
          'Storage and accumulation risks reviewed alongside transit controls, catastrophe exposure, and stock valuation.',
      },
      {
        name: 'War, strikes, and extensions',
        description:
          'Extensions considered where geographic, sanctions, route, and contractual controls are satisfactory.',
      },
      {
        name: 'Marine project interface',
        description:
          'Cargo exposure reviewed alongside engineering and property placements where one project can create multiple loss pathways.',
      },
    ],
    differentiators: [
      {
        title: 'Route and accumulation review',
        body: 'Port, vessel, route, warehouse, and project-site accumulations are treated as core underwriting inputs.',
      },
      {
        title: 'Documentation discipline',
        body: 'Packing, survey, bills of lading, storage terms, and valuation basis are reviewed before support is agreed.',
      },
      {
        title: 'Project cargo familiarity',
        body: 'Oversized, high-value, and critical-path cargo is assessed with project timeline and delay sensitivity in view.',
      },
      {
        title: 'Claims clarity',
        body: 'Large marine losses are handled with attention to survey evidence, transit documentation, and policy intent.',
      },
    ],
    riskConsiderations: [
      {
        title: 'Transit route and conveyance',
        body: 'Mode of transport, route, transhipment, vessel quality, and seasonality can materially alter the risk.',
      },
      {
        title: 'Storage concentrations',
        body: 'Warehouse and port accumulations are reviewed against fire, theft, catastrophe, and security controls.',
      },
      {
        title: 'Cargo sensitivity',
        body: 'Fragility, temperature sensitivity, theft attractiveness, and packing quality shape terms and participation.',
      },
      {
        title: 'Sanctions and territorial controls',
        body: 'War, strikes, sanctions, and restricted territories require clear controls and compliance review.',
      },
    ],
    submissionRequirements: [
      'Cargo type, values, routes, conveyances, packing, and storage locations',
      'Loss history, survey requirements, and claims handling arrangements',
      'Territory, sanctions, war/strikes extensions, and accumulation information',
      'Draft wording, limits, deductibles, open cover terms, and project cargo details',
    ],
  },
  {
    slug: 'bonds-surety',
    name: 'Bonds/Surety',
    shortName: 'Bonds/Surety',
    summary:
      'Bonds and surety reinsurance for bid, performance, advance payment, maintenance, and contract guarantee obligations linked to public, private, and infrastructure works.',
    image: '/images/line-specialty.png',
    imageAlt:
      'Offshore energy infrastructure seen from above in calm blue water at sunrise',
    scope: 'Contract bonds and surety',
    focus: 'Contractors, infrastructure, public works, commercial obligations, and performance security',
    treatyTypes: ['Facultative', 'Treaty', 'Quota share', 'Excess of loss', 'Bond facility'],
    products: [
      {
        name: 'Bid bonds',
        description:
          'Support for tender-stage obligations where bidder standing, project scope, and contract conditions are understood.',
      },
      {
        name: 'Performance bonds',
        description:
          'Capacity for project execution obligations, reviewed against contractor experience, contract terms, and delivery controls.',
      },
      {
        name: 'Advance payment bonds',
        description:
          'Reinsurance support for payment security where recovery mechanisms and counter-guarantees are clearly evidenced.',
      },
      {
        name: 'Maintenance bonds',
        description:
          'Support for post-completion obligations where defects period, retention, and warranty terms are defined.',
      },
      {
        name: 'Contract guarantees',
        description:
          'Selective participation in public and private contract obligations with clear indemnity and security packages.',
      },
      {
        name: 'Surety treaty support',
        description:
          'Treaty capacity considered where cedant underwriting controls, obligor monitoring, and portfolio reporting are robust.',
      },
    ],
    differentiators: [
      {
        title: 'Collateral and counter-guarantee discipline',
        body: 'Security packages, indemnities, counter-guarantees, and recovery rights are reviewed before capacity is deployed.',
      },
      {
        title: 'Project-stage underwriting',
        body: 'Obligations are assessed from tender through execution, completion, maintenance, and release.',
      },
      {
        title: 'Contractor and obligor review',
        body: 'Financial standing, track record, backlog, and project delivery capacity are considered alongside contract terms.',
      },
      {
        title: 'Portfolio monitoring',
        body: 'Treaty support depends on clear bordereaux, aggregate limits, obligor concentrations, and default reporting.',
      },
    ],
    riskConsiderations: [
      {
        title: 'Obligor quality',
        body: 'Balance sheet strength, experience, backlog, ownership, and banking support inform surety participation.',
      },
      {
        title: 'Contract conditions',
        body: 'Termination rights, liquidated damages, dispute resolution, and employer obligations are reviewed.',
      },
      {
        title: 'Security package',
        body: 'Counter-guarantees, collateral, indemnities, and recovery mechanics are assessed before capacity is agreed.',
      },
      {
        title: 'Portfolio concentration',
        body: 'Accumulation by obligor, project owner, sector, geography, and bond type is monitored.',
      },
    ],
    submissionRequirements: [
      'Bond type, amount, beneficiary, obligor, project description, and expiry or release conditions',
      'Contract documents, indemnity wording, counter-guarantees, collateral, and recovery arrangements',
      'Obligor financials, experience record, backlog, and project delivery history',
      'Cedant underwriting guidelines, aggregate exposure, bordereaux, and loss/default experience',
    ],
  },
]

export const stats = [
  {
    label: 'Founded',
    value: '2022',
    note: 'Focused non-life reinsurer and advisory provider',
  },
  {
    label: 'Team',
    value: '25+',
    note: 'Professionals across underwriting, claims, finance, and operations',
  },
  {
    label: 'Markets',
    value: '112',
    note: 'Facultative and treaty markets combined in FY2025',
  },
  {
    label: 'Average signed share',
    value: '8.3%',
    note: 'Average participation across the facultative book',
  },
]

export const portfolioScopeStatement =
  'Global RE writes Property, Casualty, Engineering, Marine, and Bonds/Surety reinsurance.'

export const industryFocus = [
  {
    name: 'Construction & Engineering',
    description:
      'Project-led risk across Bonds/Surety, Property, Marine, Casualty, and Engineering where technical controls and contractual obligations are material.',
  },
  {
    name: 'Energy',
    description:
      'Property, Casualty, Marine, Engineering, business interruption, and construction exposures across upstream, midstream, downstream, and related infrastructure.',
  },
]

export const financialYearPortfolio = {
  year: 'FY2025',
  total: 'USD 33.4M',
  metric: 'Audited combined insurance revenue, up 17% from FY2024',
  highlights: [
    {
      label: 'Insurance revenue',
      value: 'USD 33.4M',
      note: 'Up 17% from USD 28.4M in FY2024',
    },
    {
      label: 'Net insurance result',
      value: 'USD 4.6M',
      note: 'Up 57% from USD 2.9M in FY2024',
    },
    {
      label: 'Total equity',
      value: 'USD 437.2M',
      note: 'FY2025 audited combined position',
    },
    {
      label: 'Total assets',
      value: 'USD 530.7M',
      note: 'Latest audited position',
    },
  ],
  portfolioReach: [
    {
      label: 'Property share',
      value: '37%',
      note: 'Leading business class by gross premium',
    },
    {
      label: 'Largest facultative country',
      value: '12.5%',
      note: 'Indonesia, by premium concentration',
    },
    {
      label: 'Largest treaty country',
      value: '9.5%',
      note: 'South Korea, outside worldwide covers',
    },
    {
      label: 'Markets reached',
      value: '112',
      note: 'Facultative and treaty markets combined',
    },
  ],
  underwritingDiscipline: [
    {
      label: 'Average signed share',
      value: '8.3%',
      note: 'Across the facultative book',
    },
    {
      label: 'Proportional facultative risks',
      value: '80%+',
      note: 'Written below 10% signed share',
    },
    {
      label: 'US facultative position',
      value: '3rd',
      note: 'Third-largest facultative territory by premium share',
    },
  ],
  lineMix: [
    {
      label: 'Property',
      value: 37,
      note: 'Leading business class by gross premium',
    },
    {
      label: 'Casualty, Engineering, Marine, Bonds/Surety',
      value: 63,
      note: 'Remaining disclosed specialist classes',
    },
  ],
  countrySignals: [
    {
      label: 'Indonesia',
      value: 12.5,
      valueLabel: '12.5%',
      note: 'Largest single-country concentration in the facultative book',
    },
    {
      label: 'South Korea',
      value: 9.5,
      valueLabel: '9.5%',
      note: 'Largest treaty country concentration outside worldwide covers',
    },
    {
      label: 'United States',
      value: 8.5,
      valueLabel: '8.5%',
      note: 'Third-largest facultative territory by premium share',
    },
  ],
  marketNotes: [
    {
      label: 'Saudi Arabia',
      note: 'One of the top facultative territories referenced in the profile',
    },
    {
      label: 'Netherlands',
      note: 'Engineering risk reference in a developed market',
    },
  ],
  placementSignals: [
    {
      label: 'Markets reached',
      value: 112,
      valueLabel: '112',
      note: 'Facultative and treaty markets combined',
    },
    {
      label: 'Average signed share',
      value: 8.3,
      valueLabel: '8.3%',
      note: 'Average participation across the facultative book',
    },
    {
      label: 'Proportional facultative below 10%',
      value: 80,
      valueLabel: '80%+',
      note: 'Proportional facultative risks written below 10% signed share',
    },
  ],
  premiumTrend: [
    {
      year: '2023',
      value: 116,
      valueLabel: 'USD 116M',
      note: 'Concentrated, opportunistic book',
    },
    {
      year: '2024',
      value: 28,
      valueLabel: 'USD 28M',
      note: 'Deliberate rebalancing toward quality',
    },
    {
      year: '2025',
      value: 33,
      valueLabel: 'USD 33M',
      note: 'More selective, better-priced book',
    },
  ],
  sourceNote:
    'Financial highlights are drawn from the FY2025 audited company profile. Where the profile does not disclose a full split, the chart labels state the disclosed basis.',
}

export const previousYearFinancials = {
  year: 'FY2025',
  title: 'Previous financial year',
  status: 'Audited combined profile',
  description:
    'Audited FY2025 financial highlights with FY2024 comparatives for cedants, brokers, and counterparties reviewing Global RE.',
  documents: [
    {
      title: 'Insurance revenue',
      value: 'USD 33.4M',
      description:
        'Up 17% from USD 28.4M in FY2024 on an audited combined basis.',
      status: 'FY2025 audited',
    },
    {
      title: 'Net insurance result',
      value: 'USD 4.6M',
      description:
        'Up 57% from USD 2.9M in FY2024, reflecting improved insurance result.',
      status: 'FY2025 audited',
    },
    {
      title: 'Total equity',
      value: 'USD 437.2M',
      description:
        'Audited combined equity position, with the profile presented alongside liabilities and liquidity.',
      status: 'FY2025 audited',
    },
    {
      title: 'Total assets',
      value: 'USD 530.7M',
      description:
        'Latest audited combined asset position for the previous financial year.',
      status: 'FY2025 audited',
    },
  ],
  note:
    'Gross written premium trend reflects Global RE underwriting book: USD 116M in 2023, USD 28M in 2024, and USD 33M in 2025.',
}

export const companySnapshot = [
  {
    label: 'Founded',
    value: '2022',
    note: 'Focused, well-capitalised non-life reinsurer',
  },
  {
    label: 'Ownership',
    value: '100%',
    note: 'Single-shareholder ownership structure',
  },
  {
    label: 'Team',
    value: '25+',
    note: 'Professionals and growing',
  },
  {
    label: 'Footprint',
    value: 'MENA, Africa & Asia',
    note: 'Expanding regional and international reach',
  },
]

export const partners = [
  {
    category: 'Investor',
    name: 'One Investment Fund',
    logo: '/images/partners/one-investment-fund.png',
  },
  {
    category: 'Actuarial',
    name: 'Badri',
    logo: '/images/partners/badri.png',
  },
  {
    category: 'ERP',
    name: 'Tellma',
    logo: '/images/partners/tellma.png',
  },
  {
    category: 'Bank',
    name: 'Emirates NBD',
    logo: '/images/partners/emirates-nbd.png',
  },
  {
    category: 'Software',
    name: 'DXC Technology',
    logo: '/images/partners/dxc-technology.png',
  },
]

export const retrocessionSecurityPanel = {
  year: '2026',
  effectiveDate: '1 January 2026',
  leader: 'ASR Syndicate 2454',
  signedBy: 'Diaa Abdelmagid',
  signedTitle: 'Chief Executive Officer',
  members: [
    {
      reinsurer: 'ASR Syndicate 2454',
      country: 'United Kingdom',
      rating: 'A+',
      agency: 'A.M. Best',
      role: 'Leader',
    },
    {
      reinsurer: 'Eureka Re',
      country: 'Barbados',
      rating: 'A-',
      agency: 'A.M. Best',
    },
    {
      reinsurer: 'Ocean Re',
      country: 'Barbados',
      rating: 'A-',
      agency: 'A.M. Best',
    },
    {
      reinsurer: 'PVI',
      country: 'Vietnam',
      rating: 'A-',
      agency: 'A.M. Best',
    },
    {
      reinsurer: 'Active Re',
      country: 'Barbados',
      rating: 'A-',
      agency: 'A.M. Best',
    },
    {
      reinsurer: 'Genesis Global',
      country: 'Bahamas',
      rating: 'A-',
      agency: 'A.M. Best',
    },
    {
      reinsurer: 'Bangkok Insurance',
      country: 'Thailand',
      rating: 'A-',
      agency: 'A.M. Best',
    },
    {
      reinsurer: 'Labuan Re',
      country: 'Malaysia',
      rating: 'A-',
      agency: 'A.M. Best',
    },
  ],
}

export type TeamMember = {
  name: string
  title: string
  image: string
  group: string
}

export const executiveBoard: TeamMember[] = [
  {
    name: 'Diaa Awad Khogaly Abdelmagid',
    title: 'Chief Executive Officer',
    image: '/images/team/diaa-abdelmagid.jpg',
    group: 'Executive',
  },
  {
    name: 'Alwathig Erwa Idris Saeed',
    title: 'Chief Operating Officer',
    image: '/images/team/alwathig-erwa.jpg',
    group: 'Executive',
  },
  {
    name: 'Ghanem Yasir Ghanem Mohamed',
    title: 'Chief Financial Officer',
    image: '/images/team/ghanem-yasir.jpg',
    group: 'Executive',
  },
]

export const widerTeam: TeamMember[] = [
  {
    name: 'Palak Agarwal',
    title: 'Legal and Compliance Officer',
    image: '/images/team/palak-agarwal.jpg',
    group: 'Legal & Compliance',
  },
  {
    name: 'Reham Mohamed',
    title: 'Legal and HR Officer',
    image: '/images/team/reham-mohamed.jpg',
    group: 'Legal & Compliance',
  },
  {
    name: 'Aditya Singh',
    title: 'Claims Manager',
    image: '/images/team/aditya-singh.jpg',
    group: 'Claims',
  },
  {
    name: 'Muhammad Khawar',
    title: 'Assistant Manager, Claims',
    image: '/images/team/muhammad-khawar.jpg',
    group: 'Claims',
  },
  {
    name: 'Charbel Karaki',
    title: 'Business Development Executive',
    image: '/images/team/charbel-karaki.png',
    group: 'Business Development',
  },
  {
    name: 'Akhil Gopinath',
    title: 'Senior Underwriter',
    image: '/images/team/akhil-gopinath.png',
    group: 'Underwriting',
  },
  {
    name: 'Muhammad Haris',
    title: 'Senior Underwriter',
    image: '/images/team/muhammad-haris.jpg',
    group: 'Underwriting',
  },
  {
    name: 'Litty Thomas',
    title: 'Assistant Underwriter',
    image: '/images/team/litty-thomas.png',
    group: 'Underwriting',
  },
  {
    name: 'Ayellya Mohan',
    title: 'Assistant Underwriter',
    image: '/images/team/ayellya-mohan.jpg',
    group: 'Underwriting',
  },
  {
    name: 'Jayalakshmi Ramachandran',
    title: 'Assistant Underwriter',
    image: '/images/team/jayalakshmi-ramachandran.png',
    group: 'Underwriting',
  },
  {
    name: 'Islam Mamdouh',
    title: 'Retrocession Manager',
    image: '/images/team/islam-mamdouh.png',
    group: 'Retrocession',
  },
  {
    name: 'Musambo Kabalika',
    title: 'Credit Control Officer',
    image: '/images/team/musambo-kabalika.png',
    group: 'Credit Control',
  },
  {
    name: 'Gotada Abdelhadi',
    title: 'Senior Accountant',
    image: '/images/team/gotada-abdelhadi.png',
    group: 'Accounting',
  },
  {
    name: 'Ruaa Yasir',
    title: 'Technical Accountant',
    image: '/images/team/ruaa-yasir.jpg',
    group: 'Accounting',
  },
  {
    name: 'Eliane',
    title: 'Assistant Technical Accountant',
    image: '/placeholder-user.jpg',
    group: 'Accounting',
  },
  {
    name: 'Samaam Khan',
    title: 'Computer Engineer',
    image: '/images/team/samaam-khan.png',
    group: 'Technical',
  },
]

export const navigation: {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        label: 'Overview',
        href: '/solutions',
        description: 'How Global RE defines its specialist reinsurance appetite',
      },
      ...businessLines.map((line) => ({
        label: line.name,
        href: `/solutions/${line.slug}`,
        description: line.summary,
      })),
    ],
  },
  { label: 'Insights', href: '/insights' },
  { label: 'Investors', href: '/investors' },
  { label: 'Contact', href: '/contact' },
]

export const offices = [
  {
    city: 'Nevis',
    role: 'Headquarters and registered reinsurance company',
    region: 'Caribbean',
  },
  {
    city: 'Dubai',
    role: 'Representative office and meeting address',
    region: 'Middle East',
  },
  { city: 'Sharjah', role: 'Global RE office', region: 'Middle East' },
]
