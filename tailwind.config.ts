import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "neon-cyan":
          "0 0 24px -4px rgba(34, 211, 238, 0.45), 0 0 8px -2px rgba(34, 211, 238, 0.25)",
        "neon-fuchsia":
          "0 0 20px -4px rgba(232, 121, 249, 0.4), inset 0 0 0 1px rgba(34, 211, 238, 0.12)",
        "neon-soft":
          "0 0 32px -12px rgba(34, 211, 238, 0.2), 0 4px 24px -8px rgba(0,0,0,0.5)",
        "neon-emerald":
          "0 0 24px -4px rgba(52, 211, 153, 0.45), 0 0 8px -2px rgba(16, 185, 129, 0.3), inset 0 0 0 1px rgba(52, 211, 153, 0.12)",
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "-apple-system", "sans-serif"],
        display: [
          "Pretendard",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      animation: {
        "highlight-fade": "highlight-fade 2.5s ease-out forwards",
        "fade-up": "fade-up 0.4s ease-out forwards",
        "typing-dot": "typing-dot 1.4s ease-in-out infinite",
        "modal-enter": "modal-enter 0.3s ease-out forwards",
        "carousel-fade": "carousel-fade 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
