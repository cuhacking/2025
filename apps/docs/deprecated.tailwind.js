// import { createPreset } from 'fumadocs-ui/tailwind-plugin'

// // import { flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'
// import TailwindAnimate from 'tailwindcss-animate'

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     '../../libs/docs/components/**/*.{ts,tsx}',
//     '../../libs/docs/components/**/*.stories.{ts,tsx}',
//     './mdx-components.{ts,tsx}',
//     '{src,components,app,content}/**/*!(*.stories|*.spec).{ts,tsx,md,mdx,html}',
//     '../../node_modules/fumadocs-ui/dist/**/*.js',
//     './content/docs/**/*.{md,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))',
//         },
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))',
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))',
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))',
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//       },
//       borderRadius: {
//         lg: `var(--radius)`,
//         md: `calc(var(--radius) - 2px)`,
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       keyframes: {
//         'accordion-down': {
//           from: { height: '0' },
//           to: { height: 'var(--radix-accordion-content-height)' },
//         },
//         'accordion-up': {
//           from: { height: 'var(--radix-accordion-content-height)' },
//           to: { height: '0' },
//         },
//         'background-position-spin': {
//           '0%': { backgroundPosition: 'top center' },
//           '100%': { backgroundPosition: 'bottom center' },
//         },
//         'text-gradient': {
//           '0%': {
//             backgroundPosition: '0% 50%',
//           },
//           '50%': {
//             backgroundPosition: '100% 50%',
//           },
//           '100%': {
//             backgroundPosition: '0% 50%',
//           },
//         },
//         'color-cycle-orange': {
//           '0%': { color: 'theme(colors.orange.500)' },
//           '25%': { color: 'theme(colors.yellow.400)' },
//           '50%': { color: 'theme(colors.blue.400)' },
//           '75%': { color: 'theme(colors.primary.DEFAULT)' },
//           '100%': { color: 'theme(colors.orange.500)' },
//         },
//         'color-cycle-yellow': {
//           '0%': { color: 'theme(colors.yellow.400)' },
//           '25%': { color: 'theme(colors.blue.400)' },
//           '50%': { color: 'theme(colors.primary.DEFAULT)' },
//           '75%': { color: 'theme(colors.orange.500)' },
//           '100%': { color: 'theme(colors.yellow.400)' },
//         },
//         'color-cycle-blue': {
//           '0%': { color: 'theme(colors.blue.400)' },
//           '25%': { color: 'theme(colors.primary.DEFAULT)' },
//           '50%': { color: 'theme(colors.orange.500)' },
//           '75%': { color: 'theme(colors.yellow.400)' },
//           '100%': { color: 'theme(colors.blue.400)' },
//         },
//         'color-cycle-primary': {
//           '0%': { color: 'theme(colors.primary.DEFAULT)' },
//           '25%': { color: 'theme(colors.orange.500)' },
//           '50%': { color: 'theme(colors.yellow.400)' },
//           '75%': { color: 'theme(colors.blue.400)' },
//           '100%': { color: 'theme(colors.primary.DEFAULT)' },
//         },
//       },
//       animation:
//       {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//         'background-position-spin':
//           'background-position-spin 3000ms infinite alternate',
//         'color-cycle-orange': 'color-cycle-orange 8s infinite',
//         'color-cycle-yellow': 'color-cycle-yellow 8s infinite',
//         'color-cycle-blue': 'color-cycle-blue 8s infinite',
//         'color-cycle-primary': 'color-cycle-primary 8s infinite',
//       },
//     },
//   },
//   presets: [createPreset(
//     {
//       // preset: 'neutral',
//       preset: 'black',
//       // preset: 'vitepress',
//       // preset: 'dusk',
//       // preset: 'ocean',
//       // preset: 'purple',
//       // preset: 'catppuccin',
//       // preset: 'default',
//     },
//   )],
//   plugins: [
//     TailwindAnimate,
//     // addVariablesForColors,
//   ],
// }

// // // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// // function addVariablesForColors({ addBase, theme }: any) {
// //   const allColors = flattenColorPalette(theme('colors'))
// //   const newVars = Object.fromEntries(
// //     Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
// //   )

// //   addBase({
// //     ':root': newVars,
// //   })
// // }
