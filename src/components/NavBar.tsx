 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/technologies", label: "Technologies" },
  { href: "/why-sociodigit", label: "Why Sociodigit" },
  { href: "/blog", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/50 bg-gradient-to-r from-[#f7fbff] via-[#eef7ff] to-white backdrop-blur shadow-sm">
      <div className="mx-auto flex w-full items-center justify-between gap-6 px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold text-xl">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#007cc3] text-white text-lg">
            SD
          </span>
          <div className="leading-tight">
            <div className="text-lg font-semibold">Sociodigit</div>
            <div className="text-xs text-zinc-500">IT Consulting</div>
          </div>
        </Link>
  <nav className="hidden flex-1 items-center justify-center gap-4 whitespace-nowrap text-base font-semibold text-[#0b2b46] lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1 transition hover:text-[#007cc3] ${
                  active
                    ? "text-[#007cc3] underline decoration-2 underline-offset-8"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full border border-[#007cc3] px-5 py-2 text-sm font-semibold text-[#007cc3] transition hover:bg-[#007cc3] hover:text-white lg:inline-flex"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}

