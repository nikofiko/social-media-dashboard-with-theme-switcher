/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"], // Fixed the syntax
      },
      colors: {
        'dark-blue': 'hsl(230, 17%, 14%)',
        'dark-grey': 'hsl(228, 12%, 44%)',
        'up-green': 'hsl(163, 72%, 41%)',
        'card-light': 'hsl(227, 47%, 96%)',
        'down-red': 'hsl(356, 69%, 56%)',
        'dark-bg': 'hsl(230, 17%, 14%)',
        'top-bg': 'hsl(232, 19%, 15%)',
        'card-dark': 'hsl(228, 28%, 20%)'
      }
    },
  },
  plugins: [],
}

