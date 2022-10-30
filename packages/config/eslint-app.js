// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "import",
    "react",
    "sort-destructure-keys",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "prettier/prettier": "warn",
    eqeqeq: "warn",
    "no-constant-binary-expression": "error",
    "import/no-cycle": "warn",
    "tailwindcss/no-custom-classname": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        reservedFirst: true,
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": "warn",
  },
  overrides: [
    {
      files: [".eslintrc.js", ".prettierrc.js", "*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "no-undef": "off",
      },
    },
  ],
};

module.exports = config;
