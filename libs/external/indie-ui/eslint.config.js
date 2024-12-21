// const nx = require("@nx/eslint-plugin");
// const baseConfig = require("../../eslint.config.js");

// module.exports = [
//     ...baseConfig,
//     ...nx.configs["flat/react"],
//     {
//         files: [
//             "**/*.ts",
//             "**/*.tsx",
//             "**/*.js",
//             "**/*.jsx"
//         ],
//         // Override or add rules here
//         rules: {}
//     }
// ];

import baseConfigPromise from '../../../eslint.config.js'

export default (async () => {
  const baseConfig = await baseConfigPromise

  return [
    ...baseConfig,
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
        '**/*.js',
        '**/*.jsx',
      ],
      // Override or add rules here
      rules: {},
    },
  ]
})()
