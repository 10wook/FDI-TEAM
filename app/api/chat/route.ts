import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText, type CoreMessage } from "ai";
import { buildSystemPrompt } from "@/lib/prompts";
import { chatTools } from "@/lib/tools";

export const runtime = "nodejs";
export const maxDuration = 300;

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

const MODEL_ID = process.env.GOOGLE_GENERATIVE_AI_MODEL ?? "gemini-3-flash";

export async function POST(req: Request) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return new Response(
      JSON.stringify({
        error:
          "GOOGLE_GENERATIVE_AI_API_KEY가 설정되지 않았습니다. .env.local 또는 Vercel 환경변수를 확인해 주세요.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  const { messages } = (await req.json()) as { messages: CoreMessage[] };

  const result = await streamText({
    model: google(MODEL_ID),
    system: buildSystemPrompt(),
    messages,
    tools: chatTools,
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
}
