module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(237, 63%, 64%)",
          "very-light": "hsl(240, 78%, 98%)",
          light: "hsl(234, 14%, 74%)",
          normal: "hsl(233, 13%, 49%)",
          dark: "hsl(232, 13%, 33%)",
        },
      },
      width: {
        custom: "31%",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
