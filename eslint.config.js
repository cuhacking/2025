// TODO: merge with antfu eslint config
// const { FlatCompat } = require('@eslint/eslintrc');
// const nxEslintPlugin = require('@nx/eslint-plugin');
// const js = require('@eslint/js');
//
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
// });
//
// module.exports = [
//   { plugins: { '@nx': nxEslintPlugin } },
//   {
//     files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
//     rules: {
//       '@nx/enforce-module-boundaries': [
//         'error',
//         {
//           enforceBuildableLibDependency: true,
//           allow: [],
//           depConstraints: [
//             {
//               sourceTag: '*',
//               onlyDependOnLibsWithTags: ['*'],
//             },
//           ],
//         },
//       ],
//       // TODO: get these nx eslint rules working
//       // '@nx/nx-plugin-checks': ['warning'],
//       // '@nx/nx-dependency-checks': ['warning'],
//     },
//   },
//   ...compat.config({ extends: ['plugin:@nx/typescript'] }).map((config) => ({
//     ...config,
//     files: ['**/*.ts', '**/*.tsx'],
//     rules: {
//       ...config.rules,
//     },
//   })),
//   ...compat.config({ extends: ['plugin:@nx/javascript'] }).map((config) => ({
//     ...config,
//     files: ['**/*.js', '**/*.jsx'],
//     rules: {
//       ...config.rules,
//     },
//   })),
// ];

import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
}, {
  ignores: ['apps/hackathon', 'apps/landing-page'],
})
