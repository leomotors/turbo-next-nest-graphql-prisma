// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  ...require("@org/config/eslint"),
  ignorePatterns: ["src/generated/**/*"],
};

module.exports = config;
