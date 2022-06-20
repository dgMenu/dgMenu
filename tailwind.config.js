/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rgb-green": "#83EBAE",
        "rgb-blue": "#3D85F3",
        "rgb-purple": "#6B56EF",
      },
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [],
};
