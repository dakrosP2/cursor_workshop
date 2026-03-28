import { siteContent } from "@/constants/content";
import { FadeInSection } from "@/components/FadeInSection";

export function AboutSection() {
  const id = siteContent.anchors.about;

  return (
    <FadeInSection
      id={id}
      className="scroll-mt-20 border-b border-zinc-200/80 bg-white section-y"
      aria-labelledby="about-heading"
    >
      <div className="section-inner">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              {siteContent.about.sectionLabel}
            </p>
            <h2
              id="about-heading"
              className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.5rem]"
            >
              {siteContent.about.heading}
            </h2>
            <p className="mt-6 text-sm text-zinc-500">{siteContent.about.statLine}</p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-zinc-600 sm:text-lg lg:col-span-7">
            <p className="text-pretty">{siteContent.about.lead}</p>
            <p className="text-pretty border-l-2 border-indigo-200 pl-6 text-zinc-700">
              {siteContent.about.body}
            </p>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
