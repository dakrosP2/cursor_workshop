"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/constants/content";

export function CtaSection() {
  const id = siteContent.anchors.cta;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-indigo-950/20 bg-zinc-950"
      aria-labelledby="cta-heading"
    >
      <div className="section-inner section-y !py-20 sm:!py-24">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="cta-heading"
            className="font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl"
          >
            {siteContent.cta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            {siteContent.cta.sub}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={siteContent.links.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] min-w-[220px] items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-zinc-950 shadow-lg transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {siteContent.cta.button}
            </a>
            <a
              href={`#${siteContent.anchors.faq}`}
              className="text-sm font-medium text-zinc-400 underline-offset-4 transition hover:text-white hover:underline"
            >
              {siteContent.cta.secondaryLinkLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
