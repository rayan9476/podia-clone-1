/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  safelist: ["font-stabil", "hidden", "block", "inline-block"],
  theme: {
    extend: {
      screens: {
        "3xl": { min: "2560px", max: "3840px" },
        "lg-only": { min: "1024px", max: "1279px" },
        "xl-only": { min: "1280px", max: "1535px" },
      },
      fontFamily: {
        stabil: ['"Stabil Grotesk"', "sans-serif"],
      },
      scale: {
        48: "0.48",
        47: "0.47",
        83: "0.83",
        99: "0.99",
        90: "0.90",
        41: "0.417",
        42: "0.419",
      },
    },
  },
  plugins: [],
};
