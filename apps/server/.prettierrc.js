// @ts-check

/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  ...require("@org/config/prettier"),
  importOrder: [
    "^@nestjs",
    "^@",
    "^src/",
    "^[a-zA-Z]",
    "^./prisma",
    "^./app",
    "^[.][.]",
    "^[.]",
  ],
};

module.exports = config;
