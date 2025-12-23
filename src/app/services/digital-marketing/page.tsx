const channels = [
  "SEO and technical performance improvements that compound over time.",
  "Paid search and paid social campaigns tuned to your acquisition economics.",
  "Always‑on measurement so you can see exactly what is working.",
];

const roadmap = [
  "Audit your current traffic, funnel, and tracking foundations.",
  "Define clear north‑star and supporting metrics for growth.",
  "Prioritize quick wins alongside structural improvements.",
  "Set up experimentation and reporting routines with your team.",
];

export default function DigitalMarketingPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">Services · Digital marketing</p>
          <h1 className="text-4xl font-bold text-[#0b2b46] md:text-5xl">
            Digital marketing and growth programs
          </h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            We design growth programs that connect acquisition, activation, and retention
            so you are not just buying clicks—you are building a predictable pipeline.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-3 text-sm text-zinc-700">
            <h2 className="text-2xl font-bold text-[#0a3d62]">Channels we help you orchestrate</h2>
            <ul className="space-y-2">
              {channels.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6 text-sm text-zinc-700">
            <h3 className="text-base font-semibold text-[#0a3d62]">Our typical roadmap</h3>
            <ol className="mt-3 space-y-2 list-decimal pl-4">
              {roadmap.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}


