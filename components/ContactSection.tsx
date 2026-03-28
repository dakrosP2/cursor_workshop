import { ArrowUpRight, AtSign, Mail, MessageCircle } from "lucide-react";
import { siteContent } from "@/constants/content";
import { FadeInSection } from "@/components/FadeInSection";

const iconFor = (id: string) => {
  if (id === "wa") return MessageCircle;
  if (id === "mail") return Mail;
  return AtSign;
};

export function ContactSection() {
  const id = siteContent.anchors.contact;

  return (
    <FadeInSection
      id={id}
      className="scroll-mt-20 bg-white section-y"
      aria-labelledby="contact-heading"
    >
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              {siteContent.contact.sectionLabel}
            </p>
            <h2
              id="contact-heading"
              className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl"
            >
              {siteContent.contact.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              {siteContent.contact.intro}
            </p>
          </div>
          <ul className="space-y-0 divide-y divide-zinc-200 border-y border-zinc-200 lg:col-span-7">
            {siteContent.contact.methods.map((m) => {
              const Icon = iconFor(m.id);
              return (
                <li key={m.id}>
                  <a
                    href={m.href}
                    {...(m.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex min-h-[72px] items-center justify-between gap-4 py-6 transition hover:bg-zinc-50/80"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition group-hover:bg-indigo-50 group-hover:text-indigo-700">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          {m.label}
                        </span>
                        <span className="mt-0.5 block text-base font-medium text-zinc-900">
                          {m.value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-zinc-400 transition group-hover:text-indigo-600"
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}
