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
      xs: { min: "320px", max: "480px" }, // Mobile devices
      sm: { min: "481px", max: "768px" }, // iPads and tablets
      md: { min: "769px", max: "1024px" }, // Laptops and small screens
      lg: { min: "1025px", max: "1200px" }, // Large screens and desktops
      xl: { min: "1201px" }, // TV and extra large screens
      rock: { min: "769px" }, // common md
      ky: { min: "320px" }, // common sm
    },
  },
  plugins: [],
};
export default config;
