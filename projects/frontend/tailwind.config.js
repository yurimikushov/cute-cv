module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      gray: {
        50: '#e5e5e5',
        100: '#c7c7c7',
        200: '#adadad',
        300: '#73808d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
