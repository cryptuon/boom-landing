/** @type {import('tailwindcss').Config} */
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
          '20%': { backgroundImage: "url('/sectionBhover.png')", opacity: '1' },
          '100%': {
            backgroundImage: "url('/sectionBhover.png')",
            opacity: '1',
          },
        },
        sectionC: {
          '20%': { backgroundImage: "url('/sectionChover.png')", opacity: '1' },
          '100%': {
            backgroundImage: "url('/sectionChover.png')",
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
      backgroundImage: {
        'sectionA': "url('/sectionA.svg')",
        'sectionAmobile': "url('/sectionAmobile.svg')",
        'sectionAhover': "url('/sectionAhover.svg')",
        'sectionB': "url('/sectionB.png')",
        'sectionBmobile': "url('/sectionBmobile.png')",
        'sectionBhover': "url('/sectionBhover.png')",
        'sectionC': "url('/sectionC.png')",
        'sectionCmobile': "url('/sectionCmobile.png')",
        'sectionChover': "url('/sectionChover.png')",
      },
    },
  },
  plugins: [],
}
