import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  // Extend conventional commit configurations
  // https://www.conventionalcommits.org/en/v1.0.0/
  extends: ['@commitlint/config-conventional'],
  rules: {
    // -------------- TYPE ----------------
    // Ensure type is one of the specified values
    'type-enum': [
      RuleConfigSeverity.Error,
      'always', // Always enforce this rule
      [
        'build', // Build-related changes (e.g., compile, package)
        'chore', // Other changes that don't modify src or test files
        'ci', // Continuous Integration changes
        'docs', // Documentation changes
        'feat', // New features
        'fix', // Bug fixes
        'perf', // Performance improvements
        'refactor', // Code refactoring without changing functionality
        'revert', // Revert previous commits
        'style', // Code style changes (formatting, white-space, etc.)
        'test', // Adding or updating tests
      ],
    ],
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'type-empty': [RuleConfigSeverity.Error, 'never'],

    // -------------- SCOPE ----------------
    // TODO: ADD SCOPE ENUMS
    // "scope-case": [RuleConfigSeverity.Error, "always", "pascal-case"],
    // 'scope-empty': [RuleConfigSeverity.Error, 'never'],

    // -------------- SUBJECT ----------------
    // "subject-case": [RuleConfigSeverity.Error, "always", "sentence-case"],
    'subject-empty': [RuleConfigSeverity.Error, 'never'],

    // -------------- HEADER ----------------
    // Ensure the header does not exceed 72 characters
    // "header-max-length": [RuleConfigSeverity.Error, "always", 72],
  },
}

export default Configuration
