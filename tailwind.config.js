/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
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
      },
      animation: {
        wiggle: 'in 0.75s ease-out forwards',
        wiggleOut: 'out 0.5s ease-in forwards',
      },
      fontFamily: {
        display: ['var(--font-luckiestGuy)', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
