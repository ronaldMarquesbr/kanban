import { styled } from '@/styles/'
import * as Dialog from '@radix-ui/react-dialog'

export const ModalOverlay = styled(Dialog.Overlay, {
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,.5)',

  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
})

export const ModalCard = styled(Dialog.Content, {
  padding: '2rem 2.5rem',
  backgroundColor: '$gray100',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 12,
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
})

export const ModalCardTitle = styled(Dialog.Title, {
  fontWeight: '600',
  fontSize: '$lg',
  color: '$gray800',
  marginBottom: '2rem',
})

const fieldsWidth = '25rem'

export const FieldCore = styled('div', {
  position: 'relative',
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
    background: '$gray100',
    fontSize: '$xs',
    padding: '0 .15rem',
  },

  'input, textarea': {
    all: 'unset',
    borderRadius: 8,
    border: '1px solid rgba(0,0,0,.75)',
    boxShadow: '0 0px 0px 0px rgba(0,0,0,0)',
    padding: '.6rem .75rem',
    transition: 'box-shadow .2s ease-out',

    '&:focus': {
      boxShadow: '0 0px 0px 3px rgba(1,37,138,.4)',
    },
  },

  variants: {
    'label-outline': {
      true: {
        label: {
          position: 'unset',
          left: 0,
          transform: 'none',
          paddign: 0,
          display: 'inline-block',
          marginBottom: '.5rem',
        },
      },
    },
  },
})

export const InputContainer = styled(FieldCore, {
  input: {
    width: `${fieldsWidth}`,
  },
})

export const TextBoxContainer = styled(FieldCore, {
  textarea: {
    width: `${fieldsWidth}`,
    height: '7rem',
  },
})

export const SubmitButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  padding: '.5rem .75rem',
  marginTop: '1rem',
  float: 'right',

  color: '$white',
  fontSize: '$md',
  fontWeight: '500',
  backgroundColor: '$blue700',
  borderRadius: 8,

  '&:hover': {
    filter: 'grayscale(.2)',
  },
})

export const CloseButton = styled(Dialog.Close, {
  all: 'unset',
  cursor: 'pointer',
  lineHeight: 0,
  borderRadius: '100%',
  padding: '.2rem',

  display: 'flex',
  alingItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  right: '3%',
  top: '6%',

  '&:hover': {
    backgroundColor: 'rgba(1,37,138, .2)',
  },

  svg: {
    fontSize: '1rem',
  },
})
