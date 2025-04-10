/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#022B04',
        primary_light: '#6A846B',
        secondary: '#7D5E20',
        secondary_light: '#BB9752',
        bg: '#F8F4EE'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        messiri: ['"El Messiri"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}