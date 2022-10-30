// @ts-check

const withTM = require("next-transpile-modules")([
  "@org/codegen",
  "@org/constants",
  "@org/design",
]);

module.exports = withTM({
  reactStrictMode: true,
});
