# Wrapsody 소개 사이트

Fasoo FDI 2026 Symposium T05 세션 **Building AI Data Infrastructure** (김용길 본부장) 발표를 비전공자도 이해할 수 있도록 12개의 학습 페이지와 LLM 기반 AI 가이드 챗봇으로 재구성한 Next.js 14 App Router 프로젝트입니다.

## 주요 기능

- **12개의 학습 페이지** — 인트로, 문제, 분석(Quantity/Security/Quality), 요구사항, 기존 접근법, Wrapsody, Agents, Fireside, 결론
- **AI 가이드 챗봇** — Vercel AI SDK + Google Gemini 3 Flash 기반, 질문에 답하면서 자동으로 페이지 이동·섹션 강조·참고 자료 추천 수행
- **ImageCarousel** — K-Assistant, Librarian, Domain Master 실행 캡쳐를 방향키/버튼으로 탐색
- **로컬 영구 저장** — `localStorage`에 대화 기록 보존

## 기술 스택

| 영역 | 선택 |
|------|------|
| 프레임워크 | Next.js 14 (App Router), TypeScript strict |
| UI | React 18, Tailwind CSS, lucide-react |
| 폰트 | Pretendard (본문), Fraunces (디스플레이), JetBrains Mono (모노) |
| LLM SDK | `ai` (Vercel AI SDK) + `@ai-sdk/google` |
| 모델 | `gemini-3-flash` (환경변수로 override) |
| 검증 | Zod (tool parameters) |
| 런타임 | Next.js Route Handler (Node runtime) |
| 배포 | Vercel (Fluid Compute) |

## 로컬 개발 셋업

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경변수 설정

`.env.local` 파일을 열고 Google Generative AI API 키를 붙여 넣습니다. 키는 https://aistudio.google.com/app/apikey 에서 발급 받을 수 있습니다.

```env
GOOGLE_GENERATIVE_AI_API_KEY=...
GOOGLE_GENERATIVE_AI_MODEL=gemini-3-flash
```

키 발급 후 API 제한 설정(Generative Language API만 허용)을 걸어 두는 것을 권장합니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:3000 으로 접속합니다.

### 4. 프로덕션 빌드 확인

```bash
npm run build
npm run start
```

## Vercel 배포

1. GitHub 저장소 (`https://github.com/HSSJW/FDI-TEAM.git`) 를 Vercel에 연결합니다.
2. Vercel 프로젝트 **Settings → Environment Variables** 에서 다음 키를 등록합니다.
   - `GOOGLE_GENERATIVE_AI_API_KEY` — Production/Preview/Development 모두 체크
   - `GOOGLE_GENERATIVE_AI_MODEL` (선택) — `gemini-3-flash`
3. **Settings → Functions** 에서 Fluid Compute 를 활성화합니다 (코드 레벨에서 `export const maxDuration = 300` 이 이미 설정되어 있음).
4. 재배포 후 프리뷰/프로덕션 URL에서 챗봇이 응답하는지 확인합니다.

## 프로젝트 구조

```
app/
  layout.tsx
  page.tsx                        # 메인 앱 (12개 페이지 + 챗봇 wiring)
  globals.css                     # Tailwind + keyframes
  api/chat/route.ts               # streamText 엔드포인트
components/
  layout/                         # Header, Sidebar, PageNav
  shared/                         # SubHeading, SectionWrapper, PageHeader, HowQuestionBanner,
                                  # ApproachComparisonTable, ImageCarousel, ContentComingSoon
  pages/                          # 12개 학습 페이지
  chat/                           # ChatPanel, ChatMessage, ReferenceCard
lib/
  pages.ts                        # 12개 페이지 상수
  sections.ts                     # 페이지별 섹션 ID 카탈로그
  captures.ts                     # 에이전트 실행 캡쳐 메타데이터
  references.ts                   # 참고 자료 스켈레톤 + 매칭 로직
  prompts.ts                      # 시스템 프롬프트 (세션 자료 전문 포함)
  tools.ts                        # AI SDK 툴 3종 (navigate / highlight / find_references)
  suggestions.ts                  # 추천 질문
  types.ts                        # 공용 타입
public/
  captures/                       # k-assistant, librarian, domain-master 이미지
```

## 커스터마이징

### 참고 자료 채우기

`lib/references.ts` 의 `references` 배열에 실제 Fasoo/Sparrow 공식 자료를 추가하면 챗봇이 질문에 맞는 링크 카드를 함께 응답합니다. 예시는 파일 내 주석을 참고하세요.

### 에이전트 캐러셀 이미지 캡션 확인

`lib/captures.ts` 에서 `[확인 필요]` 라벨이 붙은 항목은 원본 파일명이 부실했던 케이스입니다. 기획자가 최종 검수해 캡션을 다듬어 주세요.

### Wrapsody / Fireside 시연 콘텐츠

두 페이지 모두 `<ContentComingSoon />` 으로 자리만 잡아 둔 상태입니다. 실제 영상/캡쳐가 준비되면 `components/pages/WrapsodyPage.tsx` 와 `components/pages/FiresidePage.tsx` 의 해당 섹션을 `ImageCarousel` 또는 비디오 플레이어로 교체하세요.

## 라이선스

내부 프로토타입. 외부 공개 전 Fasoo/Sparrow 측과 협의 필요.
