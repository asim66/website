const posts = [
  { title: "Building resilient SaaS on AWS", tag: "Cloud & DevOps" },
  { title: "Design systems that accelerate delivery", tag: "Design & UX" },
  { title: "From MVP to scale: growth checklist", tag: "Product & Growth" },
  { title: "Observability for high-velocity teams", tag: "Engineering" },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="gradient-hero border-b border-zinc-100 py-20 md:py-24">
        <div className="container space-y-4">
          <p className="badge">Insights</p>
          <h1 className="text-4xl font-bold text-[#0a3d62] md:text-5xl">
            Insights and playbooks for modern teams
          </h1>
          <p className="max-w-3xl text-lg text-zinc-700">
            Articles on cloud, UX, product delivery, and growth to keep your roadmap moving.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <div key={post.title} className="card p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#1a73e8]">
                {post.tag}
              </div>
              <div className="mt-2 text-lg font-semibold text-[#0a3d62]">{post.title}</div>
              <a
                href="#"
                className="mt-4 inline-flex text-sm font-semibold text-[#1a73e8] hover:underline"
              >
                Read article
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-[#f1f3f4]">
        <div className="container space-y-6 text-center">
          <h2 className="text-2xl font-bold text-[#0a3d62]">Subscribe for updates</h2>
          <p className="text-zinc-700">
            We publish practical guides, checklists, and deep‑dives rather than generic
            thought leadership. Expect content you can share with your team and act on.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-3 md:flex-row">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full border border-zinc-300 px-4 py-3 text-sm focus:border-[#1a73e8] focus:outline-none"
            />
            <button className="rounded-full bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#155fbe]">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-zinc-500">
            No spam. You will only hear from us when we have something useful to share.
          </p>
        </div>
      </section>
    </div>
  );
}

