/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      }
    },
  },
  daisyui: {
    themes: [ "black"],
  },
  plugins: [
    require('daisyui'),
  ],
}

