import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0',
        sm: '0',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    screens: {
      'xs': '320px',
    },
  },
  plugins: [],
};
export default config;
