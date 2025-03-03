import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  // unocss: true,
  vue: true,
  react: true,
  jsonc: true,
  yaml: true,
}, {
  ignores: [
    '**/dist',
    'scaffold-examples/',
    // TODO: remove after monorepo integration is complete
    'apps/axiom/',
    'libs/db/',
    'libs/db/payload-types.ts',
    'libs/cms/',
    'apps/slides/slides.md',
    'apps/email/',
    'infra/pgdata/',
    'infra/sdks/',
  ],
})

// export default [
//   ...nx.configs['flat/base'],
//   ...nx.configs['flat/typescript'],
//   ...nx.configs['flat/javascript'],
//   {
//     ignores: ['**/dist'],
//   },
//   {
//     files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
//     rules: {
//       '@nx/enforce-module-boundaries': [
//         'error',
//         {
//           enforceBuildableLibDependency: true,
//           allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
//           depConstraints: [
//             {
//               sourceTag: '*',
//               onlyDependOnLibsWithTags: ['*'],
//             },
//           ],
//         },
//       ],
//     },
//   },
//   {
//     files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
//     // Override or add rules here
//     rules: {},
//   },
// ];
