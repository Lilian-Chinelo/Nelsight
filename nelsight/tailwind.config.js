module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        primary: '#007FFF',
        secondary: '#FFFFFF',
        tetiary: '#027DFF',
        background: '#CAF0F8',
      },
      screens: {
        xs: '300px',
        smx: {'max': '639px'},
        mdx: {'max': '767px'},
        lgx: {'max': '1023px'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
