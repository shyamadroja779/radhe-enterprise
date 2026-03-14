import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fef7ee",
          100: "#feeccd",
          200: "#fcd596",
          300: "#fab85f",
          400: "#f89833",
          500: "#f6780a",
          600: "#e75d06",
          700: "#bf4307",
          800: "#98350d",
          900: "#7a2d0e",
          950: "#421404",
        },
        steel: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e3",
          300: "#b1baca",
          400: "#8896ac",
          500: "#697892",
          600: "#546179",
          700: "#444f63",
          800: "#3b4454",
          900: "#343b48",
          950: "#1e2330",
        },
      },
      fontFamily: {
        display: ["'Barlow Condensed'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;
