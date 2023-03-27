/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Luckiest Guy'],
      },
      keyframes: {
        'sectionA': {
          '20%': { backgroundImage: "url('/sectionAhover.svg')", opacity: '1', },
          '100%': { backgroundImage: "url('/sectionAhover.svg')", opacity: '1' },
        },
        'sectionB': {
          '20%': { backgroundImage: "url('/sectionBhover.svg')", opacity: '1', },
          '100%': { backgroundImage: "url('/sectionBhover.svg')", opacity: '1' },
        },
        'sectionC': {
          '20%': { backgroundImage: "url('/sectionChover.svg')", opacity: '1', },
          '100%': { backgroundImage: "url('/sectionChover.svg')", opacity: '1' },
        },
        

      },
      animation: {
        'sectionA': 'sectionA 1s ease-in forwards',
        'sectionB': 'sectionB 1s ease-in forwards',
        'sectionC': 'sectionC 1s ease-in forwards',
      },
      colors: {
        'boom-yellow': '#FFEB33',
        'unselected-gray': '#9F9F9F',
      }
    },
  },
  plugins: [],
}