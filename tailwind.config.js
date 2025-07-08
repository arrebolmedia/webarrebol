/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php",
    "./**/*.php",
    "./js/*.js",
    "./templates/**/*.php",
    "./inc/**/*.php"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'arrebol-beige': '#f8f5f2',
        'arrebol-dark': '#181818',
        'arrebol-accent': '#c46f4c',
      },
      letterSpacing: {
        'wide': '0.1em',
        'wider': '0.2em',
        'widest': '0.5em',
      }
    },
  },
  plugins: [],
}
