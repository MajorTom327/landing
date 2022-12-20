/** @type {import('tailwindcss').Config} */

const chroma = require('chroma-js');

const colors = {
  primary: "#2c485e",
  secondary: "#568dc3",
  accent: "#ea526f",
  neutral: "#3d4451",

  info: "#2094f3",
  success: "#009485",
  warning: "#ff9900",
  error: "#ff5724",

  light: "#f9fafb",
  dark: "#1f2937",
};

const colorModifier = {
  light: 1,
  dark: 1,
};

const toLight = (color) => chroma(color).brighten(colorModifier.light).hex();
const toDark = (color) => chroma(color).darken(colorModifier.light).hex();
const getContentColor = (color) =>
  chroma.contrast(color, colors.light) > 4.5 ? colors.light : colors.dark;

module.exports = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...Object.keys(colors).reduce((acc, color) => {
          return ({
            ...acc,
            [`${color}`]: colors[color],
            [`${color}-focus`]: toLight(colors[color]),
            [`${color}-lighten`]: toLight(colors[color]),
            [`${color}-darken`]: toDark(colors[color]),
            [`${color}-content`]: getContentColor(colors[color]),
          })
        }, {}),
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
