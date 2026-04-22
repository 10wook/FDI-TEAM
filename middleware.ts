import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const STATIC_EXT = /\.(ico|png|jpe?g|gif|webp|svg|avif|woff2?|ttf|eot|otf|mp4|webm|txt|xml|json|pdf|map)$/i;

/**
 * 잘못된 앱 경로만 `/`로 보냄. `/_next` 전체(번들·HMR·CSS), `/api`, `public` 은
 * 통과. matcher 로 `_next` 를 일부만 제외하면 나머지 `/_next/*` 가 `/`로
 * 리다이렉트되어 JS·스타일이 전부 씹힘.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") return NextResponse.next();
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }
  if (STATIC_EXT.test(pathname)) return NextResponse.next();

  return NextResponse.redirect(new URL("/", request.url));
}

// matcher 생략 시 모든 요청에 대해 위 분기만 적용(가장 안전)
