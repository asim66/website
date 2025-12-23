const studies = [
  {
    title: "Logistics SaaS reliability uplift",
    results: "99.95% uptime, faster deployments",
    summary: "Implemented observability, CI/CD, and cost-aware AWS architectures.",
  },
  {
    title: "E-commerce performance revamp",
    results: "TTFB ↓35%, conversion ↑22%",
    summary: "Headless storefront, performance budgets, and CRO experimentation.",
  },
  {
    title: "Fintech onboarding redesign",
    results: "Trial-to-paid ↑26%, support tickets ↓42%",
    summary: "Rebuilt flows, improved identity checks, and added guided analytics.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">Case Studies</p>
          <h1 className="text-4xl font-bold text-[#0a3d62] md:text-5xl">
            Proof from launches, migrations, and growth programs
          </h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            Selected engagements that demonstrate our approach to product, cloud, and growth.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {studies.map((study) => (
            <div key={study.title} className="card p-6">
              <div className="text-base font-semibold text-[#0a3d62]">{study.title}</div>
              <div className="mt-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1a73e8]">
                {study.results}
              </div>
              <p className="mt-3 text-sm text-zinc-700">{study.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container space-y-4 text-sm text-zinc-700">
          <h2 className="text-2xl font-bold text-[#0a3d62]">Our delivery approach</h2>
          <p>
            Across these case studies you will notice a consistent pattern: we start small,
            ship value early, and expand as we prove impact. This reduces risk and gives
            stakeholders confidence at every step.
          </p>
          <p>
            We focus on the fundamentals—clear success criteria, tight feedback loops, and
            instrumentation that makes it obvious what is working and what is not. This
            approach scales from early‑stage products through to complex enterprise
            platforms.
          </p>
        </div>
      </section>
    </div>
  );
}

