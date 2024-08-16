import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createWatchPaths } from '@nx/remix'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
export default {
  tailwind: true,
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  watchPaths: () => createWatchPaths(__dirname),
}
