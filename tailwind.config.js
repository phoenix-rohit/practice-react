/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    fontSize: {
      xs: "1.2rem",
      sm: "1.4rem",
      base: "1.6rem",
      md: "1.8rem",
      lg: "2.0rem",
      xl: "2.4rem",
      "2xl": "3.0rem",
      "3xl": "3.6rem",
      "4xl": "4.4rem",
      "5xl": "5.2rem",
      "6xl": "6.2rem",
      "7xl": "7.4rem",
      "8xl": "8.6rem",
    },

    spacing: {
      4: "0.4rem",
      8: "0.8rem",
      12: "1.2rem",
      16: "1.6rem",
      24: "2.4rem",
      32: "3.2rem",
      48: "4.8rem",
      64: "6.4rem",
      80: "8rem",
      96: "9.6rem",
      128: "12.8rem",
    },

    extend: {},
  },
  plugins: [],
};
