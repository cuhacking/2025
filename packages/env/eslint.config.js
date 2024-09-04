// TODO: merge with antfu eslint config
// const { FlatCompat } = require('@eslint/eslintrc');
// const baseConfigPromise = require('../../eslint.config.js')
import baseConfigPromise from '../../eslint.config.js'
// const js = require('@eslint/js');

export default (async () => {
  const baseConfig = await baseConfigPromise

  return [
    ...baseConfig,

    // The following configurations are commented out
    // ...compat.extends(
    //   'plugin:@nx/react-typescript',
    //   'next',
    //   'next/core-web-vitals'
    // ),
    // {
    //   files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    //   rules: {
    //     '@next/next/no-html-link-for-pages': ['error', 'apps/portal/pages'],
    //   },
    // },
    // {
    //   files: ['**/*.ts', '**/*.tsx'],
    //   rules: {},
    // },
    // {
    //   files: ['**/*.js', '**/*.jsx'],
    //   rules: {},
    // },
    // ...compat.config({ env: { jest: true } }).map((config) => ({
    //   ...config,
    //   files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx'],
    //   rules: {
    //     ...config.rules,
    //   },
    // })),
    // { ignores: ['.next/**/*'] },
  ]
})()
