import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#fdfdfd",
        primary: "#0f766e", // Teal 700
        "primary-dark": "#134e4a", // Teal 900
        "primary-darker": "#042f2e", // Teal 950
        "primary-light": "#14b8a6", // Teal 500
        "primary-lighter": "#5eead4", // Teal 300
      },
      screens: {
        "3xl": "1792px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
