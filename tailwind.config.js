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
          petrol: "#38908F",
          "blue-gray": "#5E96AE",
          "light-terracotta": "#FFBFA3",
          terracotta: "#E08963",
          sand: "#DFC7C1",
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
