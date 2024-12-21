import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'// Wide button with a pen and text. Toggles both Preview Components and Preview Background

import { DocsContainer, type DocsContextProps } from '@storybook/blocks'
import { themes, type ThemeVars } from '@storybook/theming'
import { ThemeProvider } from 'next-themes'
import React from 'react'

import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'

import { customViewports } from './custom-viewports'
import { commonTheme, darkUIStorybook, lightUIStorybook } from './themes-storybook-ui'
import '../libs/shared/ui/global.css'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    // https://storybook.js.org/docs/essentials/actions
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    // https://storybook.js.org/docs/essentials/controls
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy#sorting-stories
      storySort: {
        method: 'alphabetical',
        order: [
          '👋 Welcome',
          '🏛 Architecture',
          'Figma',
          '📚 Docs Site',
          '🌀 Portal',
          'Website',
          ['Hero', 'About'],
          'cuHacking Design System',
          '✨ Aceternity',
          '🚜 Farm UI',
          '🐺 Indie UI',
          '🪄 Magic UI',
          'Shadcn-ui',
          [
            'Introduction',
            'Semantic Color Palette',
            'Font Size',
            'Typography',
          ],
          'Tailwind CSS Primitives',
        ],
      },
    },
    // https://storybook.js.org/docs/essentials/viewport
    viewport: {
      viewports: {
        ...customViewports,
      },
    },
    // globalTypes: {
    //   theme: {
    //     description: 'Global theme for components',
    //     defaultValue: 'light',
    //     toolbar: { // Requires @storybook/addon-toolbars, included in @storybook/addon-essentials. Imported separately in main.ts.
    //       // The label to show for this toolbar item
    //       title: 'Theme',
    //       icon: 'medium',
    //       // Array of plain string values or MenuItem shape (see below)
    //       items: ['light', 'dark'],
    //       // Change title based on selected value
    //       dynamicTitle: true,
    //     },
    //   },
    // },
    // https://storybook.js.org/addons/storybook-dark-mode
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      // Set the initial theme
      current: 'dark',
      // Override the default dark theme
      dark: {
        ...themes.dark,
        ...darkUIStorybook,
        ...commonTheme,
      },
      // Override the default light theme
      light: {
        ...themes.normal,
        ...lightUIStorybook,
        ...commonTheme,
      },
    },
    // https://storybook.js.org/docs/essentials/backgrounds
    backgrounds: {
      // disable: true,
      // default: 'twitter',
      values: [
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'twitter',
          value: '#00aced',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
      ],
      grid: {
        // disable: true,
        // cellSize: 20,
        // opacity: 0.5,
        // cellAmount: 5,
        // offsetX: 16, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        // offsetY: 16, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },
    // fix for theming docs page found here: https://github.com/hipstersmoothie/storybook-dark-mode/issues/282#issuecomment-2208816632
    docs: {
      defaultName: 'Documentation',
      toc: true,
      container: (props: {
        children: React.ReactNode
        context: DocsContextProps
        theme?: ThemeVars
      }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isDark, setDark] = React.useState(true)
        props.context.channel.on(DARK_MODE_EVENT_NAME, state =>
          setDark(state))
        const currentProps = { ...props }
        // currentProps.theme = isDark ? themes.dark : themes.light
        currentProps.theme = isDark ? darkUIStorybook as ThemeVars : themes.light
        // console.log('Current Props Theme:', currentProps.theme)
        // console.log('Themes Dark:', themes.dark)
        // console.log('Dark UI Storybook:', darkUIStorybook)
        // console.log('Merged Theme:', { ...themes.dark, ...darkUIStorybook, ...commonTheme })
        return <DocsContainer {...currentProps} />
      },
    },
    // https://github.com/whitespace-se/storybook-addon-html
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: 'strict',
      },
      highlighter: {
        showLineNumbers: true, // default: false
        wrapLines: true, // default: true
      },
      // disable: true, // default: false
    },
  },

  decorators: [
    (Story) => {
      return (
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Story />
        </ThemeProvider>
      )
    },
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
}

export default preview
