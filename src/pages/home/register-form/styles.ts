import { FormButton } from '@/components/entry-form/styles'
import { keyframes, styled } from '@/styles'

export const RegisterSubmitButton = styled(FormButton, {
  border: '2px solid $blue700',
  backgroundColor: '$blue700',
  color: '$white',

  '&:hover': {
    backgroundColor: '$white',
    color: '$blue800',
  },
})

export const ButtonGrid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const LoginFormRedirectButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '.3rem',
  color: '$blue700',
  fontSize: '$xs',
  cursor: 'pointer',
  marginTop: '1rem',

  svg: {
    lineHeight: '0',
  },
})

export const FadeInLeft = keyframes({
  from: {
    transform: 'translateX(2rem)',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0rem)',
    opacity: 1,
  },
})
