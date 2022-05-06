module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5c6ac4'
      },

      boxShadow: {
        'circle': '0 0 0 1px'
      },

      animation: {
        'waving': 'waving 1s'
      },

      keyframes: {
        'waving': {
          '0%': { transform: 'rotate( 0.0deg)' },
          '20%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-8.0deg)' },
          '70%': { transform: 'rotate(10.0deg)' },
          '100%': { transform: 'rotate( 0.0deg)' },
        }

      }

    },
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
],
}
