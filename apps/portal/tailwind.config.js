import { join } from 'node:path'
import { createGlobPatternsForDependencies } from '@nx/react/tailwind'

/** @type {import('tailwindcss').Config} */
export const content = [
  join(
    __dirname,
    '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
  ),
  ...createGlobPatternsForDependencies(__dirname),
]
export const theme = {
  extend: {},
}
export const plugins = []
