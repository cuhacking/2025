// import type { Config } from 'tailwindcss'
// const { fontFamily } = require('tailwindcss/defaultTheme')
import { join } from 'node:path'

import { createGlobPatternsForDependencies } from '@nx/react/tailwind'

import { createPreset } from 'fumadocs-ui/tailwind-plugin'

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = [
  join(
    __dirname,
    '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
  ),
  ...createGlobPatternsForDependencies(__dirname),
  './mdx-components.tsx',
  '../../node_modules/fumadocs-ui/dist/**/*.js',
]
export const theme = {
  extend: {
    fontFamily: {
      // sans: ['var(--font-geist-sans)', ...fontFamily.sans],
    },
  },
}
export const presets = [
  createPreset({
    // preset: 'default',
    // preset: 'neutral',
    // preset: 'dusk',
    // preset: 'purple',
    // preset: 'ocean',
    preset: 'catppuccin',
  }),
]
export const plugins = []
