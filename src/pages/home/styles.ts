import { styled } from '@/styles'

export const PageGrid = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '3fr 2fr',
  gridTemplateRows: '1fr',
})

export const FormSection = styled('section', {
  width: '100%',
  height: '100%',
  backgroundColor: '$white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Hero = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  '& > h1': {
    fontSize: '2.75rem',
    padding: '0 10rem',
    color: '$gray200',
  },

  '& > img': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: '-1',
  },
})
