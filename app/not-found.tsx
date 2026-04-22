import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05050a] px-6 py-20 text-slate-200">
      <div className="mx-auto max-w-md text-center">
        <p className="font-mono text-sm text-cyan-400/80">404</p>
        <h1 className="mt-2 font-display text-2xl font-bold text-slate-100">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          주소가 잘못됐거나, 이 사이트는 메인(/) 한 곳에서만 열리도록 되어
          있어요.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg border border-cyan-500/30 bg-cyan-950/30 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/50 hover:shadow-neon-cyan"
        >
          메인으로
        </Link>
      </div>
    </div>
  );
}
