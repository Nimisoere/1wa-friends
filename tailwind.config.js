module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
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
        secondary: '#13131A',
        "gray-400": "#92929D",
        "gray-700": '#44444F',
        "gray-800": "#292932",
        "gray-900": '#1C1C24'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
