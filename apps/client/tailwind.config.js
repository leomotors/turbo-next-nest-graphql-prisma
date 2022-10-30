// @ts-check

/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css,scss}",
    "../../packages/design/src/**/*.{js,ts,jsx,tsx,css,scss}",
  ],
  darkMode: "class",
};

module.exports = config;
