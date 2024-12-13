/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myblack: '#000000',
      },
      fontSize: {
        '1xl': '22px',
      },
      height:{
        '150' : '500px'
      },
      width:{
        '98%': '98%'
      },
    },
  },
  plugins: [],
}

