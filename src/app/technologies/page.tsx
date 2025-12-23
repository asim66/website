import React from "react";

const stacks = [
  {
    title: "Frontend & UX",
    items: ["Next.js", "React", "TypeScript", "Design systems", "Accessibility"],
    desc: "Fast, accessible interfaces built with modern web foundations.",
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "APIs", "Postgres", "MongoDB", "Analytics pipelines"],
    desc: "Scalable APIs and data platforms designed for reliability and throughput.",
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "CI/CD", "IaC", "Monitoring & alerting", "Security & compliance"],
    desc: "Cloud-native infrastructure, automated delivery, and strong operational guardrails.",
  },
  {
    title: "Mobile & Native",
    items: ["React Native", "Flutter", "Cross-platform CI"],
    desc: "Native experiences when performance and device capabilities matter.",
  },
  {
    title: "Machine Learning",
    items: ["Model hosting", "Feature stores", "Batch + streaming pipelines"],
    desc: "Practical ML: experiments that graduate to production with observability.",
  },
  {
    title: "Integrations",
    items: ["OAuth", "SAML", "Payment gateways", "Third‑party APIs"],
    desc: "Secure integrations with the tools your business depends on.",
  },
];

function TechCard({ tech }: { tech: (typeof stacks)[0] }) {
  return (
    <article className="rounded-lg border border-zinc-100 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[#0a3d62]">{tech.title}</h3>
      <p className="mt-2 text-sm text-zinc-700">{tech.desc}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tech.items.map((it) => (
          <li
            key={it}
            className="rounded-md border border-zinc-100 bg-zinc-50 px-3 py-1 text-sm text-zinc-800"
          >
            {it}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function TechnologiesPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container max-w-4xl space-y-4 text-center">
          <p className="badge mx-auto">Technologies</p>
          <h1 className="text-4xl font-bold text-[#0a3d62] md:text-5xl">Technology we use to build products</h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-700">
            We choose pragmatic, well-supported tools that help teams move fast without
            sacrificing reliability. From frontend to infrastructure, we focus on
            maintainability and real business value.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3 lg:grid-cols-3">
          {stacks.map((s) => (
            <TechCard key={s.title} tech={s as any} />
          ))}
        </div>
      </section>

      <section className="section bg-[#f9fafb]">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-3 text-sm text-zinc-700">
            <h2 className="text-2xl font-bold text-[#0a3d62]">Engineering principles</h2>
            <p>
              We favor proven technologies where reliability matters and selectively
              adopt new tools when they provide measurable advantages. Our teams ship
              incrementally, with observability and testing baked into the process.
            </p>
            <p>
              This approach reduces long-term maintenance costs and keeps product teams
              focused on outcomes instead of chasing short-lived trends.
            </p>
          </div>
          <div className="space-y-2 text-sm text-zinc-700">
            <h3 className="text-base font-semibold text-[#0a3d62]">Non‑functional priorities</h3>
            <ul className="space-y-1 list-none">
              <li>• Reliability and graceful degradation under load.</li>
              <li>• Security and access controls appropriate to your industry.</li>
              <li>• Performance budgets and web vitals monitoring.</li>
              <li>• Documentation, runbooks, and clear ownership.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container text-center">
          <h3 className="text-xl font-semibold text-[#0a3d62]">Want to discuss technology for your product?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-700">
            We can review your stack, recommend improvements, and help with execution.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#007cc3] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0065a8]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

