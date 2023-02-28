import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  css,
} = createStitches({
  theme: {
    sizes: {
      headerHeight: 'calc(3rem + 1.5rem)',
    },
    colors: {
      white: '#fff',

      gray900: '#141414',
      gray800: '#292929',
      gray600: '#7C7C8D',
      gray500: '#9292a0',
      gray400: '#b3b3bd',
      gray300: '#c4c4cc',
      gray200: '#E1E1E6',
      gray100: '#F4F4F6',

      red400: '#E94957',
      red500: '#E63946',
      red600: '#E42535',

      blue700: '#01258A',

      green300: '#00B881',

      yellow200: '#FFA05C',
      yellow300: '#FF9447',
    },

    fontSizes: {
      xs: '0.875rem',
      s: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
