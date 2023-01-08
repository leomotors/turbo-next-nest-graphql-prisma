// @ts-check

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["@org/codegen", "@org/constants", "@org/design"],
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = config;
