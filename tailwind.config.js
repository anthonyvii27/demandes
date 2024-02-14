/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "transparent": "transparent",
        "white": "#FFFFFF",
        "black": "#000000",
        "neon-pink": "#EE0979",
        "neon-orange": "#FF6A00",
        "lighter-gray": "#ECEDEE",
        "gray-10": "#9BA1A6",
        "gray-20": "#787F85",
        "gray-30": "#697177",
        "gray-40": "#4C5155",
        "gray-50": "#3A3F42",
        "gray-60": "#313538",
        "gray-70": "#2B2F31",
        "gray-80": "#26292B",
        "gray-90": "#202425",
        "gray-100": "#1A1D1E",
        "darker-gray": "#151718",
      },
      fontSize: {
        xs: "0.7rem",
        sm: "0.9rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}