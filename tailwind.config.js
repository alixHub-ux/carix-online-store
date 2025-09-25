// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // 💡 THIS FORCES ALL UTILITIES TO OVERRIDE INHERITED STYLES
  important: true, 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}