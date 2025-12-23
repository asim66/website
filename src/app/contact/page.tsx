export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">Contact</p>
          <h1 className="text-4xl font-bold text-[#0a3d62] md:text-5xl">Let’s talk</h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            Tell us about your project or challenges. We’ll respond with next steps and a tailored approach.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-[#0a3d62]">Contact information</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li>Email: hello@sociodigit.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Offices: Remote-first, servicing global clients</li>
            </ul>
            <div className="mt-4 text-sm text-zinc-600">
              Follow us on LinkedIn and X for product, cloud, and growth insights.
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold text-[#0a3d62]">Send a message</h2>
            <form className="mt-4 space-y-4">
              <div>
                <label className="text-sm font-semibold text-zinc-700">Name</label>
                <input
                  className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-[#1a73e8] focus:outline-none"
                  placeholder="Your name"
                  type="text"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-zinc-700">Email</label>
                <input
                  className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-[#1a73e8] focus:outline-none"
                  placeholder="you@example.com"
                  type="email"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-zinc-700">What do you need help with?</label>
                <textarea
                  className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-[#1a73e8] focus:outline-none"
                  rows={4}
                  placeholder="Briefly describe your project, timeline, and goals."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#155fbe]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container space-y-4">
          <h2 className="text-xl font-semibold text-[#0a3d62]">Frequently asked questions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { q: "Do you handle end-to-end delivery?", a: "Yes, from discovery to launch and growth." },
              { q: "Which clouds do you support?", a: "AWS-first; we also consult on multi-cloud as needed." },
              { q: "Can you work with our internal teams?", a: "We embed or run dedicated pods with clear handoffs." },
              { q: "What industries do you serve?", a: "SaaS, fintech, retail/e-commerce, healthcare, and more." },
            ].map((item) => (
              <div key={item.q} className="card p-5">
                <div className="text-sm font-semibold text-[#0a3d62]">{item.q}</div>
                <p className="mt-2 text-sm text-zinc-700">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-700">
            Once you reach out, we typically respond within one to two business days. If
            your request is time‑sensitive—such as an incident review or launch
            preparation—please mention this in your message so we can prioritize it.
          </p>
        </div>
      </section>
    </div>
  );
}

