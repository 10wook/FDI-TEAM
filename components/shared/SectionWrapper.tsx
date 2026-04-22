"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { sectionRevealVariants } from "@/lib/page-motion";

type Props = {
  id: string;
  highlightedId: string | null;
  children: ReactNode;
  className?: string;
  /** 스크롤 시 순차로 나타날 때 순번 (0부터) */
  revealIndex?: number;
  /** 채팅 강조 시 좌측 네온(기본 시안) */
  highlightNeon?: "cyan" | "emerald";
};

export default function SectionWrapper({
  id,
  highlightedId,
  children,
  className = "",
  revealIndex = 0,
  highlightNeon = "cyan",
}: Props) {
  const isHighlighted = highlightedId === id;
  const highlightClass = isHighlighted
    ? highlightNeon === "emerald"
      ? "highlight-active--emerald border-l-emerald-400"
      : "highlight-active border-cyan-400"
    : "";
  return (
    <motion.section
      id={`section-${id}`}
      data-section-id={id}
      custom={revealIndex}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px -5% 0px", amount: 0.12 }}
      variants={sectionRevealVariants}
      className={`scroll-mt-24 transition-all rounded-r ${highlightClass} ${className}`}
    >
      {children}
    </motion.section>
  );
}
