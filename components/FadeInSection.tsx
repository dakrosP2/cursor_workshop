"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  "aria-labelledby"?: string;
};

export function FadeInSection({
  children,
  className,
  id,
  as = "section",
  "aria-labelledby": ariaLabelledBy,
}: FadeInSectionProps) {
  const reduceMotion = useReducedMotion();
  const Motion = as === "section" ? motion.section : motion.div;

  return (
    <Motion
      id={id}
      className={className}
      aria-labelledby={ariaLabelledBy}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion>
  );
}
