import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Web & App Dev", href: "/services#web-app" },
      { label: "Cloud & DevOps", href: "/services#cloud" },
      { label: "Digital Marketing", href: "/services#marketing" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/blog" },
      { label: "Why Sociodigit", href: "/why-sociodigit" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#1a73e8] text-white">
              SD
            </span>
            Sociodigit
          </div>
          <p className="text-sm text-zinc-600">
            Modern IT consulting partner for software, cloud, UX, and growth.
          </p>
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Sociodigit. All rights reserved.</p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-zinc-800">{group.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              {group.items.map((item) => (
                <li key={`${group.title}-${item.href}`}>
                  <Link className="transition hover:text-[#1a73e8]" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

