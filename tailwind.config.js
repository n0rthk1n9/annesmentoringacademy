module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fawn: "#e7a977",
        "dark-khaki": "#c7cb85",
        "peach-crayola": "#ebbe9b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
