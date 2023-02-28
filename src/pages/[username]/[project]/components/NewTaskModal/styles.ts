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
  width: '50vw',
  height: '50vh',
  padding: '2.5rem 1.5rem',

  backgroundColor: '$gray100',

  display: 'flex',
  flexDirection: 'column',

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
