const capabilities = [
  "Cloud architecture reviews and modernization plans.",
  "CI/CD pipeline design, implementation, and optimization.",
  "Observability foundations including logging, metrics, and alerting.",
  "Resilience and cost‑efficiency improvements across your stack.",
];

export default function CloudDevOpsInfrastructurePage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">Services · Cloud, DevOps & infrastructure</p>
          <h1 className="text-4xl font-bold text-[#0b2b46] md:text-5xl">
            Cloud, DevOps, and infrastructure consulting
          </h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            We help you build and operate cloud platforms that are secure, observable, and
            ready for sustained product delivery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start text-sm text-zinc-700">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0a3d62]">Core capabilities</h2>
            <ul className="space-y-2">
              {capabilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-[#0a3d62]">Working with your teams</h3>
            <p>
              We partner with your existing engineering and operations groups to introduce
              practices such as infrastructure‑as‑code, automated testing, and progressive
              delivery. The goal is not to replace your teams, but to up‑level them.
            </p>
            <p>
              Along the way we document runbooks, incident processes, and playbooks so that
              your organization can maintain and extend the platform long after the initial
              engagement is complete.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


