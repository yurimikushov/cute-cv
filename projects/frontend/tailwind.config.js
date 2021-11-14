module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
  important: '.app',
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
      xs: '0.77rem',
      sm: '0.9rem',
      base: '13px',
      md: '1rem',
      lg: '1.15rem',
      xl: '1.7rem',
      '2xl': '2rem',
    },
    borderRadius: {
      DEFAULT: '3px',
      md: '5px',
      full: '9999px',
    },
    boxShadow: {
      xs: '0 0 2px 0 #e5e5e5',
      sm: '0 0 4px 0 #c7c7c7',
    },
    extend: {
      spacing: {
        22: '5.5rem',
      },
      gridTemplateColumns: {
        cv: 'minmax(auto, 485px) 150px',
      },
      gridTemplateRows: {
        cv: 'auto 1fr',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled', 'focus-visible'],
      borderWidth: ['disabled'],
      placeholderOpacity: ['disabled'],
      scale: ['group-hover', 'focus-visible'],
      boxShadow: ['focus-visible'],
      opacity: ['focus-visible'],
    },
  },
  plugins: [],
}
