const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "homepage-bg-1": 'url("@/assets/homepage-bg-1.jpg")',
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      gray: colors.stone,
      white: "ghostwhite",
    },
  },
  plugins: [],
};
