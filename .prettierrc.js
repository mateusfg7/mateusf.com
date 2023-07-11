/** @type {import("prettier").Options} */
const config = {
  plugins: [require("prettier-plugin-tailwindcss")],
  semi: false,
  singleQuote: true,
  arrowParens: "avoid",
  trailingComma: "none",
  endOfLine: "auto"
};

module.exports = config;
