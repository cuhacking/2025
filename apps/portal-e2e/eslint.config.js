const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
// const baseConfig = require("../../eslint.config.js");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends("plugin:playwright/recommended"),
  // ...baseConfig,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {},
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {},
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {},
  },
  {
    files: ["src/**/*.{ts,js,tsx,jsx}"],
    rules: {},
  },
];
