// import type { Config } from 'tailwindcss'
// const { fontFamily } = require('tailwindcss/defaultTheme')
const { join } = require('node:path')

const { createPreset } = require('fumadocs-ui/tailwind-plugin')

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
    './mdx-components.tsx',
    '../../node_modules/fumadocs-ui/dist/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['var(--font-geist-sans)', ...fontFamily.sans],
      },
    },
  },
  presets: [
    createPreset({
      // preset: 'default',
      // preset: 'neutral',
      // preset: 'dusk',
      // preset: 'purple',
      // preset: 'ocean',
      preset: 'catppuccin',
    }),
  ],
  plugins: [],
}
