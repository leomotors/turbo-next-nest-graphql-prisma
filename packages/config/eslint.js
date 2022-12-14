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
  ],
  rules: {
    "prettier/prettier": "warn",
    eqeqeq: "warn",
    "no-constant-binary-expression": "error",
    "import/no-cycle": "warn",
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
    "react/jsx-key": "error",
    "react/display-name": "error",
    "sort-destructure-keys/sort-destructure-keys": "warn",
  },
  overrides: [
    {
      files: [".eslintrc.*", ".prettierrc.*", "*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "no-undef": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "^18.2.0",
    },
  },
};

module.exports = config;
