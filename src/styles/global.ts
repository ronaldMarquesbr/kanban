import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    color: '$gray800',
    backgroundColor: '$gray00',
  },

  'body, input, textarea, button': {
    fontFamily: 'Poppins',
    fontWeight: 400,
  },
})
