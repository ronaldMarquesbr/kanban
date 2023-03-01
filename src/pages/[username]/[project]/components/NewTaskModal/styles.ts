import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

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
  padding: '3rem 2.5rem',
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

export const SubTaskContainer = styled(FieldCore, {
  'div ~ div': {
    marginTop: '1rem',
  },
  '& > div': {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',

    input: {
      width: '100%',
    },
  },
  '& > button': {
    all: 'unset',

    width: '100%',
    height: '2.75rem',

    color: '$gray100',
    backgroundColor: '$blue700',
    fontWeight: '500',
    borderRadius: 10,
    cursor: 'pointer',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '.5rem',

    marginTop: '.75rem',

    '&:hover': {
      filter: 'grayscale(.25)',
    },
  },
})

export const DeleteSubTaskButton = styled('button', {
  all: 'unset',
  lineHeight: '0',
  cursor: 'pointer',

  svg: {
    transition: 'color .3s',
    '&:hover': {
      color: '$red500',
    },
  },
})
