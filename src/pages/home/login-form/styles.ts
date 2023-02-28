import { FormButton } from '@/components/form/styles'
import { keyframes, styled } from '@/styles'

export const LoginButton = styled(FormButton, {
  background: '$blue700',
  color: '$white',
  border: '2px solid $blue700',

  '&:hover': {
    color: '$blue700',
    backgroundColor: '$white',
  },
})

export const GoogleButton = styled(FormButton, {
  backgroundColor: '#4285F4',
  color: '$white',
  border: 'solid 2px #4285F4',

  '&:hover': {
    backgroundColor: '$white',
    color: '#4285F4',
  },
})

export const RegisterButton = styled(FormButton, {
  backgroundColor: '$gray800',
  color: '$white',
  border: 'solid 2px $gray800',

  '&:hover': {
    color: '$gray800',
    backgroundColor: '$white',
  },
})

export const GridButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const FadeInRight = keyframes({
  from: {
    transform: 'translateX(-2rem)',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0rem)',
    opacity: 1,
  },
})
