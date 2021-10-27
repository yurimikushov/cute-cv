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
    fontFamily: {
      sans: ['Arial'],
    },
    fontSize: {
      sm: '0.77rem',
      base: '13px',
      lg: '1.15rem',
      xl: '1.7rem',
      '2xl': '2rem',
    },
    borderRadius: {
      DEFAULT: '3px',
      full: '9999px',
    },
    boxShadow: {
      sm: '0 0 4px 0 #c7c7c7',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      borderWidth: ['disabled'],
      placeholderColor: ['disabled'],
    },
  },
  plugins: [],
}
