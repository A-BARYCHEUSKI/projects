/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bluemain: "#01d5ff",
        white: "#ffffff",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({
        ".h1": {
          margin: 0,
          color: '#000000',
          fontSize: "48px",
          fontWeight: 700,
          lineHeight: 1,
        },
      });
      addUtilities({
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".h-layout": {
          height: "100%",
        },
      });
    }),
  ],
};
