import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: ["class", '[data-theme="dark"]'],
    future: {
      hoverOnlyWhenSupported: true,
    },
    container: {
      screens: {
        DEFAULT: "1536px",
      },
    },

    extend: {
      fontFamily: {
        comic:
          "Comic Sans MS, Chalkboard SE, Comic Neue, Comic Sans, sans-serif",
      },
      fontSize: {
        notebook: ["clamp(0.65rem, 1vw, 1rem)", { lineHeight: "2em" }],
      },
      screens: {
        xs: "480px",
      },
      padding: {
        container: "clamp(1rem, 5vw, 3rem)",
      },
      keyframes: {
        strike: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "strike-clip-path": {
          "0%": { "clip-path": "polygon(0 0, 0% 0, 0% 120%, 0 120%)" },
          "100%": { "clip-path": "polygon(0 0, 100% 0, 100% 120%, 0 120%)" },
        },
        shake: {
          "0%": { transform: "translateX(0px)" },
          "25%": { transform: "translateX(-6px)" },
          "75%": { transform: "translateX(6px)" },
        },
      },
      animation: {
        strike: "strike 300ms ease-in-out forwards",
        "strike-clip-path": "strike-clip-path 300ms ease-in-out forwards",
        shake: "shake 600ms cubic-bezier(.78,-0.02,.36,.97)",
      },
    },
  },
  presets: [
    require("./src/lib/tailwind-preset.ts")({
      fonts: {
        sans: {
          name: "Significa Sans",
          fontFaces: [
            {
              fontWeight: "400",
              src: `url('/fonts/significa-regular.woff2') format('woff2')`,
              ascentOverride: "95%",
            },
            {
              fontWeight: "500",
              src: `url('/fonts/significa-medium.woff2') format('woff2')`,
              ascentOverride: "95%",
            },
            {
              fontWeight: "600",
              src: `url('/fonts/significa-semibold.woff2') format('woff2')`,
              ascentOverride: "95%",
            },
          ],
        },
      },
    }),
  ],
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
