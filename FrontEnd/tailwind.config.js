/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-red': '#e57373',
        'warm-green': '#8BC34A',
      },
    },
  },
  plugins: [],
}
