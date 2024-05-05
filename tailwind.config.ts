import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#222831",
        textPrimary: "#010617",
        palletPurple: {
          200: "#B7B6EB",
          300: "#7B78EB",
          400: "#5955ED",
          500: "#3E3ADB",
          600: "#1D19B9",
          800: "#070475",
          900: "#02003D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
