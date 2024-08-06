import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  // Extend the conventional commit configurations
  // https://www.conventionalcommits.org/en/v1.0.0/
  extends: ['@commitlint/config-conventional'],

  // Custom rules for commit message validation
  rules: {
    // Ensure the type is one of the specified values
    'type-enum': [
      RuleConfigSeverity.Error, // Level: Error (2)
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
    // Ensure the scope is in PascalCase
    // "scope-case": [RuleConfigSeverity.Error, "always", "pascal-case"],

    // Ensure the subject is in Sentence case
    // "subject-case": [RuleConfigSeverity.Error, "always", "sentence-case"],

    // Ensure the type is in lowercase
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],

    // Ensure that the type is not empty
    'type-empty': [RuleConfigSeverity.Error, 'never'],

    // Ensure that the scope is not empty
    // 'scope-empty': [RuleConfigSeverity.Error, 'never'],

    // Ensure that the subject is not empty
    'subject-empty': [RuleConfigSeverity.Error, 'never'],

    // Ensure the header does not exceed 72 characters
    // "header-max-length": [RuleConfigSeverity.Error, "always", 72],
  },
}

export default Configuration
