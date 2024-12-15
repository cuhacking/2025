// https://storybook.js.org/docs/configure/user-interface/theming

export const darkUIStorybook = {
  base: 'dark',
  colorPrimary: 'hsl(333.3 71.4% 50.6%)',
  colorSecondary: 'hsl(87 87% 35%)',

  // UI
  // Sidebar
  appBg: 'hsl(0 0% 0%)',

  appContentBg: 'hsl(0 0% 0%)',
  appPreviewBg: 'hsl(0 0% 0%)',
  appBorderColor: 'hsla(0 0% 100% / 15%)',

  // TYPOGRAPHY
  textColor: 'hsl(0 0% 100%)',
  textInverseColor: 'hsl(116 0% 0%)',
  // textMutedColor: 'hsl(78 10% 15%)',

  // TOOLBAR AND ACTION BAR
  barTextColor: 'hsl(0 0% 100%)', // toolbar and action bar text color
  barHoverColor: 'hsl(47.9 95.8% 53.1%)',
  barSelectedColor: 'hsl(47.9 95.8% 53.1%)',
  barBg: 'hsl(20.5 0% 0%)',

  buttonBg: 'hsl(87 87% 5%)', // plus button for creating new story
  buttonBorder: 'hsla(87 87% 35% / 35%)',
  booleanBg: 'hsl(47.9 95.8% 8%)',
  booleanSelectedBg: 'hsl(47.9 95.8% 20%)',

  // FORMS
  inputBg: 'hsl(47.9 95.8% 5%)',
  inputBorder: 'hsla(20.5 90.2% / 15%)',
  inputTextColor: 'hsl(0 0% 100%)',

  // RADIUS
  appBorderRadius: 8,
  inputBorderRadius: 8,
}

export const lightUIStorybook = {
  colorPrimary: 'hsl(333.3 71.4% 50.6%)',
  colorSecondary: 'hsl(87 87% 35%)',

  // UI
  // Sidebar
  appBg: 'hsl(116 0% 95%)',

  appContentBg: 'hsl(116 0% 95%)',
  appPreviewBg: 'hsl(116 0% 95%)',
  appBorderColor: 'hsl(116 20% 50%)',

  // TYPOGRAPHY
  textColor: 'hsl(116 0% 0%)',
  textInverseColor: 'hsl(116 0% 95%)',
  // textMutedColor: 'hsl(78 10% 15%)',

  // TOOLBAR AND ACTION BAR
  // barTextColor: 'hsl(116 0% 0%)', // toolbar and action bar text color
  barHoverColor: 'hsl(20.5 90.2% 48.2%)',
  barSelectedColor: 'hsl(20.5 90.2% 48.2%)',
  barBg: 'hsl(116 0% 100%)',

  buttonBg: 'hsl(87 87% 95%)', // plus button for creating new story
  buttonBorder: 'hsla(87 87% 35% / 35%)',
  booleanBg: 'hsl(20.5 90.2% 90%)',
  booleanSelectedBg: 'hsl(20.5 90.2% 80%)',

  // FORMS
  inputBg: 'hsl(20.5 90.2% 90%)',
  inputBorder: 'hsl(20.5 20% 50%)',
  inputTextColor: 'hsl(116 0% 0%)',

  // RADIUS
  appBorderRadius: 8,
  inputBorderRadius: 8,
}

export const commonTheme = {
  brandTitle: 'cuHacking',
  brandUrl: '/',
  brandTarget: '_self',
  brandImage: 'https://cuhacking.ca/Logo-2025.svg',

  // TYPOGRAPHY
  fontBase: 'Jetbrains Mono',
  fontCode: 'Jetbrains Mono',
}
