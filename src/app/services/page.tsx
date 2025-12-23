const serviceBlocks = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing Solutions",
    points: ["SEO & performance", "Paid media (Google & Meta)", "Social strategy & content", "Reputation management"],
  },
  {
    slug: "ui-ux-branding",
    title: "UI/UX Design & Branding",
    points: ["Design systems and component libraries", "Product UX for SaaS and web", "Conversion-focused landing pages"],
  },
  {
    slug: "web-app-development",
    title: "Web & Application Development",
    points: ["Corporate and marketing sites", "Custom web apps and SaaS MVPs", "E-commerce (Shopify + custom)"],
  },
  {
    slug: "cloud-devops-infrastructure",
    title: "Cloud, DevOps & Infrastructure",
    points: ["AWS architecture, security, and reliability", "CI/CD pipelines and automation", "Monitoring and observability"],
  },
];

const testimonials = [
  { quote: "Reliable delivery and transparent communication.", name: "Product Lead, SaaS" },
  { quote: "Modernized our stack and improved release cadence.", name: "Head of Engineering, Retail" },
  { quote: "Growth programs that tied directly to revenue.", name: "Marketing Director, DTC" },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">Services</p>
          <h1 className="text-4xl font-bold text-[#0a3d62] md:text-5xl">
            Expertise that connects product, platform, and growth
          </h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            From strategy to build and go-to-market, we deliver the teams and playbooks to launch,
            modernize, and scale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          {serviceBlocks.map((block) => (
            <a
              key={block.slug}
              href={`/services/${block.slug}`}
              className="card group flex flex-col justify-between p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-[#1a73e8]">
                  {block.title}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {block.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-[#1a73e8]">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="mt-4 text-sm font-semibold text-[#007cc3] group-hover:underline">
                View details
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-3 text-sm text-zinc-700">
            <h2 className="text-2xl font-bold text-[#0a3d62]">Engagement models</h2>
            <p>
              We adapt our engagement model to your stage and needs—from focused audits and
              advisory tracks through to embedded delivery pods that work alongside your
              internal teams.
            </p>
            <p>
              For some clients we own entire problem areas such as onboarding, billing, or
              performance. For others we provide specialized support in cloud, UX, or
              experimentation while your core team delivers day to day.
            </p>
          </div>
          <div className="space-y-2 text-sm text-zinc-700">
            <h3 className="text-base font-semibold text-[#0a3d62]">Typical ways we work</h3>
            <ul className="space-y-1">
              <li>• Discovery and roadmap definition sprints.</li>
              <li>• Fixed‑scope projects with clear milestones.</li>
              <li>• Ongoing product, platform, or growth pods.</li>
              <li>• Advisory retainers for leadership teams.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#0a3d62]">Ready to transform your business?</h2>
            <p className="text-lg text-zinc-700">
              Book a consultation to align on architecture, UX, or growth priorities and plan a delivery roadmap.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-sm font-semibold text-[#1a73e8]">Contact</div>
            <p className="mt-3 text-sm text-zinc-700">Share your goals—cloud, product, or marketing—and we’ll propose a tailored squad.</p>
            <a
              className="mt-4 inline-flex w-fit rounded-full bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#155fbe]"
              href="/contact"
            >
              Book a consultation
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-6">
          <h2 className="text-3xl font-bold text-[#0a3d62]">Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="card p-6">
                <p className="text-sm text-zinc-700">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-4 text-sm font-semibold text-[#0a3d62]">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

