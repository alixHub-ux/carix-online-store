/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noyhr: ["NoyhrSemiLight", "sans-serif"],
         poppins: ["Poppins","sans-serif"],
         audiowide: ["'Audiowide'", "cursive"],
      }
    }
  }
}