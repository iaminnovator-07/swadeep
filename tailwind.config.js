/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        void: "#05070b",
        panel: "#0b1118",
        ink: "#e9f0f6",
        mute: "#8d99a8",
        cyan: "#7ee7ff",
        mint: "#78ffbf",
        solar: "#ffd166",
        rose: "#ff6b8b",
      },
      boxShadow: {
        glow: "0 0 48px rgba(126, 231, 255, 0.18)",
        "glow-strong": "0 0 80px rgba(120, 255, 191, 0.18)",
      },
    },
  },
  plugins: [],
};
