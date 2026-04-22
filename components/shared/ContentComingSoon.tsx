import { AlertCircle, ImageIcon } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
  className?: string;
  /**
   * `mediaSlot` — 16:9 시연/캡처가 들어갈 **빈 화면** 느낌 (사진·영상 없을 때)
   */
  variant?: "default" | "mediaSlot";
};

export default function ContentComingSoon({
  title = "실제 시연 콘텐츠 준비 중",
  description = "시연 영상·이미지가 준비되는 대로 이 영역에 추가됩니다.",
  className = "",
  variant = "default",
}: Props) {
  if (variant === "mediaSlot") {
    return (
      <div
        className={`max-w-2xl w-full ${className}`.trim()}
        role="status"
        aria-label={`${title}. ${description}`}
      >
        <div
          className="relative flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300/70 bg-gradient-to-b from-slate-50/90 to-blue-50/25 px-6 py-8 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]"
        >
          <div
            className="absolute inset-0 rounded-[inherit] opacity-40 [background-image:repeating-linear-gradient(-45deg,rgba(148,163,184,0.12)_0px,rgba(148,163,184,0.12)_1px,transparent_1px,transparent_10px)] pointer-events-none"
            aria-hidden
          />
          <ImageIcon
            className="live-demo-breathe relative h-12 w-12 text-slate-400/90"
            strokeWidth={1.25}
            aria-hidden
          />
          <div className="font-display text-base font-medium text-slate-600 relative z-[1]">
            {title}
          </div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm relative z-[1]">
            {description}
          </p>
          <span className="mt-1 rounded-full border border-slate-200/80 bg-white/60 px-2.5 py-0.5 text-xs font-mono text-slate-500 relative z-[1]">
            캡처 / 영상 자리
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`border-2 border-dashed border-slate-200 bg-blue-50/40 rounded-xl p-12 flex flex-col items-center justify-center text-center ${className}`}
    >
      <AlertCircle className="w-8 h-8 text-slate-400 mb-3" />
      <div className="font-display text-lg text-slate-700 mb-1">{title}</div>
      <p className="text-sm text-slate-500 leading-relaxed max-w-md">
        {description}
      </p>
    </div>
  );
}
