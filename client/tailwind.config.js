module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    colors: {
      gray: "ghostwhite",
      white: "ghostwhite",
    },
  },
  plugins: [],
};
