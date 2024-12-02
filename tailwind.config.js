/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      "myTheme":"#ffb433"
     },
     screens:{
      "mobile":"310px",
     }
    },
  },
  plugins: [],
}