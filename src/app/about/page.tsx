const milestones = [
  { year: "2017", text: "Founded to deliver modern web and cloud solutions." },
  { year: "2019", text: "Expanded to SaaS product delivery and design systems." },
  { year: "2022", text: "Cloud, DevOps, and growth pods serving global clients." },
  { year: "2024", text: "Full-stack partner across product, platform, and marketing." },
];

const values = [
  "Innovation with accountability",
  "Integrity and security by default",
  "Design for outcomes, not features",
  "Partnership over transactions",
];

const team = [
  { name: "Aarav Patel", role: "Head of Engineering" },
  { name: "Maya Desai", role: "Director, Product & UX" },
  { name: "Leo Fernandez", role: "Lead, Cloud & DevOps" },
  { name: "Sara Chen", role: "Lead, Growth & Analytics" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">About Sociodigit</p>
          <h1 className="text-4xl font-bold text-[#0a3d62] md:text-5xl">
            Our journey of building trusted digital partners
          </h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            We combine engineering, design, cloud, and growth to help teams
            launch, modernize, and scale products with confidence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a3d62]">Mission & Vision</h2>
            <p className="text-zinc-700">
              Mission: deliver digital experiences that are reliable, usable,
              and ready to scale. Vision: become the trusted partner for
              businesses needing modern, outcome-focused technology delivery.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#1a73e8]">
              Core values
            </div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              {values.map((v) => (
                <li key={v} className="flex gap-2">
                  <span className="text-[#1a73e8]">●</span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container space-y-6">
          <h2 className="text-2xl font-bold text-[#0a3d62]">Our history</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {milestones.map((item) => (
              <div key={item.year} className="card p-5">
                <div className="text-sm font-semibold text-[#1a73e8]">{item.year}</div>
                <p className="mt-2 text-sm text-zinc-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <h2 className="text-2xl font-bold text-[#0a3d62]">Meet our team</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="card p-4">
                <div className="h-12 w-12 rounded-full bg-blue-50 text-center text-lg font-bold text-[#1a73e8]">
                  {member.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="mt-3 text-sm font-semibold text-[#0a3d62]">
                  {member.name}
                </div>
                <div className="text-xs text-zinc-600">{member.role}</div>
              </div>
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3 text-sm text-zinc-700">
              <h3 className="text-base font-semibold text-[#0a3d62]">
                How we work with clients
              </h3>
              <p>
                Every engagement starts with understanding your current landscape—people,
                processes, and platforms. We run short discovery sprints to map out the
                constraints and opportunities before proposing a roadmap.
              </p>
              <p>
                From there, we assemble cross‑functional pods that include product, design,
                engineering, and growth where it makes sense. These pods plug into your ways
                of working while introducing proven rituals for planning, delivery, and
                measurement.
              </p>
            </div>
            <div className="space-y-3 text-sm text-zinc-700">
              <h3 className="text-base font-semibold text-[#0a3d62]">
                What you can expect from us
              </h3>
              <ul className="space-y-2">
                <li>• Clear ownership and a single point of contact for every initiative.</li>
                <li>• Regular demos, roadmap reviews, and transparent status updates.</li>
                <li>• Decisions grounded in data and aligned with business outcomes.</li>
                <li>• Thoughtful handovers so your internal teams can operate with confidence.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#1a73e8] text-white">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Join us on our journey</h2>
            <p className="mt-2 text-blue-50">
              Explore roles or partner with us on your next initiative.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a3d62] shadow-sm transition hover:bg-blue-50"
          >
            Talk to Sociodigit
          </a>
        </div>
      </section>
    </div>
  );
}

