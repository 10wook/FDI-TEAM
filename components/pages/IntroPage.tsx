"use client";

import { motion } from "framer-motion";
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
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-8"
            variants={introItem}
          >
            <Sparkles className="w-3 h-3" />
            FDI 2026 Symposium · Track 5
          </motion.div>
          <motion.h1
            className="font-display text-7xl font-medium text-slate-900 tracking-tight leading-[1.05] mb-6"
            variants={introItem}
          >
            Building
            <br />
            <span className="text-blue-600">AI Data Infrastructure</span>
          </motion.h1>
          <motion.p
            className="text-2xl font-display text-slate-700 leading-snug max-w-2xl mb-10 italic"
            variants={introItem}
          >
            &quot;ChatGPT는 똑똑한데,
            <br />왜 우리 회사 일은 못 도와줄까?&quot;
          </motion.p>
          <motion.div variants={introItem}>
            <button
              onClick={() => onNavigate("challenge")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors group"
            >
              학습 시작하기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </IntroPageHeroParallax>

      <SectionWrapper
        id="chat-tutorial"
        highlightedId={highlightedId}
        revealIndex={0}
      >
        <div className="bg-blue-50/40 border border-blue-100 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-medium text-slate-900 mb-2">
                AI 가이드에게 물어보세요
              </h3>
              <div className="text-slate-700 leading-relaxed space-y-2">
                <p>우측 하단의 챗봇을 클릭해 자유롭게 질문할 수 있습니다.</p>
                <p>
                  AI 가이드는{" "}
                  <span className="font-medium text-blue-700">
                    관련 페이지로 자동 이동
                  </span>
                  시켜 주고,
                  <span className="font-medium text-blue-700">
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
          <div className="grid gap-2 ml-14">
            <div className="text-xs font-mono text-blue-600 mb-1">예시 질문</div>
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => onAskQuestion(q)}
                className="text-left px-4 py-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all flex items-center justify-between group"
              >
                <span className="text-sm text-slate-700">{q}</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
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
        <div className="grid grid-cols-3 gap-6">
          <div className="border-l-2 border-slate-200 pl-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
              발표자
            </div>
            <div className="text-sm font-medium text-slate-900">김용길 본부장</div>
          </div>
          <div className="border-l-2 border-slate-200 pl-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
              세션
            </div>
            <div className="text-sm font-medium text-slate-900">Track 5</div>
          </div>
          <div className="border-l-2 border-slate-200 pl-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
              행사
            </div>
            <div className="text-sm font-medium text-slate-900">
              Fasoo FDI 2026
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
