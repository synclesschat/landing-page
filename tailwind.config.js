/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: { // custom color palette for branding
        'primary': {
          '50': 'hsl(202, 100%, 95%)',
          '100': 'hsl(204, 100%, 86%)',
          '200': 'hsl(206, 93%, 73%)',
          '300': 'hsl(208, 88%, 62%)',
          '400': 'hsl(210, 83%, 53%)',
          '500': 'hsl(212, 92%, 43%)',
          '600': 'hsl(214, 95%, 36%)',
          '700': 'hsl(215, 96%, 32%)',
          '800': 'hsl(216, 98%, 25%)',
          '900': 'hsl(218, 100%, 17%)'
        },
        'neutral': {
          '50': 'hsl(216, 33%, 97%)',
          '100': 'hsl(214, 15%, 91%)',
          '200': 'hsl(210, 16%, 82%)',
          '300': 'hsl(211, 13%, 65%)',
          '400': 'hsl(211, 10%, 53%)',
          '500': 'hsl(211, 12%, 43%)',
          '600': 'hsl(209, 14%, 37%)',
          '700': 'hsl(209, 18%, 30%)',
          '800': 'hsl(209, 20%, 25%)',
          '900': 'hsl(210, 24%, 16%)'
        }
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
