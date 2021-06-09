module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#121528',
        secondary: '#121538',
        orange: '#f4a124',
        red: '#e42a5b',
        green: '#5eb670',
        purple: '#a78bfa',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
