/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: 'jit',
  purge: [ "./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}" ],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        "3xl": "1440px",
        "2xl": "1200px",
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwind-scrollbar-hide')
   ]

}