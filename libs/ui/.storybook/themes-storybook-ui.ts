// https://storybook.js.org/docs/configure/user-interface/theming

export const darkUIStorybook = {
  base: 'dark',
  colorPrimary: '#FF4785',
  colorSecondary: '#029CFD',

  // --primary: 210 40% 98%;
  // --primary-foreground: 222.2 47.4% 11.2%;
  // colorPrimary: 'hsl(210 40% 98%)',

  // --secondary: 217.2 32.6% 17.5%;
  // --secondary-foreground: 210 40% 98%;
  // colorSecondary: 'hsl(217.2 32.6% 17.5%)',

  // UI
  // appBg: '#222425',
  // appContentBg: '#1B1C1D',
  // appPreviewBg: '#FFFFFF',
  // appBorderColor: 'rgba(255,255,255,.1)',
  // appBorderRadius: 4,

  // --background: 222.2 84% 4.9%;
  // --foreground: 210 40% 98%;
  appBg: 'hsl(222.2 84% 0%)',
  appContentBg: 'hsl(222.2 84% 0%)',
  appPreviewBg: 'hsl(210 40% 98%)',
  // --border: 217.2 32.6% 17.5%;
  // --input: 217.2 32.6% 17.5%;
  // --ring: 212.7 26.8% 83.9%;
  appBorderColor: 'hsl(217.2 32.6% 17.5%)',
  appBorderRadius: 8,

  // Typography
  fontBase:
    '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode:
    'ui-monospace, Menlo, Monaco, "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Droid Sans Mono", "Courier New", monospace',
  textColor: '#C9CDCF',
  textInverseColor: '#222425',
  textMutedColor: '#798186',

  // fontBase: "",
  // fontCode: '',
  // textColor: 'hsl(210 40% 98%)',
  // textInverseColor: 'hsl(217.2 32.6% 17.5%)',
  // textMutedColor: 'hsl(217.2 32.6% 17.5%)',

  // Toolbar and action bar
  // barTextColor: '#73828C',
  barHoverColor: '#029CFD',
  barSelectedColor: '#029CFD',
  // barBg: '#292C2E',

  barTextColor: 'hsl(210 40% 98%)', // toolbar and action bar text color
  // barHoverColor: string;
  // barSelectedColor: 'hsl(210 40% 98%)',
  barBg: 'hsl(222.2 84% 0%)',

  // buttonBg: '#222425', // plus button for creating new story
  buttonBorder: 'rgba(255,255,255,.1)',
  booleanBg: '#222425',
  booleanSelectedBg: '#2E3438',

  buttonBg: 'hsl(222.2 84% 0%)',
  // buttonBorder: string;
  // booleanBg: string;
  // booleanSelectedBg: string;

  // Forms
  inputBg: '#1B1C1D',
  inputBorder: 'rgba(255,255,255,.1)',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,

  // inputBg: 'hsl(217.2 32.6% 17.5%)',
  // inputBorder: 'hsl(217.2 32.6% 17.5%)',
  // inputTextColor: 'hsl(210 40% 98%)',
  // inputBorderRadius: '0.4rem',
}

export const lightUIStorybook = {
  fontBase:
    '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode:
    'ui-monospace, Menlo, Monaco, "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Droid Sans Mono", "Courier New", monospace',
  //  --background: 0 0% 100%;
  //  --foreground: 222.2 84% 4.9%;
  //
  //  --card: 0 0% 100%;
  //  --card-foreground: 222.2 84% 4.9%;
  //
  //  --popover: 0 0% 100%;
  //  --popover-foreground: 222.2 84% 4.9%;
  //
  //  --primary: 222.2 47.4% 11.2%;
  //  --primary-foreground: 210 40% 98%;
  //
  //  --secondary: 210 40% 96.1%;
  //  --secondary-foreground: 222.2 47.4% 11.2%;
  //
  //  --muted: 210 40% 96.1%;
  //  --muted-foreground: 215.4 16.3% 46.9%;
  //
  //  --accent: 210 40% 96.1%;
  //  --accent-foreground: 222.2 47.4% 11.2%;
  //
  //  --destructive: 0 84.2% 60.2%;
  //  --destructive-foreground: 210 40% 98%;
  //
  //  --border: 214.3 31.8% 91.4%;
  //  --input: 214.3 31.8% 91.4%;
  //  --ring: 222.2 84% 4.9%;
  //
  //  --radius: 0.5rem;
}

export const commonTheme = {
  brandTitle: 'cuHacking',
  brandUrl: '/',
  brandTarget: '_self',
  brandImage: 'https://www.cuhacking.ca/Logo.svg',
}
