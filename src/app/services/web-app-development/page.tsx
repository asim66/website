const offerings = [
  "Marketing sites and microsites that are fast, accessible, and easy to update.",
  "SaaS MVPs built with modern, maintainable architectures.",
  "Full product rebuilds where we incrementally replace legacy code.",
];

export default function WebAppDevelopmentPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">Services · Web & applications</p>
          <h1 className="text-4xl font-bold text-[#0b2b46] md:text-5xl">
            Web and application development
          </h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            From first versions through to large‑scale rebuilds, we design and implement web
            experiences that are resilient and straightforward to evolve.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start text-sm text-zinc-700">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0a3d62]">What we build</h2>
            <ul className="space-y-2">
              {offerings.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-[#0a3d62]">How we approach implementation</h3>
            <p>
              We use well‑supported frameworks and patterns, keep our abstractions lean, and
              favor clarity over cleverness. This keeps onboarding new team members simple
              and reduces long‑term maintenance cost.
            </p>
            <p>
              Every project includes automated testing and observability from the start, so
              that future changes can be shipped quickly and with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


