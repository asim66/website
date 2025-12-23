const benefits = [
  "Product, platform, and growth under one roof",
  "AWS-first reliability with security and observability by default",
  "Design systems and accessibility to move faster with quality",
  "Experimentation, analytics, and CRO to tie delivery to outcomes",
];

const stats = [
  { label: "Launch speed", value: "30% faster" },
  { label: "Uptime targets", value: "99.95%+" },
  { label: "Conversion gains", value: "20–40% typical uplift" },
  { label: "Engagement", value: "+500k monthly users supported" },
];

export default function WhySociodigitPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">Why Sociodigit</p>
          <h1 className="text-4xl font-bold text-[#0a3d62] md:text-5xl">
            Modern partner for outcomes, not just deliverables
          </h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            We align product, cloud, UX, and growth to hit business goals with predictable delivery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a3d62]">Benefits of choosing Sociodigit</h2>
            <ul className="space-y-3 text-sm text-zinc-700">
              {benefits.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#1a73e8]">Our core services</div>
            <p className="mt-3 text-sm text-zinc-700">
              Web and app development, cloud and DevOps, UI/UX and branding, and digital marketing with analytics.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container space-y-6">
          <h2 className="text-2xl font-bold text-[#0a3d62]">Our impact in numbers</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card p-5 text-center">
                <div className="text-2xl font-bold text-[#1a73e8]">{stat.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container space-y-6">
          <h2 className="text-2xl font-bold text-[#0a3d62]">Client testimonials</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {["Reliable delivery", "Outcome-focused", "Great communication"].map((text) => (
              <div key={text} className="card p-6">
                <p className="text-sm text-zinc-700">&ldquo;{text}.&rdquo;</p>
                <div className="mt-4 text-sm font-semibold text-[#0a3d62]">Client partner</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start text-sm text-zinc-700">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0a3d62]">How our operating model works</h2>
            <p>
              Rather than handing you decks and leaving, we stay close to the work. Our pods
              are measured on business outcomes and experience quality, not just task
              completion. This keeps everyone focused on the same definition of success.
            </p>
            <p>
              Leadership gets regular visibility into risks and trade‑offs, while individual
              contributors have the context they need to make fast, sensible decisions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-[#0a3d62]">Where we add the most value</h3>
            <ul className="space-y-1">
              <li>• When you need to modernize a product without pausing growth.</li>
              <li>• When you are scaling a platform and reliability is becoming critical.</li>
              <li>• When you want UX and go‑to‑market to move in lockstep with engineering.</li>
              <li>• When your team needs experienced partners to bootstrap new capabilities.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-[#1a73e8] text-white">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Get started with Sociodigit</h2>
            <p className="mt-2 text-blue-50">Let’s plan your roadmap and team structure.</p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a3d62] shadow-sm transition hover:bg-blue-50"
          >
            Talk to us
          </a>
        </div>
      </section>
    </div>
  );
}

