import Image from "next/image";
import { siteContent } from "@/constants/content";
import { FadeInSection } from "@/components/FadeInSection";

export function PortfolioSection() {
  const id = siteContent.anchors.portfolio;

  return (
    <FadeInSection
      id={id}
      className="scroll-mt-20 border-b border-zinc-200/80 bg-stone-50 section-y"
      aria-labelledby="portfolio-heading"
    >
      <div className="section-inner">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {siteContent.portfolio.sectionLabel}
          </p>
          <h2
            id="portfolio-heading"
            className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl"
          >
            {siteContent.portfolio.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            {siteContent.portfolio.intro}
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-20 lg:gap-24">
          {siteContent.portfolio.items.map((item, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  reverse
                    ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
                    : ""
                }`}
                key={item.id}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200 shadow-sm ring-1 ring-zinc-900/5">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {item.tag}
                  </p>
                  <h3 className="font-display mt-3 text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                    {item.summary}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </FadeInSection>
  );
}
