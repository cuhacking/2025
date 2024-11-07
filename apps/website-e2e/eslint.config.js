// const playwright = require('eslint-plugin-playwright');
// const baseConfig = require('../../eslint.config.js');

// module.exports = [
//   playwright.configs['flat/recommended'],
//   ...baseConfig,
//   {
//     files: ['**/*.ts', '**/*.js'],
//     // Override or add rules here
//     rules: {},
//   },
// ]

import playwright from 'eslint-plugin-playwright'
import baseConfigPromise from '../../eslint.config.js'

export default (async () => {
  const baseConfig = await baseConfigPromise

  return [
    playwright.configs['flat/recommended'],
    ...baseConfig,
    {
      files: ['**.ts', '**.js'],
      // Override or add rules here
      rules: {},
    },
  ]
})()
