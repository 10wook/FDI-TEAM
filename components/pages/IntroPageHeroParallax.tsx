"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useMainScrollRef } from "@/contexts/MainScrollContext";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * 메인 스크롤 영역 기준으로 히어로 배경·데코에 패럴랙스를 줍니다.
 */
export default function IntroPageHeroParallax({ children, className }: Props) {
  const mainRef = useMainScrollRef();
  const { scrollYProgress } = useScroll({
    container: mainRef ?? undefined,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 0.45], [0, -48]);
  const rawRotate = useTransform(scrollYProgress, [0, 0.4], [0, -1.2]);
  const y = useSpring(rawY, { stiffness: 120, damping: 28, mass: 0.4 });
  const rotate = useSpring(rawRotate, { stiffness: 100, damping: 30 });

  return (
    <div className={`relative ${className ?? ""}`}>
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 grid-bg"
        style={{ y, rotate, transformOrigin: "50% 20%" }}
        aria-hidden
      />
      <div className="relative z-0">{children}</div>
    </div>
  );
}
