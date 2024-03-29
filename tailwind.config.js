/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './**/*.jsx',
    './Pages/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
}

