import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
import Icon from "@/components/Icon";
import {
  BridgeLines,
  TowerLines,
  ContourLines,
  MarkLines,
} from "@/components/Backdrop";

const STORIES = [
  {
    tag: "Procurement",
    title: "What Form M means for your delivery date",
    dek: "The paperwork that moves cargo through Nigerian customs — and why we sequence it before the vessel sails.",
    image: "/media/warehouse.jpg",
    caption: "Racked distribution warehouse with picking bins",
  },
  {
    tag: "Technical services",
    title: "Water systems that survive handover",
    dek: "Treatment plants fail after commissioning, not before. Our O&M model keeps trained local teams on the equipment.",
    image: "/media/plant.jpg",
    caption: "Stainless process piping and pumps inside a treatment plant",
  },
  {
    tag: "Advisory",
    title: "The owner's engineer, explained",
    dek: "An independent check between contractor and client — and why MDAs are writing the role into more programs.",
    image: "/media/engineering.jpg",
    caption: "Engineer measuring components over technical drawings",
  },
];

const NEWS = [
  {
    date: "Aug 2026",
    category: "Delivery",
    title:
      "Final handover of 12 solar-hybrid mini-grids to the Federal Ministry of Power",
  },
  {
    date: "Jul 2026",
    category: "Company",
    title: "Norcrest Nigeria commissions expanded logistics yard in Abuja",
  },
  {
    date: "Jun 2026",
    category: "Compliance",
    title: "2025 anti-corruption program review published",
  },
  {
    date: "May 2026",
    category: "Award",
    title:
      "Selected as owner's engineer for FCTA township roads, phase II",
  },
];

const SERVICES = [
  {
    num: "01",
    icon: "civil",
    title: "Infrastructure & civil works",
    body: "Roads, drainage, water systems, and power distribution. Design review, construction, and site supervision to Federal Ministry of Works and NERC standards.",
  },
  {
    num: "02",
    icon: "procurement",
    title: "Procurement & logistics",
    body: "US and international sourcing under a documented export compliance program. Ocean and air freight into Lagos and Onne, customs clearance, and delivery to site.",
  },
  {
    num: "03",
    icon: "engineering",
    title: "Engineering & technical services",
    body: "Substation and solar-hybrid mini-grid engineering, metering, water treatment, and commissioning. Operations and maintenance with Nigerian technical teams.",
  },
  {
    num: "04",
    icon: "advisory",
    title: "Program management & advisory",
    body: "Owner's engineer services, contract administration, and monitoring and evaluation for MDA and multilateral-funded programs.",
  },
];

const GOVERNMENT = [
  {
    num: "01",
    icon: "tender",
    title: "Tendering and due process",
    body: "We respond to open competitive and selective tenders under the Public Procurement Act 2007. Technical and financial submissions are prepared to BPP format, and we support due process certification from award through close-out.",
  },
  {
    num: "02",
    icon: "incountry",
    title: "In-country delivery",
    body: "Our CAC-registered subsidiary in Abuja holds the local contracts, employs Nigerian engineers, and manages site works directly. Delivery is not subcontracted to a firm you have never met.",
  },
  {
    num: "03",
    icon: "customs",
    title: "Customs and logistics",
    body: "We manage Form M processing, PAAR, SONCAP certification, duty exemptions where applicable, and bonded transport from port to site. Equipment arrives cleared, insured, and on program.",
  },
  {
    num: "04",
    icon: "payment",
    title: "Payment structures",
    body: "We work with confirmed letters of credit through correspondent banks, milestone billing certified by the supervising MDA, and advance payment guarantees issued by Nigerian banks.",
  },
];

const PROJECTS = [
  {
    project: "Supply and installation of 12 solar-hybrid mini-grids",
    client: "Federal Ministry of Power",
    state: "Kaduna",
    year: "2024",
  },
  {
    project: "Procurement and delivery of 33kV switchgear and transformers",
    client: "Transmission Company of Nigeria",
    state: "Ogun",
    year: "2024",
  },
  {
    project: "Rehabilitation of 40 rural water schemes with solar pumping",
    client: "Federal Ministry of Water Resources",
    state: "Bauchi",
    year: "2023",
  },
  {
    project: "Owner's engineer, 28 km township roads program",
    client: "Federal Capital Territory Administration",
    state: "FCT",
    year: "2022–23",
  },
];

const REGISTRATIONS = [
  "Incorporated in Delaware, United States",
  "SAM.gov registered — UEI [XXXXXXXXXXXX], CAGE [XXXXX]",
  "Registered contractor, Nigerian Bureau of Public Procurement",
  "Norcrest Nigeria Ltd — CAC RC [XXXXXXX]",
  "ISO 9001:2015 quality management system",
  "OFAC screening and FCPA compliance program",
  "Export compliance under the US Export Administration Regulations",
];

export default function Home() {
  return (
    <div id="top">
      <Header />

      {/* ========== HERO ========== */}
      <section className="relative flex h-svh min-h-[640px] items-end">
        <div className="absolute inset-0 overflow-hidden bg-panel">
          {/* eslint-disable-next-line @next/next/no-img-element -- full-bleed hero, art-directed crop */}
          <img
            src="/media/hero.jpg"
            alt="High-voltage transmission towers at dusk"
            className="photo-treat h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[88rem] px-6 pb-24 lg:px-12">
          <h1 className="max-w-5xl font-head text-5xl leading-[1.02] tracking-[-0.02em] md:text-7xl lg:text-[6.75rem]">
            <span className="md:hidden">
              Infrastructure for Nigeria&apos;s federal government.
            </span>
            <span className="hidden md:inline">
              Infrastructure and procurement for Nigeria&apos;s federal
              government.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-fg/80">
            <span className="md:hidden">
              A US contractor delivering civil works, sourcing, and program
              management to Nigerian MDAs.
            </span>
            <span className="hidden md:inline">
              Norcrest Group is a US contractor delivering civil works,
              sourcing, and program management to Nigerian MDAs — from Houston,
              Texas and Abuja, FCT.
            </span>
          </p>
          <a href="#projects" className="cta-link mt-10 text-sm">
            See our projects <span className="arrow">→</span>
          </a>
        </div>

        <p className="absolute bottom-8 right-6 z-10 text-[11px] uppercase tracking-[0.12em] text-mut lg:right-12">
          Scroll
        </p>
      </section>

      {/* ========== WHO WE ARE ========== */}
      <section
        id="who-we-are"
        className="sec-light relative isolate scroll-mt-20 overflow-hidden py-15"
      >
        <BridgeLines className="pointer-events-none absolute right-0 bottom-0 -z-10 w-[72%] max-w-4xl opacity-[0.07]" />
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            <div>
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
                  Who we are
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 max-w-3xl font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-6xl">
                  American standards. Delivered in country.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-fg/80">
                  <p>
                    Norcrest Group is incorporated in Delaware and
                    headquartered in Houston, Texas. Our delivery office in
                    Abuja is a CAC-registered Nigerian subsidiary with its own
                    engineers, its own site teams, and its own balance sheet.
                  </p>
                  <p>
                    We bring US supply chains and program discipline to
                    Nigerian public-sector projects. We work through Nigerian
                    partners, hire Nigerian engineers, and stay on site until
                    handover. Our contracts are with ministries, departments,
                    agencies, state governments, and multilateral-funded
                    programs.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.24} className="lg:border-l lg:border-rule lg:pl-16">
              <Photo
                ratio="4/5"
                src="/media/site-crew.jpg"
                caption="Site walk on a reinforced slab pour, supervision team in hi-vis"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== FEATURED STORIES ========== */}
      <section id="featured" className="scroll-mt-20 py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="flex items-end justify-between">
            <div>
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
                  Featured
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 max-w-3xl font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-6xl">
                  From the field.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.16} className="hidden md:block">
              <a href="#newsroom" className="cta-link text-sm">
                All stories <span className="arrow">→</span>
              </a>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-12 border-t border-rule pt-12 md:grid-cols-[5fr_4fr_4fr] md:gap-0 md:divide-x md:divide-rule">
            {STORIES.map((story, i) => (
              <Reveal
                key={story.title}
                delay={i * 0.08}
                className={i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"}
              >
                <article className="group">
                  <Photo
                    ratio="3/2"
                    src={story.image}
                    caption={story.caption}
                  />
                  <p className="mt-7 text-[11px] uppercase tracking-[0.12em] text-mut">
                    {story.tag}
                  </p>
                  <h3 className="mt-3 font-head text-2xl leading-snug tracking-[-0.02em]">
                    {story.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-fg/70">
                    {story.dek}
                  </p>
                  <a href="#contact" className="cta-link mt-6 text-sm">
                    Read <span className="arrow">→</span>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" className="sec-light scroll-mt-20 py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
              Services
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 max-w-3xl font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              What we do.
            </h2>
          </Reveal>

          <div className="mt-20">
            {SERVICES.map((service, i) => (
              <Reveal key={service.num} delay={i * 0.08}>
                <div className="grid gap-4 border-t border-rule py-10 md:grid-cols-12 md:gap-8">
                  <p className="text-sm text-mut md:col-span-1">
                    {service.num}
                  </p>
                  <h3 className="flex items-start gap-4 font-head text-2xl tracking-[-0.02em] md:col-span-5 lg:text-3xl">
                    <Icon name={service.icon} className="mt-1 h-7 w-7 shrink-0 text-mut" />
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg/70 md:col-span-5 md:col-start-8">
                    {service.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-rule" />
          </div>

          {/* photo strip: mixed aspect ratios, thin vertical rules */}
          <div className="mt-24 grid md:grid-cols-[4fr_5fr_3fr] md:divide-x md:divide-rule">
            <Reveal className="md:pr-8">
              <Photo
                ratio="4/5"
                src="/media/rebar.jpg"
                caption="Reinforcement crew fixing rebar on a structural deck"
              />
            </Reveal>
            <Reveal delay={0.08} className="max-md:mt-8 md:px-8">
              <Photo
                ratio="3/2"
                src="/media/port.jpg"
                caption="Container terminal from above — gantry cranes and stacked cargo"
              />
            </Reveal>
            <Reveal delay={0.16} className="max-md:mt-8 md:pl-8">
              <Photo
                ratio="1/1"
                src="/media/solar.jpg"
                caption="Ground-mounted solar array rows in open country"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== WORKING WITH GOVERNMENT ========== */}
      <section
        id="government"
        className="relative isolate scroll-mt-20 overflow-hidden py-15"
      >
        <TowerLines className="pointer-events-none absolute right-0 top-0 -z-10 h-full max-h-[640px] opacity-[0.06]" />
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <div>
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
                  How we work
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl">
                  Working with the Nigerian government.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-10 text-base leading-relaxed text-fg/80">
                  Public-sector delivery in Nigeria is a discipline of its own.
                  We have built our firm around it — the tender process, the
                  port, the certification chain, and the payment cycle.
                </p>
              </Reveal>
              <Reveal delay={0.24} className="mt-16 hidden lg:block">
                <Photo
                  ratio="4/5"
                  src="/media/review.jpg"
                  caption="Tender documents under review across two workstations"
                />
              </Reveal>
            </div>

            <div className="lg:border-l lg:border-rule lg:pl-16">
              {GOVERNMENT.map((item, i) => (
                <Reveal key={item.num} delay={i * 0.08}>
                  <div className="border-t border-rule py-12 first:border-t-0 first:pt-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-mut">{item.num}</p>
                      <Icon name={item.icon} className="h-7 w-7 text-mut" />
                    </div>
                    <h3 className="mt-4 font-head text-2xl tracking-[-0.02em] lg:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-fg/70">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section
        id="projects"
        className="sec-light relative isolate scroll-mt-20 overflow-hidden py-15"
      >
        <ContourLines className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 w-full opacity-[0.07]" />
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
              Selected projects
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 max-w-3xl font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Recent delivery.
            </h2>
          </Reveal>

          <div className="mt-20">
            <div className="hidden grid-cols-[3fr_2fr_1fr_auto] gap-8 border-b border-rule pb-4 md:grid">
              {["Project", "Client", "State", "Year"].map((h) => (
                <p
                  key={h}
                  className="text-[11px] uppercase tracking-[0.12em] text-mut last:text-right"
                >
                  {h}
                </p>
              ))}
            </div>
            {PROJECTS.map((row, i) => (
              <Reveal key={row.project} delay={i * 0.08}>
                <div className="grid gap-2 border-b border-rule py-7 md:grid-cols-[3fr_2fr_1fr_auto] md:gap-8">
                  <p className="text-base leading-snug">{row.project}</p>
                  <p className="text-sm text-fg/70 md:self-center">
                    {row.client}
                  </p>
                  <p className="text-sm text-fg/70 md:self-center">
                    {row.state}
                  </p>
                  <p className="text-sm text-fg/70 md:self-center md:text-right">
                    {row.year}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <a href="#contact" className="cta-link mt-14 text-sm">
              Request the full project record <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ========== NEWSROOM ========== */}
      <section id="newsroom" className="scroll-mt-20 py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <div>
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
                  Newsroom
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl">
                  Recent updates.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <a href="#contact" className="cta-link mt-10 text-sm">
                  Press enquiries <span className="arrow">→</span>
                </a>
              </Reveal>
            </div>
            <div className="lg:border-l lg:border-rule lg:pl-16">
              {NEWS.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <a
                    href="#contact"
                    className="group grid gap-2 border-b border-rule py-7 first:border-t md:grid-cols-[auto_1fr] md:gap-10"
                  >
                    <div className="flex gap-6 md:w-40 md:flex-col md:gap-1">
                      <p className="text-xs text-mut">{item.date}</p>
                      <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
                        {item.category}
                      </p>
                    </div>
                    <p className="text-base leading-snug transition-colors group-hover:text-fg/70">
                      {item.title}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CAREERS ========== */}
      <section id="careers" className="sec-light scroll-mt-20 py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            <div>
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
                  Careers
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 max-w-3xl font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-6xl">
                  Build on real ground.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-10 max-w-xl text-base leading-relaxed text-fg/80">
                  Engineers, quantity surveyors, logistics coordinators — in
                  Houston and Abuja. The work is physical, public, and measured
                  in delivery, not decks. Most roles are hired in country.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <a href="#contact" className="cta-link mt-10 text-sm">
                  See open roles <span className="arrow">→</span>
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.16} className="hidden lg:block lg:border-l lg:border-rule lg:pl-16">
              <Photo
                ratio="4/5"
                src="/media/office.jpg"
                caption="Engineer at a dual-monitor workstation"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== COMPLIANCE ========== */}
      <section id="compliance" className="scroll-mt-20 py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            <div>
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
                  Compliance
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 max-w-2xl font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl">
                  Anti-corruption and transparency.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-fg/80">
                  <p>
                    Norcrest operates under the US Foreign Corrupt Practices
                    Act and Nigeria&apos;s Corrupt Practices and Other Related
                    Offences Act. We do not pay facilitation fees. Every
                    engagement runs through documented procurement, third-party
                    due diligence, and annual compliance training for staff and
                    partners.
                  </p>
                  <p>
                    Concerns about any Norcrest engagement can be reported —
                    anonymously if preferred — to{" "}
                    <a
                      href="mailto:compliance@norcrestgroup.com"
                      className="text-accent underline decoration-1 underline-offset-4"
                    >
                      compliance@norcrestgroup.com
                    </a>
                    .
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:border-l lg:border-rule lg:pl-16">
              <Reveal delay={0.16}>
                <h3 className="text-[11px] uppercase tracking-[0.12em] text-mut">
                  Registrations
                </h3>
                <ul className="mt-6">
                  {REGISTRATIONS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-rule py-4 text-sm leading-relaxed text-fg/70"
                    >
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section
        id="contact"
        className="sec-light relative isolate scroll-mt-20 overflow-hidden py-15"
      >
        <MarkLines className="pointer-events-none absolute -right-16 top-1/2 -z-10 h-[420px] -translate-y-1/2 opacity-[0.06]" />
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            <div>
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
                  Contact
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 max-w-3xl font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-6xl">
                  Planning a tender or a program?
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-10 max-w-xl text-base leading-relaxed text-fg/80">
                  Our capability statement covers services, past performance,
                  registrations, and references. We respond within two business
                  days.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-12 flex flex-wrap items-center gap-10">
                  <a
                    href="mailto:bd@norcrestgroup.com?subject=Capability%20statement%20request"
                    className="bg-fg px-8 py-4 text-xs uppercase tracking-[0.12em] text-canvas transition-colors hover:bg-fg/85"
                  >
                    Request a capability statement
                  </a>
                  <a href="mailto:info@norcrestgroup.com" className="cta-link text-sm">
                    General enquiries <span className="arrow">→</span>
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.24} className="hidden lg:block lg:border-l lg:border-rule lg:pl-16">
              <Photo
                ratio="1/1"
                src="/media/drafting.jpg"
                caption="Markups on a construction drawing at the plan table"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBar />
    </div>
  );
}
