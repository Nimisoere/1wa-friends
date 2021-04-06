module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        serif: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#D5343A',
        secondary: '#333333'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
