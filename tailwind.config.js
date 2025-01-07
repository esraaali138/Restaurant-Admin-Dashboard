
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        width:{
          '98':'420px'
        },
        height:{
          '98':'540px'
        },
        backgroundColor:{
          'orange' : '#FF720D'
        }
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
  