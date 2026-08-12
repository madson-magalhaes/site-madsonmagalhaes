import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6700",
          "dark-primary": "#0A1128",
          "dark-secondary": "#16213e",
          "text-primary": "#ffffff",
          "text-secondary": "#d0d0d0",
          "text-muted": "#a0a0a0",
        },
        semantic: {
          blue: "#3b82f6",
          green: "#22c55e",
          purple: "#a855f7",
          red: "#ef4444",
          yellow: "#fbbf24",
        },
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0A1128 0%, #16213e 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
