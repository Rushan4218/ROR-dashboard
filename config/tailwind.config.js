const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*",
    "./app/assets/stylesheets/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
        stylish: ["Stylish", "serif"],
      },
      colors: {
        primary: {
          100: "#F2F6FF",
          200: "#CADDFF",
          300: "#A1C7FB",
          400: "#76B1F3",
          500: "#4B9CE3",
          600: "#277AB4",
          700: "#155D85",
          800: "#0B4055",
          900: "#051E26",
        },
        accent: {
          100: "#FCFFF2",
          200: "#F6FFC4",
          300: "#F3FC95",
          400: "#F1F464",
          500: "#E6E035",
          600: "#B6A715",
          700: "#867307",
          800: "#564503",
          900: "#261C01",
        },
        neutral: {
          100: "#FAFBFC",
          200: "#E9EBEE",
          300: "#D9DCE0",
          400: "#C8CDD2",
          500: "#B9BFC4",
          600: "#92999D",
          700: "#6C7275",
          800: "#474C4E",
          900: "#222526",
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ],
};
