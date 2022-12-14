// @ts-check

const base = require("@org/config/eslint");

/** @type {import("eslint").Linter.Config} */
const config = {
  ...base,
  extends: [...(base.extends ?? []), "next/core-web-vitals"],
};

module.exports = config;
