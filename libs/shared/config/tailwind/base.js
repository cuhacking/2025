import type { Config } from 'tailwindcss'
import { createGlobPatternsForDependencies } from '@nx/react/tailwind'

export default {
  content: [
    '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
