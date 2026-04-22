import { AlertCircle, ImageIcon } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
  className?: string;
  /**
   * `mediaSlot` — 16:9 시연/캡처가 들어갈 **빈 화면** 느낌 (사진·영상 없을 때)
   */
  variant?: "default" | "mediaSlot";
  /** `mediaSlot`일 때만 — 초록 vs 기본(시안·퍼플) 네온 */
  mediaSlotNeon?: "cyan" | "emerald";
};

export default function ContentComingSoon({
  title = "실제 시연 콘텐츠 준비 중",
  description = "시연 영상·이미지가 준비되는 대로 이 영역에 추가됩니다.",
  className = "",
  variant = "default",
  mediaSlotNeon = "cyan",
}: Props) {
  if (variant === "mediaSlot") {
    const isEm = mediaSlotNeon === "emerald";
    const boxClass = isEm
      ? "border-emerald-500/45 bg-gradient-to-b from-slate-900/90 to-emerald-950/25 shadow-neon-emerald"
      : "border-cyan-500/40 bg-gradient-to-b from-slate-900/90 to-fuchsia-950/20 shadow-neon-fuchsia";
    const patternClass = isEm
      ? "opacity-30 [background-image:repeating-linear-gradient(-45deg,rgba(52,211,153,0.12)_0px,rgba(52,211,153,0.12)_1px,transparent_1px,transparent_10px)]"
      : "opacity-30 [background-image:repeating-linear-gradient(-45deg,rgba(34,211,238,0.1)_0px,rgba(34,211,238,0.1)_1px,transparent_1px,transparent_10px)]";
    const iconClass = isEm
      ? "live-demo-breathe--emerald relative h-12 w-12 text-emerald-400/85"
      : "live-demo-breathe relative h-12 w-12 text-cyan-400/80";
    const tagClass = isEm
      ? "border-emerald-500/35 text-emerald-200/90"
      : "border-cyan-500/30 text-cyan-300/90";
    return (
      <div
        className={`max-w-2xl w-full ${className}`.trim()}
        role="status"
        aria-label={`${title}. ${description}`}
      >
        <div
          className={`relative flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 text-center ${boxClass}`}
        >
          <div
            className={`pointer-events-none absolute inset-0 rounded-[inherit] ${patternClass}`}
            aria-hidden
          />
          <ImageIcon
            className={iconClass}
            strokeWidth={1.25}
            aria-hidden
          />
          <div className="relative z-[1] font-display text-base font-bold text-slate-200">
            {title}
          </div>
          <p className="relative z-[1] max-w-sm text-sm leading-relaxed text-slate-400">
            {description}
          </p>
          <span
            className={`relative z-[1] mt-1 rounded-full border bg-slate-950/60 px-2.5 py-0.5 font-mono text-xs ${tagClass}`}
          >
            캡처 / 영상 자리
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-cyan-500/25 bg-slate-900/50 p-12 text-center text-slate-200 ${className}`}
    >
      <AlertCircle className="mb-3 h-8 w-8 text-cyan-500/50" />
      <div className="mb-1 font-display text-lg font-bold">{title}</div>
      <p className="max-w-md text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
}
