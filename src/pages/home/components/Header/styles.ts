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

export const NewTaskButton = styled('button', {
  all: 'unset',
  height: '2.8rem',
  fontWeight: 'bold',
  backgroundColor: '$green300',
  padding: '0 1.5rem',
  borderRadius: 14,
  boxShadow: '0 3px 12px 1px rgba(0,0,0,.28)',
  cursor: 'pointer',
  transition: 'background ease-out .3s, color ease-out .3s',

  '&:hover': {
    background: 'transparent',
    color: '$green300',
  },
})
