import antfu from '@antfu/eslint-config'
import playwright from 'eslint-plugin-playwright'

export default antfu(
  {
    formatters: true,
    react: true,
  },
  {
    ...playwright.configs['flat/recommended'],
    ignores: ['tests/unit-tests/**/*.ts'],
  },
)
