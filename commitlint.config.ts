import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  // parserPreset: 'conventional-changelog-conventionalcommits',
  // Extend conventional commit configurations
  // https://www.conventionalcommits.org/en/v1.0.0/
  // extends: ['@commitlint/config-conventional'],
  rules: {
    // -------------- TYPE ----------------
    // Ensure type is one of the specified values
    'type-enum': [
      RuleConfigSeverity.Error,
      'always', // Always enforce this rule
      [
        'test', // Adding or updating tests
        'chore', // Other changes that don't modify src or test files
        'docs', // Documentation changes
        'refactor', // Code refactoring without changing functionality
        'fix', // Bug fixes
        'feat', // New features
        'build', // Build-related changes (e.g., compile, package)
        'ci', // Continuous Integration changes
        'style', // Code style changes (formatting, white-space, etc.)
        'perf', // Performance improvements
        'revert', // Revert previous commits, only for emergencies
        'hotfix', // For time-sensitive, emergency fixes
      ],
    ],
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'type-empty': [RuleConfigSeverity.Error, 'never'],

    // -------------- SCOPE ----------------
    'scope-case': [2, 'always', 'lower-case'], // Ensures scope is in lower case
    'scope-enum': [1, 'always', [
      'ui',
      'api',
      'config',
      'docs',
      'docs-e2e',
      'web',
      'web-e2e',
      'portal',
      'portal-e2e',
      'tools',
    ]],
    // 'scope-empty': [2, 'never'], // Scope should always be provided

    // -------------- SUBJECT ----------------
    // "subject-case": [RuleConfigSeverity.Error, "always", "sentence-case"],
    'subject-empty': [RuleConfigSeverity.Error, 'never'],

    // -------------- HEADER ----------------
    // Ensure the header does not exceed 72 characters
    // "header-max-length": [RuleConfigSeverity.Error, "always", 72],
  },
  helpUrl:
    'https://main.dzzy1fby58ukt.amplifyapp.com/docs/contribution-guidelines/conventional-commits',
  prompt: {
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: '/',
    },
    messages: {
      skip: ':skip',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit',
    },
    // NOTE: Emojis are currently not activated in the commitlint configuration. To activate them, you can install the commitlint-emoji package and add it to the plugins array.
    questions: {
      type: {
        description: 'Select the type of change that you\'re committing:',
        enum: {
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          chore: {
            description: 'Other changes that don\'t modify src or test files, such as installing packages, updating config files, etc.',
            title: 'Chores',
            emoji: '♻️',
          },
          // TODO: Enable custom scope for docs page if type is docs
          docs: {
            description: 'Adding missing docs or correcting existing docs (use feat if adding a feature to docs site)',
            title: 'Documentation',
            emoji: '📚',
          },
          refactor: {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          feat: {
            description: 'A new feature, along with tests and docs',
            title: 'Features',
            emoji: '✨',
          },
          build: {
            description: 'Changes that affect the build system or external dependencies',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: 'Changes to CI configuration files and scripts',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          style: {
            description: 'Linting or formatting changes that do not affect the meaning of the code (white-space, semi-colons, parentheses, etc)',
            title: 'Styles',
            emoji: '💎',
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          revert: {
            description: 'Reverts a previous commit (only use in emergencies)',
            title: 'Reverts',
            emoji: '🗑',
          },
          hotfix: {
            description: 'For time-sensitive, emergency fixes (e.g., critical bugs that need to be fixed immediately)',
            title: 'Hotfix',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description:
          'What is the scope of this change?\n\n Do not use this CLI if type is `docs`.\n Use `git commit -m "docs(page-modified): message"` instead.\n\n',
      },
      subject: {
        description: 'Write a short, imperative tense description of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      // isIssueAffected: {
      //   description: 'Does this change affect any open issues?',
      // },
      // issuesBody: {
      //   description:
      //     'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      // },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
}

export default Configuration
