const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const baseConfigPromise = require('../../eslint.config.js')

module.exports = (async () => {
  const baseConfig = await baseConfigPromise
  const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
  })

  return [
    ...baseConfig,
    ...compat.extends('plugin:playwright/recommended'),
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
      rules: {},
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {},
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {},
    },
    {
      files: ['src/**/*.{ts,js,tsx,jsx}'],
      rules: {},
    },
  ]
})()
