"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import IntroPageHeroParallax from "@/components/pages/IntroPageHeroParallax";
import { SUGGESTED_QUESTIONS } from "@/lib/suggestions";
import type { PageId } from "@/lib/pages";

const introHero = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
} as const;

const introItem = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

type Props = {
  highlightedId: string | null;
  onNavigate: (pageId: PageId) => void;
  onAskQuestion: (question: string) => void;
};

export default function IntroPage({
  highlightedId,
  onNavigate,
  onAskQuestion,
}: Props) {
  return (
    <div>
      <IntroPageHeroParallax className="relative -mx-12 -mt-12 px-12 pt-12 pb-20 mb-16 overflow-hidden">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="show"
          variants={introHero}
        >
          <motion.div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-cyan-950/40 px-3 py-1 text-xs font-medium text-cyan-200 shadow-neon-cyan"
            variants={introItem}
          >
            <Sparkles className="h-3 w-3 text-cyan-300" />
            FDI 2026 Symposium · Track 5
          </motion.div>
          <motion.h1
            className="mb-6 font-display text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-100"
            variants={introItem}
          >
            Building
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-fuchsia-400 bg-clip-text font-extrabold text-transparent">
              AI Data Infrastructure
            </span>
          </motion.h1>
          <motion.p
            className="mb-10 max-w-2xl font-display text-2xl font-medium leading-snug text-slate-400 italic"
            variants={introItem}
          >
            &quot;ChatGPT는 똑똑한데,
            <br />왜 우리 회사 일은 못 도와줄까?&quot;
          </motion.p>
          <motion.div variants={introItem}>
            <button
              onClick={() => onNavigate("challenge")}
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-3 font-bold text-white shadow-neon-cyan transition-transform hover:scale-[1.02] hover:from-cyan-500 hover:to-fuchsia-600"
            >
              학습 시작하기
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </IntroPageHeroParallax>

      <SectionWrapper
        id="chat-tutorial"
        highlightedId={highlightedId}
        revealIndex={0}
      >
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-8 shadow-neon-fuchsia">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-600 to-fuchsia-700 shadow-neon-cyan">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-display text-2xl font-bold text-slate-100">
                AI 가이드에게 물어보세요
              </h3>
              <div className="space-y-2 leading-relaxed text-slate-300">
                <p>우측 하단의 챗봇을 클릭해 자유롭게 질문할 수 있습니다.</p>
                <p>
                  AI 가이드는{" "}
                  <span className="font-semibold text-cyan-200">
                    관련 페이지로 자동 이동
                  </span>
                  시켜 주고,
                  <span className="font-semibold text-cyan-200">
                    {" "}
                    핵심 부분을 강조
                  </span>
                  해 안내합니다.
                </p>
                <p className="text-sm text-slate-500">
                  원하는 주제만 빠르게 학습하거나, 궁금한 점이 생기면 언제든
                  질문해 보세요.
                </p>
              </div>
            </div>
          </div>
          <div className="ml-14 grid gap-2">
            <div className="mb-1 font-mono text-xs text-cyan-500/80">
              예시 질문
            </div>
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => onAskQuestion(q)}
                className="group flex items-center justify-between rounded-lg border border-cyan-500/20 bg-slate-900/40 px-4 py-3 text-left transition-all hover:border-cyan-500/50 hover:shadow-neon-cyan"
              >
                <span className="text-sm text-slate-300">{q}</span>
                <ArrowRight className="h-4 w-4 text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-cyan-400" />
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="session-info"
        highlightedId={highlightedId}
        className="mt-12"
        revealIndex={1}
      >
        <div className="overflow-hidden rounded-2xl border border-cyan-500/25 bg-slate-950/60 p-6 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.08),0_0_48px_-20px_rgba(6,182,212,0.2)] sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
            <div className="relative mx-auto w-full max-w-[260px] shrink-0 lg:mx-0">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-cyan-500/15 via-fuchsia-500/10 to-transparent opacity-90 blur-2xl"
                aria-hidden
              />
              <div className="relative">
                <div
                  className="pointer-events-none absolute inset-0 -z-10 scale-105 rounded-3xl border border-cyan-400/20 bg-gradient-to-t from-cyan-500/5 to-transparent"
                  aria-hidden
                />
                <Image
                  src="/images/kim-yonggil-speaker.png"
                  alt="T05 Building AI Data Infrastructure — 발표자 김용길 본부장"
                  width={1292}
                  height={1879}
                  className="speaker-cutout h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 70vw, 260px"
                  priority={false}
                />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-6">
                <p className="mb-1 font-mono text-xs uppercase tracking-widest text-cyan-500/80">
                  발표자
                </p>
                <h3 className="font-display text-2xl font-bold text-slate-100 sm:text-3xl">
                  김용길 본부장
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Fasoo FDI 2026 · Track 5 ·{" "}
                  <span className="text-cyan-200/90">
                    Building AI Data Infrastructure
                  </span>
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="border-l-2 border-cyan-500/50 pl-4">
                  <div className="mb-1 font-mono text-xs uppercase tracking-widest text-slate-500">
                    세션
                  </div>
                  <div className="text-sm font-semibold text-slate-200">Track 5</div>
                </div>
                <div className="border-l-2 border-cyan-500/50 pl-4">
                  <div className="mb-1 font-mono text-xs uppercase tracking-widest text-slate-500">
                    행사
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    Fasoo FDI 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
