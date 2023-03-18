/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
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
      keyframes: {
        in: {
          '20%': { transform: 'translate(-13px,-13px) ' },
          '40%': { transform: 'translate(-8px,-8px) ' },
          '60%': { transform: 'translate(-11px,-11px) ' },
          '80%': { transform: 'translate(-10px,-10px) ' },
          '100%': { transform: 'translate(-10px,-10px) ' },
        },

        out: {
          // '0%': { transform: 'translate(-10px,-10px) ' },
          '20%': { transform: 'translate(1px,1px) ' },
          // '40%': { transform: 'translate(-11px,-11px) ' },
          // '60%': { transform: 'translate(-8px,-8px) ' },
          // '80%': { transform: 'translate(-13px,-13px) ' },
          '100%': { transform: 'translate(0px,0px) ' },
        },

        grow:{
          '0%': { transform: 'scale(0.1) ' },
          // '10%': { transform: 'scale(0.2) ' },
          // '20%': { transform: 'scale(0.3) ' },
          // '30%': { transform: 'scale(0.4) ' },
          // '40%': { transform: 'scale(0.5) ' },
          // '50%': { transform: 'scale(0.6) ' },
          // '60%': { transform: 'scale(0.7) ' },
          // '70%': { transform: 'scale(0.8) ' },
          // '80%': { transform: 'scale(0.9) ' },
          // '90%': { transform: 'scale(1) ' },
          '50%': { transform: 'scale(1) ' },
        },
        buttonFrames:{
          '0%': { transform: 'translate(0px,0px) ' },
        }
      },
      animation: {
        wiggle: 'in 0.75s ease-out forwards',
        wiggleOut: 'out 0.5s ease-in forwards',
        grow: 'grow 0.5s ease-in forwards', 
      },
      fontFamily: {
        display: ['var(--font-luckiestGuy)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'boom-yellow': '#FFEB33',
        'unselected-gray': '#9F9F9F',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      })
    }),
  ],
}
