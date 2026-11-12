// ---------------------------------------------------------------------------
// EDIT THIS FILE to put real Norcrest Group details on the site.
// Everything marked TODO is placeholder text and should be replaced before
// you send this link to a prospective client or contracting officer
// ---------------------------------------------------------------------------

export const site = {
  name: "Norcrest Group LLC",
  shortName: "Norcrest Group",
  domain: "norcrestgroupllc.com",
  url: "https://norcrestgroupllc.com",
  tagline: "Dependable execution for government and commercial contracts.",
  description:
    "Norcrest Group delivers professional services to government and commercial clients on schedule, on budget, and to specification.",

  contact: {
    name: "Godspower Irefin",
    title: "CEO",
    email: "g_irefin@norcrestgroupllc.com",
    phone: "+1 (617) 380-8491",
    website: "www.norcrestgroupllc.com",
  },

  // Capability statement identifiers. Leave a value as "" to hide that row.
  registrations: {
    uei: "MSF2CT9RGN77", // Unique Entity ID
    cage: "25AR3", // CAGE code
    duns: "",
    samStatus: "Registered in SAM.gov", // or "Registration in progress"
    businessType: "Small Business", // e.g. "SDVOSB", "8(a)", "WOSB", "MBE"
  },

  // TODO: replace with the NAICS codes you actually bid under.
  naics: [
    { code: "561210", label: "Facilities Support Services" },
    { code: "561720", label: "Janitorial Services" },
    { code: "561730", label: "Landscaping Services" },
    { code: "561110", label: "Office Administrative Services" },
    { code: "561790", label: "Other Services to Buildings and Dwellings" },
    { code: "541611", label: "Administrative Management & General Management Consulting Services" },
  ],

  services: [
    {
      title: "Program & Project Management",
      body: "Scope definition, scheduling, risk tracking, and reporting that keeps deliverables measurable and audit-ready from kickoff through closeout.",
    },
    {
      title: "Operations & Logistics Support",
      body: "Day-to-day operational support, resource coordination, and process documentation that keeps multi-site work running without gaps.",
    },
    {
      title: "Facilities & Field Services",
      body: "Coordinated on-site services with credentialed personnel, clear safety practice, and documented completion for every task order.",
    },
    {
      title: "Staffing & Workforce Solutions",
      body: "Vetted personnel matched to contract requirements, with onboarding, compliance tracking, and continuity planning built in.",
    },
    {
      title: "Compliance & Reporting",
      body: "Documentation, quality control, and reporting aligned to contract terms so performance is verifiable at every review.",
    },
    {
      title: "Procurement Support",
      body: "Sourcing, vendor coordination, and delivery tracking that protects schedule and cost baselines on complex orders.",
    },
  ],

  differentiators: [
    "Single accountable point of contact for every contract",
    "Documented processes and reporting from day one",
    "Responsive, right-sized team with no layers of hand-off",
    "Compliance and safety treated as deliverables, not afterthoughts",
  ],

  // About page copy, from the company profile document.
  about: {
    competencies: [
      {
        title: "Facilities Support & Field Services",
        body: "General facility maintenance and on-site support delivered through credentialed, vetted personnel and partners, with task-order completion documented.",
      },
      {
        title: "Janitorial & Custodial Services",
        body: "Recurring and one-time cleaning for offices, public buildings, and multi-site facilities.",
      },
      {
        title: "Grounds & Landscaping",
        body: "Mowing, grounds maintenance, and seasonal site care.",
      },
      {
        title: "Specialty Building Services",
        body: "Pressure washing, window cleaning, and other interior and exterior building services.",
      },
      {
        title: "Administrative & Office Support",
        body: "Front-office, clerical, records, and administrative support staffed to contract requirements.",
      },
      {
        title: "Program Management & Reporting",
        body: "Scope, scheduling, quality control, and contract-aligned reporting from kickoff to closeout.",
      },
    ],
    differentiators: [
      "One accountable point of contact from award through closeout",
      "Written scope, schedule, and acceptance criteria before work starts",
      "Documented processes and fixed-cadence reporting from day one",
      "Right-sized team with no layers of hand-off",
      "Compliance and safety treated as deliverables, not afterthoughts",
    ],
  },
} as const;
