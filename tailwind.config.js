module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      black: {
        default: "#10182e",
        dark: "#0a1228",
      },
      white: "#fff",
      gray: {
        default: "#8289a1",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      serif: ["Georgia", "Cambria", "serif"],
      mono: ["SFMono-Regular", "Menlo", "mono"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
