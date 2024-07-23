/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js", 'node_modules/preline/dist/*.js', ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        black: "#000000",
        orange: "FF4000",
        white: "rgba(255, 255, 255, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      animation:{
        fadeIn: 'fadeIn 0.5 ease-in-out',
        keyframes: {
          fadeIn:{
            '0%': {opacity: 0},
            '100%': {opacity: 1},
          }
        }
      }
    },
    screens: {
      xs: "400px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
]
};
