import { siteContent } from "@/constants/content";
import { FadeInSection } from "@/components/FadeInSection";

export function FaqSection() {
  const id = siteContent.anchors.faq;

  return (
    <FadeInSection
      id={id}
      className="scroll-mt-20 border-b border-zinc-200/80 bg-stone-50 section-y"
      aria-labelledby="faq-heading"
    >
      <div className="section-inner">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {siteContent.faq.sectionLabel}
          </p>
          <h2
            id="faq-heading"
            className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl"
          >
            {siteContent.faq.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            {siteContent.faq.intro}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-zinc-200 border-y border-zinc-200">
          {siteContent.faq.items.map((item) => (
            <details
              key={item.id}
              className="group py-2 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left text-base font-semibold text-zinc-900 transition hover:text-indigo-700 sm:text-lg">
                <span>{item.question}</span>
                <span
                  className="mt-0.5 shrink-0 text-indigo-600 transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="pb-5 pr-8 text-base leading-relaxed text-zinc-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
