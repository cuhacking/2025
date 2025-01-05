import type { Config } from 'tailwindcss'
import { join } from 'node:path'
import { createGlobPatternsForDependencies } from '@nx/react/tailwind'

import TailwindAnimate from 'tailwindcss-animate'

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
    theme: {
      extend: {
        fontFamily: {
          mono: ['JetBrains Mono'],
        },
        backgroundImage: {
          'greendiant': 'linear-gradient(200deg, hsl(var(--secondary)) 10%, hsl(var(--primary)) 90%)',
          'g-keyboardBlack': 'linear-gradient(300deg , hsl(var(--g-keyboardblack-start)) -10%, hsl(var(--background)) 100%)',
          'g-nav-drawer-background': `
            linear-gradient(
              90deg,
              hsl(var(--background)) 0%,
              hsl(var(--light-black)) 25%,
              hsl(var(--light-black)) 75%,
              hsl(var(--background)) 100%
            )
          `,
        },
        colors: {
          'border': 'hsl(var(--border))',
          'input': 'hsl(var(--input))',
          'ring': 'hsl(var(--ring))',
          'background': 'hsl(var(--background))',
          'foreground': 'hsl(var(--foreground))',
          'primary': {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          'secondary': {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          'destructive': {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          'muted': {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          'accent': {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          'popover': {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          'card': {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          'card-nested': {
            DEFAULT: 'hsl(var(--card-nested))',
            foreground: 'hsl(var(--card-nested-foreground))',
          },
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
        boxShadow: {
          dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          innerShadow: 'inset 0 4px 4px rgba(0, 0, 0, 0.25)',
          buttonKeyboard: '0.5px 0.5px 0px 0.6px rgba(0, 0, 0, 0.70), 0.35px 0.35px 0.2px 0.75px rgba(255, 255, 255, 0.15) inset, 4px 2px 4px -1px rgba(0, 0, 0, 0.25)',
          buttonKeyboardHover: '0.25px 0.25px 0px 0.5px #0A0A0A, 0.2px 0.2px 0.2px 0.35px rgba(255, 255, 255, 0.25) inset, 0.2px 0.2px 0px 0.75px rgba(137, 237, 16, 0.25), 0px 0px 10px -4px rgba(137, 237, 16, 0.60), 4px 2px 4px -1px rgba(0, 0, 0, 0.25)',
        },
      },
    },
    plugins: [TailwindAnimate],
  }
}
