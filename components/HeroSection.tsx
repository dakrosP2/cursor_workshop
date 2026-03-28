"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/constants/content";

export function HeroSection() {
  const { services } = siteContent.anchors;
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden border-b border-zinc-200/80"
      aria-labelledby="hero-title"
    >
      <div className="relative min-h-[calc(100svh-3.5rem)] w-full sm:min-h-[calc(100svh-4rem)]">
        <Image
          src={siteContent.hero.imageSrc}
          alt={siteContent.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950/92 via-zinc-950/65 to-zinc-950/25 sm:via-zinc-950/50"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[inherit] flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:justify-center lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-xl">
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {siteContent.hero.eyebrow}
              </motion.p>
              <motion.p
                className="font-display mt-4 text-sm font-medium tracking-tight text-white/95 sm:text-base"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.03 }}
              >
                {siteContent.brandName}
              </motion.p>
              <motion.h1
                id="hero-title"
                className="font-display mt-2 text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
              >
                {siteContent.hero.titleBefore}
                <span className="text-indigo-300">
                  {siteContent.hero.titleHighlight}
                </span>
                {siteContent.hero.titleAfter}
              </motion.h1>
              <motion.p
                className="mt-6 max-w-lg text-base leading-relaxed text-zinc-200 sm:text-lg"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {siteContent.hero.subtitle}
              </motion.p>
              <motion.div
                className="mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14 }}
              >
                <a
                  href={siteContent.links.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-lg bg-indigo-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-950/40 transition hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {siteContent.primaryCta}
                </a>
                <a
                  href={`#${services}`}
                  className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-lg border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {siteContent.secondaryCta}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
