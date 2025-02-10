import playwright from 'eslint-plugin-playwright'
import baseConfigPromise from './antfu.js'

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
