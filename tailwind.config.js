
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        width:{
          '98':'440px'
        }
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
  