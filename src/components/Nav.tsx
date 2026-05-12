"use client";

import Link from "next/link";
import { LogoMark } from "./icons";

const links = [
  { href: "#features", label: "Features" },
  { href: "#integrations", label: "Integrations" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[760px]">
      <nav className="flex items-center gap-2 rounded-full bg-ink-2 pl-4 pr-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-white/10">
        <Link href="/" className="flex items-center gap-2 text-white pr-3">
          <LogoMark className="size-5" />
          <span className="text-[15px] font-semibold tracking-tight">Accretion</span>
        </Link>
        <ul className="hidden md:flex items-center gap-1 text-[13.5px] text-white/85">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto">
          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-orange px-4 py-2 text-[13.5px] font-medium text-white hover:bg-orange-2 transition"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}
