const focusAreas = [
  "Product discovery and journey mapping.",
  "Design systems that keep teams aligned and shipping quickly.",
  "High‑fidelity interfaces that respect accessibility standards.",
  "Landing pages and flows tuned for conversion, not just aesthetics.",
];

export default function UiUxBrandingPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">Services · UI/UX & branding</p>
          <h1 className="text-4xl font-bold text-[#0b2b46] md:text-5xl">
            Experience design and digital branding
          </h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            We help you craft interfaces and brand expressions that feel consistent,
            intuitive, and aligned with the outcomes your product is responsible for.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start text-sm text-zinc-700">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0a3d62]">Where we focus</h2>
            <ul className="space-y-2">
              {focusAreas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-[#0a3d62]">What this looks like in practice</h3>
            <p>
              We work closely with your product and engineering leaders to define UX
              principles, component libraries, and content patterns. This ensures that
              every feature shipped feels like part of a coherent whole—not a collection of
              disconnected screens.
            </p>
            <p>
              When needed, we can also refresh your visual identity—color, typography,
              illustration, and motion—so that your brand reflects the quality of your
              underlying product.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


