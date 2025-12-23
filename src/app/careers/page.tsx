const openings = [
  { title: "Senior Full-Stack Engineer", location: "Remote", type: "Full-time" },
  { title: "Product Designer (UX/UI)", location: "Remote", type: "Full-time" },
  { title: "Cloud/DevOps Engineer", location: "Remote", type: "Contract" },
];

const culture = [
  "Outcome-focused, collaborative delivery",
  "Remote-first with strong async practices",
  "Learning budgets and certification support",
];

const testimonials = [
  { quote: "A culture that empowers ownership and experimentation.", name: "Engineer" },
  { quote: "Supportive leadership and clear product goals.", name: "Designer" },
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">Careers</p>
          <h1 className="text-4xl font-bold text-[#0a3d62] md:text-5xl">Join our team</h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            Build modern products, cloud platforms, and growth programs with a team that values
            ownership and clarity.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-6">
          <h2 className="text-2xl font-bold text-[#0a3d62]">Current openings</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {openings.map((role) => (
              <div key={role.title} className="card p-5">
                <div className="text-base font-semibold text-[#0a3d62]">{role.title}</div>
                <p className="mt-2 text-sm text-zinc-600">
                  {role.location} • {role.type}
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex text-sm font-semibold text-[#1a73e8] hover:underline"
                >
                  View details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container grid gap-6 md:grid-cols-2 md:items-start">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0a3d62]">Our work culture</h2>
            <ul className="space-y-2 text-sm text-zinc-700">
              {culture.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            {testimonials.map((item) => (
              <div key={item.name} className="card p-5">
                <p className="text-sm text-zinc-700">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-3 text-xs font-semibold text-[#0a3d62]">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start text-sm text-zinc-700">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0a3d62]">Hiring process</h2>
            <p>
              We keep our hiring process transparent and respectful of your time. After an
              initial conversation, you will meet people you would actually work with and
              spend time on work‑sample style exercises instead of brainteasers.
            </p>
            <p>
              Our goal is to help you understand what life at Sociodigit feels like so you
              can decide whether this is the right environment for you to grow.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-[#0a3d62]">What we look for</h3>
            <ul className="space-y-1">
              <li>• Curiosity and a habit of continuous learning.</li>
              <li>• Ability to work collaboratively in cross‑functional teams.</li>
              <li>• Comfort balancing speed with quality and reliability.</li>
              <li>• Empathy for end‑users and for teammates.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-[#1a73e8] text-white">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Ready to apply?</h2>
            <p className="mt-2 text-blue-50">Tell us about your work and the impact you want to make.</p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a3d62] shadow-sm transition hover:bg-blue-50"
          >
            Share your profile
          </a>
        </div>
      </section>
    </div>
  );
}

