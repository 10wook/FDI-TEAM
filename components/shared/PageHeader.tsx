"use client";

import { motion } from "framer-motion";

const headerList = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
} as const;

const headerItem = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

type Props = {
  num: number;
  title: string;
  subtitle?: string;
  group: string;
};

export default function PageHeader({ num, title, subtitle, group }: Props) {
  return (
    <motion.div
      className="mb-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35, margin: "-0px 0px -10% 0px" }}
      variants={headerList}
    >
      <motion.div
        className="flex items-center gap-3 mb-4"
        variants={headerItem}
      >
        <span className="text-xs font-mono text-blue-600 tracking-widest uppercase">
          Chapter {String(num).padStart(2, "0")} · {group}
        </span>
      </motion.div>
      <motion.h1
        className="font-display text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-4"
        variants={headerItem}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="text-lg text-slate-600 leading-relaxed max-w-2xl"
          variants={headerItem}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
