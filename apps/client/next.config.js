// @ts-check

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@org/codegen", "@org/constants", "@org/design"],
};

module.exports = config;
