// const baseConfig = require('../../eslint.config.js');
// module.exports = [...baseConfig, { ignores: ['build', 'public/build'] }];

import baseConfigPromise from '../../eslint.config.js'

export default (async () => {
  const baseConfig = await baseConfigPromise

  return [
    ...baseConfig,
    { ignores: ['build', 'public/build'] },
  ]
})()
