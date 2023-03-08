import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@/styles'

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
  padding: '2rem 1.5rem',
  backgroundColor: '$gray100',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: 12,
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  strong: {
    fontSize: '$xl',
    fontWeight: 600,
    color: '$green300',
  },

  span: {
    fontWeight: 500,
    fontSize: '$md',
  },
})
