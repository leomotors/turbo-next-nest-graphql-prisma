// @ts-check

/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  ...require("@org/config/prettier"),
  importOrder: [
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",
    "^@org",
    "^\\$",
    "^\\$styles",
    "^[.][.]",
    "^[.]",
  ],
};

module.exports = config;
