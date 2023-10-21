/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#18523d',
        'periwinkle': '#75bbd2',
        'turqoise': '#00ac97',
        'deep-cyan': '#2d97aa',
        'sand-leather': '#b4a67d'
      }
    },
  },
  plugins: [],
}
