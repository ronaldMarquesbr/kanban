import { styled } from '@/styles'

export const FormButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.75rem',
  width: '100%',
  height: '3rem',
  borderRadius: 8,
  fontWeight: '500',
  fontSize: '$md',
  cursor: 'pointer',
  transition: 'background-color .5s, color .5s, border 0.5s',

  svg: {
    lineHeight: '0',
  },
})

export const FormContainer = styled('div', {
  strong: {
    fontSize: '$2xl',
    color: '$gray800',
  },
})

export const FormInputContainer = styled('div', {
  position: 'relative',
  margin: '2rem 0',
  boxShadow: '0 0 0 10px $gray800',

  '&:hover': {
    boxShadow: '0 0  20px $gray800',
  },

  '& ~ &': {
    marginTop: '2rem',
  },

  label: {
    position: 'absolute',
    left: '4%',
    top: '0',
    transform: 'translateY(-50%)',
    background: '$white',
    fontSize: '$xs',
    padding: '0 .15rem',
  },

  input: {
    all: 'unset',
    width: '19rem',
    borderRadius: 8,
    border: '1px solid rgba(0,0,0,.75)',
    boxShadow: '0 0px 0px 0px rgba(0,0,0,0)',
    padding: '.6rem .75rem',
    transition: 'box-shadow .2s ease-out',

    '&:focus': {
      boxShadow: '0 0px 0px 3px rgba(1,37,138,.4)',
    },
  },
})

export const SeparatorLine = styled('div', {
  margin: '2.5rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  backgroundColor: '$gray500',
  height: '1px',

  span: {
    fontSize: '$xs',
    color: '$gray600',
    padding: '0 .25rem',
    backgroundColor: '$white',
  },
})
