import antfu from '@antfu/eslint-config'
// import playwright from 'eslint-plugin-playwright'

export default antfu(
  {
    formatters: true,
    react: true,
  },
  {
    // TODO: Separate out to E2E app as it's conflicting with Vitest files
    // ...playwright.configs['flat/recommended'],
  },
)
