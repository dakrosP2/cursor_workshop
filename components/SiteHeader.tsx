"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/constants/content";

const navItems = [
  { href: `#${siteContent.anchors.about}`, label: siteContent.nav.about },
  { href: `#${siteContent.anchors.services}`, label: siteContent.nav.services },
  { href: `#${siteContent.anchors.process}`, label: siteContent.nav.process },
  {
    href: `#${siteContent.anchors.portfolio}`,
    label: siteContent.nav.portfolio,
  },
  {
    href: `#${siteContent.anchors.testimonials}`,
    label: siteContent.nav.testimonials,
  },
  { href: `#${siteContent.anchors.faq}`, label: siteContent.nav.faq },
  { href: `#${siteContent.anchors.contact}`, label: siteContent.nav.contact },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-stone-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-tight text-zinc-900"
          onClick={() => setOpen(false)}
        >
          {siteContent.brandName}
        </Link>
        <nav
          className="hidden items-center gap-7 text-sm font-medium text-zinc-600 lg:flex"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteContent.links.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:inline-flex"
          >
            {siteContent.primaryCta}
          </a>
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">
              {open ? "Cerrar menú" : "Abrir menú"}
            </span>
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>
      <div
        id="mobile-nav"
        className={`border-t border-zinc-200/80 bg-stone-50/95 lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
          aria-label="Móvil"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteContent.links.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            {siteContent.primaryCta}
          </a>
        </nav>
      </div>
    </header>
  );
}
