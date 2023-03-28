/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      scrollbar: {
        width: '20px',
      },
      // Show the scrollbar on all elements
      '::-webkit-scrollbar': {
        display: 'block',
      },
      // Show the scrollbar thumb
      '::-webkit-scrollbar-thumb': {
        backgroundColor: '#aaa',
      },
      fontFamily: {
        display: ['Luckiest Guy'],
        body: ['Lato'],
      },
      keyframes: {
        sectionA: {
          '20%': { backgroundImage: "url('/sectionAhover.svg')", opacity: '1' },
          '100%': {
            backgroundImage: "url('/sectionAhover.svg')",
            opacity: '1',
          },
        },
        sectionB: {
          '20%': { backgroundImage: "url('/sectionBhover.svg')", opacity: '1' },
          '100%': {
            backgroundImage: "url('/sectionBhover.svg')",
            opacity: '1',
          },
        },
        sectionC: {
          '20%': { backgroundImage: "url('/sectionChover.svg')", opacity: '1' },
          '100%': {
            backgroundImage: "url('/sectionChover.svg')",
            opacity: '1',
          },
        },
      },
      animation: {
        sectionA: 'sectionA 1s ease-in forwards',
        sectionB: 'sectionB 1s ease-in forwards',
        sectionC: 'sectionC 1s ease-in forwards',
      },
      colors: {
        'boom-yellow': '#FFEB33',
        'unselected-gray': '#9F9F9F',
      },
    },
  },
  plugins: [],
}
