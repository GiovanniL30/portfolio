/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "#0A0A0A",
        off_white: "#C7C7C7",
        primary: "#D3E97A",
        neutral_dark_grey: "#222222",
        dark_grey: "#1A1A1A",
        line_color: "#484848",
      },
      fontFamily: {
        Bebas: ['"Bebas Neue"', "serif"],
        Manrope: ["Manrope", "serif"],
      },
    },
  },
  plugins: [],
};
