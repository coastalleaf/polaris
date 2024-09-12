/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Mukta"', ...defaultTheme.fontFamily.sans],
        // serif: ['"Times New Roman Condensed"', ...defaultTheme.fontFamily.serif],
        // display: ['"Beth Ellen"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      mantis: {
        DEFAULT: "#82bd69",
        50: "#f6faf3",
        100: "#e9f5e3",
        200: "#d3eac8",
        300: "#afd89d",
        400: "#82bd69",
        500: "#61a146",
        600: "#4c8435",
        700: "#3d692c",
        800: "#345427",
        900: "#2b4522",
        950: "#13250e",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        lg: "4rem",
        xl: "8rem",
        "2xl": "14rem",
      },
    },
  },
  plugins: [],
};
