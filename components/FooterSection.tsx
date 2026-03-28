import Link from "next/link";
import { siteContent } from "@/constants/content";

const footerLinks = [
  { href: `#${siteContent.anchors.about}`, label: siteContent.nav.about },
  {
    href: `#${siteContent.anchors.services}`,
    label: siteContent.nav.services,
  },
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

export function FooterSection() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="section-inner py-14 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="font-display text-lg font-semibold tracking-tight text-white">
              {siteContent.brandName}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
              {siteContent.footer.tagline}
            </p>
            <p className="mt-4 text-sm text-zinc-500">{siteContent.footer.note}</p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              En esta página
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-400 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={siteContent.links.emailHref}
                  className="text-zinc-400 transition hover:text-white"
                >
                  {siteContent.links.email}
                </a>
              </li>
              <li>
                <a
                  href={siteContent.links.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-white"
                >
                  WhatsApp {siteContent.links.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteContent.links.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-white"
                >
                  {siteContent.links.instagramLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {siteContent.brandName}.{" "}
            {siteContent.footer.rights}
          </p>
          <Link
            href="/"
            className="text-xs text-zinc-500 transition hover:text-zinc-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </footer>
  );
}
