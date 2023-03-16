import { styled } from '@/styles'

export const NewProjectTriggerButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  padding: '.75rem 1rem',

  color: '$white',
  fontSize: '$md',

  borderRadius: 8,
  backgroundColor: '$blue700',

  '&:hover': {
    filter: 'grayscale(.2)',
  },
})
