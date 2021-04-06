module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#0062FF',
        secondary: '#171725'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
