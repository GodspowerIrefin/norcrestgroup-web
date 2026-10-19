// ---------------------------------------------------------------------------
// EDIT THIS FILE to put real Norcrest Group details on the site.
// Everything marked TODO is placeholder text and should be replaced before
// you send this link to a prospective client or contracting officer.
// ---------------------------------------------------------------------------

export const site = {
  name: "Norcrest Group LLC",
  shortName: "Norcrest Group",
  domain: "norcrestgroupllc.com",
  url: "https://norcrestgroupllc.com",
  tagline: "Dependable execution for government and commercial contracts.",
  description:
    "Norcrest Group LLC delivers professional services to government and commercial clients on schedule, on budget, and to specification.",

  contact: {
    email: "TODO@norcrestgroupllc.com", // TODO: real inbox
    phone: "TODO (555) 000-0000", // TODO: real number
    address: {
      line1: "TODO Street Address",
      city: "TODO City",
      state: "TODO",
      zip: "TODO",
    },
  },

  // Capability statement identifiers. Leave a value as "" to hide that row.
  // TODO: fill these in from your SAM.gov registration.
  registrations: {
    uei: "", // Unique Entity ID
    cage: "", // CAGE code
    duns: "",
    samStatus: "Registered in SAM.gov", // or "Registration in progress"
    businessType: "Small Business", // e.g. "SDVOSB", "8(a)", "WOSB", "MBE"
  },

  // TODO: replace with the NAICS codes you actually bid under.
  naics: [
    { code: "541611", label: "Administrative & General Management Consulting" },
    { code: "541990", label: "Professional, Scientific & Technical Services" },
    { code: "561210", label: "Facilities Support Services" },
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

  // TODO: replace with real engagements once you can cite them.
  pastPerformance: [
    {
      client: "TODO — Client or Agency",
      scope: "TODO — one line on what was delivered",
      value: "TODO — contract value or period of performance",
      outcome: "TODO — the measurable result",
    },
    {
      client: "TODO — Client or Agency",
      scope: "TODO — one line on what was delivered",
      value: "TODO — contract value or period of performance",
      outcome: "TODO — the measurable result",
    },
  ],
} as const;
