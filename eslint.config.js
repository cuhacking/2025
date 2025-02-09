import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  // unocss: true,
  react: true,
  slidev: true,
}, {
  ignores: [
    'scaffold-examples/',
    // TODO: remove after monorepo integration is complete
    'apps/api/',
    'libs/db/schema.ts',
    'libs/cms/',
    'apps/slides/slides.md',
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
