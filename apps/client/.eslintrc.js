// @ts-check

const base = require("@leomotors/config/eslint").reactConfig();

/** @type {import("eslint").Linter.Config} */
const config = {
  ...base,
  extends: [...base.extends, "next/core-web-vitals"],
};

module.exports = config;
