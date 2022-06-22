//tailwind.config.js
module.exports = {
  purge: [], //remove this line 
  purge: ['./components/**/*.tsx', './pages/**/*.tsx','./public/**/*.html'], //add this line
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      
    },
    extend: {
      fontFamily: {
        dinnextltarabic: ["dinnextltarabic"],
      },
      colors: {
        black: '#202221',
        darkgray: '#404343', 
        gray:'#808686',
        lightgray: '#EDEEED',
        lightergray: '#F7F7F7',
        verylightergray: '#FCFCFC',
        white: '#FFFFFF', 
        teal: '#5DD5C4',
        orange: '#FF9F4B',
        },
      spacing: {
        88: '22rem',
      },
    },
  },
    variants: {
      extend: {},
    },
    plugins: [],
}
