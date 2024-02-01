import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // container: {
    //   padding: {
    //     DEFAULT: "0",
    //     sm: "0",
    //     lg: "2rem",
    //     xl: "3rem",
    //     "2xl": "4rem",
    //   },
    // },
    screens: {
      xs: { min: "320px", max: "479px" }, // Mobile devices
      sm: { min: "480px", max: "767px" }, // iPads and tablets
      md: { min: "768px", max: "1024px" }, // Laptops and small screens
      lg: { min: "1025px", max: "1200px" }, // Large screens and desktops
      xl: { min: "1201px" }, // TV and extra large screens
      rock: { min: "768px" }, // common md
      ky: { min: "320px", max: "767px" }, // common sm
    },
  },
  plugins: [],
};
export default config;
