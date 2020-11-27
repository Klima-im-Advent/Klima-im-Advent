module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    'views/**.ejs',
    'www/*.ts',
  ],
  theme: {
    fontFamily: {
      sans: 'Jost',
    },
    colors: {
      white: "#FCF7F8",
      brown: "#61310D",
      green: {
        "light": "#5B7D42",
        "dark": "#005406"
      },
      red: {
        "light": "#A31621",
        "dark": "#70041F"
      }
    },
    extend: {
      maxWidth: {
        '1/3': '33%',
        '2/3': '66%',
      },
      height: {
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
      }
    }
  },
  variants: {},
  plugins: [],
}
