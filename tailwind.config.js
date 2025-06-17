/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'sand-leather': '#b4a67d',
        'midnight-navy': '#0F1A3C'
      }
    },
  },
  plugins: [],
}
