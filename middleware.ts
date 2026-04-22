import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const STATIC_EXT =
  /\.(ico|png|jpe?g|gif|webp|svg|avif|woff2?|ttf|eot|otf|mp4|webm|txt|xml|json|pdf|map|css|js|mjs)$/i;

/**
 * 잘못된 앱 경로만 `/`로 보냄.
 * `/_next` 전부(번들·HMR·CSS), `/api`, `/_vercel`, `/.well-known`, `public` 정적은 반드시 통과.
 * matcher 는 위 경로는 아예 본문을 타지 않게 해서(특히 `/_next/*`가 `/`로 먹지 않게) 404·깨짐을 막습니다.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") return NextResponse.next();
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_vercel") ||
    pathname.startsWith("/.well-known")
  ) {
    return NextResponse.next();
  }
  if (STATIC_EXT.test(pathname)) return NextResponse.next();

  return NextResponse.redirect(new URL("/", request.url));
}

/**
 * `/_next`·`/api`·Vercel·.well-known·확장자 정적·favicon 는 미들웨어 제외(위 분기에 안 걸리지 않게)
 */
export const config = {
  matcher: [
    "/((?!api/|_next/|_vercel/|\\.well-known/|favicon\\.ico|.*\\..*).*)",
  ],
};
