import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  // Pick up any files ending in .mdx, or stories.{js,jsx,ts,tsx} as stories
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  // Did not use @storybook/addon-essentials due to lack of toolbar ordering API
  addons: [
    // --------------- TOOLBAR ICONS ---------------
    // Ruler
    '@storybook/addon-measure',
    // Phone
    '@storybook/addon-viewport',
    // Dotted Outline
    '@storybook/addon-outline',
    // Sun/Moon icon. Toggle Manager, Preview Components, and Preview Background
    'storybook-dark-mode',
    // Pen. Toggle both Preview Components and Preview Background
    '@storybook/addon-themes',
    // Portrait. Toggle only Preview Background. Not affected by other two, use to 'lock' the background.
    '@storybook/addon-backgrounds',

    // --------------- ACTION BAR ---------------
    // https://storybook.js.org/docs/essentials/controls
    '@storybook/addon-controls',
    // Accessibility tab added by '@storybook/addon-a11y'
    {
      name: '@storybook/addon-designs', // Actually has amazing docs for once: https://storybookjs.github.io/addon-designs/?path=/docs/docs-quick-start--docs
      options: {
        // renderTarget: 'canvas' | 'tab'
      },
    },
    // Person inside circle icon. Also 'Accessibility' tab to action bar
    '@storybook/addon-a11y',

    // https://storybook.js.org/docs/essentials/actions
    '@storybook/addon-actions',
    // https://storybook.js.org/docs/essentials/interactions
    '@storybook/addon-interactions', // Must be listed after @storybook/addon-actions or @storybook/addon-essentials

    '@storybook/addon-links',

    // Chromatic Visual Test Server
    '@chromatic-com/storybook',

    // Code for component story
    // {
    //   name: '@storybook/addon-storysource',
    //   options: {
    //     rule: {
    //       test: [/\.stories\.tsx?$/],
    //       include: [path.resolve(__dirname, '../src')], // You can specify directories
    //     },
    //     loaderOptions: {
    //       parser: 'typescript',
    //       injectStoryParameters: false,
    //       prettierConfig: { printWidth: 80, singleQuote: false },
    //     },
    //     enforce: 'pre',
    //   },

    // --------------- NO ICONS ---------------
    // Onboarding flow
    // '@storybook/addon-onboarding',
    // Custom toolbars
    // '@storybook/addon-toolbars',
    // Auto-generate MDX/React/JSX documentation for components
    // https://github.com/storybookjs/storybook/tree/next/code/addons/docs
    {
      name: '@storybook/addon-docs',
      options: {
        // csfPluginOptions: null,
        // mdxPluginOptions: {
        //   mdxCompileOptions: {
        //     remarkPlugins: [],
        //   },
        // },
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    // HTML Tab in action bar
    // https://github.com/whitespace-se/storybook-addon-html
    // '@whitespace/storybook-addon-html',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
}

export default config

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
