module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#8D090C'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
