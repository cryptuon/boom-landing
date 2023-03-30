/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

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
          '20%': { transform: 'translate(1px,1px) ' },
          '100%': { transform: 'translate(0px,0px) ' },
        },

        grow: {
          '0%': { transform: 'scale(0.1) ' },
          '50%': { transform: 'scale(1) ' },
        },
        buttonFrames: {
          '0%': { transform: 'translate(0px,0px) ' },
        },
        sectionA: {
          '20%': {
            backgroundImage: "url('/Brand/public/sectionAhover.svg')",
            opacity: '1',
          },
          '100%': {
            backgroundImage: "url('/Brand/public/sectionAhover.svg')",
            opacity: '1',
          },
        },
        sectionB: {
          '20%': {
            backgroundImage: "url('/Brand/public/sectionBhover.png')",
            opacity: '1',
          },
          '100%': {
            backgroundImage: "url('/Brand/public/sectionBhover.png')",
            opacity: '1',
          },
        },
        sectionC: {
          '20%': {
            backgroundImage: "url('/Brand/public/sectionChover.png')",
            opacity: '1',
          },
          '100%': {
            backgroundImage: "url('/Brand/public/sectionChover.png')",
            opacity: '1',
          },
        },
      },
      animation: {
        wiggle: 'in 0.75s ease-out forwards',
        wiggleOut: 'out 0.5s ease-in forwards',
        grow: 'grow 0.5s ease-in forwards',
        sectionA: 'sectionA 1s ease-in forwards',
        sectionB: 'sectionB 1s ease-in forwards',
        sectionC: 'sectionC 1s ease-in forwards',
      },
      fontFamily: {
        display: ['Luckiest Guy'],
        body: ['Lato'],
      },
      colors: {
        'boom-yellow': '#FFEB33',
        'unselected-gray': '#9F9F9F',
      },
      backgroundImage: {
        sectionA: "url('/Brand/public/sectionA.svg')",
        sectionAmobile: "url('/Brand/public/sectionAmobile.svg')",
        sectionAhover: "url('/Brand/public/sectionAhover.svg')",
        sectionB: "url('/Brand/public/sectionB.png')",
        sectionBmobile: "url('/Brand/public/sectionBmobile.png')",
        sectionBhover: "url('/Brand/public/sectionBhover.png')",
        sectionC: "url('/Brand/public/sectionC.png')",
        sectionCmobile: "url('/Brand/public/sectionCmobile.png')",
        sectionChover: "url('/Brand/public/sectionChover.png')",
      },
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
