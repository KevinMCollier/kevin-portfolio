/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-navy': '#0F1A3C',
        'off-white':     '#F8F9FC',
        'stone-grey':    '#E2E6EE',
        'graphite':      '#54607A',
        'copper-rust':   '#C46446',
        'sea-mist':      '#8ECAC1',
        'sunlit-sand':   '#DFD9C7',
        'coach-blue':    '#79d4ed',
      },

      /* —— add this block —— */
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
