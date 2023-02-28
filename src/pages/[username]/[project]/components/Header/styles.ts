import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  height: '$headerHeight',
  padding: '0 3rem',
  boxShadow: '0 .25rem 12px 4px rgba(0,0,0,.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const TaskQueryInput = styled('input', {
  background: 'transparent',
  all: 'unset',
})

export const TaskQueryInputContainer = styled('div', {
  width: '20rem',
  backgroundColor: '$gray100',
  border: '1px solid $gray300',
  borderRadius: '1rem',
  padding: '.35rem 1rem',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '$xs',
  lineHeight: '1.375rem',
})
