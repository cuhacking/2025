import type { Config } from 'tailwindcss'
import { join } from 'node:path'
import { createGlobPatternsForDependencies } from '@nx/react/tailwind'

import TailwindAnimate from 'tailwindcss-animate'
import { flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'

export function buildConfig(
  appDir: string,
): Config {
  return {
    content: [
      join(
        appDir,
        '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
      ),
      ...createGlobPatternsForDependencies(appDir),
    ],
    darkMode: 'class',
    theme: {
      extend: {},
    },
    plugins: [TailwindAnimate, addVariablesForColors],
  }
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}
