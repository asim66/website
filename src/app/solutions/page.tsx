const solutions = [
  {
    title: "Product engineering",
    desc: "Full-stack delivery for SaaS and web platforms with modern architectures.",
  },
  {
    title: "Cloud solutions",
    desc: "AWS-first design, security, CI/CD, and observability to keep releases stable.",
  },
  {
    title: "AI & automation",
    desc: "Workflow automation, ML integrations, and experimentation for efficiency.",
  },
];

const testimonials = [
  { quote: "Their cloud redesign cut costs and improved reliability immediately.", name: "COO, B2B SaaS" },
  { quote: "We launched a new feature set 30% faster with their product pod.", name: "VP Product, Marketplace" },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">Solutions</p>
          <h1 className="text-4xl font-bold text-[#0a3d62] md:text-5xl">
            Innovative solutions for modern challenges
          </h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            Tailored product, cloud, and AI solutions that meet your scaling, security,
            and user experience needs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.title} className="card p-6">
              <div className="text-base font-semibold text-[#0a3d62]">{solution.title}</div>
              <p className="mt-3 text-sm text-zinc-700">{solution.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-3 text-sm text-zinc-700">
            <h2 className="text-2xl font-bold text-[#0a3d62]">Solution playbooks</h2>
            <p>
              Over time we have developed repeatable playbooks for common challenges such as
              re‑platforming legacy applications, introducing experimentation at scale, and
              standing up new SaaS offerings on AWS.
            </p>
            <p>
              These playbooks outline recommended architectures, delivery phases, and key
              risks to watch for, helping you move faster while avoiding familiar pitfalls.
            </p>
          </div>
          <div className="space-y-2 text-sm text-zinc-700">
            <h3 className="text-base font-semibold text-[#0a3d62]">What a typical engagement includes</h3>
            <ul className="space-y-1">
              <li>• Current‑state assessment and target architecture.</li>
              <li>• Prioritized backlog with measurable success metrics.</li>
              <li>• Incremental delivery plan that protects your existing business.</li>
              <li>• Knowledge transfer and documentation for your internal teams.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#0a3d62]">Technology foundations</h2>
            <p className="text-lg text-zinc-700">
              We architect with performance, security, and observability first,
              ensuring every release is predictable.
            </p>
          </div>
          <div className="card p-6">
            <ul className="space-y-3 text-sm text-zinc-700">
              <li className="flex gap-2">
                <span className="text-[#1a73e8]">•</span>
                AWS, CI/CD, IaC, and monitoring baked in
              </li>
              <li className="flex gap-2">
                <span className="text-[#1a73e8]">•</span>
                Accessibility and performance budgets for every launch
              </li>
              <li className="flex gap-2">
                <span className="text-[#1a73e8]">•</span>
                Experimentation and analytics to guide iterations
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-6">
          <h2 className="text-3xl font-bold text-[#0a3d62]">Client testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="card p-6">
                <p className="text-sm text-zinc-700">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-4 text-sm font-semibold text-[#0a3d62]">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#1a73e8] text-white">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="mt-2 text-blue-50">Let’s architect and ship your next solution.</p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a3d62] shadow-sm transition hover:bg-blue-50"
          >
            Start a project
          </a>
        </div>
      </section>
    </div>
  );
}

