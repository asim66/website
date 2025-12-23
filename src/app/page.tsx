const services = [
  {
    title: "Web & Application Development",
    desc: "Corporate sites, custom web apps, SaaS MVPs, and e-commerce builds.",
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    desc: "AWS-first architectures, migrations, CI/CD, security, reliability, and monitoring.",
  },
  {
    title: "UI/UX, Branding & Growth",
    desc: "Design systems, conversion-led UX, SEO, paid media, and reputation management.",
  },
];

const caseStudies = [
  {
    title: "Fintech onboarding rebuilt",
    impact: "↑38% conversion, ↓42% support tickets",
    detail: "Re-architected onboarding, added observability, and automated CI/CD.",
  },
  {
    title: "Retail e-commerce scale-up",
    impact: "3x throughput, zero-downtime launches",
    detail: "Shopify + headless experience with cloud auto-scaling and perf budgets.",
  },
  {
    title: "B2B SaaS UX modernization",
    impact: "↑26% trial-to-paid, faster roadmap",
    detail: "Design system, accessibility uplift, and experimentation playbooks.",
  },
];

const testimonials = [
  {
    quote:
      "Sociodigit moved us from outages to a stable, observable platform in weeks.",
    name: "CTO, Logistics SaaS",
  },
  {
    quote: "They ship fast, communicate clearly, and own business outcomes.",
    name: "Founder, Fintech",
  },
  {
    quote:
      "A rare partner who blends product thinking with robust engineering.",
    name: "VP Product, Healthtech",
  },
];

const insights = [
  { title: "Building resilient SaaS on AWS", tag: "Cloud & DevOps" },
  { title: "Design systems that accelerate delivery", tag: "UI/UX" },
  { title: "From MVP to scale: a growth checklist", tag: "Product" },
];

const certifications = [
  "AWS Solutions expertise",
  "Security & reliability engineering",
  "Design systems & accessibility",
  "Performance optimization & SEO",
];

export default function Home() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100">
        <div className="container flex flex-col gap-10 py-20 md:py-28">
          <div className="badge w-fit animate-fade-up">Innovative and modern</div>
          <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-6 animate-fade-up-delay">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0a3d62]">
                Sociodigit | IT Consulting
              </p>
              <h1 className="text-4xl font-bold leading-tight text-[#0a3d62] md:text-5xl">
                Design. Build. Optimize. Scale.
              </h1>
              <p className="max-w-2xl text-lg text-zinc-700">
                We help businesses design, build, optimize, and scale their
                digital presence and technology infrastructure. From SaaS
                product builds to cloud, UX, and growth—done end to end.
              </p>
              <div className="flex flex-wrap gap-3 animate-fade-up-delay-lg">
                <a
                  href="/contact"
                  className="rounded-full bg-[#007cc3] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2b46]"
                >
                  Talk to us
                </a>
                <a
                  href="/case-studies"
                  className="rounded-full border border-[#007cc3] px-5 py-3 text-sm font-semibold text-[#007cc3] transition hover:bg-[#007cc3] hover:text-white"
                >
                  View success stories
                </a>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 font-medium text-[#1a73e8]">
                  Lead generation focused
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 font-medium text-[#1a73e8]">
                  AWS-first architectures
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 font-medium text-[#1a73e8]">
                  UX and growth driven
                </span>
              </div>
            </div>
            <div className="card p-6 md:p-8 animate-fade-up-delay-lg relative overflow-hidden">
              {/* decorative futuristic overlays - purely visual, content unchanged */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#be185d" stopOpacity="0.04" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="800" height="400" fill="url(#g1)" />
                <g stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1">
                  <path d="M0 50 L800 50" />
                  <path d="M0 150 L800 150" />
                  <path d="M0 250 L800 250" />
                </g>
              </svg>

              <div className="absolute -right-12 -top-12 w-52 h-52 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#be185d] opacity-20 blur-3xl transform rotate-12 pointer-events-none" />
              <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#7c3aed] opacity-18 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-[#0a3d62]">
                  Services at a glance
                </h3>
                <div className="mt-4 grid gap-4">
                  {services.map((service) => (
                    <div key={service.title} className="rounded-xl bg-blue-50/60 p-4">
                      <div className="text-sm font-semibold text-[#1a73e8]">
                        {service.title}
                      </div>
                      <p className="mt-2 text-sm text-zinc-700">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* floating tech nodes (decorative) */}
              <div className="absolute left-4 bottom-4 flex items-center gap-2 z-0 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping" />
                <span className="w-2 h-2 rounded-full bg-[#be185d] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-transparent">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-br from-[#eef6ff] via-[#fff0f6] to-[#f9f5ff] p-8 shadow-xl">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold text-[#0a3d62]">Our Services</h2>
              <p className="max-w-3xl text-lg text-zinc-700">
                Web and app development, cloud and DevOps, UI/UX and branding,
                and digital marketing tailored to your roadmap.
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-center">
              {/* Left image/visual - larger panel with image background and overlay title */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div
                  className="relative bg-gradient-to-b from-purple-900 via-purple-700 to-purple-800 p-6 flex items-center justify-center md:min-h-[420px]"
                >
                  {/* Decorative gradient background (no external image) */}
                  {/* gradient background used instead of external image to avoid 404 */}
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-700 to-purple-800" />
                  {/* stronger dark overlay for better contrast */}
                  <div className="absolute inset-0 bg-black/50" />

                  <div className="relative z-10 max-w-full text-center text-white px-6">
                    <div className="mx-auto mb-4 h-56 w-full max-w-md rounded-xl bg-white/5" />
                    <div className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">Smart ERP Management</div>
                  </div>
                </div>
              </div>

              {/* Right mosaic */}
              <div className="grid grid-cols-2 gap-4">
                {/* Top-left: services[0] (light) */}
                <div className="rounded-xl bg-zinc-50 p-6 min-h-[160px] flex flex-col justify-start">
                  <h3 className="text-2xl font-bold text-[#0b2b46]">{services[0].title}</h3>
                  <p className="mt-3 text-sm text-zinc-700">{services[0].desc}</p>
                </div>

                {/* Top-right: services[1] (accent) */}
                <div className="rounded-xl bg-purple-600 p-6 text-white min-h-[160px] flex flex-col justify-start">
                  <h3 className="text-2xl font-bold">{services[1].title}</h3>
                  <p className="mt-3 text-sm">{services[1].desc}</p>
                </div>

                {/* Bottom: services[2] spanning two columns */}
                <div className="rounded-xl bg-zinc-50 p-6 col-span-2 min-h-[140px] flex flex-col justify-start">
                  <h3 className="text-2xl font-bold text-[#0b2b46]">{services[2].title}</h3>
                  <p className="mt-3 text-sm text-zinc-700">{services[2].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#0a3d62]">Success Stories</h2>
            <p className="text-lg text-zinc-700">
              Proof from launches, migrations, and growth programs across SaaS,
              retail, fintech, and healthcare.
            </p>
          </div>
          <div className="grid gap-4">
            {caseStudies.map((item) => (
              <div key={item.title} className="card p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-[#0a3d62]">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm text-zinc-700">{item.detail}</p>
                  </div>
                  <div className="rounded-full bg-[#1a73e8]/10 px-3 py-1 text-xs font-semibold text-[#1a73e8]">
                    {item.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container space-y-8">
          <h2 className="text-3xl font-bold text-[#0a3d62]">What our clients say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="card p-6">
                <p className="text-sm text-zinc-700">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-4 text-sm font-semibold text-[#0a3d62]">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#1a73e8] text-white">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Ready to transform your business?</h2>
            <p className="mt-2 text-lg text-blue-50">
              Let’s plan your roadmap—architecture, UX, or go-to-market.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#155fbe]"
            >
              Book a consultation
            </a>
            <a
              href="/services"
              className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Explore services
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-[#0a3d62]">Latest Insights</h2>
            <p className="text-lg text-zinc-700">
              Practical guidance on cloud, product delivery, UX, and growth.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {insights.map((item) => (
              <div key={item.title} className="card p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#1a73e8]">
                  {item.tag}
                </div>
                <div className="mt-2 text-base font-semibold text-[#0a3d62]">
                  {item.title}
                </div>
                <a
                  href="/blog"
                  className="mt-4 inline-flex text-sm font-semibold text-[#1a73e8] hover:underline"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container space-y-6">
          <h2 className="text-3xl font-bold text-[#0a3d62]">Our certifications & partnerships</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((item) => (
              <div key={item} className="card flex items-center gap-3 p-4">
                <div className="h-10 w-10 rounded-xl bg-[#1a73e8]/10 text-center text-xl font-bold text-[#1a73e8]">
                  ✔︎
                </div>
                <div className="text-sm font-semibold text-[#0a3d62]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
