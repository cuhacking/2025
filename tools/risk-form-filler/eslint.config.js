import playwright from 'eslint-plugin-playwright'
import baseConfigPromise from '../../eslint.config.js'

export default (async () => {
  const baseConfig = await baseConfigPromise

  return [
    playwright.configs['flat/recommended'],
    ...baseConfig,
    {
      files: ['**/*.ts', '**/*.js'],
      // Override or add rules here
      rules: {
        'playwright/no-conditional-in-test': 'off',
        'playwright/expect-expect': 'off',
      },
    },
  ]
})()
