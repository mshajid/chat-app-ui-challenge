/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/assets/images/wall.jpg')"
      }
    },
  },
  plugins: [],
}

