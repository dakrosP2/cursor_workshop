import { Brain, Globe, Workflow } from "lucide-react";
import { siteContent } from "@/constants/content";
import type { ServiceIconName } from "@/constants/content";
import { FadeInSection } from "@/components/FadeInSection";

const iconMap: Record<ServiceIconName, typeof Brain> = {
  Brain,
  Workflow,
  Globe,
};

export function ServicesSection() {
  const id = siteContent.anchors.services;
  const { items, sectionLabel, heading, intro } = siteContent.services;

  return (
    <FadeInSection
      id={id}
      className="scroll-mt-20 border-b border-zinc-200/80 bg-white section-y"
      aria-labelledby="services-heading"
    >
      <div className="section-inner">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {sectionLabel}
          </p>
          <h2
            id="services-heading"
            className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">{intro}</p>
        </div>
        <div className="mt-16 divide-y divide-zinc-200/90 border-t border-zinc-200/90">
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="grid gap-6 py-12 first:pt-10 last:pb-2 sm:grid-cols-12 sm:gap-10 lg:items-start"
              >
                <div className="flex items-start gap-4 sm:col-span-12 lg:col-span-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100/80"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display pt-1 text-xl font-medium text-zinc-900 sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-zinc-600 sm:col-span-12 lg:col-span-8 lg:pt-2">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </FadeInSection>
  );
}
