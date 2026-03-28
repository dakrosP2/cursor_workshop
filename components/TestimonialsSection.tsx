import { siteContent } from "@/constants/content";
import { FadeInSection } from "@/components/FadeInSection";

export function TestimonialsSection() {
  const id = siteContent.anchors.testimonials;

  return (
    <FadeInSection
      id={id}
      className="scroll-mt-20 border-b border-zinc-200/80 bg-white section-y"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-inner">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {siteContent.testimonials.sectionLabel}
          </p>
          <h2
            id="testimonials-heading"
            className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl"
          >
            {siteContent.testimonials.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            {siteContent.testimonials.intro}
          </p>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {siteContent.testimonials.items.map((t) => (
            <figure key={t.id} className="flex flex-col justify-between">
              <blockquote className="font-display text-xl font-medium leading-snug tracking-tight text-zinc-900 sm:text-2xl">
                <span
                  className="mr-1 text-indigo-500"
                  aria-hidden
                >
                  &ldquo;
                </span>
                {t.quote}
                <span className="text-indigo-500" aria-hidden>
                  &rdquo;
                </span>
              </blockquote>
              <figcaption className="mt-8 border-t border-zinc-200 pt-8">
                <p className="font-medium text-zinc-900">{t.name}</p>
                <p className="mt-1 text-sm text-zinc-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
