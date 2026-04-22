import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "system-ui", "-apple-system", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
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
