const { join } = require('node:path')
const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin')

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/discord-to-github-bot'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
    }),
  ],
}
