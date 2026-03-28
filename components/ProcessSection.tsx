import { siteContent } from "@/constants/content";
import { FadeInSection } from "@/components/FadeInSection";

export function ProcessSection() {
  const id = siteContent.anchors.process;

  return (
    <FadeInSection
      id={id}
      className="scroll-mt-20 border-b border-zinc-200/80 bg-stone-50 section-y"
      aria-labelledby="process-heading"
    >
      <div className="section-inner">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {siteContent.process.sectionLabel}
          </p>
          <h2
            id="process-heading"
            className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl"
          >
            {siteContent.process.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            {siteContent.process.intro}
          </p>
        </div>
        <ol className="relative mt-16 max-w-3xl border-l border-zinc-200 pl-8 sm:pl-10">
          {siteContent.process.steps.map((step, index) => (
            <li key={step.id} className="relative pb-14 last:pb-0">
              <span className="font-display absolute -left-8 top-0 flex h-8 w-8 -translate-x-[1px] items-center justify-center rounded-full border border-zinc-200 bg-stone-50 text-sm font-medium text-indigo-600 sm:-left-9 sm:h-9 sm:w-9">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-medium text-zinc-900">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </FadeInSection>
  );
}
