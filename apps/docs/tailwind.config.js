import { join } from 'node:path'
import { createGlobPatternsForDependencies } from '@nx/react/tailwind'
import { createPreset } from 'fumadocs-ui/tailwind-plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    // './node_modules/fumadocs-ui/dist/**/*.js',
    '../../node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset()],
}
