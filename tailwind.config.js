/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#232323',
        'primary-2' : '#333333',
        'cool-gray-500': '#607D8B'

      },
      borderWidth:{
        '1': '1px'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

