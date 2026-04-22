import type { Variants } from "framer-motion";

/** 페이지가 바뀔 때 — 블러·스케일이 흐려졌다 맞는 듯한 전환 */
export const pageMorphVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.94,
    filter: "blur(12px)",
    y: 12,
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.52,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.03,
    filter: "blur(10px)",
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const sectionRevealVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
