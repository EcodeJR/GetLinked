/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#150E28',
        'normal-purple': '#D434FE',
        'light-gray': 'rgba(255, 255, 255, 0.18);',
        'purple-gradient': ' linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
      },
    },
  },
  plugins: [],
}

