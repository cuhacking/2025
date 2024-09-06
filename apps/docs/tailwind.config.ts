// TODO: Delete this file once no longer needed as a reference
import type { Config } from 'tailwindcss'
// import { fontFamily } from 'tailwindcss/defaultTheme'
import { createPreset } from 'fumadocs-ui/tailwind-plugin'

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
    './mdx-components.tsx',
    './node_modules/fumadocs-ui/dist/**/*.js',
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
} satisfies Config
